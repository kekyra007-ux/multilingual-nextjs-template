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
} from "./HotGamesPreview.styled";
import Button from "../UI/Button";
import Link from "../Link";

import { tArray } from "@/utils/i18nSafe";

export const HotGamesPreview = ({ t }) => {
  const games = tArray(t, "hotGamesPreview.games");

  return (
    <Wrapper>
      {/* Article Block — Welcome Promo Text */}
      <ArticleSection>
        <ArticleContainer>
          <ArticleTitle>{t("hotGamesPreview.article.title")}</ArticleTitle>

          <ArticleParagraph>{t("hotGamesPreview.article.p1")}</ArticleParagraph>

          <ArticleParagraph>{t("hotGamesPreview.article.p2")}</ArticleParagraph>

          <ArticleHighlight>
            {t("hotGamesPreview.article.highlight")}
          </ArticleHighlight>

          <ArticleParagraph>{t("hotGamesPreview.article.p3")}</ArticleParagraph>

          <ArticleParagraph>{t("hotGamesPreview.article.p4")}</ArticleParagraph>

          <Link href="/slots" passHref>
            <Button as="a">{t("hotGamesPreview.article.cta")}</Button>
          </Link>
        </ArticleContainer>
      </ArticleSection>
    </Wrapper>
  );
};
