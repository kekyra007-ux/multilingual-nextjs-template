import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Hero } from "@/components/Hero/Hero";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { Integrations } from "@/components/Integrations/Integrations";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { FeaturedItems } from "@/components/FeaturedItems/FeaturedItems";
import { useRouter } from "next/router";
import { PromoSection } from "@/components/PromoSection/PromoSection";
import { Banner } from "@/components/UI/Banner";
import FloatingCTA from "@/components/UI/FloatingCTA";

export default function Home() {
  const { t, ready } = useTranslation("common");
  const BASE_URL = "https://apptemplate.example.com";

  const router = useRouter();

  const seoTitle = t("seo.home.title");
  const seoDescription = t("seo.home.description");
  const seoKeywords = t("seo.home.keywords");
  const localeParam = router.query.locale;
  const locale = typeof localeParam === "string" ? localeParam : "en";
  const isEn = locale === "en";

  const canonicalUrl = `${BASE_URL}/${locale}/`;

  const enUrl = `${BASE_URL}/en/`;
  const esUrl = `${BASE_URL}/es/`;

  const ogLocale = isEn ? "en_US" : "es_ES";
  const languageMeta = isEn ? "English" : "Spanish";

  const ogImage = `${canonicalUrl.replace(/\/$/, "")}/og/home-apptemplate.jpg`;

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
        <div
          style={{
            fontSize: "24px",
            color: "#F5C84C",
            fontWeight: "bold",
          }}
        >
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
        <meta property="og:image:alt" content="AppTemplate Homepage" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />

        <meta name="application-name" content="AppTemplate" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AppTemplate",
              url: canonicalUrl,
              inLanguage: isEn ? "en" : "es",
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>

      <FloatingCTA
        href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
        label="View on GitHub"
      />

      <main>
        <Hero />
        <Banner
          image="/welcome-banner.png"
          priority
          imgTitle="AppTemplate Homepage"
          alt="AppTemplate Template"
        >
          <></>
        </Banner>
        <AboutSection />
        <FeaturedItems t={t} />
        <PromoSection />
        <Integrations />
      </main>
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
