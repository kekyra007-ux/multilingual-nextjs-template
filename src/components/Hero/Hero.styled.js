import styled from "styled-components";
// Update the import path below to match your project structure.
import { colors, gradients } from "@/styles/theme";

export const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 760px;
  padding: 118px 0 88px;
  background:
    radial-gradient(
      circle at 12% 24%,
      rgba(245, 200, 76, 0.18) 0%,
      transparent 24%
    ),
    radial-gradient(
      circle at 85% 22%,
      rgba(200, 75, 255, 0.14) 0%,
      transparent 22%
    ),
    radial-gradient(
      circle at 76% 70%,
      rgba(245, 200, 76, 0.08) 0%,
      transparent 20%
    ),
    linear-gradient(180deg, rgba(8, 3, 18, 0.28) 0%, rgba(8, 3, 18, 0.64) 100%),
    ${gradients.dark};

  @media (max-width: 1200px) {
    min-height: 700px;
    padding: 108px 0 82px;
  }

  @media (max-width: 992px) {
    min-height: auto;
    padding: 96px 0 76px;
  }

  @media (max-width: 576px) {
    padding: 84px 0 70px;
  }
`;

export const PatternOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 1;
  background-image:
    linear-gradient(rgba(246, 240, 255, 0.25) 1px, transparent 1px),
    linear-gradient(90deg, rgba(246, 240, 255, 0.24) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.55));
`;

export const BackgroundGlowLeft = styled.div`
  position: absolute;
  left: -180px;
  top: 110px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle,
    rgba(245, 200, 76, 0.57) 0%,
    rgba(245, 200, 76, 0.08) 34%,
    transparent 70%
  );
  filter: blur(18px);
`;

export const BackgroundGlowRight = styled.div`
  position: absolute;
  right: -150px;
  top: 40px;
  width: 760px;
  height: 760px;
  border-radius: 50%;
  pointer-events: none;
  background: radial-gradient(
    circle,
    rgba(185, 150, 238, 0.4) 0%,
    rgba(200, 75, 255, 0.08) 34%,
    transparent 72%
  );
  filter: blur(10px);
`;

export const CoinGlowTop = styled.div`
  position: absolute;
  right: 10%;
  top: 84px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 1px solid rgba(245, 200, 76, 0.4);
  background: radial-gradient(
    circle at 35% 35%,
    rgba(246, 240, 255, 0.28) 0%,
    rgba(245, 200, 76, 0.39) 26%,
    transparent 70%
  );
  box-shadow: 0 0 40px rgba(245, 200, 76, 0.29);
  opacity: 0.55;
  pointer-events: none;

  @media (max-width: 992px) {
    width: 130px;
    height: 130px;
    right: 4%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CoinGlowBottom = styled.div`
  position: absolute;
  right: -10px;
  bottom: 82px;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 1px solid rgba(245, 200, 76, 0.08);
  background: radial-gradient(
    circle at 40% 40%,
    rgba(245, 200, 76, 0.34) 0%,
    rgba(201, 75, 255, 0.33) 32%,
    transparent 72%
  );
  opacity: 0.44;
  pointer-events: none;

  @media (max-width: 992px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 1240px);
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 576px) {
    padding: 0 16px;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.75fr);
  align-items: center;
  gap: 42px;

  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.7fr);
    gap: 28px;
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 34px;
  }
`;

export const Left = styled.div`
  max-width: 760px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 992px) {
    justify-content: flex-start;
  }
`;

export const BrandRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
`;

export const BrandLine = styled.span`
  width: 38px;
  height: 2px;
  border-radius: 999px;
  background: ${colors.primary};
  box-shadow: 0 0 12px rgba(245, 200, 76, 0.4);
`;

export const BrandText = styled.span`
  color: ${colors.lightText};
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0 0 18px;
  max-width: 760px;
  color: ${colors.lightText};
  font-size: clamp(2.6rem, 6vw, 3.25rem);
  line-height: 0.96;
  font-weight: 900;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  text-wrap: balance;
  text-shadow: 0 8px 32px rgba(8, 3, 18, 0.35);

  span {
    background: ${gradients.goldText};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 620px;
  color: ${colors.textDim};
  font-size: 1.08rem;
  line-height: 1.8;
`;

