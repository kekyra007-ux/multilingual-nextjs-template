import styled, { keyframes } from "styled-components";

export const BonusesWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  position: relative;
  overflow: hidden;
`;

export const BonusesContainer = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding};
  position: relative;
  z-index: 1;
`;
export const CTAGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 12px;
  }
`;
// ========== HEADER ==========
export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["3xl"]};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  background: ${({ theme }) => theme.gradients.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  filter: drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.secondary})
    drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.background})
    drop-shadow(0px 6px 3px rgba(58, 9, 4, 0.24))
    drop-shadow(1px 1px 0px ${({ theme }) => theme.colors.backgroundSecondary})
    drop-shadow(-2px 2px 0px ${({ theme }) => theme.colors.overlay});
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.font.size.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const HeroBanner = styled.div`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  flex-direction: column;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.xl};

  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  border-radius: 22px;

  box-shadow:
    0 0 30px rgba(56, 16, 71, 0.25),
    0 0 16px rgba(17, 0, 255, 0.15),
    inset 0 0 0.5px rgba(255, 255, 255, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  // /* Background */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("/banner-bg.avif");
    background-size: cover;
    background-position: center;
    filter: blur(0px);
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(55, 51, 43, 0.51) 0%,
      rgba(59, 34, 63, 0.3) 100%
    );
    z-index: 1;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 28px;
    gap: 32px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 0px;
    border-radius: 16px;
    gap: 20px;
  }

  /* Ultra-small (280–360px) */
  @media (max-width: 360px) {
    padding: 0px;
    gap: 14px;
  }
`;
export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  padding: 28px 30px;
  margin: 0 auto;

  // background: ${({ theme }) => theme.gradients.overlay};
  // backdrop-filter: blur(14px);
  border-radius: 22px;

  // border: 1px solid rgba(255, 255, 255, 0.12);
  // box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35),
  //   inset 0 0 22px rgba(255, 255, 255, 0.04);

  // /* Light glossy inner highlight */
  // &::before {
  //   content: "";
  //   position: absolute;
  //   inset: 0;
  //   border-radius: inherit;
  //   pointer-events: none;
  //   background: linear-gradient(
  //     180deg,
  //     rgba(20, 19, 28, 0.4) 0%,
  //     rgba(255, 255, 255, 0) 40%
  //   );
  //   z-index: -1;
  // }

  @media (max-width: 768px) {
    padding: 22px 20px;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    padding: 20px 16px;
    border-radius: 16px;
  }

  @media (max-width: 360px) {
    padding: 16px 12px;
  }
`;
export const BannerTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["4xl"]};
  font-weight: 900;
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;

  filter: drop-shadow(0px 3px 0px ${({ theme }) => theme.colors.secondary})
    drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.accent})
    drop-shadow(0px 6px 3px rgba(31, 4, 58, 0.45))
    drop-shadow(2px 2px 0px ${({ theme }) => theme.colors.muted})
    drop-shadow(-2px 2px 0px ${({ theme }) => theme.colors.glow});

  @media (max-width: 768px) {
    text-align: center;
    filter: drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.secondary})
      drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.accent})
      drop-shadow(0px 4px 3px rgba(40, 6, 102, 0.45))
      drop-shadow(2px 2px 0px ${({ theme }) => theme.colors.muted})
      drop-shadow(-2px 2px 0px ${({ theme }) => theme.colors.glow});
  }

  @media (max-width: 430px) {
    font-size: 21px;
  }
`;

export const BannerSubtitle = styled.p`
  font-size: 21px;
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }

  line-height: 1.7;
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.4),
    0 1px 10px rgba(40, 40, 40, 0.56);

  @media (max-width: 360px) {
    font-size: 11px;
  }
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(-1deg); }
  50% { transform: translateY(-6px) rotate(1deg); }
  100% { transform: translateY(0) rotate(-1deg); }
