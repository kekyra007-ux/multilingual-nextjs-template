import styled from "styled-components";

export const BettingWrapper = styled.div`
  width: 100%;

  padding: 60px 0;
`;

export const BettingContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

// Hero Section
export const HeroSection = styled.section`
  background: ${({ theme }) =>
    theme.gradients?.card ||
    "linear-gradient(135deg, rgba(64, 40, 20, 0.9) 0%, rgba(26, 15, 8, 0.95) 100%)"};
  border: 2px solid ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors?.light};
  text-transform: uppercase;

  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors?.light || "#C0A98C"};
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Stats Grid
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
`;

export const StatCard = styled.div`
  background: ${({ theme }) =>
    theme.gradients?.card ||
    "linear-gradient(135deg, rgba(64, 40, 20, 0.9) 0%, rgba(26, 15, 8, 0.95) 100%)"};
  border: 1px solid ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors?.primary || "#D6A24E"};
    box-shadow: 0 8px 24px
      ${({ theme }) => theme.colors?.glow || "rgba(255, 191, 0, 0.35)"};
  }
`;

export const StatValue = styled.div`
  font-family: ${({ theme }) => theme.font.family.code};

  font-size: 24px;
  font-weight: 900;
  background: ${({ theme }) =>
    theme.gradients?.jackpot ||
    "linear-gradient(135deg, #ff9d00ff 0%, #c77f15ff 100%)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const StatLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.light || "#C0A98C"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// Live Matches Section
export const LiveMatchesSection = styled.section`
  margin-bottom: 60px;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.light || "#FFF8E1"};
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const MatchesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const MatchCard = styled.div`
  background: ${({ theme }) =>
    theme.gradients?.card ||
    "linear-gradient(135deg, rgba(64, 40, 20, 0.9) 0%, rgba(26, 15, 8, 0.95) 100%)"};
  border: 1px solid ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};
  border-radius: 16px;
  padding: 24px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary || "#D6A24E"};
    box-shadow: 0 8px 24px
      ${({ theme }) => theme.colors?.glow || "rgba(255, 191, 0, 0.35)"};
  }
`;

export const MatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const MatchLeague = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.accent || "#F2C94C"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const MatchTime = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors?.danger || "#E57373"};
  font-weight: 600;
`;

export const MatchTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 16px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const TeamLogo = styled.div`
  font-size: 40px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

export const TeamName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors?.light || "#FFF8E1"};
  text-align: center;
`;

export const VS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  span {
    font-size: 24px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors?.accent || "#D6A24E"};
  }

  small {
    font-size: 10px;
    color: ${({ theme }) => theme.colors?.light || "#C0A98C"};
    font-weight: 600;
  }
`;

export const MatchOdds = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 20px;
`;

export const OddButton = styled.button`
  background: rgba(214, 162, 78, 0.1);
  border: 1px solid ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.gradients?.primary ||
      "linear-gradient(135deg, #ff9d00ff 0%, #c77f15ff 100%)"};
    border-color: ${({ theme }) => theme.colors?.primary || "#D6A24E"};
    transform: translateY(-2px);
  }
`;

export const OddLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors?.muted || "#C0A98C"};
  font-weight: 600;
`;

export const OddValue = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors?.light || "#FFF8E1"};
`;

// Popular Bets Section
export const PopularBetsSection = styled.section`
  margin-bottom: 60px;
`;

export const BetTabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors?.primary || "#D6A24E"};
    border-radius: 4px;
  }
`;

export const BetTab = styled.button`
  background: ${({ $active, theme }) =>
    $active
      ? theme.gradients?.jackpot ||
        "linear-gradient(135deg, #ff9d00ff 0%, #c77f15ff 100%)"
      : "rgba(214, 162, 78, 0.1)"};
  border: 1px solid
    ${({ $active, theme }) =>
      $active
        ? theme.colors?.primary || "#D6A24E"
        : theme.colors?.borderTeal || "#5C402C"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors?.dark : theme.colors?.light || "#FFF8E1"};
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    box-shadow: 0 4px 12px
      ${({ theme }) => theme.colors?.glow || "rgba(255, 191, 0, 0.35)"};
  }
`;

export const BetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BetCard = styled.div`
  background: ${({ theme }) =>
    theme.gradients?.card ||
    "linear-gradient(135deg, rgba(64, 40, 20, 0.9) 0%, rgba(26, 15, 8, 0.95) 100%)"};
  border: 1px solid ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary || "#D6A24E"};
    transform: translateY(-5px);
    box-shadow: 0 8px 24px
      ${({ theme }) => theme.colors?.glow || "rgba(255, 191, 0, 0.35)"};
  }
`;

export const BetIcon = styled.div`
  font-size: 36px;
  margin-bottom: 12px;
`;

export const BetTitle = styled.h3`
  font-size: 18px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.accentSecondary || "#FFF8E1"};
  margin-bottom: 8px;
`;

