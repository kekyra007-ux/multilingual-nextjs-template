import styled from "styled-components";

export const SlotsWrapper = styled.div`
  width: 100%;

  padding: 60px 0;
`;

export const SlotsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;
export const SectionHeader = styled.div`
  text-align: center;
  margin: 34px auto 18px;
  max-width: 900px;
  padding: 0 10px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 26px;
  line-height: 1.15;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.colors?.lightText};
  background: ${({ theme }) => theme.gradients?.title};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;

  @media (max-width: 520px) {
    font-size: 22px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;
export const LongArticleSection = styled.section`
  padding: 44px 0 10px;
`;

export const LongArticleInner = styled.div`
  background: ${({ theme }) => theme.gradients?.card};
  border: 1px solid ${({ theme }) => theme.colors?.muted};
  border-radius: 22px;
  box-shadow: 0 14px 40px ${({ theme }) => theme.colors?.overlay};
  overflow: hidden;
`;

export const LongArticleHeader = styled.div`
  padding: 26px 26px 18px;
  background: ${({ theme }) => theme.gradients?.overlay};
  border-bottom: 1px solid ${({ theme }) => theme.colors?.muted};

  @media (max-width: 520px) {
    padding: 18px 16px 14px;
  }
`;

export const LongArticleTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 32px;
  text-transform: uppercase;

  line-height: 1.15;
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.colors?.lightText};
  background: ${({ theme }) => theme.gradients?.title};
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 520px) {
    font-size: 22px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const LongArticleSubtitle = styled.p`
  margin: 0;
  max-width: 980px;
  font-size: 14px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors?.textDim};

  @media (max-width: 360px) {
    font-size: 13px;
    line-height: 1.65;
  }
`;

export const LongArticleGrid = styled.div`
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 0;
  min-height: 420px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const LongArticleAside = styled.aside`
  padding: 18px;
  border-right: 1px solid ${({ theme }) => theme.colors?.muted};
  background: ${({ theme }) => theme.colors?.backgroundSecondary};
  position: sticky;
  top: 18px;
  align-self: start;

  @media (max-width: 980px) {
    position: relative;
    top: auto;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors?.muted};
  }

  @media (max-width: 520px) {
    padding: 14px;
  }
`;

export const LongArticleAsideTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 800;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors?.lightText};
`;

export const LongArticleTOC = styled.div`
  display: grid;
  gap: 10px;
`;

export const LongArticleTOCItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors?.text};
  border: 1px solid ${({ theme }) => theme.colors?.muted};
  background: ${({ theme }) => theme.gradients?.card};
  transition:
    transform 0.15s ease,
    border-color 0.15s ease;

  span {
    width: 22px;
    display: inline-flex;
    justify-content: center;
  }

  &:hover {
    transform: translateY(-1px);
    border-color: ${({ theme }) => theme.colors?.borderPink};
  }

  @media (max-width: 360px) {
    padding: 9px 10px;
    border-radius: 12px;
    font-size: 13px;
  }
`;

export const LongArticleMiniList = styled.div`
  margin-top: 14px;
  display: grid;
  gap: 10px;
`;

export const LongArticleMiniItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid ${({ theme }) => theme.colors?.muted};
  color: ${({ theme }) => theme.colors?.textDim};

  span {
    width: 22px;
    display: inline-flex;
    justify-content: center;
  }

  @media (max-width: 360px) {
    padding: 9px 10px;
    border-radius: 12px;
    font-size: 13px;
  }
`;

export const LongArticleBody = styled.div`
  padding: 22px 26px 26px;

  @media (max-width: 520px) {
    padding: 16px;
  }
`;

export const LongArticleBlock = styled.section`
  padding: 18px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.muted};

  &:last-child {
    border-bottom: none;
  }
