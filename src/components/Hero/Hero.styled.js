// Welcome Badge
import styled, { keyframes } from "styled-components";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const gameFloat = keyframes`
  0%   { transform: translate3d(0, 0, 0) rotate(-0.2deg); }
  12%  { transform: translate3d(0, -4px, 0) rotate(0.2deg); }
  24%  { transform: translate3d(0, -1px, 0) rotate(-0.15deg); }
  38%  { transform: translate3d(0, -7px, 0) rotate(0.25deg); }
  52%  { transform: translate3d(0, -3px, 0) rotate(-0.15deg); }
  66%  { transform: translate3d(0, -9px, 0) rotate(0.3deg); }
  80%  { transform: translate3d(0, -2px, 0) rotate(-0.1deg); }
  100% { transform: translate3d(0, 0, 0) rotate(-0.2deg); }
`;

const sheenSweep = keyframes`
  0%   { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
  10%  { opacity: 0.25; }
  45%  { opacity: 0.55; }
  70%  { opacity: 0.25; }
  100% { transform: translateX(120%) skewX(-18deg); opacity: 0; }
`;
export const colors = {
  primary: "#F5C84C",
  secondary: "#8032f5",
  accent: "#C84BFF",
  accentSecondary: "#F2D79A",

  background: "#3B146F",
  backgroundSecondary: "#2B0F56",
  dark: "#16062B",
  muted: "#4A1C86",

  light: "#F6F0FF",
  lightText: "#F6F0FF",
  text: "#F6F0FF",
  textDim: "#D9C9F2",
  gray: "#BBA6E6",

  borderPink: "#C84BFF",
  overlay: "rgba(8, 3, 18, 0.78)",
  glow: "rgba(200, 75, 255, 0.34)",

  success: "#3BEA86",
  danger: "#FF3B3B",
  warning: "#F5C84C",
  info: "#38D6FF",
};

export const gradients = {
  primary: "linear-gradient(180deg, #FFE9B8 0%, #F5C84C 52%, #B87412 100%)",

  header: "linear-gradient(180deg, #4A1689 0%, #2B0F56 52%, #16062B 100%)",

  dark: "linear-gradient(180deg, #2B0F56 0%, #16062B 100%)",
  light: "linear-gradient(180deg, #F6F0FF 0%, #D9C9F2 100%)",
  card: "linear-gradient(145deg, #4A1C86 0%, #2B0F56 55%, #16062B 100%)",

  overlay:
    "linear-gradient(180deg, rgba(246,240,255,0.06) 0%, rgba(8,3,18,0.95) 100%)",

  title: "linear-gradient(180deg, #F6F0FF 0%, #E8C8FF 40%, #da85ff 100%)",

  jackpot: "linear-gradient(180deg, #FFE9B8 0%, #F5C84C 52%, #B87412 100%)",

  goldText: "linear-gradient(180deg, #F6F0FF 0%, #FFE9B8 52%, #F5C84C 100%)",
};
// Animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
`;

const glow = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url("/bg-hero.avif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  filter: blur(0px) brightness(0.8);
  transform: scale(1); /* чтобы блюр не обрезался */

  z-index: 0;
`;

// export const BackgroundImage = styled.div`
//   position: absolute;
//   inset: 0;

//   background: radial-gradient(
//       1200px 600px at 20% 10%,
//       rgba(70, 120, 255, 0.18) 0%,
//       rgba(70, 120, 255, 0.08) 35%,
//       rgba(5, 11, 26, 0) 60%
//     ),
//     radial-gradient(
//       900px 500px at 85% 25%,
//       rgba(255, 216, 77, 0.12) 0%,
//       rgba(255, 216, 77, 0.05) 30%,
//       rgba(5, 11, 26, 0) 55%
//     ),
//     linear-gradient(180deg, #050b1a 0%, #08132e 45%, #050b1a 100%);

//   background-repeat: no-repeat;
//   background-size: cover;

//   filter: brightness(0.95);
//   z-index: 0;
// `;

// Main Container
export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
  padding: 120px 60px 80px;
  background: ${gradients.dark};
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 100px 16px 60px;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 90px 12px 50px;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  background:
    linear-gradient(
      to bottom,
      rgba(25, 25, 26, 0.42) 0%,
      rgba(81, 82, 82, 0.36) 35%,
      rgba(14, 104, 206, 0.08) 60%,
      rgba(5, 49, 95, 0.18) 100%
    ),
    radial-gradient(
      ellipse 70% 50% at 35% 20%,
      rgba(20, 15, 53, 0.57) 0%,
      transparent 70%
    ),
    radial-gradient(
      ellipse 90% 60% at 80% 70%,
      rgba(82, 16, 94, 0.48) 0%,
      transparent 80%
    );

  mix-blend-mode: lighten;
  opacity: 0.55;
