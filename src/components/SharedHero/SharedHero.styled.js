import styled from "styled-components";

export const HeroWrapper = styled.section`
  position: relative;
  padding: 60px 20px;
  text-align: center;
  overflow: hidden;
  z-index: 1;

  background: ${({ theme }) => theme.gradients.title};

  border: 2px solid ${({ theme }) => theme.colors.primary};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/hero-banner.avif") center/cover no-repeat;
    filter: blur(3px);
    z-index: 0;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(16, 16, 16, 0.25) 0%,
      rgba(45, 45, 45, 0.24) 40%,
      rgba(64, 6, 6, 0.17) 100%
    );
    z-index: 0;
    pointer-events: none;
  }

  * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 72px 16px;
  }

  @media (max-width: 480px) {
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        180deg,
        rgba(83, 49, 32, 0.71) 0%,
        rgba(66, 53, 48, 0.6) 40%,
        rgba(33, 26, 18, 0.3) 100%
      );
      z-index: 0;
      pointer-events: none;
    }
  }
`;

export const HeroTitle = styled.h1`
  position: relative;

  text-align: center;

  font-size: 58px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  background: ${({ theme }) => theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 2px 0px #0b1d34) drop-shadow(0px 2px 0px #173c67)
    drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.45))
    drop-shadow(1px 1px 0px rgba(255, 255, 255, 0.18))
    drop-shadow(-1px 1px 0px rgba(0, 0, 0, 0.42)) brightness(1.18);

  @media (max-width: 768px) {
    font-size: 34px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    font-weight: 800;
    filter: drop-shadow(0px 1px 0px #0b1d34) drop-shadow(0px 2px 0px #173c67)
      drop-shadow(0px 1px 0px rgba(0, 0, 0, 0.45))
      drop-shadow(1px 1px 0px rgba(255, 255, 255, 0.18))
      drop-shadow(-1px 1px 0px rgba(0, 0, 0, 0.42)) brightness(1.18)
      contrast(1.32) saturate(1.22);
  }
`;
export const HeroContainer = styled.div`
  position: relative;
  z-index: 1;

  max-width: 1200px;

  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;

  box-sizing: border-box;

  width: 100%;
  padding: clamp(14px, 2.6vw, 26px) clamp(14px, 3.6vw, 30px);
  border-radius: clamp(18px, 3.2vw, 28px);

  /* 🔥 страховка от “вылазит из-за длинных слов/заголовков” */
  overflow: hidden;
  overflow-wrap: anywhere;
  word-break: break-word;
  hyphens: auto;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.06) 45%,
    rgba(120, 90, 200, 0.08) 100%
  );

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

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    background: radial-gradient(
      120% 120% at 0% 0%,
      rgba(180, 140, 255, 0.22),
      transparent 55%
    );
    opacity: 0.6;
    z-index: 0;
  }

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
export const HeroSubtitle = styled.p`
  font-weight: 600;
  text-align: center;
  // background: linear-gradient(
  //   135deg,
  //   rgba(255, 255, 255, 0.14) 0%,
  //   rgba(255, 255, 255, 0.06) 45%,
  //   rgba(120, 90, 200, 0.08) 100%
  // );
  // padding: clamp(14px, 2.6vw, 26px) clamp(14px, 3.6vw, 30px);

  // backdrop-filter: blur(14px) saturate(135%);
  // -webkit-backdrop-filter: blur(14px) saturate(135%);

  // border: 1px solid rgba(255, 255, 255, 0.22);
  // border-radius: 10px;

  // box-shadow:
  //   0 18px 50px rgba(0, 0, 0, 0.45),
  //   inset 0 1px 0 rgba(255, 255, 255, 0.35);

  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.lightText};
  text-shadow:
    0 1px 2px rgba(0, 0, 0, 0.61),
    0 1px 10px rgba(15, 14, 14, 0.67);

  max-width: 700px;
  margin: 30px auto 40px;

  @media (max-width: 380px) {
    font-size: 14px;
    text-align: center;
  }
`;
export const HeroCta = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const BadgesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
  justify-content: center;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const Badge = styled.span`
  font-family: ${({ theme }) => theme.font.family.code};

  background: ${({ theme }) => theme.gradients.primary};
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #222;
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);

  @media (max-width: 768px) {
    font-size: 12.5px;
  }
`;

export const TagsRow = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const Tag = styled.span`
  font-family: ${({ theme }) => theme.font.family.code};

  background: rgba(47, 47, 47, 0.53);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightText};
  border: 1px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: 768px) {
    font-size: 11.5px;
  }
`;
