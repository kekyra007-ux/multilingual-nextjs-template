# AppTemplate — Мультиязычный шаблон Next.js

Готовый к продакшену, SEO-оптимизированный мультиязычный шаблон лендинга на **Next.js 14**, **TypeScript**, **styled-components** и **next-i18next**. Клонируй и кастомизируй для своего многоязычного маркетингового сайта за несколько минут.

## ✨ Возможности

- **Next.js 14** — современный фреймворк со статическим экспортом
- **Мультиязычность (i18n)** — английский и испанский включены, легко добавить новые языки
- **SEO-готовность** — Meta tags, Open Graph, Twitter Cards, JSON-LD, hreflang, canonical URLs
- **TypeScript** — полная типизация страниц и компонентов
- **Styled Components** — система дизайн-токенов с темой темного режима
- **Адаптивный дизайн** — mobile-first, оптимизирован для всех устройств
- **Статический экспорт** — деплой на Vercel, Netlify, GitHub Pages, S3 и везде
- **MIT License** — свободно используй и модифицируй

## 🚀 Быстрый старт

```bash
# Клонируй репозиторий
git clone https://github.com/kekyra007-ux/multilingual-nextjs-template.git
cd multilingual-nextjs-template

# Установи зависимости
npm install

# Запусти сервер разработки
npm run dev

# Открой http://localhost:3000/en (Английский)
# Открой http://localhost:3000/es (Испанский)
```

## 📂 Структура проекта

```
src/
├── components/          # Переиспользуемые React компоненты
│   ├── Header/         # Навигация с переключателем языков
│   ├── Footer/         # Подвал с ссылками
│   ├── Hero/           # Hero секция
│   ├── FeaturesGrid/   # Сетка функций
│   ├── PromoSection/   # Промо секция
│   ├── FeaturedItems/  # Избранное содержимое
│   ├── Integrations/   # Гайды по развёртыванию
│   ├── GetStarted/     # Гайд быстрого старта
│   └── UI/             # Кнопки, карточки, модали
├── pages/
│   ├── [locale]/       # Локаль-зависимые маршруты
│   │   ├── index.tsx   # Главная страница
│   │   ├── features.tsx # Страница функций
│   │   └── get-started.tsx # Гайд
│   ├── _app.tsx        # Обёртка приложения с i18n
│   └── _document.tsx   # HTML документ и загрузчик
├── styles/
│   ├── GlobalStyle.js  # Глобальные стили
│   └── theme.js        # Дизайн-токены
└── utils/
    └── i18nSafe.js     # Хелперы переводов

public/
├── locales/
│   ├── en/common.json  # Английские переводы
│   └── es/common.json  # Испанские переводы
├── icons/              # SVG иконки
├── fonts/              # Кастомные шрифты
└── [изображения, логотипы]
```

## 🌍 Языки

Поддерживаются:
- **Английский** (en)
- **Испанский** (es)

### Добавить новый язык

1. Отредактируй `next-i18next.config.js`:
```javascript
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", "fr"], // Добавь "fr"
  },
};
```

2. Создай папку локали:
```bash
mkdir public/locales/fr
cp public/locales/en/common.json public/locales/fr/common.json
```

3. Переведи все ключи в `public/locales/fr/common.json`

4. Переразверни — маршруты генерируются автоматически!

## 🎨 Кастомизация

### Измени цвета и тему

Отредактируй `src/styles/theme.js`:

```javascript
export const colors = {
  primary: "#F5C84C",      // Основной цвет
  secondary: "#8032f5",    // Вторичный цвет
  background: "#3B146F",   // Фон
  text: "#F6F0FF",         // Цвет текста
  // Ещё цвета...
};
```

### Измени контент

Отредактируй `public/locales/[lang]/common.json` для:
- Заголовков и описаний (SEO)
- Подписей навигации
- Заголовков секций
- Текста подвала
- Всего остального контента

### Обнови свой домен

Замени `https://apptemplate.example.com` на:
- `src/pages/[locale]/index.tsx`
- `src/pages/[locale]/features.tsx`
- `src/pages/[locale]/get-started.tsx`

## 📝 Добавить новую страницу

### Создай компонент страницы

Создай `src/pages/[locale]/about.tsx`:

```typescript
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("seo.about.title")}</title>
        <meta name="description" content={t("seo.about.description")} />
      </Head>
      <main>
        <h1>{t("about.title")}</h1>
        {/* Твой контент */}
      </main>
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
```

### Добавь переводы

В `public/locales/[lang]/common.json`:

```json
{
  "seo": {
    "about": {
      "title": "О нас",
      "description": "Информация о нашей компании",
      "keywords": "о нас, компания, команда"
    }
  },
  "about": {
    "title": "О нас"
  }
}
```

### Добавь в навигацию

Обнови `src/components/Header/Header.jsx`:

```javascript
const navItems = [
  { href: "/", label: t("nav.home"), icon: "/icons/home.svg" },
  { href: "/about", label: t("nav.about"), icon: "/icons/app.svg" },
  // ...
];
```

## 🚢 Развёртывание

### Vercel (рекомендуется)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=.next/export
```

### GitHub Pages

```bash
npm run build
# Залей .next/export на gh-pages ветку
```

### AWS S3

```bash
npm run build
# Загрузи .next/export на S3 бакет
```

## ⚙️ Сборка и запуск

```bash
# Разработка
npm run dev

# Production сборка
npm run build

# Запуск production сервера
npm start

# Линтинг
npm run lint
```

## ❓ FAQ

**В: Почему Pages Router вместо App Router?**
О: Pages Router имеет лучшую поддержку i18n с `next-i18next`. App Router требует `next-intl`.

**В: Как изменить язык по умолчанию?**
О: Отредактируй `defaultLocale` в `next-i18next.config.js`.

**В: Можно ли использовать SSR вместо статического экспорта?**
О: Да. Удали `output: "export"` из `next.config.js`.

**В: Как добавить больше компонентов?**
О: Создай `.jsx` и `.styled.js` файлы в `src/components/YourComponent/`.

**В: А что с производительностью?**
О: Статический экспорт обеспечивает быстрые edge-развёртывания. Изображения используют Next.js Image компонент.

## 📖 Tech Stack

- **Framework**: Next.js 14.1.0
- **Runtime**: React 18.2.0
- **Styling**: styled-components 6.1.11
- **Internationalization**: react-i18next 14.1.2 + next-i18next 15.3.0
- **Language**: TypeScript 5
- **Package Manager**: npm / pnpm

## 📄 Лицензия

MIT — свободно используй для личных и коммерческих проектов. Смотри [LICENSE](./LICENSE).

## 🙋 Поддержка

Нашёл баг? Есть вопросы? Открой issue на GitHub:
https://github.com/kekyra007-ux/multilingual-nextjs-template/issues

---

**Собрано с ❤️ на Next.js, React и TypeScript**

*Клонируй • Кастомизируй • Запускай*
