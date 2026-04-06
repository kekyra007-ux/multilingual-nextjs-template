import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Hero } from "@/components/Hero/Hero";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useRouter } from "next/router";
import { GetStarted } from "@/components/GetStarted/GetStarted";

export default function GetStartedPage() {
  const { t, ready } = useTranslation("common");
  const BASE_URL = "https://apptemplate.example.com";

  const router = useRouter();

  const seoTitle = t("seo.getStarted.title");
  const seoDescription = t("seo.getStarted.description");
  const seoKeywords = t("seo.getStarted.keywords");
  const localeParam = router.query.locale;
  const locale = typeof localeParam === "string" ? localeParam : "en";
  const isEn = locale === "en";

  const canonicalUrl = `${BASE_URL}/${locale}/get-started/`;

  const enUrl = `${BASE_URL}/en/get-started/`;
  const esUrl = `${BASE_URL}/es/get-started/`;

  const ogLocale = isEn ? "en_US" : "es_ES";
  const languageMeta = isEn ? "English" : "Spanish";

  const ogImage = `${canonicalUrl.replace(/\/$/, "")}/og/getstarted-apptemplate.jpg`;

  if (!ready) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#3B146F",
        }}
      >
        <div style={{ fontSize: "24px", color: "#F5C84C", fontWeight: "bold" }}>
          Loading...
        </div>
      </div>
    );
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
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
        <meta name="language" content={languageMeta} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="color-scheme" content="dark" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="AppTemplate" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="AppTemplate Get Started Guide" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />

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
      </Head>

      <main>
        <Hero page="getStarted" />
        <GetStarted />
      </main>
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
