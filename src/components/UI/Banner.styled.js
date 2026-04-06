import styled from "styled-components";

export const BannerWrap = styled.section`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height || "60vh"};
  min-height: 420px;
  overflow: hidden;
  border-radius: 32px;
  isolation: isolate;
  background: #140f20;

  @media (max-width: 768px) {
    min-height: 320px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    height: 36vh;
    min-height: 260px;
    border-radius: 20px;
  }

  @media (max-width: 380px) {
    min-height: 220px;
  }

  @media (max-width: 330px) {
    min-height: 200px;
  }
`;

export const BannerMedia = styled.div`
  position: absolute;
  inset: -6% 0 0 0;
  z-index: 1;
  will-change: transform;
  transition: transform 0.12s linear;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  background:
    linear-gradient(
      180deg,
      rgba(12, 9, 20, 0.14) 0%,
      rgba(12, 9, 20, 0.34) 38%,
      rgba(12, 9, 20, 0.72) 100%
    ),
    linear-gradient(
      135deg,
      rgba(111, 90, 232, 0.18) 0%,
      rgba(214, 178, 94, 0.1) 100%
    );

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 20% 30%,
      rgba(214, 178, 94, 0.22),
      transparent 32%
    );
    pointer-events: none;
  }
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 28px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const BannerText = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BannerKicker = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  color: #f3d98b;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18);
`;

export const BannerTitle = styled.h2`
  margin: 0;
  color: #f4f0fa;
  font-size: clamp(32px, 4vw, 72px);
  font-weight: 800;
  line-height: 0.96;
  letter-spacing: -0.03em;
  text-wrap: balance;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
`;

export const BannerSubtitle = styled.p`
  margin: 0;
  max-width: 620px;
  color: rgba(244, 240, 250, 0.82);
  font-size: clamp(14px, 1.2vw, 18px);
  line-height: 1.6;
  text-shadow: 0 6px 20px rgba(0, 0, 0, 0.24);
`;
