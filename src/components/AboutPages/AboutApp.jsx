"use client";

import { useTranslation } from "react-i18next";
import {
  AboutWrapper,
  AboutContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroBadges,
  Badge,
  ContentSection,
  SectionTitle,
  SectionText,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  StatsSection,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  HighlightsSection,
  HighlightsList,
  HighlightItem,
  HighlightIcon,
  HighlightText,
  CTASection,
  CTAContent,
  CTATitle,
  CTAText,
} from "./AboutApp.styled";
import {
  DeepGuideSection,
  DeepGuideContainer,
  DeepGuideTitle,
  DeepGuideParagraph,
  DeepGuideList,
} from "./FeaturesGrid.styled";
import Button from "../UI/Button";

const AboutPages = ({ t }) => {
  // Получаем блоки из JSON через i18next
  const hero = t("aboutPages.hero.app", { returnObjects: true });
  const content = t("aboutPages.content.app", { returnObjects: true });
  const features = t("aboutPages.features.app", { returnObjects: true });
  const stats = t("aboutPages.stats.app", { returnObjects: true });
  const highlights = t("aboutPages.highlights.app", { returnObjects: true });
  const cta = t("aboutPages.cta.app", { returnObjects: true });
  const deepGuide = t("aboutPages.deepGuide.app", { returnObjects: true });

  return (
    <AboutWrapper>
      <AboutContainer>
        <DeepGuideSection>
          <DeepGuideContainer>
            {/* HERO SECTION */}

            <DeepGuideTitle>{deepGuide.title}</DeepGuideTitle>
            {hero && (
              <HeroSection>
                <HeroContent>
                  {Array.isArray(hero.badges) && (
                    <HeroBadges>
                      {hero.badges.map((badge, index) => (
                        <Badge key={index}>{badge}</Badge>
                      ))}
                    </HeroBadges>
                  )}
                </HeroContent>
              </HeroSection>
            )}
            <DeepGuideParagraph>{deepGuide.p1}</DeepGuideParagraph>
            <DeepGuideParagraph>{deepGuide.p2}</DeepGuideParagraph>

            <DeepGuideList>
              {deepGuide.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </DeepGuideList>

            <DeepGuideParagraph>{deepGuide.p3}</DeepGuideParagraph>
          </DeepGuideContainer>
        </DeepGuideSection>

        {/* CTA SECTION */}
        {cta && (
          <CTASection>
            <CTAContent>
              <CTATitle>{cta.title}</CTATitle>
              <CTAText>{cta.text}</CTAText>
              <Button
                as="a"
                href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.button}
              </Button>
            </CTAContent>
          </CTASection>
        )}
      </AboutContainer>
    </AboutWrapper>
  );
};

export default AboutPages;