`;

export const LongArticleH3 = styled.h3`
  margin: 0 0 10px;
  font-size: 18px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors?.lightText};

  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const LongArticleP = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors?.text};

  @media (max-width: 360px) {
    font-size: 13px;
    line-height: 1.75;
  }
`;

export const LongArticleList = styled.div`
  margin-top: 12px;
  display: grid;
  gap: 10px;
`;

export const LongArticleLi = styled.div`
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 10px;
  align-items: start;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors?.muted};
  background: ${({ theme }) => theme.gradients?.card};

  span {
    width: 22px;
    display: inline-flex;
    justify-content: center;
    margin-top: 2px;
  }

  @media (max-width: 360px) {
    padding: 10px;
    border-radius: 14px;
  }
`;

export const LongArticleLiTitle = styled.div`
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.lightText};
  margin-bottom: 2px;
`;

export const LongArticleLiText = styled.div`
  color: ${({ theme }) => theme.colors?.textDim};
  line-height: 1.65;
`;

export const LongArticleCallouts = styled.div`
  margin-top: 18px;
  display: grid;
  gap: 12px;
`;

export const LongArticleCallout = styled.div`
  padding: 14px 14px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors?.borderPink};
  background: ${({ theme }) => theme.gradients?.overlay};
  box-shadow: 0 10px 30px ${({ theme }) => theme.colors?.overlay};

  @media (max-width: 360px) {
    border-radius: 16px;
    padding: 12px;
  }
`;

export const LongArticleCalloutTop = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${({ theme }) => theme.colors?.lightText};

  span {
    width: 22px;
    display: inline-flex;
    justify-content: center;
  }

  strong {
    font-weight: 900;
    letter-spacing: 0.2px;
  }
`;

export const LongArticleCalloutText = styled.p`
  margin: 8px 0 0;
  color: ${({ theme }) => theme.colors?.text};
  line-height: 1.75;
`;

export const LongArticleCTA = styled.div`
  margin-top: 18px;
  padding: 16px;
  border-radius: 18px;
  border: 1px solid ${({ theme }) => theme.colors?.muted};
  background: ${({ theme }) => theme.colors?.backgroundSecondary};
`;

export const LongArticleCTATitle = styled.div`
  font-weight: 900;
  color: ${({ theme }) => theme.colors?.lightText};
  margin-bottom: 6px;
`;

export const LongArticleCTAText = styled.div`
  color: ${({ theme }) => theme.colors?.textDim};
  line-height: 1.7;
  margin-bottom: 12px;
`;

export const FAQSection = styled.section`
  margin-bottom: 80px;

  @media (max-width: 420px) {
    margin-bottom: 60px;
    padding: 0 12px;
  }
`;

export const FAQGrid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 400px) {
    gap: 12px;
  }
`;

export const FAQItem = styled.div`
  background: ${({ theme }) =>
    theme.gradients?.card ||
    "linear-gradient(135deg, rgba(64, 40, 20, 0.9) 0%, rgba(26, 15, 8, 0.95) 100%)"};
  border: 1px solid ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary || "#D6A24E"};
  }

  @media (max-width: 360px) {
    border-radius: 10px;
  }
`;

export const FAQQuestion = styled.div`
  padding: 24px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.light || "#FFF8E1"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  span {
    font-size: 26px;
    color: ${({ theme }) => theme.colors?.light || "#D6A24E"};
    transition: transform 0.3s ease;
    transform: ${({ $expanded }) =>
      $expanded ? "rotate(180deg)" : "rotate(0)"};
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 20px;
  }

  @media (max-width: 420px) {
    font-size: 15px;
    padding: 18px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    padding: 16px;
  }
`;

export const FAQAnswer = styled.div`
  padding: 0 24px 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.light || "#C0A98C"};
  line-height: 1.6;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 20px 20px;
  }

  @media (max-width: 420px) {
    font-size: 13px;
    padding: 0 18px 18px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
    line-height: 1.5;
    padding: 0 16px 16px;
  }
`;