`;
export const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, ${colors.glow} 0%, transparent 70%);
  animation: ${pulse} 4s ease-in-out infinite;
  z-index: 2;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 44px;
  align-items: center;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const Left = styled.div`
  position: relative;
  text-align: left;

  /* 🔥 must-have для flex/grid детей: иначе контент выталкивает блок */
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;

  width: 100%;
  padding: clamp(14px, 2.6vw, 26px) clamp(14px, 3.6vw, 30px);
  border-radius: clamp(18px, 3.2vw, 28px);

  /* 🔥 страховка от “вылазит из-за длинных слов/заголовков” */
  overflow: hidden;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;

  // background: linear-gradient(
  //   135deg,
  //   rgba(255, 255, 255, 0.14) 0%,
  //   rgba(255, 255, 255, 0.06) 45%,
  //   rgba(120, 90, 200, 0.08) 100%
  // );
  background: ${({ theme }) => theme.gradients.primary};

  backdrop-filter: blur(14px) saturate(135%);
  -webkit-backdrop-filter: blur(14px) saturate(135%);

  border: 1px solid rgba(255, 255, 255, 0.22);

  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);

  & > * {
    position: relative;
    z-index: 1;
    min-width: 0;
    max-width: 100%;
  }

  /* 🔥 чтобы любая картинка/видео/иконка внутри не ломала ширину */
  img,
  svg,
  video,
  canvas {
    max-width: 100%;
    height: auto;
  }

  // &::after {
  //   content: "";
  //   position: absolute;
  //   inset: 0;
  //   border-radius: inherit;
  //   pointer-events: none;
  //   background: radial-gradient(
  //     120% 120% at 0% 0%,
  //     rgba(180, 140, 255, 0.22),
  //     transparent 55%
  //   );
  //   opacity: 0.6;
  //   z-index: 0;
  // }

  @media (max-width: 980px) {
    text-align: center;
    margin: 0 auto;
  }

  @media (max-width: 420px) {
    padding: 14px;
    border-radius: 18px;
    backdrop-filter: blur(12px) saturate(125%);
    -webkit-backdrop-filter: blur(12px) saturate(125%);
  }

  /* ультра-мелкие */
  @media (max-width: 360px) {
    padding: 12px;
    border-radius: 16px;
    box-shadow:
      0 14px 36px rgba(0, 0, 0, 0.42),
      inset 0 1px 0 rgba(255, 255, 255, 0.32);

    &::after {
      opacity: 0.5;
    }
  }

  /* прям совсем узкие (старые/мини-экраны) */
  @media (max-width: 320px) {
    padding: 10px;
    border-radius: 14px;
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  @media (max-width: 980px) {
    justify-content: center;
  }
`;

const iconPop = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
  35% { transform: translateY(-1px) rotate(-8deg) scale(1.04); }
  70% { transform: translateY(0px) rotate(10deg) scale(1.02); }
`;

export const WelcomeBadge = styled.div`
  text-align: center;
  position: relative;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors?.dark || "#eaf7f7"};

  gap: 12px;

  font-family: ${({ theme }) => theme.font.family.code};

  padding: 10px 18px;
  border-radius: 20px;
  // margin-bottom: 10px;

  border: 2px solid ${({ theme }) => theme.gradients.borderPink};

  background: ${({ theme }) => theme.gradients.jackpot};
  background-size: 220% 220%;
  animation:
    ${gameFloat} 1.65s cubic-bezier(0.2, 0.9, 0.2, 1) infinite,
    ${gradientShift} 2.8s ease-in-out infinite;

  box-shadow:
    0 0px 26px rgba(64, 106, 140, 0.44),
    0 0 46px rgba(14, 35, 91, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -10px 18px rgba(40, 39, 72, 0.22);

  transform: translateZ(0);
  will-change: transform, background-position;
  backface-visibility: hidden;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px) scale(1.015);
  }

  &:active {
    transform: translateY(1px) scale(0.99);
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
    gap: 10px;
    // margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    gap: 8px;
  }
`;

export const BadgeGlow = styled.div`
  position: absolute;
  inset: -6px;
  border-radius: 999px;

  background: ${gradients.primary};
  opacity: 0.01;
  filter: blur(14px);

  transform: translateZ(0);
  pointer-events: none;

  /* чуть “пульсит”, чтобы было живее */
  animation: ${gradientShift} 2.8s ease-in-out infinite;
`;

export const BadgeIcon = styled.span`
  font-size: 24px;
  animation: ${iconPop} 1.1s ease-in-out infinite;

  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.25))
    drop-shadow(0 0 14px rgba(140, 255, 167, 0.35));

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const BadgeText = styled.span`
  font-size: 18px;
  font-weight: 900;
  letter-spacing: 0.5px;

  color: ${({ theme }) => theme.colors?.dark || "#eaf7f7"};

  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.92),
    0 0px 10px rgba(0, 0, 0, 0.22);

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// Title
export const TitleContainer = styled.div`
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin-top: 30px;
  text-align: left;
  line-height: 1.15;

  @media (max-width: 980px) {
    text-align: center;
  }
`;

