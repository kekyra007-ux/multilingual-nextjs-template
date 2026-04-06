import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Head from "next/head";
import { SharedHero } from "@/components/SharedHero/SharedHero";
import { Banner } from "@/components/UI/Banner";
import { Register } from "@/components/Register/Register";
import { BettingHub } from "@/components/BettingHub/BettingHub";

import ReferralFloatingButton from "@/components/UI/ReferralFloatingButton";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function AviatorPage() {
  const { t } = useTranslation("common");

  const seoTitle = t("seo.register.title");
  const seoDescription = t("seo.register.description");
  const seoKeywords = t("seo.register.keywords");

  const router = useRouter();
  const BASE_URL = "https://sagisagphcom88.com";

  // локаль из [locale] в URL: "en" или "bn"
  // локаль из [locale] в URL: "en" или "tl"
  const localeParam = router.query.locale;
  const locale = typeof localeParam === "string" ? localeParam : "tl"; // tl по умолчанию
  const isTl = locale === "tl";

  // путь к странице
  const slug = "/register";

  const enUrl = `${BASE_URL}/en${slug}`;
  const tlUrl = `${BASE_URL}/tl${slug}`;

  const canonicalUrl = isTl ? tlUrl : enUrl;

  // ссылки на домашние страницы
  const tlHome = `${BASE_URL}/tl/`;
  const enHome = `${BASE_URL}/en/`;
  const homeUrl = isTl ? tlHome : enHome;

  const ogLocale = isTl ? "tl_PH" : "en_US";
  const languageMeta = isTl ? "Filipino" : "English";

  return (
    <>
      <Head>
        {/* PRIMARY SEO */}
        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />

        {/* CANONICAL & LANG */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en-PH" href={enUrl} />
        <link rel="alternate" hrefLang="tl-PH" href={tlUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <meta name="language" content={languageMeta} />

        {/* GEO */}
        <meta name="geo.region" content="PH" />
        <meta name="geo.country" content="Philippines" />
        <meta name="geo.placename" content="Philippines" />
        <meta name="ICBM" content="12.8797,121.7740" />

        {/* OPEN GRAPH */}
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="sagisagph" />
        <meta
          property="og:image"
          content={`${canonicalUrl.replace(/\/$/, "")}/og/register-sagisagph.jpg`}
        />
        <meta
          property="og:image:alt"
          content="sagisagph Register page — create a casino account in the Philippines with GCash and Maya support"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta
          name="twitter:image"
          content={`${canonicalUrl.replace(/\/$/, "")}/og/register-sagisagph.jpg`}
        />
        <meta
          name="twitter:image:alt"
          content="sagisagph Register — casino registration Philippines with fast GCash and Maya access"
        />

        {/* ROBOTS */}
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebSite",
                    "@id": `${homeUrl}#website`,
                    url: homeUrl,
                    name: "sagisagph",
                    inLanguage: isTl ? "tl-PH" : "en-PH",
                    potentialAction: {
                      "@type": "SearchAction",
                      target: `${homeUrl}?q={search_term_string}`,
                      "query-input": "required name=search_term_string",
                    },
                  },
                  {
                    "@type": "Organization",
                    "@id": `${homeUrl}#organization`,
                    name: "sagisagph",
                    alternateName: "sagisagph",
                    url: homeUrl,
                    logo: {
                      "@type": "ImageObject",
                      url: `${homeUrl}/logo.png`,
                    },
                  },
                  {
                    "@type": "WebPage",
                    "@id": `${canonicalUrl}#webpage`,
                    url: canonicalUrl,
                    name: seoTitle,
                    description: seoDescription,
                    inLanguage: "en-PH",
                    isPartOf: { "@id": `${homeUrl}#website` },
                    about: { "@id": `${homeUrl}#organization` },

                    keywords: seoKeywords,
                  },
                ],
              },
              null,
              0,
            ),
          }}
        />
      </Head>
      <ReferralFloatingButton
        href="https://masotery.com/f7GnQddN"
        label="Share sagisagph — Verified & Licensed"
        ariaLabel="Share the sagisagph verified website in the Philippines — PAGCOR verified, licensed, legit, and trustworthy"
      />
      <SharedHero page="register" />
      <BettingHub />

      <Register />
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
