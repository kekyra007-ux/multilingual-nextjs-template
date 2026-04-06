import React from "react";
import {
  Wrapper,
  Header,
  Title,
  MoreButton,
  GamesRow,
  GameCard,
  GameImage,
  GameTitle,
  FireIcon,
  CategoriesBar,
  CategoryItem,
  ArticleSection,
  ArticleContainer,
  ArticleTitle,
  ArticleParagraph,
  ArticleHighlight,
} from "./FeaturedItems.styled";
import Button from "../UI/Button";
import Link from "../Link";

import { tArray } from "@/utils/i18nSafe";

export const FeaturedItems = ({ t }) => {
  const items = [
    {
      title: t("featuredItems.items.0.title"),
      tag: t("featuredItems.items.0.tag"),
      description: t("featuredItems.items.0.description"),
    },
    {
      title: t("featuredItems.items.1.title"),
      tag: t("featuredItems.items.1.tag"),
      description: t("featuredItems.items.1.description"),
    },
    {
      title: t("featuredItems.items.2.title"),
      tag: t("featuredItems.items.2.tag"),
      description: t("featuredItems.items.2.description"),
    },
    {
      title: t("featuredItems.items.3.title"),
      tag: t("featuredItems.items.3.tag"),
      description: t("featuredItems.items.3.description"),
    },
    {
      title: t("featuredItems.items.4.title"),
      tag: t("featuredItems.items.4.tag"),
      description: t("featuredItems.items.4.description"),
    },
    {
      title: t("featuredItems.items.5.title"),
      tag: t("featuredItems.items.5.tag"),
      description: t("featuredItems.items.5.description"),
    },
  ];

  return (
    <Wrapper>
      <Header>
        <Title>{t("featuredItems.sectionTitle")}</Title>
        <p>{t("featuredItems.sectionSubtitle")}</p>
      </Header>

      <ArticleSection>
        <ArticleContainer>
          <ArticleTitle>{t("featuredItems.articleTitle")}</ArticleTitle>
          <ArticleParagraph>
            {t("featuredItems.articleText")}
          </ArticleParagraph>
        </ArticleContainer>
      </ArticleSection>

      <GamesRow>
        {items.map((item, idx) => (
          <GameCard key={idx}>
            <GameImage src="/icons/app.svg" alt={item.title} />
            <GameTitle>{item.title}</GameTitle>
            <FireIcon>🔥</FireIcon>
            <p>{item.tag}</p>
            <p>{item.description}</p>
          </GameCard>
        ))}
      </GamesRow>
    </Wrapper>
  );
};