export const TitleLine = styled.span`
  position: relative;
  display: block;
  margin-bottom: 24px;

  font-size: clamp(21px, 3.2vw, 46px);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: clamp(0.6px, 0.2vw, 1.4px);
  line-height: 1.05;

  color: #4a1599;
  z-index: 2;

  &::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    z-index: -1;
    color: transparent;

    /* БЕЛАЯ ТОНКАЯ ОБВОДКА — ДЕРЖИТ ФОРМУ */
    text-shadow:
      -1px -1px 0 #f2d79a,
      1px -1px 0 #f2d79a,
      -1px 1px 0 #c84bff,
      1px 1px 0 #c84bff;
  }

  @media (max-width: 520px) {
    letter-spacing: 0.6px;

    &::before {
      content: attr(data-text);
      position: absolute;
      inset: 0;
      z-index: -1;
      color: transparent;

      /* БЕЛАЯ ТОНКАЯ ОБВОДКА — ДЕРЖИТ ФОРМУ */
      text-shadow:
        -0.5px -0.5px 0 #f2d79a,
        0.5px -0.5px 0 #f2d79a,
        -0.5px 0.5px 0 #c84bff,
        0.5px 0.5px 0 #c84bff;
    }
  }
`;

export const HighlightText = styled.span`
  position: relative;
  display: block;
  text-transform: uppercase;

  font-size: clamp(34px, 11vw, 68px);
  font-weight: 900;
  letter-spacing: clamp(1px, 0.4vw, 2.2px);
  line-height: 0.95;

  margin-bottom: clamp(6px, 1vw, 12px);

  background: linear-gradient(
    180deg,
    #6b4f12 0%,
    #b8871f 18%,
    #f1d27a 40%,
    #fff6d1 50%,
    #d3a94a 60%,
    #8f6517 80%,
    #4a360b 100%
  );
  // background: ${gradients.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 2px 0px #0b1d34) drop-shadow(0px 4px 0px #4a1599)
    drop-shadow(0px 1px 0px rgba(4, 24, 42, 0.75))
    drop-shadow(1px 1px 10px rgba(255, 255, 255, 0.18))
    drop-shadow(-1px 1px 0px rgba(0, 0, 0, 0.42))
    drop-shadow(0 0 22px rgba(122, 94, 139, 0.55)) brightness(1.18)
    contrast(1.32);

  // color: #e6c15a;
  // z-index: 3;
  // isolation: isolate;

  // &::before {
  //   content: attr(data-text);
  //   position: absolute;
  //   inset: 0;
  //   z-index: -1;
  //   color: transparent;

  //   text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.95),
  //     0px -1px 0 rgba(255, 255, 255, 0.95), 1px -1px 0 rgba(255, 255, 255, 0.95),
  //     -1px 0px 0 rgba(255, 255, 255, 0.95), 1px 0px 0 rgba(255, 255, 255, 0.95),
  //     -1px 1px 0 rgba(255, 255, 255, 0.95), 0px 1px 0 rgba(255, 255, 255, 0.95),
  //     1px 1px 0 rgba(255, 255, 255, 0.95), -2px -2px 0 rgba(6, 46, 26, 0.95),
  //     0px -2px 0 rgba(6, 46, 26, 0.95), 2px -2px 0 rgba(6, 46, 26, 0.95),
  //     -2px 0px 0 rgba(6, 46, 26, 0.95), 2px 0px 0 rgba(6, 46, 26, 0.95),
  //     -2px 2px 0 rgba(6, 46, 26, 0.95), 0px 2px 0 rgba(6, 46, 26, 0.95),
  //     2px 2px 0 rgba(6, 46, 26, 0.95), 1px 1px 0 rgba(15, 180, 91, 0.95),
  //     0px 2px 0 rgba(155, 227, 107, 0.85), 0 0 10px rgba(255, 210, 110, 0.55),
  //     0 0 18px rgba(255, 210, 110, 0.25);
  // }

  // @media (max-width: 520px) {
  //   letter-spacing: 1.1px;
  //   line-height: 0.98;

  //   &::before {
  //     content: attr(data-text);
  //     position: absolute;
  //     inset: 0;
  //     z-index: -1;
  //     color: transparent;

  //     text-shadow: -1px -1px 0 rgba(255, 255, 255, 0.95),
  //       0px -1px 0 rgba(255, 255, 255, 0.95),
  //       1px -1px 0 rgba(255, 255, 255, 0.95),
  //       -1px 0px 0 rgba(255, 255, 255, 0.95),
  //       1px 0px 0 rgba(255, 255, 255, 0.95),
  //       -1px 1px 0 rgba(255, 255, 255, 0.95),
  //       0px 1px 0 rgba(255, 255, 255, 0.95), 1px 1px 0 rgba(255, 255, 255, 0.95),
  //       -1px -2px 0 rgba(6, 46, 26, 0.95), 0px -2px 0 rgba(6, 46, 26, 0.95),
  //       1px -2px 0 rgba(6, 46, 26, 0.95), -2px 0px 0 rgba(6, 46, 26, 0.95),
  //       2px 0px 0 rgba(6, 46, 26, 0.95), -1px 2px 0 rgba(6, 46, 26, 0.95),
  //       0px 2px 0 rgba(6, 46, 26, 0.95), 1px 2px 0 rgba(6, 46, 26, 0.95),
  //       1px 1px 0 rgba(15, 180, 91, 0.9), 0 0 9px rgba(255, 210, 110, 0.55),
  //       0 0 14px rgba(255, 210, 110, 0.22);
  //   }
  // }

  @media (max-width: 480px) {
    margin-bottom: 20px;
    // font-size: 26px;

    filter: drop-shadow(0px 1px 0px #0b1d34) drop-shadow(0px 2px 0px #4a1599)
      drop-shadow(0px 2px 0px rgba(4, 19, 44, 0.66))
      drop-shadow(1px 1px 6px rgba(255, 255, 255, 0.18))
      drop-shadow(-1px 1px 0px rgba(0, 0, 0, 0.42))
      drop-shadow(0 0 22px rgba(85, 69, 113, 0.46)) brightness(1.18)
      contrast(1.32) saturate(1.22);
  }
  @media (max-width: 380px) {
    // font-size: 24px;
    font-weight: 800;
  }
`;

