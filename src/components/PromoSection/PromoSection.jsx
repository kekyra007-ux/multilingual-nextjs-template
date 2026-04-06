import React from "react";
import { useTranslation } from "next-i18next";
import {
  PromoSectionWrapper,
  PromoSectionContainer,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  BonusGrid,
  BonusCard,
  BonusTitle,
  BonusDescription,
  BonusButton,
  BonusBadge,
  TermsSection,
  TermsTitle,
} from "./PromoSection.styled";
import Button from "../UI/Button";

export const PromoSection = () => {
  const { t } = useTranslation("common");
  const items = t("promoSection.items", { returnObjects: true }) || [];
  const gradients = [
    "linear-gradient(180deg, #2A2336 0%, #1C1726 55%, #120F18 100%)",
    "linear-gradient(180deg, #2B2438 0%, #1D1828 55%, #12101A 100%)",
    "linear-gradient(180deg, #2C2534 0%, #1E1824 55%, #131018 100%)",
    "linear-gradient(180deg, #23302F 0%, #182221 55%, #101716 100%)",
    "linear-gradient(180deg, #2A2238 0%, #1B1726 55%, #120F19 100%)",
    "linear-gradient(180deg, #232B38 0%, #181E28 55%, #10141B 100%)",
  ];

  return (
    <PromoSectionWrapper>
      <PromoSectionContainer>
        <SectionHeader>
          <SectionTitle>{t("promoSection.sectionTitle")}</SectionTitle>
          <SectionSubtitle>{t("promoSection.sectionSubtitle")}</SectionSubtitle>
        </SectionHeader>

        <BonusGrid>
          {items.map((item, index) => (
            <BonusCard
              key={index}
              $gradient={gradients[index % gradients.length]}
            >
              <BonusBadge>{item.badge}</BonusBadge>
              <BonusTitle>{item.title}</BonusTitle>
              <BonusDescription>{item.text}</BonusDescription>
              <BonusButton
                as="a"
                href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More<span>→</span>
              </BonusButton>
            </BonusCard>
          ))}
        </BonusGrid>

        <TermsSection>
          <TermsTitle>{t("promoSection.terms")}</TermsTitle>
        </TermsSection>
      </PromoSectionContainer>
    </PromoSectionWrapper>
  );
};
