import Head from "next/head";
import { useTranslation } from "next-i18next";
import { Hero } from "@/components/Hero/Hero";
import { AboutSection } from "@/components/AboutSection/AboutSection";
import { Payments } from "@/components/Payments/Payments";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { HotGamesPreview } from "@/components/HotGamesPreview/HotGamesPreview";
import { useRouter } from "next/router";
import { Bonuses } from "@/components/Bonuses/Bonuses";

import { Banner } from "@/components/UI/Banner";

import ReferralFloatingButton from "@/components/UI/ReferralFloatingButton";

export default function Home() {
  const { t, ready } = useTranslation("common");
  const BASE_URL = "https://sagisagphcom88.com";

  const router = useRouter();

  const seoTitle = t("seo.home.title");
  const seoDescription = t("seo.home.description");
  const seoKeywords = t("seo.home.keywords");
  const localeParam = router.query.locale;
  const locale = typeof localeParam === "string" ? localeParam : "tl"; // tl по умолчанию
  const isTl = locale === "tl";

  const canonicalUrl = `${BASE_URL}/${locale}/`;

  const tlUrl = `${BASE_URL}/tl/`;
  const enUrl = `${BASE_URL}/en/`;

  const ogLocale = isTl ? "tl_PH" : "en_US";
  const languageMeta = isTl ? "Filipino" : "English";

  const ogImage = `${canonicalUrl.replace(/\/$/, "")}/og/home-sagisagph.jpg`;

  if (!ready) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#1a1a2e",
        }}
      >
        <div
          style={{
            fontSize: "24px",
            color: "#0055FF",
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
        <meta property="og:site_name" content="sagisagph" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:image" content={ogImage} />
        <meta
          property="og:image:alt"
          content="sagisagph Casino Philippines homepage — secure login, fast access, and PH-friendly payments like GCash and Maya"
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:image:alt"
          content="sagisagph online casino Philippines — mobile-first gaming with quick login and local PH payments"
        />

        {/* TRUST & PLATFORM */}
        <meta name="application-name" content="sagisagph Online Casino PH" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* JSON-LD: WebPage (Home) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "sagisagph - Philippines Trusted PAGCOR Platform",
              url: canonicalUrl,
              isPartOf: {
                "@type": "WebSite",
                name: "sagisagph",
                url: canonicalUrl,
              },
              inLanguage: isTl ? "tl-PH" : "en-PH",
              primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
              about: [
                { "@type": "Thing", name: "sagisagph official website" },
                {
                  "@type": "Thing",
                  name: "sagisagph Philippines website",
                },
                {
                  "@type": "Thing",
                  name: "official sagisagph Philippines",
                },
                { "@type": "Thing", name: "verified sagisagph website" },
                { "@type": "Thing", name: "sagisagph PAGCOR verified" },
                {
                  "@type": "Thing",
                  name: "sagisagph licensed Philippines",
                },
                { "@type": "Thing", name: "sagisagph trustworthy" },
                { "@type": "Thing", name: "sagisagph secure" },
                { "@type": "Thing", name: "sagisagph reliable" },
                { "@type": "Thing", name: "sagisagph Manila" },
                { "@type": "Thing", name: "sagisagph Pinoy" },
              ],
            }),
          }}
        />

        {/* Home JSON-LD Graph: Trust / Verification / Official Platform (Home) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${canonicalUrl}#website`,
                  url: canonicalUrl,
                  name: "sagisagph",
                  inLanguage: isTl ? "tl-PH" : "en-PH",
                },

                {
                  "@type": "Organization",
                  "@id": `${canonicalUrl}#organization`,
                  name: "sagisagph",
                  url: canonicalUrl,
                  areaServed: { "@type": "Country", name: "Philippines" },
                },

                {
                  "@type": "WebPage",
                  "@id": canonicalUrl,
                  url: canonicalUrl,
                  name: seoTitle,
                  description: seoDescription,
                  keywords: seoKeywords,
                  isPartOf: { "@id": `${canonicalUrl}#website` },
                  about: [
                    {
                      "@type": "Thing",
                      name: "sagisagph official website",
                    },
                    { "@type": "Thing", name: "sagisagph site" },
                    {
                      "@type": "Thing",
                      name: "verified sagisagph website",
                    },
                    {
                      "@type": "Thing",
                      name: "sagisagph PAGCOR verified",
                    },
                    {
                      "@type": "Thing",
                      name: "sagisagph licensed Philippines",
                    },
                    { "@type": "Thing", name: "sagisagph is legit" },
                    { "@type": "Thing", name: "sagisagph is safe" },
                    { "@type": "Thing", name: "sagisagph trustworthy" },
                    { "@type": "Thing", name: "sagisagph trusted" },
                  ],
                  inLanguage: isTl ? "tl-PH" : "en-PH",
                  primaryImageOfPage: { "@type": "ImageObject", url: ogImage },
                },

                {
                  "@type": "Article",
                  "@id": `${canonicalUrl}#platform-trust-article`,
                  url: canonicalUrl,
                  headline:
                    "sagisagph Philippines Official — sagisagph is Legit, Trusted, and Verified",
                  description:
                    "A verification-first overview of the sagisagph official website Philippines: verified website cues, PAGCOR verified framing, and a consistent platform structure designed for confident repeat visits.",
                  mainEntityOfPage: { "@id": canonicalUrl },
                  publisher: { "@id": `${canonicalUrl}#organization` },
                  articleSection: "Official Platform",
                  inLanguage: isTl ? "tl-PH" : "en-PH",
                  keywords: seoKeywords,
                },

                {
                  "@type": "HowTo",
                  "@id": `${canonicalUrl}#verify-howto`,
                  name: "sagisagph Trust Routine — Verify, Confirm, Continue",
                  description:
                    "A practical routine to confirm the sagisagph official website Philippines: verify recognizable website cues, review PAGCOR verified framing, and return with confidence on repeat visits.",
                  step: [
                    {
                      "@type": "HowToStep",
                      name: "Confirm sagisagph Official Website",
                      text: "Start on sagisagph org and confirm the officsagisagph site presentation you recognizesagisagphsagisagph Philippines website.",
                      url: canonicalUrl,
                    },
                    {
                      "@type": "HowToStep",
                      name: "Look for Verified Website Cues",
                      text: "Check for consistent structure, familiar sections, and stable cues that indicate a verified sagisagph website experience.",
                      url: canonicalUrl,
                    },
                    {
                      "@type": "HowToStep",
                      name: "Review PAGCOR Verified Framing",
                      text: "Confirm the PAGCOR verified framing used as a trust and brand authority signal, supporting sagisagph licensed Philippines expectations.",
                      url: canonicalUrl,
                    },
                    {
                      "@type": "HowToStep",
                      name: "Return with Confidence",
                      text: "A trusted platform should feel the same on repeat visits—authentic presentation, reliable structure, and clear official identity.",
                      url: canonicalUrl,
                    },
                  ],
                },

                {
                  "@type": "FAQPage",
                  "@id": `${canonicalUrl}#home-faq`,
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is sagisagph?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "sagisagph is a Philippines platform presented via sagisagph official website, designed to feel verified, trustworthy, and consistent for repeat visits.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How do I confirm I am on the sagisagph official website?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Use sagisagph org as your reference and confirm verifsagisagph website cues: recognizable structure, stable sections, and consistent official branding.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is sagisagph legit and safe?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "sagisagph emphasisagisagph is lesagisagphsagisagph is safe expectations through verified website cues, a consistent platform structure, and official identity designed for Philippines users.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What does PAGCOR mean for sagisagph?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "PAGCOR verified framing supports brand authority and trust signals for the sagisagph Philippines website, reinforcsagisagph licensed Philippines positioning.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is sagisagph built for the Philippines?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. sagisagph platform Philippines positioning focuses on Pinoy browsing habits, including mobile-first readability and a consistent site structure across repeat visits.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Why does sagisagph emphasize verification cues?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Verification cues help reduce confusion and make it easier to notice unusual routing by relying on an authentic, stable sagisagph official website presentation.",
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
        <Hero />
        <Banner
          image="/welcome-banner.png"
          priority
          imgTitle="sagisagph Official Website Philippines — Verified Platform"
          alt="sagisagph official Philippines banner for sagisagph website and sagisagphsagisagph platform experience"
        >
          <></>
        </Banner>
        <AboutSection />

        <HotGamesPreview t={t} />
        {/* <Banner
          image="/banner-grand-prize.jpeg"
          priority={false}
          imgTitle="sagisagph Philippines — Official PAGCOR Verified Platform Daily Rewards"
          alt="sagisagph official Philippines platform banner showcasing trusted daily rewards, PHP currency support, and verified platform benefits for Filipino users"
        >
          <></>
        </Banner> */}

        <Payments />
      </main>
    </>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
