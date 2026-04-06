"use client";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  SlotsWrapper,
  SlotsContainer,
  SectionHeader,
  SectionTitle,
  LongArticleSection,
  LongArticleInner,
  LongArticleHeader,
  LongArticleTitle,
  LongArticleSubtitle,
  FAQSection,
  FAQGrid,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  LongArticleGrid,
  LongArticleAside,
  LongArticleAsideTitle,
  LongArticleTOC,
  LongArticleTOCItem,
  LongArticleMiniList,
  LongArticleMiniItem,
  LongArticleBody,
  LongArticleBlock,
  LongArticleH3,
  LongArticleP,
  LongArticleList,
  LongArticleLi,
  LongArticleLiTitle,
  LongArticleLiText,
  LongArticleCallouts,
  LongArticleCallout,
  LongArticleCalloutTop,
  LongArticleCalloutText,
  LongArticleCTA,
  LongArticleCTATitle,
  LongArticleCTAText,
} from "./Register.styled";

import Button from "../UI/Button";
import { tArray } from "@/utils/i18nSafe";

export const Register = () => {
  const { t } = useTranslation("common");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  // ===== Long Article (REGISTER) =====
  const longArticle = t("registerPage.longArticle", { returnObjects: true });
  const longArticleTOC = tArray(t, "registerPage.longArticle.toc");
  const longArticleBullets = tArray(t, "registerPage.longArticle.bullets");
  const longArticleSections = tArray(t, "registerPage.longArticle.sections");
  const longArticleCallouts = tArray(t, "registerPage.longArticle.callouts");

  // ===== FAQ (REGISTER) =====
  const faqs = tArray(t, "registerPage.faq.items");

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <SlotsWrapper>
      <SlotsContainer>
        <LongArticleSection>
          <LongArticleInner>
            <LongArticleHeader>
              <LongArticleTitle>{longArticle?.title}</LongArticleTitle>
              <LongArticleSubtitle>{longArticle?.subtitle}</LongArticleSubtitle>
            </LongArticleHeader>

            <LongArticleGrid>
              {/* Sticky TOC */}
              <LongArticleAside>
                <LongArticleAsideTitle>
                  {longArticle?.tocTitle}
                </LongArticleAsideTitle>

                <LongArticleTOC>
                  {longArticleTOC.map((item, idx) => (
                    <LongArticleTOCItem key={idx} href={item.href}>
                      <span>{item.icon}</span>
                      {item.label}
                    </LongArticleTOCItem>
                  ))}
                </LongArticleTOC>

                {!!longArticleBullets.length && (
                  <LongArticleMiniList>
                    {longArticleBullets.map((b, idx) => (
                      <LongArticleMiniItem key={idx}>
                        <span>{b.icon}</span>
                        {b.text}
                      </LongArticleMiniItem>
                    ))}
                  </LongArticleMiniList>
                )}
              </LongArticleAside>

              {/* Body */}
              <LongArticleBody>
                {(longArticleSections || []).map((sec, idx) => (
                  <LongArticleBlock key={idx} id={sec.id}>
                    <LongArticleH3>
                      {sec.icon} {sec.title}
                    </LongArticleH3>

                    {(sec.paragraphs || []).map((p, i) => (
                      <LongArticleP key={i}>{p}</LongArticleP>
                    ))}

                    {!!(sec.list || []).length && (
                      <LongArticleList>
                        {sec.list.map((li, i) => (
                          <LongArticleLi key={i}>
                            <span>{li.icon}</span>
                            <div>
                              <LongArticleLiTitle>
                                {li.title}
                              </LongArticleLiTitle>
                              <LongArticleLiText>{li.text}</LongArticleLiText>
                            </div>
                          </LongArticleLi>
                        ))}
                      </LongArticleList>
                    )}
                  </LongArticleBlock>
                ))}

                {!!longArticleCallouts.length && (
                  <LongArticleCallouts>
                    {longArticleCallouts.map((c, idx) => (
                      <LongArticleCallout key={idx}>
                        <LongArticleCalloutTop>
                          <span>{c.icon}</span>
                          <strong>{c.title}</strong>
                        </LongArticleCalloutTop>
                        <LongArticleCalloutText>
                          {c.text}
                        </LongArticleCalloutText>
                      </LongArticleCallout>
                    ))}
                  </LongArticleCallouts>
                )}

                {!!longArticle?.cta?.title && (
                  <LongArticleCTA>
                    <LongArticleCTATitle>
                      {longArticle.cta.title}
                    </LongArticleCTATitle>
                    <LongArticleCTAText>
                      {longArticle.cta.text}
                    </LongArticleCTAText>
                    <Button
                      as="a"
                      href={longArticle.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {longArticle.cta.button}
                    </Button>
                  </LongArticleCTA>
                )}
              </LongArticleBody>
            </LongArticleGrid>
          </LongArticleInner>
        </LongArticleSection>

        {/* FAQ Section */}
        <FAQSection>
          <SectionHeader>
            <SectionTitle>{t("registerPage.faq.title")}</SectionTitle>
          </SectionHeader>

          <FAQGrid>
            {faqs.map((faq, index) => (
              <FAQItem key={index} onClick={() => toggleFAQ(index)}>
                <FAQQuestion $expanded={expandedFAQ === index}>
                  {faq.question}
                  <span>{expandedFAQ === index ? "−" : "+"}</span>
                </FAQQuestion>
                {expandedFAQ === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
              </FAQItem>
            ))}
          </FAQGrid>
        </FAQSection>
      </SlotsContainer>
    </SlotsWrapper>
  );
};
