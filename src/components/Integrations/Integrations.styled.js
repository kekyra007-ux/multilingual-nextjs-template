import styled from "styled-components";

export const PaymentsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  position: relative;
  overflow: hidden;
`;

export const PaymentsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  position: relative;
  z-index: 1;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  @media (max-width: 400px) {
    margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
    padding: 0 10px;
  }

  @media (max-width: 340px) {
    padding: 0 6px;
  }
`;
export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["3xl"]};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  background: ${({ theme }) => theme.gradients.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;

  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 500px) {
    font-size: 22px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }

  @media (max-width: 340px) {
    font-size: 18px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 1000px;
  margin: 0 auto;
  line-height: 1.55;
  padding: 0 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  @media (max-width: 500px) {
    font-size: 14px;
  }

  @media (max-width: 380px) {
    font-size: 13px;
  }

  @media (max-width: 340px) {
    font-size: 12px;
  }
`;

// ========== HERO SECTION ==========
export const HeroSection = styled.div`
  background: ${({ theme }) => theme.gradients.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing["3xl"]};
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: ${({ theme }) => theme.shadow["2xl"]};

  @media (max-width: 480px) {
    padding: 30px 10px;
  }
`;
export const HeroContent = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  @media (max-width: 360px) {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const HeroTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["2xl"]};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.15;
  filter: drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.secondary})
    drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.background})
    drop-shadow(0px 6px 3px rgba(31, 4, 58, 0.24))
    drop-shadow(1px 1px 0px ${({ theme }) => theme.colors.backgroundSecondary})
    drop-shadow(-2px 2px 0px ${({ theme }) => theme.colors.overlay});
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size["3xl"]};
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;
export const HeroText = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.colors.light};
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.55;
  padding: 0 10px;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  @media (max-width: 360px) {
    font-size: 13px;
  }
`;
export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 360px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.borderPink};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 420px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const StatIcon = styled.div`
  font-size: 38px;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 640px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const StatValue = styled.div`
  font-family: ${({ theme }) => theme.font.family.code};
  font-size: 21px;
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  background: ${({ theme }) => theme.gradients.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.gray};
`;

// ========== PAYMENT METHODS ==========
export const PaymentMethodsSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
`;

export const MethodsTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["2xl"]};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  text-transform: uppercase;

  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size["3xl"]};
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const MethodsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const MethodCard = styled.div`
  background: ${({ theme, $featured }) =>
    $featured ? theme.gradients.card : theme.gradients.card};
  border: 2px solid
    ${({ theme, $featured }) =>
      $featured ? theme.colors.primary : "rgba(255, 255, 255, 0.1)"};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 50px 30px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadow["2xl"]};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MethodIcon = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};

  filter: invert(1);

  &:hover {
    transform: scale(1.15);
  }
  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
  }
`;

export const MethodName = styled.h4`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;
`;

export const MethodBadge = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 19px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.font.family.code};

  @media (max-width: 640px) {
    font-size: 16px;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const MethodDetails = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.family.code};

  gap: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 640px) {
    padding: ${({ theme }) => theme.spacing.md};
    gap: 6px;
  }
`;

export const MethodDetailItem = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid rgba(248, 238, 218, 0.47);
  padding: 6px 0;
  line-height: 1.5;

  &:last-child {
    border-bottom: none;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  strong {
    text-align: right;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    color: ${({ theme }) => theme.colors.light};
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 4px;
    align-items: flex-start;
    padding: 8px 0;

    span {
      display: block;
      width: 100%;
      white-space: normal;
      word-break: normal;
      overflow-wrap: break-word;
      font-size: 0.95em;
      line-height: 1.4;
      text-align: left;
    }

    strong {
      display: block;
      width: 100%;
      text-align: left;
      white-space: normal;
      word-break: normal;
      overflow-wrap: break-word;
      font-size: 1em;
      line-height: 1.5;
    }
  }
`;
/* ==== ARTICLE SECTION ==== */

export const ArticleSection = styled.section`
  width: 100%;
  padding: 60px 0;
  background: ${({ theme }) => theme.gradients.background};
  border-top: 1px solid ${({ theme }) => theme.colors.borderGold};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderPurple};
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const ArticleContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ArticleTitle = styled.h2`
  font-size: 38px;
  font-weight: 900;
  text-transform: uppercase;

  margin-bottom: 26px;
  text-align: center;

  background: ${({ theme }) => theme.gradients.goldText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 480px) {
    font-size: 26px;
  }

  @media (max-width: 400px) {
    font-size: 21px;
  }
`;

export const ArticleParagraph = styled.p`
  font-size: 18px;
  line-height: 1.75;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};

  strong {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 16.5px;
  }

  @media (max-width: 420px) {
    font-size: 15.5px;
  }
`;

export const ArticleHighlight = styled.div`
  padding: 16px 20px;
  margin: 24px 0;
  border-radius: 14px;

  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  box-shadow: ${({ theme }) => theme.colors.shadowSoft};

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 14px 16px;
  }
`;

export const ArticleList = styled.ul`
  margin: 0 0 22px 0;
  padding-left: 0;
  list-style: none;

  li {
    padding: 12px 16px;
    margin-bottom: 12px;
    border-radius: 12px;

    background: ${({ theme }) => theme.gradients.cardHover};
    color: ${({ theme }) => theme.colors.lightText};

    font-size: 17px;
    font-weight: 600;
    line-height: 1.6;

    display: flex;
    gap: 12px;

    /* custom bullet */
    &::before {
      content: "✓";
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 900;
      font-size: 20px;
      margin-top: -1px;
    }

    @media (max-width: 768px) {
      font-size: 15.5px;
    }
  }
