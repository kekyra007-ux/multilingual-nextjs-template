import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Button from "../UI/Button";
import * as S from "./Hero.styled";

const getHeroKey = (pathname = "", asPath = "") => {
  const normalizedPath = `${pathname} ${asPath}`.toLowerCase();

  if (normalizedPath.includes("get-started")) return "getStarted";
  if (normalizedPath.includes("features")) return "features";

  return "home";
};

export const Hero = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const heroKey = getHeroKey(router?.pathname, router?.asPath);
  const data = t(`hero.${heroKey}`, { returnObjects: true }) || {};

  const pills = data?.pills || [];
  const quickStats = data?.quickStats || [];
  const panelItems = data?.panelItems || [];
  const tickerItems = data?.tickerItems || [];

  return (
    <S.HeroSection>
      <S.BackgroundGlowLeft />
      <S.BackgroundGlowRight />
      <S.CoinGlowTop />
      <S.CoinGlowBottom />
      <S.PatternOverlay />

      <S.Container>
        <S.HeroGrid>
          <S.Left>
            <S.BrandRow>
              <S.BrandLine />
              <S.BrandText>{data?.brand || "AppTemplate"}</S.BrandText>
            </S.BrandRow>

            <S.Title
              dangerouslySetInnerHTML={{
                __html: data?.title || "Modern Multilingual Next.js Starter",
              }}
            />

            <S.Subtitle>
              {data?.subtitle || "Built for landing pages and global teams."}
            </S.Subtitle>

            <S.PillsRow>
              {pills.map((pill, index) => (
                <S.Pill key={index}>{pill}</S.Pill>
              ))}
            </S.PillsRow>

            <S.Actions>
              <Button as="a" href={data?.primaryHref || "/register"}>
                {data?.primaryCta || "Get Started"}
              </Button>

              <Button
                as="a"
                href={data?.secondaryHref || "/features"}
                $variant="secondary"
              >
                {data?.secondaryCta || "Explore Features"}
              </Button>

              <S.TertiaryLink href={data?.tertiaryHref || "/get-started"}>
                {data?.tertiaryCta || "How It Works"}
              </S.TertiaryLink>
            </S.Actions>

            <S.QuickStatsRow>
              {quickStats.map((item, index) => (
                <React.Fragment key={index}>
                  <S.QuickStat>{item}</S.QuickStat>
                  {index !== quickStats.length - 1 && (
                    <S.Separator>•</S.Separator>
                  )}
                </React.Fragment>
              ))}
            </S.QuickStatsRow>
          </S.Left>

          <S.Right>
            <S.PanelCard>
              {panelItems.map((item, index) => (
                <S.PanelRow key={index}>
                  <S.PanelLabel>{item?.label}</S.PanelLabel>
                  <S.PanelValue>{item?.value}</S.PanelValue>
                </S.PanelRow>
              ))}
            </S.PanelCard>
          </S.Right>
        </S.HeroGrid>
      </S.Container>

      <S.Ticker>
        <S.TickerTrack>
          {tickerItems.map((item, index) => (
            <S.TickerItem key={index}>{item}</S.TickerItem>
          ))}
        </S.TickerTrack>
      </S.Ticker>
    </S.HeroSection>
  );
};

export default Hero;
