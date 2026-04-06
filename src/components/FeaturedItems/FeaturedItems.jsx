import React from "react";
import { useTranslation } from "next-i18next";
import Button from "../UI/Button";
import * as S from "./FeaturedItems.styled";

export const FeaturedItems = () => {
  const { t } = useTranslation("common");
  const featured = t("featured", { returnObjects: true }) || {};

  const badgeItems = featured?.badgeItems || [];
  const plans = featured?.plans || [];
  const guideTags = featured?.guide?.tags || [];
  const promoStats = featured?.promo?.stats || [];

  return (
    <S.SectionWrapper>
      <S.GridPattern />
      <S.GlowTopLeft />
      <S.GlowBottomRight />

      <S.Container>
        <S.TopBadge>
          {badgeItems.map((item, index) => (
            <React.Fragment key={item || index}>
              <span>{item}</span>
              {index !== badgeItems.length - 1 && <S.Dot>•</S.Dot>}
            </React.Fragment>
          ))}
        </S.TopBadge>

        <S.SectionHeader>
          <S.SectionTitle>{featured?.title}</S.SectionTitle>
          <S.SectionSubtitle>{featured?.subtitle}</S.SectionSubtitle>
        </S.SectionHeader>

        <S.CardsGrid>
          {plans.map((plan, index) => (
            <S.PlanCard key={index} $featured={plan?.featured}>
              <S.PlanTier>{plan?.tier}</S.PlanTier>
              <S.PlanValue>{plan?.value}</S.PlanValue>
              <S.PlanTitle>{plan?.title}</S.PlanTitle>
              <S.PlanDescription>{plan?.description}</S.PlanDescription>

              <S.FeaturesList>
                {(plan?.features || []).map((feature, featureIndex) => (
                  <S.FeatureItem key={featureIndex}>{feature}</S.FeatureItem>
                ))}
              </S.FeaturesList>

              <S.Actions>
                <Button as="a" href={plan?.primaryHref || "/register"}>
                  {plan?.primaryCta}
                </Button>
                <Button
                  as="a"
                  href={plan?.secondaryHref || "/features"}
                  $variant="secondary"
                >
                  {plan?.secondaryCta}
                </Button>
              </S.Actions>
            </S.PlanCard>
          ))}
        </S.CardsGrid>

        <S.BottomGrid>
          <S.InfoCard>
            <S.InfoTitle>{featured?.guide?.title}</S.InfoTitle>
            <S.InfoText>{featured?.guide?.text}</S.InfoText>

            <S.TagList>
              {guideTags.map((tag, index) => (
                <S.Tag key={index}>{tag}</S.Tag>
              ))}
            </S.TagList>
          </S.InfoCard>

          <S.PromoCard>
            <S.PromoTitle>{featured?.promo?.title}</S.PromoTitle>
            <S.PromoText>{featured?.promo?.text}</S.PromoText>

            <S.StatsRow>
              {promoStats.map((item, index) => (
                <S.StatBox key={index}>
                  <S.StatValue>{item?.value}</S.StatValue>
                  <S.StatLabel>{item?.label}</S.StatLabel>
                </S.StatBox>
              ))}
            </S.StatsRow>

            <S.Actions>
              <Button as="a" href={featured?.promo?.primaryHref || "/register"}>
                {featured?.promo?.primaryCta}
              </Button>
              <Button
                as="a"
                href={featured?.promo?.secondaryHref || "/faq"}
                $variant="secondary"
              >
                {featured?.promo?.secondaryCta}
              </Button>
            </S.Actions>
          </S.PromoCard>
        </S.BottomGrid>
      </S.Container>
    </S.SectionWrapper>
  );
};

export default FeaturedItems;
