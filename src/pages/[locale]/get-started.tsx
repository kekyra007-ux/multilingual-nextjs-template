import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import Head from "next/head";
import { Hero } from "@/components/Hero/Hero";
import { Banner } from "@/components/UI/Banner";
import { GetStarted } from "@/components/GetStarted/GetStarted";
import FloatingCTA from "@/components/UI/FloatingCTA";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function GetStartedPage() {
  const { t } = useTranslation("common");
  const BASE_URL = "https://apptemplate.example.com";

  const seoTitle = t("seo.getStarted.title");
  const seoDescription = t("seo.getStarted.description");
  const seoKeywords = t("seo.getStarted.keywords");

  const router = useRouter();
  const localeParam = router.query.locale;
  const locale = typeof localeParam === "string" ? localeParam : "en";
  const isEn = locale === "en";

  const canonicalUrl = `${BASE_URL}/${locale}/get-started/`;
  const enUrl = `${BASE_URL}/en/get-started/`;
  const esUrl = `${BASE_URL}/es/get-started/`;
  const ogLocale = isEn ? "en_US" : "es_ES";
  const languageMeta = isEn ? "English" : "Spanish";

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />

        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={enUrl} />
        <link rel="alternate" hrefLang="es" href={esUrl} />
        <meta name="language" content={languageMeta} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AppTemplate" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:locale" content={ogLocale} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FloatingCTA
        href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
        label="View on GitHub"
        ariaLabel="View AppTemplate on GitHub"
      />

      <main>
        <Hero />
        <GetStarted />
      </main>
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