`;

export const BannerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  img {
    width: 550px;
    height: auto;
    animation: ${float} 4s ease-in-out infinite;
    transition: transform 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));

    &:hover {
      transform: translateY(-10px) scale(1.05);
    }
  }
`;

// ========== BONUS GRID ==========
export const BonusGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  justify-content: center;

  @media (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const BonusCard = styled.div`
  background: ${({ $gradient }) => $gradient};

  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  box-shadow:
    0 0 20px rgba(0, 0, 0, 0.35),
    inset 0 0 25px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 0 28px rgba(255, 205, 80, 0.45),
      0 0 14px rgba(255, 255, 255, 0.25);
    border-color: ${({ theme }) => theme.colors.borderPink};
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const BonusBadge = styled.span`
  position: absolute;
  top: 10px;
  right: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 8px 10px;
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
`;

export const BonusIcon = styled.div`
  font-size: 60px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const BonusTitle = styled.h4`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: 18px;
  margin-top: ${({ theme }) => theme.spacing.lg};

  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const BonusAmount = styled.div`
  font-size: 24px;
  font-weight: 900;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.heading};

  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow:
    -1px -1px 0 ${({ theme }) => theme.colors.light},
    1px -1px 0 ${({ theme }) => theme.colors.light},
    -1px 1px 0 ${({ theme }) => theme.colors.light},
    1px 1px 0 ${({ theme }) => theme.colors.light},
    0 4px 6px rgba(49, 42, 36, 0.5),
    0 10px 20px rgba(42, 38, 38, 0.41);
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 500px) {
    font-size: 21px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const BonusDescription = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: #111;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.5;
`;

export const BonusList = styled.ul`
  list-style: none;
  text-align: left;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const BonusListItem = styled.li`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 700;
  margin-bottom: 10px;

  padding: 10px 15px;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  background: linear-gradient(
    135deg,
    rgba(255, 90, 25, 0.22) 0%,
    rgba(255, 174, 11, 0.22) 45%,
    rgba(74, 8, 3, 0.35) 100%
  );
  border-radius: 12px;
  border: 1px solid rgba(255, 203, 143, 0.22);

  box-shadow:
    inset 0 1px 2px rgba(255, 255, 255, 0.12),
    0 6px 14px rgba(0, 0, 0, 0.45);

  backdrop-filter: blur(6px);

  &::before {
    content: "✔";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    color: ${({ theme }) => theme.colors.dark};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.weight.bold};

    background: ${({ theme }) => theme.gradients.primary};
    border-radius: 50%;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.glow};
  }

  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 360px) {
    font-size: 12px;
    padding: ${({ theme }) => theme.spacing.xs}
      ${({ theme }) => theme.spacing.sm};
  }
`;
export const BonusButton = styled.button`
  width: 100%;
  max-width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.code};
  text-align: center;

  padding: 18px 32px;
  font-size: 1.15rem;
  font-weight: 800;
  border-radius: 50px;

  background: ${({ theme, $featured }) =>
    $featured ? theme.gradients.primary : theme.gradients.header};

  color: ${({ theme, $featured }) =>
    $featured ? theme.colors.dark : theme.colors.light};

  border: ${({ theme, $featured }) =>
    $featured ? "none" : `3px solid ${theme.colors.primary}`};

  cursor: pointer;
  transition: all 0.25s ease;

  /* 🔥 Больше НИКОГДА не ломается */
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
  line-height: 1.25;

  &:hover {
    transform: scale(1.06);
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.lightText};
    box-shadow:
      0 0 22px rgba(255, 55, 0, 0.63),
      0 0 40px rgba(255, 149, 0, 0.45);
  }

  &:active {
    transform: scale(0.96);
  }

  /* 📱 Tablet */
  @media (max-width: 1024px) {
    padding: 16px 26px;
    font-size: 1.05rem;
  }

  /* 📱 Mobile Large */
  @media (max-width: 650px) {
    padding: 14px 20px;
    font-size: 0.95rem;
    border-radius: 12px;
  }

  /* 📱 Mobile Small */
  @media (max-width: 450px) {
    padding: 12px 16px;
    font-size: 0.85rem;

    /* 📌 предотвращает странные переносы */
    max-width: 100%;
  }
`;

export const InfoSection = styled.section`
  width: 100%;
  padding: 60px 0;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  border-top: 1px solid ${({ theme }) => theme.colors.line};
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const InfoArticle = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 22px;

  display: flex;
  flex-direction: column;
  gap: 42px;

  @media (max-width: 480px) {
    gap: 32px;
  }
`;

export const ArticleBlock = styled.div`
  padding-left: 14px;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.gradients.background};
  border-radius: 6px;
  padding: 18px 20px;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    padding: 16px 16px;
  }

  @media (max-width: 420px) {
    padding: 14px 14px;
  }
`;

export const ArticleTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 10px;
  background: ${({ theme }) => theme.gradients.goldText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 18px;
  }
`;

export const ArticleText = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 16.5px;
    line-height: 1.65;
  }

  @media (max-width: 420px) {
    font-size: 15.5px;
  }
`;
export const PromoSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};

  @media (max-width: 420px) {
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;
export const PromoCard = styled.div`
  background: ${({ theme }) => theme.gradients.card};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border: 1px solid rgba(255, 215, 0, 0.2);
  box-shadow: ${({ theme }) => theme.shadow.xl};

  @media (max-width: 420px) {
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.radii.lg};
  }

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const PromoHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const PromoTag = styled.span`
  font-family: ${({ theme }) => theme.font.family.code};

  display: inline-block;
  background: ${({ theme }) => theme.gradients.primary};
  color: ${({ theme }) => theme.colors.dark};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 21px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 11px;
  }
  @media (max-width: 500px) {
    font-size: 9px;
    border-radius: 20px;
  }
