import Head from "next/head";
import { useTranslation } from "next-i18next";

import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useRouter } from "next/router";
import { Bonuses } from "@/components/Bonuses/Bonuses";
import { SharedHero } from "@/components/SharedHero/SharedHero";

import { Banner } from "@/components/UI/Banner";

import ReferralFloatingButton from "@/components/UI/ReferralFloatingButton";

export default function Home() {
  const { t } = useTranslation("common");

  const seoTitle = t("seo.bonuses.title");
  const seoDescription = t("seo.bonuses.description");
  const seoKeywords = t("seo.bonuses.keywords");
  const BASE_URL = "https://sagisagphcom88.com";

  const router = useRouter();

  // путь к странцие
  const slug = "/bonuses";

  // локаль из [locale] в URL: "en" или "bn"
  const localeParam = router.query.locale;
  const locale = typeof localeParam === "string" ? localeParam : "tl"; // tl по умолчанию
  const isTl = locale === "tl";

  const enUrl = `${BASE_URL}/en${slug}`;
  const tlUrl = `${BASE_URL}/tl${slug}`;

  const canonicalUrl = isTl ? tlUrl : enUrl;

  // ссылки на домашние страницы
  const tlHome = `${BASE_URL}/tl/`;
  const enHome = `${BASE_URL}/en/`;
  const homeUrl = isTl ? tlHome : enHome;

  const ogLocale = isTl ? "tl_PH" : "en_PH";
  const languageMeta = isTl ? "Filipino" : "English";

  return (
    <>
      <Head>
        {/* PRIMARY SEO */}
        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />

        {/* CANONICAL & HREFLANG */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-PH" href={enUrl} />
        <link rel="alternate" hrefLang="tl-PH" href={tlUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <meta name="language" content={languageMeta} />

        {/* GEO TARGETING */}
        <meta name="geo.region" content="PH" />
        <meta name="geo.country" content="Philippines" />
        <meta name="geo.placename" content="Philippines" />
        <meta name="ICBM" content="12.8797,121.7740" />

        {/* INDEXING */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* EXTRA SEO / QUALITY */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="dark" />

        {/* OPEN GRAPH */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="sagisagphe" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:locale" content={ogLocale} />
        <meta
          property="og:image:alt"
          content="sagisagphe Casino Philippines homepage — secure login, fast access, and PH-friendly payments like GCash and Maya"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta
          name="twitter:image:alt"
          content="sagisagphe online casino Philippines — mobile-first gaming with quick login and local PH payments"
        />

        {/* TRUST & PLATFORM */}
        <meta name="application-name" content="sagisagphe Online Casino PH" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        {/* JSON-LD: WebPage (Bonuses) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: seoTitle,
              url: canonicalUrl,
              isPartOf: {
                "@type": "WebSite",
                name: "sagisagph",
                url: homeUrl,
              },
              inLanguage: "en-PH",
              about: [
                { "@type": "Thing", name: "sagisagph bonus" },
                { "@type": "Thing", name: "sagisagph welcome bonus" },
                { "@type": "Thing", name: "bonus sagisagph" },
                { "@type": "Thing", name: "sagisagph free bonus" },
                { "@type": "Thing", name: "sagisagph lucky 88 bonus" },
                { "@type": "Thing", name: "sagisagph 88 bonus" },
                {
                  "@type": "Thing",
                  name: "lucky 88 welcome bonus Philippines",
                },
                { "@type": "Thing", name: "deposit bonus" },
                { "@type": "Thing", name: "cashback bonus Philippines" },
                { "@type": "Thing", name: "VIP bonus Philippines" },
              ],
            }),
          }}
        />

        {/* Bonuses JSON-LD (Bonuses Page) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  url: canonicalUrl,
                  name: seoTitle,
                  description: seoDescription,
                  keywords: seoKeywords,
                  isPartOf: {
                    "@type": "WebSite",
                    "@id": `${homeUrl}#website`,
                    url: homeUrl,
                    name: "sagisagph",
                  },
                  about: [
                    {
                      "@type": "Thing",
                      name: "sagisagph bonus Philippines",
                    },
                    {
                      "@type": "Thing",
                      name: "sagisagph lucky 88 welcome bonus",
                    },
                    { "@type": "Thing", name: "lucky 88 deposit bonus" },
                    { "@type": "Thing", name: "88 cashback bonus" },
                    { "@type": "Thing", name: "bonus promo" },
                    { "@type": "Thing", name: "bonus code" },
                    { "@type": "Thing", name: "reload bonus" },
                    { "@type": "Thing", name: "loyalty bonus" },
                    { "@type": "Thing", name: "88 VIP bonus" },
                    { "@type": "Thing", name: "bonus GCash" },
                    { "@type": "Thing", name: "bonus PayMaya" },
                  ],
                  inLanguage: "en-PH",
                },

                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#bonuses-article`,
                  url: canonicalUrl,
                  headline:
                    "sagisagph Lucky 88 Bonus Philippines - Welcome Bonus, Deposit Bonus, Cashback & Reload",
                  description:
                    "Explore sagisagph bonus promos for Philippines users: Lucky 88 welcome bonus, deposit bonus options, bonus code deals, cashback bonus and reload bonus promos, plus VIP loyalty bonus rewards with clear terms before you claim.",
                  mainEntityOfPage: { "@id": canonicalUrl },
                  publisher: {
                    "@type": "Organization",
                    name: "sagisagph",
                    url: homeUrl,
                  },
                  articleSection: "Bonuses",
                  inLanguage: "en-PH",
                  keywords: seoKeywords,
                },

                {
                  "@type": "ItemList",
                  "@id": `${canonicalUrl}#bonuses-cards`,
                  name: "sagisagph Bonus Offers (Philippines)",
                  itemListOrder: "https://schema.org/ItemListOrderAscending",
                  numberOfItems: 6,
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        "@type": "Thing",
                        name: "sagisagph Lucky 88 Welcome Bonus Philippines",
                        description:
                          "Lucky 88 welcome bonus designed for new users, with eligibility and key conditions shown before you claim.",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      item: {
                        "@type": "Thing",
                        name: "sagisagph Free Bonus Philippines",
                        description:
                          "Free bonus options for Philippines users, including Lucky 88 themed promos when available, with simple claim guidance.",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      item: {
                        "@type": "Thing",
                        name: "sagisagph Bonus Code & Bonus Promo Deals",
                        description:
                          "Bonus code campaigns that may unlock deposit bonus boosts or limited bonus promo offers, with terms visible before activation.",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      item: {
                        "@type": "Thing",
                        name: "Daily Lucky 88 Bonus & Reload Bonus sagisagph Philippines",
                        description:
                          "Daily bonus and reload bonus promos for repeat sessions, including deposit bonus windows with clear conditions before you join.",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      item: {
                        "@type": "Thing",
                        name: "VIP Lucky 88 Loyalty Bonus Program sagisagph Philippines",
                        description:
                          "VIP bonus and loyalty bonus rewards for active users, structured by level with clear eligibility and exclusive benefits.",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 6,
                      item: {
                        "@type": "Thing",
                        name: "sagisagph Cashback Bonus Promos (Philippines)",
                        description:
                          "Cashback bonus promos for Philippines users that may pair with GCash and PayMaya flows, with tracking guidance and promo rules shown upfront.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Apple Touch Icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <ReferralFloatingButton
        href="https://masotery.com/f7GnQddN"
        label="Share sagisagph — Verified & Licensed"
        ariaLabel="Share the sagisagph verified website in the Philippines — PAGCOR verified, licensed, legit, and trustworthy"
      />
      <main>
        <SharedHero page="bonuses" />

        <Bonuses />
      </main>
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
