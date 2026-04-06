"use client";
import { useTranslation } from "react-i18next";
import {
  HeroWrapper,
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
  BadgesRow,
  Badge,
  TagsRow,
  Tag,
} from "./SharedHero.styled";
import { useEffect, useState } from "react";
import { FancyButton } from "../UI/FancyButton";

export const SharedHero = ({ page }) => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const hero = t(`hero.${page}`, { returnObjects: true });

  return (
    <HeroWrapper>
      <HeroContainer>
        {/* Badges */}
        {hero.badges && (
          <BadgesRow>
            {hero.badges.map((b, i) => (
              <Badge key={i}>{b}</Badge>
            ))}
          </BadgesRow>
        )}

        <HeroTitle>{hero.title}</HeroTitle>
        <HeroSubtitle>{hero.subtitle}</HeroSubtitle>

        {/* Tags */}
        {hero.tags && (
          <TagsRow>
            {hero.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </TagsRow>
        )}

        {hero.cta && (
          <HeroCta>
            <FancyButton
              as="a"
              href="https://masotery.com/f7GnQddN"
              target="_blank"
              rel="noopener noreferrer"
              content={hero.cta}
            >
              {hero.cta}
            </FancyButton>
          </HeroCta>
        )}
      </HeroContainer>
    </HeroWrapper>
  );
};
