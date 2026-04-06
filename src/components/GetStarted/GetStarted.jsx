import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Button from "../UI/Button";
import * as S from "./GetStarted.styled";

export const GetStarted = () => {
  const { t } = useTranslation("common");
  const data = t("getStarted", { returnObjects: true }) || {};

  const badges = data?.badges || [];
  const rows = data?.rows || [];
  const accordion = data?.accordion || {};
  const accordionItems = accordion?.items || [];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <S.SectionWrapper>
      <S.BackgroundGlowTop />
      <S.BackgroundGlowBottom />
      <S.GridPattern />

      <S.Container>
        <S.Badge>{data?.eyebrow || "Featured"}</S.Badge>

        <S.Header>
          <S.TitleWrap>
            <S.TitleAccent />
            <S.Title>{data?.title}</S.Title>
          </S.TitleWrap>
          <S.Subtitle>{data?.subtitle}</S.Subtitle>
        </S.Header>

        <S.Panel>
          <S.BadgesRow>
            {badges.map((item, index) => (
              <S.InfoBadge key={index}>{item}</S.InfoBadge>
            ))}
          </S.BadgesRow>

          <S.Table>
            {rows.map((row, index) => (
              <S.TableRow key={index}>
                <S.LabelCell>{row?.label}</S.LabelCell>
                <S.ValueCell>
                  {row?.href ? (
                    <S.ValueLink
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row?.value}
                    </S.ValueLink>
                  ) : (
                    row?.value
                  )}
                </S.ValueCell>
              </S.TableRow>
            ))}
          </S.Table>

          <S.Actions>
            <Button as="a" href={data?.primaryHref || "/"}>
              {data?.primaryCta}
            </Button>
            <Button
              as="a"
              href={data?.secondaryHref || "/"}
              $variant="secondary"
            >
              {data?.secondaryCta}
            </Button>
          </S.Actions>
        </S.Panel>

        <S.AccordionSection>
          <S.AccordionBadge>
            {accordion?.eyebrow || "Quick Start"}
          </S.AccordionBadge>

          <S.AccordionHeader>
            <S.TitleWrap>
              <S.TitleAccent />
              <S.Title>{accordion?.title}</S.Title>
            </S.TitleWrap>
            <S.Subtitle>{accordion?.subtitle}</S.Subtitle>
          </S.AccordionHeader>

          <S.AccordionPanel>
            <S.AccordionIntro>{accordion?.intro}</S.AccordionIntro>

            <S.AccordionList>
              {accordionItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <S.AccordionItem key={index} $open={isOpen}>
                    <S.AccordionTrigger
                      type="button"
                      onClick={() => handleToggle(index)}
                      aria-expanded={isOpen}
                    >
                      <S.StepNumber>{item?.step}</S.StepNumber>
                      <S.StepTitle>{item?.title}</S.StepTitle>
                      <S.StepIcon $open={isOpen}>+</S.StepIcon>
                    </S.AccordionTrigger>

                    {isOpen && (
                      <S.AccordionContent>
                        <S.AccordionText>{item?.text}</S.AccordionText>
                      </S.AccordionContent>
                    )}
                  </S.AccordionItem>
                );
              })}
            </S.AccordionList>

            <S.AccordionActions>
              <Button as="a" href={accordion?.primaryHref || "/"}>
                {accordion?.primaryCta}
              </Button>
              <Button
                as="a"
                href={accordion?.secondaryHref || "/"}
                $variant="secondary"
              >
                {accordion?.secondaryCta}
              </Button>
            </S.AccordionActions>
          </S.AccordionPanel>
        </S.AccordionSection>
      </S.Container>
    </S.SectionWrapper>
  );
};

export default GetStarted;