// export const Title = styled.h1`
//   font-size: clamp(28px, 6vw, 42px);
//   font-weight: 900;
//   text-align: left;
//   line-height: 1.15;
//   margin: 0;
//   background: ${gradients.title};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   filter: drop-shadow(0px 3px 0px #052045ff) drop-shadow(0px 4px 0px #0744d1ff)
//     drop-shadow(0px 6px 10px rgba(3, 32, 67, 0.97))
//     drop-shadow(0px 12px 26px rgba(0, 0, 0, 0.65))
//     drop-shadow(0 0 18px rgba(90, 200, 255, 0.28))
//     drop-shadow(0 0 36px rgba(255, 191, 40, 0.25))
//     drop-shadow(0 0 64px rgba(220, 66, 0, 0.35));

//   @media (max-width: 980px) {
//     text-align: center;
//   }

//   @media (max-width: 480px) {
//     font-size: 26px;
//   }
// `;
// export const HighlightText = styled.span`
//   display: block;
//   text-align: left;
//   text-transform: uppercase;
//   font-size: clamp(32px, 8vw, 120px);
//   font-weight: 900;
//   letter-spacing: 1.5px;
//   margin: 8px 0;

//   background: linear-gradient(
//     180deg,
//     #fff9e6 0%,
//     #ffefc2 18%,
//     #ffe3a3 32%,
//     #fff6d6 48%,
//     #ffd98a 58%,
//     #f2c66d 72%,
//     #d9a94a 88%,
//     #b88a2f 100%
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;

