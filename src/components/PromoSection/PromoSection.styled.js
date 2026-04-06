import styled, { keyframes } from "styled-components";

export const PromoSectionWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  position: relative;
  overflow: hidden;
`;

export const PromoSectionContainer = styled.div`
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
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 28px;
  background:
    radial-gradient(
      circle at top,
      rgba(255, 255, 255, 0.04) 0%,
      transparent 32%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0.01) 100%
    ),
    linear-gradient(180deg, #221a30 0%, #171220 58%, #100c16 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    box-shadow 0.28s ease,
    background 0.28s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      rgba(214, 178, 94, 0.06) 0%,
      transparent 22%
    );
    opacity: 0.9;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(214, 178, 94, 0.2);
    box-shadow:
      0 24px 48px rgba(0, 0, 0, 0.34),
      0 0 0 1px rgba(214, 178, 94, 0.06),
      inset 0 1px 0 rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.lg};
    border-radius: 22px;
  }
`;

export const BonusBadge = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(214, 178, 94, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.92);
  font-size: 11px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  backdrop-filter: blur(8px);
`;

export const BonusTitle = styled.h4`
  position: relative;
  z-index: 1;
  margin-top: 56px;
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.font.family.heading};
  color: #ffffff;
  font-size: 28px;
  line-height: 1.12;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: -0.03em;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 500px) {
    font-size: 21px;
  }

  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const BonusDescription = styled.p`
  position: relative;
  z-index: 1;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  max-width: 30ch;
  color: rgba(255, 255, 255, 0.72);
  font-size: 17px;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
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

    max-width: 100%;
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
