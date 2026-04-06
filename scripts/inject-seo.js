#!/usr/bin/env node

/**
 * Post-Build SEO Injection Script для sagisagphw.com (FINAL VERSION)
 *
 * Ключевые улучшения:
 * 1. SEO теги вставляются в НАЧАЛО <head>, а не в конец
 * 2. Удаляются дубли и конфликтующие теги
 * 3. next-head-count НЕ изменяется (безопасно для клиента)
 * 4. Гарантированная видимость для краулеров и SEO-чекеров
 */

const fs = require("fs");
const path = require("path");

// Конфигурация
const OUT_DIR = path.join(process.cwd(), "out");
const LOCALES_DIR = path.join(process.cwd(), "public", "locales");
const BASE_URL = "https://sagisagphcom88.com";

// Маппинг имен ПАПОК на ключи SEO
const FOLDER_TO_SEO_KEY = {
  index: "home", // главная
  casino: "casino",
  slots: "slots", // slots → games
  login: "login",
  bonuses: "bonuses",
  link: "link",
};

// Цвета
const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
};

function loadTranslations(locale) {
  try {
    const jsonPath = path.join(LOCALES_DIR, locale, "common.json");
    if (!fs.existsSync(jsonPath)) {
      console.warn(
        `${colors.yellow}⚠️  Файл не найден: ${jsonPath}${colors.reset}`,
      );
      return null;
    }
    const content = fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error(
      `${colors.red}❌ Ошибка загрузки ${locale}:${colors.reset}`,
      error.message,
    );
    return null;
  }
}

function findHTMLFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findHTMLFiles(filePath, fileList);
    } else if (file.endsWith(".html")) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function parseFilePath(filePath) {
  const relativePath = path.relative(OUT_DIR, filePath);
  const parts = relativePath.split(path.sep);

  let locale = "tl";
  let seoKey = null;
  let pageFolder = null;

  if (parts.length >= 1 && (parts[0] === "tl" || parts[0] === "en")) {
    locale = parts[0];
  }

  if (parts.length === 2 && parts[1] === "index.html") {
    seoKey = "home";
    pageFolder = null;
  } else if (parts.length === 3 && parts[2] === "index.html") {
    pageFolder = parts[1];
    seoKey = FOLDER_TO_SEO_KEY[pageFolder] || pageFolder;
  }

  return { locale, seoKey, pageFolder, relativePath };
}

function getSEOData(translations, seoKey) {
  if (!translations || !translations.seo || !seoKey) return null;
  return translations.seo[seoKey] || null;
}

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateCanonicalUrl(filePath, locale) {
  const relativePath = path.relative(OUT_DIR, path.dirname(filePath));
  const parts = relativePath.split(path.sep);

  let pagePath = "";

  if (parts.length === 1) {
    pagePath = `/${locale}/`;
  } else if (parts.length === 2) {
    pagePath = `/${parts[0]}/${parts[1]}/`;
  }

  pagePath = pagePath.replace(/\/+/g, "/");
  return `${BASE_URL}${pagePath}`;
}

function generateMetaTags(seoData, locale, canonicalUrl) {
  if (!seoData || !seoData.title || !seoData.description) return "";

  const { title, description, keywords } = seoData;
  const ogLocale = locale === "en" ? "en_PH" : "tl_PH";
  const ogLocaleAlternate = locale === "en" ? "tl_PH" : "en_PH";
  const languageMeta = locale === "en" ? "English" : "Filipino";

  const tlUrl = canonicalUrl.replace(`/${locale}/`, "/tl/");
  const enUrl = canonicalUrl.replace(`/${locale}/`, "/en/");

  // Форматированные теги для лучшей читаемости и парсинга
  // Каждый тег на отдельной строке для улучшения парсинга краулерами
  const metaTags = `<!-- SEO Meta Tags (injected by post-build script) -->
<title>${escapeHtml(title)}</title>
<meta name="title" content="${escapeHtml(title)}"/>
<meta name="description" content="${escapeHtml(description)}"/>${
    keywords
      ? `\n<meta name="keywords" content="${escapeHtml(keywords)}"/>`
      : ""
  }
<link rel="canonical" href="${canonicalUrl}"/>
<link rel="alternate" hrefLang="tl" href="${tlUrl}"/>
<link rel="alternate" hrefLang="en" href="${enUrl}"/>
<link rel="alternate" hrefLang="x-default" href="${tlUrl}"/>
<meta property="og:title" content="${escapeHtml(title)}"/>
<meta property="og:description" content="${escapeHtml(description)}"/>
<meta property="og:image" content="${BASE_URL}/images/og-default.jpg"/>
<meta property="og:url" content="${canonicalUrl}"/>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="sagisagph Casino"/>
<meta property="og:locale" content="${ogLocale}"/>
<meta property="og:locale:alternate" content="${ogLocaleAlternate}"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:site" content="@sagisagph"/>
<meta name="twitter:title" content="${escapeHtml(title)}"/>
<meta name="twitter:description" content="${escapeHtml(description)}"/>
<meta name="twitter:image" content="${BASE_URL}/images/twitter-card.jpg"/>
<meta name="language" content="${languageMeta}"/>
<meta name="author" content="sagisagph"/>
<meta name="robots" content="index, follow"/>
<meta name="geo.position" content="14.5995;121.0895"/>
<meta name="geo.placename" content="Philippines"/>
<meta name="geo.region" content="PH"/>
<meta name="revisit-after" content="7 days"/>`;

  return metaTags;
}