export const BetDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.light || "#C0A98C"};
  margin-bottom: 16px;
  line-height: 1.5;
`;

export const BetOdd = styled.div`
  display: inline-block;
  background: ${({ theme }) =>
    theme.gradients?.primary ||
    "linear-gradient(135deg, #ff9d00ff 0%, #c77f15ff 100%)"};
  color: ${({ theme }) => theme.colors?.dark};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 900;
`;

// Features Section
export const FeaturesSection = styled.section`
  margin-bottom: 60px;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  background: ${({ theme }) =>
    theme.gradients?.card ||
    "linear-gradient(135deg, rgba(64, 40, 20, 0.9) 0%, rgba(26, 15, 8, 0.95) 100%)"};
  border: 1px solid ${({ theme }) => theme.colors?.borderTeal || "#5C402C"};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors?.primary || "#D6A24E"};
    transform: translateY(-5px);
    box-shadow: 0 8px 24px
      ${({ theme }) => theme.colors?.glow || "rgba(255, 191, 0, 0.35)"};
  }
`;

export const FeatureIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

export const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors?.primary || "#FFF8E1"};
  margin-bottom: 12px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const FeatureText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.light || "#C0A98C"};
  line-height: 1.6;
`;

// Info Banner
export const InfoBanner = styled.div`
  background: ${({ theme }) =>
    theme.gradients?.jackpot ||
    "linear-gradient(135deg, #ff9d00ff 0%, #c77f15ff 100%)"};
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 70%
    );
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const BannerTitle = styled.h2`
  font-size: 48px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors?.dark};
  margin-bottom: 16px;
  text-shadow:
    1px 2px 0px ${({ theme }) => theme.colors?.accent},
    3px 3px 4px ${({ theme }) => theme.colors?.secondary};
  @media (max-width: 768px) {
    font-size: 28px;
    text-shadow:
      1px 1px 0px ${({ theme }) => theme.colors?.accent},
      2px 2px 4px ${({ theme }) => theme.colors?.secondary};
  }

  @media (max-width: 480px) {
    font-size: 21px;
  }
`;

export const BannerText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors?.dark};
  margin-bottom: 32px;
  font-weight: 600;

  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BannerButton = styled.button`
  background: ${({ theme }) => theme.colors?.dark || "#1A1006"};
  color: ${({ theme }) => theme.colors?.accent || "#F2C94C"};
  border: none;
  padding: 16px 48px;
  border-radius: ${({ theme }) => theme.radii.md};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
  }
`;

export const DeepGuideSection = styled.section`
  margin-bottom: 60px;

  width: 100%;
  padding: 80px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.muted};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPink};
  position: relative;
  overflow: hidden;

  /* subtle golden glow */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) =>
      `radial-gradient(circle at 50% 0%, ${theme.colors.glow} 0%, transparent 70%)`};
    opacity: 0.35;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    padding: 45px 0;
  }
`;

export const DeepGuideContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding: 0 26px;
  position: relative;
  z-index: 3;

  @media (max-width: 480px) {
    padding: 0 18px;
  }
`;

export const DeepGuideTitle = styled.h2`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 12px;
  letter-spacing: 0.5px;

  background: ${({ theme }) => theme.gradients.goldText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  filter: drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.secondary})
    drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.background})
    drop-shadow(0px 6px 3px rgba(31, 4, 58, 0.24))
    drop-shadow(2px 2px 0px #29144971) drop-shadow(-2px 2px 0px rgb(54, 43, 38));
  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const DeepGuideParagraph = styled.p`
  font-size: 20px;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: 26px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    line-height: 1.65;
  }
`;

export const DeepGuideList = styled.ul`
  margin: 0 0 40px 0;
  padding: 0;
  list-style: none;

  li {
    position: relative;
    padding-left: 42px;
    margin-bottom: 18px;

    font-size: 19px;
    line-height: 1.75;
    color: ${({ theme }) => theme.colors.lightText};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.35);

    /* Decorative bullet */
    &::before {
      content: "◆";
      position: absolute;
      left: 0;
      top: 4px;

      font-size: 20px;
      font-weight: 700;

      color: ${({ theme }) => theme.colors.accentSecondary};

      filter: drop-shadow(0 0 4px rgba(255, 208, 80, 0.45));
    }

    /* Hover shine */
    &:hover::before {
      filter: drop-shadow(0 0 8px rgba(255, 215, 90, 0.8));
      transition: 0.25s ease;
    }

    @media (max-width: 768px) {
      font-size: 17px;
      padding-left: 34px;
      margin-bottom: 14px;

      &::before {
        font-size: 18px;
        top: 3px;
      }
    }

    @media (max-width: 480px) {
      font-size: 15.5px;
      padding-left: 30px;
      margin-bottom: 12px;

      &::before {
        font-size: 16px;
        top: 2px;
      }
    }
  }
`;
