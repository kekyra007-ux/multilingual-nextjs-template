import React from "react";
import { useTranslation } from "next-i18next";
import {
  BonusesWrapper,
  BonusesContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  HeroBanner,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerImage,
  BonusGrid,
  BonusCard,
  BonusIcon,
  BonusTitle,
  BonusAmount,
  BonusDescription,
  BonusList,
  BonusListItem,
  BonusButton,
  BonusBadge,
  InfoSection,
  ArticleText,
  ArticleTitle,
  ArticleBlock,
  InfoArticle,
  PromoSection,
  PromoCard,
  PromoHeader,
  PromoTag,
  PromoTitle,
  PromoValue,
  PromoDetails,
  PromoDetailItem,
  PromoFooter,
  TermsSection,
  TermsTitle,
  TermsList,
  TermsItem,
  CTAGroup,
} from "./PromoSection.styled"";
import Button from "../UI/Button";
import { FancyButton } from "../UI/FancyButton";

export const Bonuses = () => {
  const { t } = useTranslation("common");
  const bonusGradients = [
    /* Neon Orange → Burnt Orange (main promo / high-energy) */
    "linear-gradient(180deg, #FFB14A 0%, #FF7A00 55%, #9E3F00 100%)",

    /* Electric Red → Dark Crimson (limited / hot bonus) */
    "linear-gradient(180deg, #FF5A5A 0%, #E11D48 52%, #7F1020 100%)",

    /* Gold Yellow → Deep Amber (reward / cashback / loyalty) */
    "linear-gradient(180deg, #FFE066 0%, #F59E0B 55%, #9A5B00 100%)",

    /* Lime Green → Dark Emerald (boost / reload / win feel) */
    "linear-gradient(180deg, #7CFF4A 0%, #22C55E 55%, #0F5A2E 100%)",

    /* Hot Magenta → Dark Cherry (free spins / spotlight card) */
    "linear-gradient(180deg, #FF4FD8 0%, #C026D3 52%, #5A0A4A 100%)",

    /* Royal Blue → Deep Navy (VIP / premium tier) */
    "linear-gradient(180deg, #5B7CFF 0%, #3B4FE6 55%, #141A5E 100%)",
  ];
  return (
    <BonusesWrapper>
      <BonusesContainer>
        {/* Header секции */}
        <SectionHeader>
          <SectionTitle>{t("bonuses.header.title")}</SectionTitle>
          <SectionSubtitle>{t("bonuses.header.subtitle")}</SectionSubtitle>
        </SectionHeader>
        {/* Hero Banner */}
        <HeroBanner>
          <BannerContent>
            <BannerTitle>{t("bonuses.hero.title")}</BannerTitle>
            <BannerSubtitle>{t("bonuses.hero.subtitle")}</BannerSubtitle>

            <CTAGroup>
              <FancyButton
                as="a"
                href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
                content={t("bonuses.hero.cta")}
              >
                {t("bonuses.hero.cta")}
              </FancyButton>
            </CTAGroup>
          </BannerContent>

          <BannerImage>
            <img
              src="/krol2.png"
              loading="lazy"
              alt={t("bonuses.hero.imageAlt")}
              title={t("bonuses.hero.imageTitle")}
            />
          </BannerImage>
        </HeroBanner>
        {/* Промо-акции */}
        <PromoSection>
          {t("bonuses.promos", { returnObjects: true }).map((promo, index) => (
            <PromoCard key={index}>
              <PromoHeader>
                <PromoTag>{promo.tag}</PromoTag>
                <PromoTitle>{promo.title}</PromoTitle>
                <PromoValue>{promo.value}</PromoValue>
              </PromoHeader>
              <PromoDetails>
                {promo.details.map((detail, idx) => (
                  <PromoDetailItem key={idx}>
                    <span>{detail.label}:</span>
                    <strong>{detail.value}</strong>
                  </PromoDetailItem>
                ))}
              </PromoDetails>
              <PromoFooter>
                <Button
                  as="a"
                  href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("bonuses.button.participate")}
                </Button>
              </PromoFooter>
            </PromoCard>
          ))}
        </PromoSection>
        {/* Основные бонусы */}
        <BonusGrid>
          {t("bonuses.cards", { returnObjects: true }).map((bonus, index) => (
            <BonusCard
              key={index}
              $featured={bonus.featured}
              $gradient={bonusGradients[index % bonusGradients.length]}
            >
              {/* {bonus.featured && (
                <BonusBadge>{t("bonuses.badge.hot")}</BonusBadge>
              )} */}
              {/* <BonusIcon>{bonus.icon}</BonusIcon> */}
              <BonusTitle>{bonus.title}</BonusTitle>
              <BonusAmount>{bonus.amount}</BonusAmount>
              <BonusDescription>{bonus.description}</BonusDescription>
              <BonusList>
                {bonus.features.map((feature, idx) => (
                  <BonusListItem key={idx}>{feature}</BonusListItem>
                ))}
              </BonusList>
              <BonusButton
                as="a"
                href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                {bonus.cta}
                <span>→</span>
              </BonusButton>
            </BonusCard>
          ))}
        </BonusGrid>

        {/* Info Section — now styled as a clean article block */}
        <InfoSection>
          <InfoArticle>
            {t("bonuses.info", { returnObjects: true }).map((info, index) => (
              <ArticleBlock key={index}>
                <ArticleTitle>{info.title}</ArticleTitle>
                <ArticleText>{info.text}</ArticleText>
              </ArticleBlock>
            ))}
          </InfoArticle>
        </InfoSection>

        {/* Условия и правила */}
        <TermsSection>
          <TermsTitle>{t("bonuses.terms.title")}</TermsTitle>
          <TermsList>
            {t("bonuses.terms.items", { returnObjects: true }).map(
              (term, index) => (
                <TermsItem key={index}>{term}</TermsItem>
              ),
            )}
          </TermsList>
        </TermsSection>
      </BonusesContainer>
    </BonusesWrapper>
  );
};
