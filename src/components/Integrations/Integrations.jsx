import React from "react";
import { useTranslation } from "next-i18next";
import {
  IntegrationsWrapper,
  IntegrationsContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroText,
  HeroStats,
  StatCard,
  StatIcon,
  StatValue,
  StatLabel,
  PaymentMethodsSection,
  MethodsTitle,
  MethodsGrid,
  MethodCard,
  MethodIcon,
  MethodName,
  MethodBadge,
  MethodDetails,
  MethodDetailItem,
  ArticleSection,
  ArticleContainer,
  ArticleTitle,
  ArticleParagraph,
  ArticleList,
  FeatureText,
  ProcessSection,
  ProcessTitle,
  ProcessSteps,
  ProcessStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  ArticleHighlight,
  FAQSection,
  FAQTitle,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
} from "./Integrations.styled";
import Link from "../Link";
import Button from "../UI/Button";

export const Integrations = () => {
  const { t } = useTranslation("common");

  return (
    <IntegrationsWrapper>
      <IntegrationsContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroContent>
            <HeroTitle>{t("payments.hero.title")}</HeroTitle>
            <HeroText>{t("payments.hero.text")}</HeroText>
          </HeroContent>
          <HeroStats>
            {t("payments.hero.stats", { returnObjects: true }).map(
              (stat, index) => (
                <StatCard key={index}>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ),
            )}
          </HeroStats>
        </HeroSection>{" "}
        {/* Article Section — Professional Payment Guide */}
        <ArticleSection>
          <ArticleContainer>
            <ArticleTitle>{t("payments.article.title")}</ArticleTitle>

            <ArticleParagraph>{t("payments.article.p1")}</ArticleParagraph>

            <ArticleParagraph>{t("payments.article.p2")}</ArticleParagraph>

            <ArticleHighlight>
              {t("payments.article.highlight")}
            </ArticleHighlight>

            <ArticleList>
              {t("payments.article.list", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ArticleList>

            <ArticleParagraph>{t("payments.article.p3")}</ArticleParagraph>

            <Link href="/register" passHref>
              <Button as="a"> {t("payments.article.cta")} </Button>
            </Link>
          </ArticleContainer>
        </ArticleSection>
        {/* Payment Methods */}
        <PaymentMethodsSection>
          <MethodsTitle>{t("payments.methods.title")}</MethodsTitle>
          <MethodsGrid>
            {t("payments.methods.items", { returnObjects: true }).map(
              (method, index) => (
                <MethodCard key={index} $featured={method.featured}>
                  {/* <MethodIcon src={method.icon} alt={method.name} /> */}
                  <MethodName>{method.name}</MethodName>

                  {method.badge && <MethodBadge>{method.badge}</MethodBadge>}

                  <MethodDetails>
                    {method.details.map((detail, idx) => (
                      <MethodDetailItem key={idx}>
                        <span>{detail.label}:</span>
                        <strong>{detail.value}</strong>
                      </MethodDetailItem>
                    ))}
                  </MethodDetails>

                  <Button
                    as="a"
                    href="https://github.com/kekyra007-ux/multilingual-nextjs-template"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.cta}
                  </Button>
                </MethodCard>
              ),
            )}
          </MethodsGrid>
        </PaymentMethodsSection>
        {/* Process Steps */}
        <ProcessSection>
          <ProcessTitle>{t("payments.process.title")}</ProcessTitle>

          <ProcessSteps>
            {t("payments.process.steps", { returnObjects: true }).map(
              (step, index) => (
                <ProcessStep key={index}>
                  <StepNumber>{index + 1}</StepNumber>

                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>

                    <Link href={step.link} passHref>
                      <Button as="a" $variant="secondary">
                        {step.cta}
                      </Button>
                    </Link>
                  </StepContent>
                </ProcessStep>
              ),
            )}
          </ProcessSteps>
        </ProcessSection>
        {/* Info Banner */}
        {/* Security */}
        <ArticleSection>
          <ArticleContainer>
            <ArticleTitle>{t("payments.articleSecurity.title")}</ArticleTitle>

            <ArticleParagraph>
              {t("payments.articleSecurity.p1")}
            </ArticleParagraph>

            <ArticleParagraph>
              {t("payments.articleSecurity.p2")}
            </ArticleParagraph>

            <ArticleHighlight>
              {t("payments.articleSecurity.highlight")}
            </ArticleHighlight>

            <ArticleParagraph>
              {t("payments.articleSecurity.p3")}
            </ArticleParagraph>

            <ArticleList>
              {t("payments.articleSecurity.list", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                ),
              )}
            </ArticleList>

            <Link href="/" passHref>
              <Button as="a">{t("payments.articleSecurity.cta")}</Button>
            </Link>
          </ArticleContainer>
        </ArticleSection>
        {/* FAQ */}
        <FAQSection>
          <FAQTitle>{t("payments.faq.title")}</FAQTitle>
          <FAQList>
            {t("payments.faq.items", { returnObjects: true }).map(
              (faq, index) => (
                <FAQItem key={index}>
                  <FAQQuestion>{faq.question}</FAQQuestion>
                  <FAQAnswer>{faq.answer}</FAQAnswer>
                </FAQItem>
              ),
            )}
          </FAQList>
        </FAQSection>
      </IntegrationsContainer>
    </IntegrationsWrapper>
  );
};