function removeExistingSEOTags(html) {
  // Удаляем старые SEO теги, если они уже были вставлены
  // Ищем блок между <!-- SEO Meta Tags --> и следующим комментарием или служебным тегом
  html = html.replace(
    /<!-- SEO Meta Tags \(injected by post-build script\) -->[\s\S]*?(?=<meta name="next-head-count"|<\/head>)/i,
    "",
  );

  // Удаляем дубли title (оставляем только один)
  const titleMatches = html.match(/<title[^>]*>[\s\S]*?<\/title>/gi);
  if (titleMatches && titleMatches.length > 1) {
    let titleRemoved = false;
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, (match) => {
      if (!titleRemoved) {
        titleRemoved = true;
        return match;
      }
      return "";
    });
  }

  // Удаляем дубли canonical
  const canonicalMatches = html.match(/<link[^>]*rel="canonical"[^>]*>/gi);
  if (canonicalMatches && canonicalMatches.length > 1) {
    let canonicalRemoved = false;
    html = html.replace(/<link[^>]*rel="canonical"[^>]*>/gi, (match) => {
      if (!canonicalRemoved) {
        canonicalRemoved = true;
        return match;
      }
      return "";
    });
  }

  return html;
}

function injectMetaTags(filePath, metaTags) {
  try {
    let html = fs.readFileSync(filePath, "utf8");

    // Проверяем, не были ли уже вставлены теги
    if (
      html.includes("<!-- SEO Meta Tags (injected by post-build script) -->")
    ) {
      return { success: false, reason: "already_injected" };
    }

    // Удаляем старые/конфликтующие теги
    html = removeExistingSEOTags(html);

    // Ищем открывающий тег <head>
    const headOpenRegex = /<head[^>]*>/i;
    const headOpenMatch = html.match(headOpenRegex);

    if (!headOpenMatch) {
      console.warn(`${colors.yellow}   ⚠️  Не найден <head>${colors.reset}`);
      return { success: false, reason: "no_head_tag" };
    }

    // Позиция сразу после <head>
    const insertPosition = headOpenMatch.index + headOpenMatch[0].length;

    // Вставляем мета-теги сразу после <head> (в НАЧАЛО)
    html =
      html.slice(0, insertPosition) +
      "\n" +
      metaTags +
      "\n" +
      html.slice(insertPosition);

    // Сохраняем
    fs.writeFileSync(filePath, html, "utf8");

    return { success: true, reason: "injected" };
  } catch (error) {
    console.error(`${colors.red}   ❌ Ошибка:${colors.reset}`, error.message);
    return { success: false, reason: "error", error: error.message };
  }
}

