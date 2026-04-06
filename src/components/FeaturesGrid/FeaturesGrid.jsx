"use client";
import { useState } from "react";

import { useTranslation } from "next-i18next";
import {
  BettingWrapper,
  BettingContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  LiveIndicator,
  StatsGrid,
  StatCard,
  StatValue,
  StatLabel,
  LiveMatchesSection,
  SectionTitle,
  MatchesGrid,
  MatchCard,
  MatchHeader,
  MatchLeague,
  MatchTime,
  MatchTeams,
  Team,
  TeamLogo,
  TeamName,
  VS,
  MatchOdds,
  OddButton,
  OddLabel,
  OddValue,
  PopularBetsSection,
  BetTabs,
  BetTab,
  BetsGrid,
  BetCard,
  BetIcon,
  BetTitle,
  BetDescription,
  BetOdd,
  FeaturesSection,
  FeaturesGridStyled,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  InfoBanner,
  BannerContent,
  BannerTitle,
  BannerText,
  DeepGuideSection,
  DeepGuideContainer,
  DeepGuideTitle,
  DeepGuideParagraph,
  DeepGuideList,
} from "./FeaturesGrid.styled";
import { tArray } from "@/utils/i18nSafe";
import Button from "../UI/Button";

export const FeaturesGrid = () => {
  const { t } = useTranslation("common");

  const stats = tArray(t, "bettingHub.stats");
  const betTabs = tArray(t, "bettingHub.betTabs");

  const [activeTab, setActiveTab] = useState(
    betTabs?.[0]?.id, // первая карточка открыта по умолчанию
  );
  const popularBets = tArray(t, `bettingHub.popularBets.${activeTab}`);
  const features = tArray(t, "bettingHub.features");

  const banner = t("bettingHub.banner", { returnObjects: true });

  return (
    <BettingWrapper>
      <BettingContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <HeroTitle>{t("bettingHub.hero.title")}</HeroTitle>
            <HeroSubtitle>{t("bettingHub.hero.subtitle")}</HeroSubtitle>
          </HeroContent>
        </HeroSection>

        {/* Deep Guide Section */}
        <DeepGuideSection>
          <DeepGuideContainer>
            <DeepGuideTitle>{t("bettingHub.deepGuide.title")}</DeepGuideTitle>

            <DeepGuideParagraph>
              {t("bettingHub.deepGuide.p1")}
            </DeepGuideParagraph>

            <DeepGuideParagraph>
              {t("bettingHub.deepGuide.p2")}
            </DeepGuideParagraph>

            <DeepGuideList>
              {tArray(t, "bettingHub.deepGuide.list").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </DeepGuideList>

            <DeepGuideParagraph>
              {t("bettingHub.deepGuide.p3")}
            </DeepGuideParagraph>
          </DeepGuideContainer>
        </DeepGuideSection>

        {/* Popular Bets Section */}
        <PopularBetsSection>
          <SectionTitle>{t("bettingHub.popularBetsTitle")}</SectionTitle>

          <BetTabs>
            {betTabs.map((tab) => (
              <BetTab
                key={tab.id}
                $active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.icon}</span>
                {tab.name}
              </BetTab>
            ))}
          </BetTabs>

          <BetsGrid>
            {popularBets.map((bet, index) => (
              <BetCard key={index}>
                <BetTitle>{bet.title}</BetTitle>
                <BetDescription>{bet.description}</BetDescription>
                <BetOdd>{bet.odd}</BetOdd>
              </BetCard>
            ))}
          </BetsGrid>
        </PopularBetsSection>

        {/* Info Banner */}
        <InfoBanner>
          <BannerContent>
            <BannerTitle>{banner.title}</BannerTitle>
            <BannerText>{banner.text}</BannerText>
            <Button
              as="a"
              href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
              target="_blank"
              rel="noopener noreferrer"
            >
              {banner.button}
            </Button>
          </BannerContent>
        </InfoBanner>
      </BettingContainer>
    </BettingWrapper>
  );
};