`;
// ========== PROCESS STEPS ==========
export const ProcessSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  @media (max-width: 400px) {
    margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  }
`;

export const ProcessTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["2xl"]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size["3xl"]};
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }

  @media (max-width: 330px) {
    font-size: 18px;
  }
`;

export const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ProcessStep = styled.div`
  background: ${({ theme }) => theme.gradients.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border: 1px solid rgba(255, 215, 0, 0.2);
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: flex-start;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadow.xl};
  }

  /* 📱 Mobile */
  @media (max-width: 500px) {
    padding: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.md};
  }

  /* 📱 Ultra-small — reduce padding and stack vertically if too tight */
  @media (max-width: 400px) {
    padding: ${({ theme }) => theme.spacing.lg};
    flex-direction: row;
  }

  @media (max-width: 330px) {
    padding: ${({ theme }) => theme.spacing.md};
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  background: ${({ theme }) => theme.gradients.jackpot};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.size["2xl"]};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  box-shadow: ${({ theme }) => theme.shadow.glow};

  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    font-size: 20px;
  }

  @media (max-width: 400px) {
    width: 34px;
    height: 34px;
    min-width: 34px;
    font-size: 18px;
  }

  @media (max-width: 330px) {
    width: 30px;
    height: 30px;
    min-width: 30px;
    font-size: 16px;
  }
`;

export const StepIcon = styled.div`
  font-size: 40px;

  @media (max-width: 500px) {
    font-size: 34px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }

  @media (max-width: 330px) {
    font-size: 24px;
  }
`;

export const StepContent = styled.div`
  flex: 1;

  @media (max-width: 330px) {
    text-align: center;
  }
`;

export const StepTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 500px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }

  @media (max-width: 330px) {
    font-size: 15px;
  }
`;

export const StepDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.light};
  line-height: 1.6;

  @media (max-width: 500px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }

  @media (max-width: 330px) {
    font-size: 11px;
    line-height: 1.45;
  }
`;
// ========== INFO BANNER ==========
export const InfoBanner = styled.div`
  background: ${({ theme }) => theme.gradients.primary};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing["3xl"]};
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow["2xl"]};

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }

  @media (max-width: 400px) {
    padding: 20px 10px;
  }
`;

export const BannerIcon = styled.div`
  flex-shrink: 0;
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    // width: 32px;
    // height: 32px;
    object-fit: contain;
  }

  @media (max-width: 640px) {
    width: 100px;
    height: 100px;
  }
`;
export const BannerContent = styled.div`
  flex: 1;
`;

export const BannerTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["2xl"]};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: uppercase;

  @media (max-width: 500px) {
    font-size: 21px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const BannerText = styled.p`
  font-size: ${({ theme }) => theme.font.size.base};
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

// ========== SECURITY ==========
export const SecuritySection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  @media (max-width: 400px) {
    margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  }
`;

export const SecurityTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["2xl"]};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size["3xl"]};
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }

  @media (max-width: 330px) {
    font-size: 18px;
  }
`;

export const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const SecurityCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.borderPink};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-4px);
  }

  /* 📱 Small screens */
  @media (max-width: 500px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  /* 📱 Ultra-small screens */
  @media (max-width: 400px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radii.md};
  }

  @media (max-width: 330px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const SecurityIcon = styled.div`
  font-size: 40px;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 500px) {
    font-size: 34px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }

  @media (max-width: 330px) {
    font-size: 24px;
  }
`;

export const SecurityCardTitle = styled.h5`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: 500px) {
    font-size: 15px;
  }

  @media (max-width: 400px) {
    font-size: 14px;
  }

  @media (max-width: 330px) {
    font-size: 13px;
  }
`;

export const SecurityCardText = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.5;

  @media (max-width: 500px) {
    font-size: 13px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
    line-height: 1.45;
  }

  @media (max-width: 330px) {
    font-size: 11px;
  }
`;

export const FAQSection = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]}
    ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.xl};
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing["4xl"]};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.xl}
      ${({ theme }) => theme.spacing.sm};
    border-radius: ${({ theme }) => theme.radii.lg};
  }

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.spacing.lg}
      ${({ theme }) => theme.spacing.xs};
  }
`;

export const FAQTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["3xl"]};
  text-align: center;
  text-transform: uppercase;

  font-weight: 800;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 360px) {
    font-size: 18px;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 480px) {
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 360px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const FAQItem = styled.div`
  // background: ${({ theme }) => theme.gradients.overlay};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: 0.3s ease all;

  &:hover {
    background: ${({ theme }) => theme.gradients.card};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radii.md};
  }

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const FAQQuestion = styled.h4`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: flex-start;
  gap: 6px;
  margin-bottom: 8px;

  &::before {
    content: "Q:";
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 18px;
    line-height: 1;
    margin-top: 1px;
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 15px;

    &::before {
      font-size: 16px;
    }
  }

  @media (max-width: 360px) {
    font-size: 14px;

    &::before {
      font-size: 15px;
    }
  }
`;

export const FAQAnswer = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.light};
  line-height: 1.6;
  padding-left: 28px;

  @media (min-width: 768px) {
    font-size: 16px;
    padding-left: 32px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding-left: 20px;
    line-height: 1.55;
  }

  @media (max-width: 360px) {
    font-size: 13px;
    padding-left: 14px;
    line-height: 1.5;
  }
`;
