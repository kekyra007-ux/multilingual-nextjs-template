import { useTranslation } from "next-i18next";
import { tArray } from "@/utils/i18nSafe";
import * as S from "./Hero.styled";
import { FancyButton } from "../UI/FancyButton";
import Button from "../UI/Button";

export const Hero = () => {
  const { t } = useTranslation("common");

  // Get data from JSON
  const badge = t("heroBlock.badge", { returnObjects: true });
  const title = t("heroBlock.title", { returnObjects: true });
  const subtitle = t("heroBlock.subtitle");
  const cta = t("heroBlock.cta", { returnObjects: true });
  const trustBadges = tArray(t, "heroBlock.trustBadges");
  const stats = tArray(t, "heroBlock.stats");

  return (
    <S.HeroContainer>
      <S.BackgroundImage />
      <S.BackgroundOverlay />
      <S.GlowEffect />

      <S.ContentWrapper>
        <S.HeroGrid>
          {/* LEFT: текст */}
          <S.Left>
            <a
              href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <S.WelcomeBadge>
                <S.BadgeGlow />
                <S.BadgeIcon>🎁</S.BadgeIcon>
                <S.BadgeText>{badge.amount}</S.BadgeText>
              </S.WelcomeBadge>
            </a>
            <S.TitleContainer>
              <S.Title>
                {/* <S.TitleLine data-text={title.part2}>{title.part2}</S.TitleLine> */}

                <S.HighlightText data-text={title.highlight}>
                  {title.highlight}
                </S.HighlightText>
                <S.TitleLine data-text={title.part1}>{title.part1}</S.TitleLine>
              </S.Title>
            </S.TitleContainer>

            <S.Subtitle>{subtitle}</S.Subtitle>
          </S.Left>

          {/* RIGHT: карточки */}
          <S.Right>
            <S.StatsContainer $right>
              {stats.map((stat, index) => (
                <S.StatCard key={index}>
                  <S.StatNumber>{stat.number}</S.StatNumber>
                  <S.StatLabel>{stat.label}</S.StatLabel>
                  <S.StatGlow />
                </S.StatCard>
              ))}
            </S.StatsContainer>
            <S.CTAContainer>
              <Button
                as="a"
                href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.primary.text}
              </Button>

              <Button
                $variant="secondary"
                as="a"
                href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta.secondary.text}
              </Button>
            </S.CTAContainer>
          </S.Right>
        </S.HeroGrid>

        <S.ScrollTextWrapper>
          <S.ScrollInner>{t("heroBlock.scrollText")}</S.ScrollInner>
          <S.ScrollInner>{t("heroBlock.scrollText")}</S.ScrollInner>
          <S.ScrollInner>{t("heroBlock.scrollText")}</S.ScrollInner>
        </S.ScrollTextWrapper>
      </S.ContentWrapper>
    </S.HeroContainer>
  );
};