`;
export const PromoTitle = styled.h4`
  font-family: ${({ theme }) => theme.font.family.code};
  font-size: 18px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 420px) {
    font-size: 18px;
  }

  @media (max-width: 360px) {
    font-size: 16px;
  }
`;
export const PromoValue = styled.div`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size["4xl"]};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  background: ${({ theme }) => theme.gradients.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;
export const PromoDetails = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;
export const PromoDetailItem = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  font-size: ${({ theme }) => theme.font.size.sm};
  gap: ${({ theme }) => theme.spacing.md};

  &:last-child {
    border-bottom: none;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }

  strong {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 800;
    text-align: right;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    strong {
      text-align: left;
      font-size: 13px;
      opacity: 0.95;
      margin-top: 2px;
    }
  }

  /* 🟣 Для супер-маленьких (<360px) */
  @media (max-width: 360px) {
    font-size: 12px;
    gap: 6px;

    strong {
      font-size: 12px;
    }
  }
`;

export const PromoFooter = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

// ========== TERMS SECTION ==========
export const TermsSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 360px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

export const TermsTitle = styled.h4`
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.light};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (max-width: 360px) {
    font-size: 16px;
  }
`;

export const TermsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TermsItem = styled.li`
  font-size: ${({ theme }) => theme.font.size.sm};
  color: ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  padding-left: ${({ theme }) => theme.spacing.lg};
  position: relative;
  line-height: 1.6;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 1.1em;
    top: 3px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding-left: ${({ theme }) => theme.spacing.md};

    &::before {
      left: -2px;
    }
  }

  @media (max-width: 360px) {
    font-size: 12px;
    line-height: 1.45;
    padding-left: ${({ theme }) => theme.spacing.md};

    &::before {
      font-size: 1em;
      left: -2px;
    }
  }

  @media (max-width: 320px) {
    font-size: 11px;
    padding-left: ${({ theme }) => theme.spacing.sm};

    &::before {
      left: -4px;
    }
  }
`;
