import styled from "styled-components";
import { colors, gradients } from "@/styles/theme";

export const SectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 96px 0;
  background:
    radial-gradient(
      circle at top left,
      rgba(245, 200, 76, 0.12),
      transparent 28%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(200, 75, 255, 0.16),
      transparent 30%
    ),
    ${gradients.dark};

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  @media (max-width: 576px) {
    padding: 64px 0;
  }
`;

export const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.14;
  background-image:
    linear-gradient(rgba(246, 240, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(246, 240, 255, 0.08) 1px, transparent 1px);
  background-size: 36px 36px;
`;

export const GlowTopLeft = styled.div`
  position: absolute;
  top: -120px;
  left: -100px;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(245, 200, 76, 0.22) 0%,
    transparent 72%
  );
  filter: blur(10px);
  pointer-events: none;
`;

export const GlowBottomRight = styled.div`
  position: absolute;
  right: -120px;
  bottom: -120px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(200, 75, 255, 0.2) 0%,
    transparent 72%
  );
  filter: blur(18px);
  pointer-events: none;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 1200px);
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 576px) {
    padding: 0 16px;
  }
`;

export const TopBadge = styled.div`
  width: fit-content;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 18px;
  border: 1px solid rgba(246, 240, 255, 0.16);
  border-radius: 999px;
  background: rgba(22, 6, 43, 0.55);
  box-shadow: 0 10px 30px rgba(8, 3, 18, 0.24);
  color: ${colors.lightText};
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  backdrop-filter: blur(12px);
`;

export const Dot = styled.span`
  color: ${colors.primary};
  opacity: 0.9;
`;

export const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 40px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 14px;
  font-size: clamp(2rem, 4vw, 3.2rem);
  line-height: 1.05;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: ${colors.lightText};
  background: ${gradients.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  color: ${colors.textDim};
  font-size: 1.03rem;
  line-height: 1.75;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  margin-bottom: 26px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const cardBase = `
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(246, 240, 255, 0.09);
  background:
    linear-gradient(180deg, rgba(246, 240, 255, 0.04) 0%, rgba(246, 240, 255, 0.01) 100%),
    ${gradients.card};
  box-shadow:
    0 16px 40px rgba(8, 3, 18, 0.34),
    inset 0 1px 0 rgba(246, 240, 255, 0.04);
`;

export const PlanCard = styled.article`
  ${cardBase}
  min-height: 100%;
  padding: 24px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: ${({ $featured }) =>
      $featured
        ? "linear-gradient(180deg, rgba(245, 200, 76, 0.12) 0%, transparent 42%)"
        : "linear-gradient(180deg, rgba(200, 75, 255, 0.08) 0%, transparent 40%)"};
  }

  @media (max-width: 576px) {
    padding: 20px;
    border-radius: 24px;
  }
`;

export const PlanTier = styled.div`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  margin-bottom: 18px;
  padding: 8px 14px;
  border-radius: 999px;
  color: ${colors.dark};
  font-size: 0.74rem;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background: ${gradients.jackpot};
  box-shadow: 0 8px 18px rgba(245, 200, 76, 0.2);
`;

export const PlanValue = styled.div`
  position: relative;
  z-index: 1;
  margin-bottom: 8px;
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  background: ${gradients.jackpot};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const PlanTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0 0 10px;
  color: ${colors.lightText};
  font-size: 1.35rem;
  font-weight: 800;
`;

export const PlanDescription = styled.p`
  position: relative;
  z-index: 1;
  margin: 0 0 18px;
  color: ${colors.textDim};
  line-height: 1.75;
  font-size: 0.98rem;
`;

export const FeaturesList = styled.ul`
  position: relative;
  z-index: 1;
  margin: 0 0 22px;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
`;

export const FeatureItem = styled.li`
  position: relative;
  padding-left: 22px;
  color: ${colors.lightText};
  line-height: 1.55;
  font-size: 0.96rem;

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 0;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${gradients.jackpot};
    box-shadow: 0 0 12px rgba(245, 200, 76, 0.45);
  }
`;

export const Actions = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;

  & > * {
    min-width: 132px;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

export const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: 1.55fr 1fr;
  gap: 20px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.article`
  ${cardBase}
  padding: 28px;

  @media (max-width: 576px) {
    padding: 22px 20px;
  }
`;

export const PromoCard = styled.article`
  ${cardBase}
  padding: 28px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(245, 200, 76, 0.08) 0%,
      transparent 45%
    );
    pointer-events: none;
  }

  @media (max-width: 576px) {
    padding: 22px 20px;
  }
`;

export const InfoTitle = styled.h3`
  position: relative;
  z-index: 1;
  margin: 0 0 12px;
  color: ${colors.lightText};
  font-size: clamp(1.45rem, 2vw, 2rem);
  font-weight: 800;
  line-height: 1.2;
`;

export const InfoText = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: ${colors.textDim};
  font-size: 1rem;
  line-height: 1.8;
`;

export const TagList = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
`;

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 46px;
  padding: 10px 16px;
  border-radius: 16px;
  border: 1px solid rgba(246, 240, 255, 0.14);
  background: rgba(246, 240, 255, 0.04);
  color: ${colors.lightText};
  font-size: 0.9rem;
  font-weight: 700;
  box-shadow: inset 0 1px 0 rgba(246, 240, 255, 0.05);
`;

export const PromoTitle = styled(InfoTitle)`
  margin-bottom: 10px;
`;

export const PromoText = styled(InfoText)`
  margin-bottom: 20px;
`;

export const StatsRow = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatBox = styled.div`
  min-height: 112px;
  padding: 18px 16px;
  border-radius: 20px;
  border: 1px solid rgba(245, 200, 76, 0.18);
  background:
    linear-gradient(
      180deg,
      rgba(245, 200, 76, 0.06) 0%,
      rgba(246, 240, 255, 0.02) 100%
    ),
    rgba(22, 6, 43, 0.52);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow:
    inset 0 1px 0 rgba(246, 240, 255, 0.05),
    0 8px 22px rgba(8, 3, 18, 0.18);

  @media (max-width: 576px) {
    min-height: 92px;
  }
`;

export const StatValue = styled.div`
  margin-bottom: 6px;
  color: ${colors.lightText};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1;
  font-weight: 900;
`;

export const StatLabel = styled.div`
  color: ${colors.textDim};
  font-size: 0.7rem;
  line-height: 1.4;
  font-weight: 600;
`;
