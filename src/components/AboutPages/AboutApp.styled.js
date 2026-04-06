import styled from "styled-components";

export const AboutWrapper = styled.section`
  min-height: 100vh;

  padding: 80px 0;
`;

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// ========== HERO SECTION ==========
export const HeroSection = styled.div`
  text-align: center;
  // background: ${({ theme }) => theme.gradients.primary};
  border-radius: 24px;
  margin-bottom: 22px;

  // border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroTitle = styled.h2`
  font-size: 40px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.light};
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.43);

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors?.light || "rgba(234,247,247,0.72)"};
  line-height: 1.6;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export const HeroBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

export const Badge = styled.span`
  padding: 8px 16px;
  background: ${({ theme }) => theme.gradients?.primary};
  color: ${({ theme }) => theme.colors?.dark || "#062120"};
  border-radius: 50px;
  font-family: ${({ theme }) => theme.font.family.code};

  font-size: 16px;
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.colors?.glow};

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

// ========== CONTENT SECTION ==========
export const ContentSection = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.light || "#eaf7f7"};
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const SectionText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.light || "rgba(234,247,247,0.72)"};
  line-height: 1.8;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

// ========== FEATURES GRID ==========
export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-bottom: 60px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) => theme.gradients?.card};
  border: 1px solid
    ${({ theme }) => theme.colors?.borderTeal || "rgba(255,255,255,0.08)"};
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.colors?.glow};
    border-color: ${({ theme }) => theme.colors?.primary};
    background: ${({ theme }) =>
      theme.gradients?.cardHover ||
      "linear-gradient(135deg, rgba(27,212,195,0.12) 0%, rgba(255,210,74,0.10) 100%)"};
  }
`;

export const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;

  @media (max-width: 380px) {
    font-size: 21px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors?.light || "#eaf7f7"};
  margin-bottom: 12px;
  @media (max-width: 380px) {
    font-size: 18px;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.light || "rgba(234,247,247,0.72)"};
  line-height: 1.6;
  @media (max-width: 380px) {
    font-size: 13px;
  }
`;

// ========== STATS SECTION ==========
export const StatsSection = styled.div`
  margin-bottom: 60px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StatCard = styled.div`
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors?.backgroundSecondary};
  border: 1px solid
    ${({ theme }) => theme.colors?.borderTeal || "rgba(255,255,255,0.08)"};
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.colors?.glow};
    border-color: ${({ theme }) => theme.colors?.primary || "#1bd4c3"};
  }
`;

export const StatValue = styled.div`
  font-family: ${({ theme }) => theme.font.family.code};

  font-size: 21px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.accentSecondary};
  margin-bottom: 8px;
  text-shadow:
    1px 1px 0px ${({ theme }) => theme.colors?.secondary},
    0 2px 10px rgba(0, 0, 0, 0.13);

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.light || "rgba(234,247,247,0.72)"};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

// ========== HIGHLIGHTS SECTION ==========
export const HighlightsSection = styled.div`
  margin-bottom: 60px;
  background: ${({ theme }) => theme.colors?.backgroundSecondary};
  border: 1px solid ${({ theme }) => theme.colors?.primary};
  border-radius: 20px;
  padding: 40px 32px;

  @media (max-width: 480px) {
    padding: 28px 20px;
    border-radius: 16px;
  }

  @media (max-width: 360px) {
    padding: 22px 16px;
  }
`;

export const HighlightsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 360px) {
    gap: 14px;
  }
`;

export const HighlightItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.colors?.backgroundSecondary};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.gradients?.cardHover ||
      "linear-gradient(135deg, rgba(27,212,195,0.12) 0%, rgba(255,210,74,0.10) 100%)"};
  }

  @media (max-width: 480px) {
    padding: 14px;
    gap: 12px;
  }

  @media (max-width: 360px) {
    padding: 12px;
    gap: 10px;
    border-radius: 10px;
  }
`;

export const HighlightIcon = styled.div`
  font-size: 24px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const HighlightText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.text || "#eaf7f7"};
  line-height: 1.6;

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 1.5;
  }

  @media (max-width: 360px) {
    font-size: 13px;
    line-height: 1.45;
  }
`;
// ========== CTA SECTION ==========
export const CTASection = styled.div`
  background: ${({ theme }) => theme.gradients?.jackpot};
  border: 2px solid ${({ theme }) => theme.colors?.borderTeal};
  border-radius: 24px;
  padding: 60px 32px;
  text-align: center;
  box-shadow: ${({ theme }) =>
    theme.colors?.shadow || "0 18px 40px rgba(0,0,0,0.9)"};

  @media (max-width: 460px) {
    padding: 30px 20px;
  }
`;

export const CTAContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const CTATitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors?.dark || "#eaf7f7"};
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }

  @media (max-width: 460px) {
    font-size: 18px;
  }
`;

export const CTAText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.dark || "rgba(234,247,247,0.72)"};
  line-height: 1.6;
  font-weight: 600;

  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 21px;
  }

  @media (max-width: 460px) {
    font-size: 13px;
    line-height: 1.45;
  }
`;

export const CTAButton = styled.button`
  padding: 16px 48px;
  background: ${({ theme }) =>
    theme.gradients?.button ||
    "linear-gradient(135deg, #6df0e7 0%, #1bd4c3 50%, #12a7a0 100%)"};
  color: ${({ theme }) => theme.colors?.textDark || "#062120"};
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) =>
    theme.colors?.shadowGlow || "0 0 20px rgba(27,212,195,0.28)"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 30px rgba(27, 212, 195, 0.5);
  }
`;
