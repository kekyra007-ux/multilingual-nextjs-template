import styled from "styled-components";
import { colors, gradients } from "@/styles/theme";

export const SectionWrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: 96px 0;
  background:
    radial-gradient(
      circle at top left,
      rgba(245, 200, 76, 0.1),
      transparent 26%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(200, 75, 255, 0.16),
      transparent 32%
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
  opacity: 0.12;
  background-image:
    linear-gradient(rgba(246, 240, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(246, 240, 255, 0.07) 1px, transparent 1px);
  background-size: 38px 38px;
`;

export const BackgroundGlowTop = styled.div`
  position: absolute;
  top: -140px;
  left: -120px;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(245, 200, 76, 0.18) 0%,
    transparent 72%
  );
  filter: blur(16px);
  pointer-events: none;
`;

export const BackgroundGlowBottom = styled.div`
  position: absolute;
  right: -140px;
  bottom: -140px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(200, 75, 255, 0.18) 0%,
    transparent 72%
  );
  filter: blur(22px);
  pointer-events: none;
`;

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: min(100%, 1180px);
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 576px) {
    padding: 0 16px;
  }
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  margin-bottom: 22px;
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid rgba(245, 200, 76, 0.28);
  background: rgba(246, 240, 255, 0.03);
  color: ${colors.lightText};
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  box-shadow: inset 0 1px 0 rgba(246, 240, 255, 0.04);
`;

export const Header = styled.div`
  max-width: 980px;
  margin-bottom: 34px;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;
  margin-bottom: 18px;

  @media (max-width: 576px) {
    gap: 14px;
  }
`;

export const TitleAccent = styled.span`
  flex: 0 0 auto;
  width: 8px;
  height: 84px;
  border-radius: 999px;
  background: ${gradients.jackpot};
  box-shadow: 0 0 18px rgba(245, 200, 76, 0.35);

  @media (max-width: 768px) {
    height: 70px;
  }

  @media (max-width: 576px) {
    width: 6px;
    height: 58px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: ${colors.lightText};
  font-size: clamp(2rem, 4.6vw, 4rem);
  line-height: 1.03;
  font-weight: 900;
  letter-spacing: -0.04em;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: ${colors.textDim};
  font-size: 1.03rem;
  line-height: 1.9;
  max-width: 980px;
`;

const panelBase = `
  position: relative;
  overflow: hidden;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid rgba(245, 200, 76, 0.28);
  background:
    linear-gradient(180deg, rgba(246, 240, 255, 0.03) 0%, rgba(246, 240, 255, 0.01) 100%),
    ${gradients.card};
  box-shadow:
    0 18px 42px rgba(8, 3, 18, 0.34),
    inset 0 1px 0 rgba(246, 240, 255, 0.04);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(245, 200, 76, 0.06) 0%, transparent 36%);
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 24px;
  }
`;

export const Panel = styled.div`
  ${panelBase}
  margin-bottom: 34px;
`;

export const BadgesRow = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 18px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 54px;
  padding: 12px 16px;
  text-align: center;
  border-radius: 999px;
  border: 1px solid rgba(245, 200, 76, 0.32);
  background: rgba(246, 240, 255, 0.04);
  color: ${colors.lightText};
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.03em;
  box-shadow: inset 0 1px 0 rgba(246, 240, 255, 0.04);
`;

export const Table = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(246, 240, 255, 0.07);
  background: rgba(22, 6, 43, 0.3);
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.42fr 0.58fr;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(246, 240, 255, 0.06);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LabelCell = styled.div`
  padding: 22px 20px;
  color: ${colors.lightText};
  font-size: 1rem;
  font-weight: 800;
  border-right: 1px solid rgba(245, 200, 76, 0.26);
  background: linear-gradient(
    180deg,
    rgba(246, 240, 255, 0.04) 0%,
    rgba(246, 240, 255, 0.02) 100%
  );

  @media (max-width: 768px) {
    padding: 16px 16px 8px;
    border-right: none;
    border-bottom: 1px solid rgba(245, 200, 76, 0.16);
  }
`;

export const ValueCell = styled.div`
  padding: 22px 20px;
  color: ${colors.textDim};
  font-size: 1rem;
  line-height: 1.7;
  background: linear-gradient(
    180deg,
    rgba(56, 214, 255, 0.03) 0%,
    rgba(246, 240, 255, 0.01) 100%
  );

  @media (max-width: 768px) {
    padding: 12px 16px 16px;
  }
`;

export const ValueLink = styled.a`
  color: ${colors.lightText};
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 0.2s ease;

  &:hover {
    color: ${colors.primary};
  }
`;

export const Actions = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;

  & > * {
    min-width: 150px;
  }

  @media (max-width: 576px) {
    flex-direction: column;

    & > * {
      width: 100%;
    }
  }
`;

export const AccordionSection = styled.div`
  margin-top: 100px;
`;

export const AccordionBadge = styled(Badge)`
  margin-bottom: 22px;
`;

export const AccordionHeader = styled(Header)`
  margin-bottom: 28px;
`;

export const AccordionPanel = styled.div`
  ${panelBase}
  padding: 28px;

  @media (max-width: 768px) {
    padding: 18px 16px;
  }
`;

export const AccordionIntro = styled.p`
  position: relative;
  z-index: 1;
  margin: 0 0 20px;
  color: ${colors.textDim};
  font-size: 1.02rem;
  line-height: 1.8;
`;

export const AccordionList = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  gap: 14px;
`;

export const AccordionItem = styled.div`
  border-radius: 18px;
  border: 1px solid
    ${({ $open }) =>
      $open ? "rgba(245, 200, 76, 0.34)" : "rgba(245, 200, 76, 0.22)"};
  background: ${({ $open }) =>
    $open
      ? "linear-gradient(180deg, rgba(245, 200, 76, 0.08) 0%, rgba(246, 240, 255, 0.02) 100%)"
      : "linear-gradient(180deg, rgba(246, 240, 255, 0.03) 0%, rgba(246, 240, 255, 0.01) 100%)"};
  box-shadow: ${({ $open }) =>
    $open
      ? "0 12px 28px rgba(8, 3, 18, 0.24), inset 0 1px 0 rgba(246, 240, 255, 0.04)"
      : "inset 0 1px 0 rgba(246, 240, 255, 0.03)"};
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
`;

export const AccordionTrigger = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 20px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  text-align: left;

  @media (max-width: 576px) {
    gap: 12px;
    padding: 16px;
  }
`;

export const StepNumber = styled.span`
  flex: 0 0 auto;
  width: 34px;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${gradients.jackpot};
  color: ${colors.dark};
  font-size: 0.95rem;
  font-weight: 900;
  box-shadow: 0 0 14px rgba(245, 200, 76, 0.28);
`;

export const StepTitle = styled.span`
  flex: 1 1 auto;
  color: ${colors.lightText};
  font-size: 1.04rem;
  line-height: 1.4;
  font-weight: 800;
`;

export const StepIcon = styled.span`
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(245, 200, 76, 0.3);
  color: ${colors.primary};
  font-size: 1rem;
  font-weight: 700;
  transform: rotate(${({ $open }) => ($open ? "45deg" : "0deg")});
  transition: transform 0.2s ease;
`;

export const AccordionContent = styled.div`
  padding: 0 20px 18px 70px;

  @media (max-width: 576px) {
    padding: 0 16px 16px 62px;
  }
`;

export const AccordionText = styled.p`
  margin: 0;
  color: ${colors.textDim};
  line-height: 1.8;
  font-size: 0.98rem;
`;

export const AccordionActions = styled(Actions)`
  justify-content: center;
  margin-top: 22px;
`;