function main() {
  console.log(
    `${colors.cyan}╔═══════════════════════════════════════════════════════╗${colors.reset}`,
  );
  console.log(
    `${colors.cyan}║   🚀 sagisagphw.com SEO Injection Script (FINAL)       ║${colors.reset}`,
  );
  console.log(
    `${colors.cyan}║   ✨ Tags placed at HEAD START for better crawling      ║${colors.reset}`,
  );
  console.log(
    `${colors.cyan}╚═══════════════════════════════════════════════════════╝${colors.reset}\n`,
  );

  if (!fs.existsSync(OUT_DIR)) {
    console.error(
      `${colors.red}❌ Папка out/ не найдена. Выполните: npm run build${colors.reset}`,
    );
    process.exit(1);
  }

  if (!fs.existsSync(LOCALES_DIR)) {
    console.error(`${colors.red}❌ Папка locales/ не найдена${colors.reset}`);
    process.exit(1);
  }

  console.log(
    `${colors.green}✅ Папка out/ найдена: ${OUT_DIR}${colors.reset}`,
  );
  console.log(
    `${colors.green}✅ Папка locales/ найдена: ${LOCALES_DIR}${colors.reset}\n`,
  );

  const locales = ["tl", "en"];
  const translationsMap = {};

  for (const locale of locales) {
    const translations = loadTranslations(locale);
    if (translations) {
      translationsMap[locale] = translations;
      const seoCount = translations.seo
        ? Object.keys(translations.seo).length
        : 0;
      console.log(
        `${colors.green}✅ Переводы загружены: ${locale} (${seoCount} SEO блоков)${colors.reset}`,
      );
    }
  }

  console.log("");

  const htmlFiles = findHTMLFiles(OUT_DIR);
  console.log(
    `${colors.blue}📄 Найдено HTML файлов: ${htmlFiles.length}${colors.reset}\n`,
  );

  let processedCount = 0;
  let skippedCount = 0;
  let noSeoDataCount = 0;

  for (const filePath of htmlFiles) {
    const { locale, seoKey, pageFolder, relativePath } =
      parseFilePath(filePath);

    console.log(`${colors.blue}🔧 ${relativePath}${colors.reset}`);
    console.log(
      `${colors.cyan}   Locale: ${locale} | SEO Key: ${
        seoKey || "N/A"
      } | Folder: ${pageFolder || "root"}${colors.reset}`,
    );

    const translations = translationsMap[locale];
    if (!translations) {
      console.warn(
        `${colors.yellow}   ⚠️  Нет переводов для ${locale}${colors.reset}\n`,
      );
      noSeoDataCount++;
      continue;
    }

    const seoData = getSEOData(translations, seoKey);
    if (!seoData) {
      console.warn(
        `${colors.yellow}   ⚠️  Нет SEO данных для ключа "${seoKey}"${colors.reset}\n`,
      );
      noSeoDataCount++;
      continue;
    }

    const canonicalUrl = generateCanonicalUrl(filePath, locale);
    console.log(`${colors.cyan}   Canonical: ${canonicalUrl}${colors.reset}`);

    const metaTags = generateMetaTags(seoData, locale, canonicalUrl);
    if (!metaTags) {
      console.warn(
        `${colors.yellow}   ⚠️  Не удалось сгенерировать теги${colors.reset}\n`,
      );
      skippedCount++;
      continue;
    }

    const result = injectMetaTags(filePath, metaTags);
    if (result.success) {
      processedCount++;
      console.log(
        `${colors.green}   ✅ Теги вставлены в НАЧАЛО <head>${colors.reset}\n`,
      );
    } else if (result.reason === "already_injected") {
      skippedCount++;
      console.log(`${colors.blue}   ℹ️  Уже обработан${colors.reset}\n`);
    } else {
      skippedCount++;
      console.log(
        `${colors.yellow}   ⚠️  Ошибка: ${result.reason}${colors.reset}\n`,
      );
    }
  }

  console.log(
    `${colors.cyan}╔═══════════════════════════════════════════════════════╗${colors.reset}`,
  );
  console.log(
    `${colors.cyan}║   📊 Статистика                                       ║${colors.reset}`,
  );
  console.log(
    `${colors.cyan}╠═══════════════════════════════════════════════════════╣${colors.reset}`,
  );
  console.log(
    `${colors.green}║   ✅ Обработано: ${processedCount
      .toString()
      .padEnd(36)}║${colors.reset}`,
  );
  console.log(
    `${colors.yellow}║   ⏭️  Пропущено: ${skippedCount.toString().padEnd(36)}║${
      colors.reset
    }`,
  );
  console.log(
    `${colors.yellow}║   ⚠️  Нет SEO данных: ${noSeoDataCount
      .toString()
      .padEnd(31)}║${colors.reset}`,
  );
  console.log(
    `${colors.cyan}╚═══════════════════════════════════════════════════════╝${colors.reset}\n`,
  );

  if (processedCount > 0) {
    console.log(
      `${colors.green}🎉 SEO мета-теги успешно вставлены в НАЧАЛО <head>!${colors.reset}`,
    );
    console.log(
      `${colors.green}✨ Теги теперь видны для краулеров и SEO-чекеров${colors.reset}`,
    );
    console.log(
      `${colors.blue}📁 Папка для деплоя: ${OUT_DIR}${colors.reset}\n`,
    );
  } else {
    console.log(
      `${colors.yellow}⚠️  Ни один файл не был обработан${colors.reset}\n`,
    );
  }
}

try {
  main();
} catch (error) {
  console.error(`${colors.red}❌ Критическая ошибка:${colors.reset}`, error);
  console.error(error.stack);
  process.exit(1);
}
