import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Hero } from "@/components/Hero/Hero";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useRouter } from "next/router";
import { FeaturedItems } from "@/components/FeaturedItems/FeaturedItems";
import { Banner } from "@/components/UI/Banner";
import FloatingCTA from "@/components/UI/FloatingCTA";

export default function Features() {
  const { t } = useTranslation("common");
  const BASE_URL = "https://apptemplate.example.com";

  const seoTitle = t("seo.features.title");
  const seoDescription = t("seo.features.description");
  const seoKeywords = t("seo.features.keywords");
  const router = useRouter();
  const localeParam = router.query.locale;
  const locale = typeof localeParam === "string" ? localeParam : "en";
  const isEn = locale === "en";

  const canonicalUrl = `${BASE_URL}/${locale}/features/`;
  const enUrl = `${BASE_URL}/en/features/`;
  const esUrl = `${BASE_URL}/es/features/`;
  const ogLocale = isEn ? "en_US" : "es_ES";
  const languageMeta = isEn ? "English" : "Spanish";

  if (!t) {
    return null;
  }

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
        <FeaturedItems />
      </main>
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