export const PillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
`;

export const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 10px 16px;
  border-radius: 999px;
  border: 1px solid rgba(246, 240, 255, 0.08);
  background: linear-gradient(
    180deg,
    rgba(246, 240, 255, 0.04) 0%,
    rgba(246, 240, 255, 0.02) 100%
  );
  box-shadow: inset 0 1px 0 rgba(246, 240, 255, 0.04);
  color: ${colors.lightText};
  font-size: 0.92rem;
  font-weight: 700;
  white-space: nowrap;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;

  @media (max-width: 576px) {
    gap: 12px;
  }
`;

export const TertiaryLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 0 22px;
  border-radius: 999px;
  border: 1px solid rgba(246, 240, 255, 0.08);
  background: rgba(246, 240, 255, 0.03);
  color: ${colors.lightText};
  text-decoration: none;
  font-weight: 800;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    border-color: rgba(245, 200, 76, 0.26);
    background: rgba(246, 240, 255, 0.05);
  }

  @media (max-width: 576px) {
    min-height: 52px;
    width: 100%;
  }
`;

export const QuickStatsRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
  padding: 12px 16px;
  width: fit-content;
  border-radius: 16px;
  border: 1px solid rgba(246, 240, 255, 0.08);
  background: rgba(246, 240, 255, 0.03);

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

export const QuickStat = styled.span`
  color: ${colors.lightText};
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.02em;
`;

export const Separator = styled.span`
  color: ${colors.primary};
  font-size: 0.95rem;
  opacity: 0.85;
`;

export const PanelCard = styled.div`
  width: min(100%, 435px);
  padding: 18px;
  border-radius: 28px;
  border: 1px solid rgba(246, 240, 255, 0.08);
  background:
    linear-gradient(
      180deg,
      rgba(246, 240, 255, 0.04) 0%,
      rgba(246, 240, 255, 0.01) 100%
    ),
    ${gradients.card};
  box-shadow:
    0 20px 44px rgba(8, 3, 18, 0.38),
    inset 0 1px 0 rgba(246, 240, 255, 0.05);

  @media (max-width: 992px) {
    width: min(100%, 560px);
  }

  @media (max-width: 576px) {
    padding: 14px;
    border-radius: 22px;
  }
`;

export const PanelRow = styled.div`
  display: grid;
  grid-template-columns: 106px 1fr;
  align-items: center;
  gap: 16px;
  padding: 18px 16px;
  border-radius: 18px;
  border: 1px solid rgba(246, 240, 255, 0.05);
  background: linear-gradient(
    180deg,
    rgba(246, 240, 255, 0.03) 0%,
    rgba(246, 240, 255, 0.01) 100%
  );

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 90px 1fr;
    gap: 12px;
    padding: 16px 14px;
  }
`;

export const PanelLabel = styled.span`
  color: ${colors.primary};
  font-size: 0.92rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

export const PanelValue = styled.span`
  color: ${colors.lightText};
  font-size: 1.16rem;
  line-height: 1.35;
  font-weight: 800;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const Ticker = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  overflow: hidden;
  min-height: 52px;
  padding: 0 20px;
  box-sizing: border-box;
  border-top: 1px solid rgba(245, 200, 76, 0.18);
  background: linear-gradient(
    180deg,
    rgba(22, 6, 43, 0.92) 0%,
    rgba(8, 3, 18, 0.96) 100%
  );

  @media (max-width: 768px) {
    position: relative;
    margin-top: 42px;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TickerTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: max-content;
  min-width: max-content;
  margin: 0 auto;
  flex-wrap: nowrap;
`;

export const TickerItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 52px;
  padding: 0 30px;
  color: ${colors.primary};
  font-size: 1rem;
  font-weight: 800;
  white-space: nowrap;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 20px;
    background: rgba(245, 200, 76, 0.22);
  }

  @media (max-width: 576px) {
    padding: 0 18px;
    font-size: 0.92rem;
  }
`;