//   @media (max-width: 980px) {
//     text-align: center;
//   }

//   @media (max-width: 450px) {
//     font-size: 38px;
//   }
// `;
// Subtitle
export const Subtitle = styled.p`
  font-size: clamp(12px, 2vw, 14px);
  text-align: left;

  line-height: 1.6;
  color: ${colors.dark};
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 32px;

  font-weight: 600;

  @media (max-width: 768px) {
    max-width: 600px;
    text-align: center;

    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 24px;
    padding: 0 8px;
  }
`;
export const CTAContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 34px;
  margin-top: 20px;

  @media (max-width: 980px) {
    justify-content: center;
    margin-bottom: 28px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }
`;
export const ButtonGlow = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: ${shimmer} 2s infinite;
`;

export const ButtonIcon = styled.span`
  font-size: 22px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Trust Badges
export const TrustBadgesContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    gap: 16px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  }
`;

export const TrustBadge = styled.div`
  font-family: ${({ theme }) => theme.font.family.code};

  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: ${gradients.overlay};
  border: 1px solid ${colors.borderPink};
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(198, 160, 84, 0.2);
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const TrustIcon = styled.span`
  font-size: 24px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const TrustText = styled.span`
  font-size: 14px;
  color: ${colors.lightText};
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 13px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(260px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: ${({ $right }) => ($right ? "420px" : "900px")};

  @media (max-width: 980px) {
    max-width: 720px;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;
export const StatCard = styled.div`
  font-family: ${({ theme }) => theme.font.family.code};

  position: relative;
  padding: 28px 24px;
  min-height: 140px;

  background:
    linear-gradient(
      160deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.04) 35%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    ${gradients.card};

  border-radius: 22px;
  border: 2.5px solid ${colors.borderPink};

  text-align: center;
  overflow: hidden;

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  /* NEON BORDER */
  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    pointer-events: none;

    filter: blur(10px);
    opacity: 0.45;
    z-index: -1;
  }

  /* INNER GLOW */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;

    background:
      linear-gradient(
        120deg,
        transparent 25%,
        rgba(255, 255, 255, 0.25) 50%,
        transparent 75%
      ),
      radial-gradient(
        circle at top center,
        rgba(239, 118, 85, 0.45),
        transparent 65%
      );

    opacity: 0.18;
  }

  &:hover {
    transform: translateY(-8px) scale(1.03);
    border-color: ${colors.primary};

    &::before {
      opacity: 0.75;
      filter: blur(14px);
    }

    &::after {
      opacity: 0.32;
    }
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
    min-height: 130px;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    padding: 22px 18px;
    min-height: auto;
    border-radius: 16px;
  }
`;

export const StatNumber = styled.div`
  font-size: clamp(21px, 5vw, 28px);
  font-weight: 900;
  background: ${gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  line-height: 1;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: ${colors.lightText};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const StatGlow = styled.div`
  position: absolute;
  inset: -2px;
  background: ${gradients.primary};
  border-radius: 16px;
  opacity: 0;
  filter: blur(10px);
  transition: opacity 0.3s ease;

  ${StatCard}:hover & {
    opacity: 0.2;
  }
`;

// Decorative Elements
export const DecorativeChip = styled.div`
  position: absolute;
  font-size: 40px;
  opacity: 0.15;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 5;

  ${({ $position }) => {
    switch ($position) {
      case "top-left":
        return `top: 10%; left: 5%;`;
      case "top-right":
        return `top: 15%; right: 8%;`;
      case "bottom-left":
        return `bottom: 15%; left: 8%;`;
      case "bottom-right":
        return `bottom: 10%; right: 5%;`;
      default:
        return "";
    }
  }}

  @media (max-width: 768px) {
    font-size: 30px;
    opacity: 0.1;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const scrollAnim = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const ScrollTextWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  border-top: 1px solid rgba(255, 215, 130, 0.2);
  border-bottom: 1px solid rgba(255, 215, 130, 0.2);
  margin-top: 40px;
  padding: 10px 0;
  border-radius: 50px;

  // background: rgba(0, 0, 0, 0.3);
  background: ${gradients.primary};

  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScrollInner = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #1e1e1e;

  animation: ${scrollAnim} 20s linear infinite;

  /* небольшой glow эффект */
  text-shadow: 0 0 8px rgba(255, 186, 80, 0.6);
`;
