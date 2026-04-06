import React from "react";
import { useTranslation } from "next-i18next";
import {
  FooterWrapper,
  Container,
  FooterTop,
  FooterCol,
  FooterBottom,
  LegalText,
  CTABox,
  CTAText,
  CTAButton,
} from "./Footer.styled";
import Button from "../UI/Button";
import Link from "../Link";

export const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterCol>
            <h4>{t("footer.aboutTitle")}</h4>
            <p>{t("footer.aboutText")}</p>
          </FooterCol>
          <FooterCol>
            <h4>{t("footer.linksTitle")}</h4>
            <ul>
              <li>
                <Link href="/">{t("footer.links.home")}</Link>
              </li>
              <li>
                <Link href="/features">{t("footer.links.features")}</Link>
              </li>
              <li>
                <Link href="/get-started">{t("footer.links.getStarted")}</Link>
              </li>
            </ul>
          </FooterCol>
        </FooterTop>

        <CTABox>
          <CTAText>
            <strong>{t("footer.ctaTitle")}</strong>
            <p>{t("footer.ctaText")}</p>
          </CTAText>
          <CTAButton>
            <Button
              as="a"
              href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {t("footer.ctaButton")}
            </Button>
          </CTAButton>
        </CTABox>

        <FooterBottom>
          <LegalText>{t("footer.legal")}</LegalText>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
