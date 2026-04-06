import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`
  0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
  15% { opacity: 0.55; }
  50% { transform: translateX(140%) skewX(-18deg); opacity: 0.35; }
  100% { transform: translateX(140%) skewX(-18deg); opacity: 0; }
`;

const shimmerSlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const variants = {
  primary: css`
    background: linear-gradient(180deg, #ffe9b8 0%, #f5c84c 55%, #b87412 100%);
    color: #1a1030;
    font-weight: 900;
    font-size: 16px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    border: 2px solid rgba(255, 233, 184, 0.78);

    box-shadow:
      0 16px 42px rgba(0, 0, 0, 0.62),
      0 0 34px rgba(245, 200, 76, 0.58),
      0 0 78px rgba(245, 200, 76, 0.22);

    transition: all 0.22s ease;

    &:hover {
      background: linear-gradient(
        180deg,
        #fff3d6 0%,
        #ffd27a 55%,
        #9a5f0d 100%
      );
      transform: translateY(-3px) scale(1.04);
      box-shadow:
        0 22px 56px rgba(0, 0, 0, 0.72),
        0 0 52px rgba(245, 200, 76, 0.74),
        0 0 104px rgba(245, 200, 76, 0.28),
        inset 0 2px 0 rgba(255, 255, 255, 0.22);
    }

    &:active {
      transform: translateY(1px) scale(0.97);
      background: linear-gradient(
        180deg,
        #f5c84c 0%,
        #b87412 60%,
        #5f3607 100%
      );
      box-shadow:
        inset 0 10px 22px rgba(0, 0, 0, 0.82),
        0 0 22px rgba(245, 200, 76, 0.32);
    }
  `,

  secondary: css`
    background: linear-gradient(180deg, #2a0b5a 0%, #1f083f 60%, #16062b 100%);
    color: #f5c84c;
    font-weight: 900;
    font-size: 16px;

    border: 2px solid rgba(245, 200, 76, 0.9);

    box-shadow:
      0 12px 30px rgba(0, 0, 0, 0.72),
      0 0 0 1px rgba(255, 255, 255, 0.06) inset,
      0 0 22px rgba(200, 75, 255, 0.18);

    transition: all 0.25s ease;

    &:hover {
      background: linear-gradient(
        180deg,
        #3a1280 0%,
        #250a4f 60%,
        #16062b 100%
      );
      transform: translateY(-2px);
      border-color: rgba(255, 233, 184, 0.95);
      color: #ffe9b8;
      box-shadow:
        0 16px 38px rgba(0, 0, 0, 0.82),
        0 0 28px rgba(245, 200, 76, 0.22),
        0 0 0 1px rgba(255, 255, 255, 0.08) inset;
    }

    &:active {
      transform: translateY(1px) scale(0.98);
      background: linear-gradient(
        180deg,
        #1f083f 0%,
        #16062b 70%,
        #0b0316 100%
      );
      box-shadow:
        inset 0 10px 22px rgba(0, 0, 0, 0.88),
        0 0 14px rgba(200, 75, 255, 0.14);
    }
  `,
};
export const ButtonStyled = styled.a`
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.font.family.code};
  min-height: 42px;
  height: clamp(20px, 5vw, 72px);
  padding: 0 clamp(10px, 5vw, 42px);
  font-weight: 700;
  font-size: clamp(14px, 1.1vw, 16px);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;

  cursor: pointer;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  word-break: keep-all;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    filter 0.25s ease;

  ${({ $variant }) => variants[$variant || "primary"]};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      110deg,
      rgba(255, 255, 255, 0.06) 0%,
      rgba(255, 255, 255, 0.14) 35%,
      rgba(255, 255, 255, 0.06) 70%,
      rgba(255, 255, 255, 0.02) 100%
    );
    background-size: 220% 220%;
    animation: ${shimmerSlow} 5.5s ease-in-out infinite;
    mix-blend-mode: screen;
    opacity: 0.9;
  }

  &:hover::after {
    animation-duration: 3.2s;
    opacity: 1;
  }

  &:active::before {
    opacity: 0.25;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors?.accent || "#f6c452"};
    outline-offset: 3px;
  }

  @media (max-width: 768px) {
    font-size: 13.5px;
    padding: 0 24px;
    min-height: 40px;
  }

  @media (max-width: 540px) {
    width: 100%;
    max-width: 280px;
    font-size: 13px;
    padding: 5px 18px;
    gap: 8px;
    white-space: normal;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 12.5px;
    padding: 5px 14px;
  }

  @media (max-width: 360px) {
    font-size: 12px;
    padding: 0 12px;
  }
`;
