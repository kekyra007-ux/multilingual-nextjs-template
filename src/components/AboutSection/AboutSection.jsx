import React from "react";
import { useTranslation } from "next-i18next";
import {
  SectionWrapper,
  Content,
  ImageWrapper,
  TextBlock,
  Paragraph,
  ExtendedBlock,
  Container,
  Heading,
  TextBlock2,
} from "./AboutSection.styled";
import Button from "../UI/Button";
import Link from "../Link";

export const AboutSection = () => {
  const { t } = useTranslation("common");

  return (
    <SectionWrapper>
      <Container>
        {/* Первый блок */}
        <Content>
          {/* <ImageWrapper>
            <img src="/about1.png" loading="lazy" alt="Play Jaguar" />
          </ImageWrapper> */}
          <TextBlock2>
            <Heading>{t("home.about.title")}</Heading>
            <Paragraph>{t("home.about.text")}</Paragraph>

            <ul style={{ marginTop: "2rem" }}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num}>{t(`home.about.feature${num}`)}</li>
              ))}
            </ul>
          </TextBlock2>
        </Content>

        <ExtendedBlock>
          {[...Array(8)].map((_, i) => {
            const key =
              i === 0
                ? "home.about.extraParagraph"
                : `home.about.extraParagraph${i + 1}`;
            return (
              <Paragraph key={i} style={{ marginBottom: "1.5rem" }}>
                {t(key)}
              </Paragraph>
            );
          })}

          <Link href="/casino" passHref>
            <Button as="a">{t("home.about.extraButton")}</Button>{" "}
          </Link>
        </ExtendedBlock>

        {/* Второй блок */}
        <Content>
          <TextBlock2>
            <Heading>{t("home.about.extra2.title")}</Heading>
            <Paragraph>{t("home.about.extra2.text")}</Paragraph>
          </TextBlock2>
        </Content>
      </Container>
    </SectionWrapper>
  );
};
