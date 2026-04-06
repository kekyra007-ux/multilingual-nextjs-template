import React from "react";
import styled, { keyframes } from "styled-components";

/* --- Bubble animation --- */
const bubbles = keyframes`
  0%   { transform: translateY(0); }
  100% { transform: translateY(-66.666%); }
`;

const bubbleDrift = keyframes`
  0%   { transform: translate(0, 0); opacity: 0.45; }
  50%  { transform: translate(10px, -18px); opacity: 0.85; }
  100% { transform: translate(-8px, -36px); opacity: 0.55; }
`;

const neonPulse = keyframes`
  0%   { filter: blur(0px) saturate(115%); opacity: .75; }
  50%  { filter: blur(0.35px) saturate(145%); opacity: 1; }
  100% { filter: blur(0px) saturate(115%); opacity: .75; }
`;
export const FancyButtonWrapper = styled.button`
  --text-color: #0b1d34;

  --btn-light: #ffe19a;
  --btn-mid: #ffb24a;
  --btn-dark: #f07c12;

  position: relative;
  padding: clamp(12px, 3vw, 18px) clamp(22px, 6vw, 38px);
  cursor: pointer;
  border: 2px solid rgba(255, 178, 74, 0.82);
  border-radius: 30px;
  overflow: hidden;

  background: linear-gradient(
    135deg,
    var(--btn-dark) 0%,
    var(--btn-mid) 48%,
    var(--btn-light) 100%
  );

  color: var(--text-color);
  font-family: ${({ theme }) => theme.font.family.code};
  font-weight: 900;
  font-size: clamp(15px, 4vw, 24px);
  text-transform: uppercase;
  letter-spacing: 0.8px;

  box-shadow:
    0 18px 46px rgba(0, 0, 0, 0.74),
    0 0 26px rgba(245, 166, 35, 0.62),
    0 0 64px rgba(255, 178, 74, 0.26),
    inset 0 2px 10px rgba(255, 255, 255, 0.42),
    inset 0 -16px 28px rgba(30, 75, 123, 0.72);

  transition: 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    pointer-events: none;
    background:
      radial-gradient(
        120% 120% at 50% 50%,
        rgba(255, 225, 154, 0.22) 0%,
        rgba(255, 178, 74, 0.18) 38%,
        rgba(0, 0, 0, 0) 72%
      ),
      radial-gradient(
        140% 140% at 20% 30%,
        rgba(255, 255, 255, 0.14) 0%,
        rgba(0, 0, 0, 0) 58%
      );
    mix-blend-mode: screen;
    animation: ${neonPulse} 2.8s ease-in-out infinite;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -120% 0 0 0;
    pointer-events: none;

    background:
      radial-gradient(
        circle at 18% 92%,
        rgba(255, 255, 255, 0.9) 0 6px,
        transparent 7px
      ),
      radial-gradient(
        circle at 38% 96%,
        rgba(255, 255, 255, 0.56) 0 4px,
        transparent 5px
      ),
      radial-gradient(
        circle at 58% 93%,
        rgba(255, 255, 255, 0.46) 0 5px,
        transparent 6px
      ),
      radial-gradient(
        circle at 76% 97%,
        rgba(255, 255, 255, 0.22) 0 3px,
        transparent 4px
      ),
      radial-gradient(
        circle at 88% 90%,
        rgba(255, 255, 255, 0.18) 0 4px,
        transparent 5px
      ),
      radial-gradient(
        circle at 28% 88%,
        rgba(255, 178, 74, 0.18) 0 7px,
        transparent 8px
      ),
      radial-gradient(
        circle at 66% 89%,
        rgba(245, 166, 35, 0.16) 0 6px,
        transparent 7px
      );

    animation:
      ${bubbles} 6.2s linear infinite,
      ${bubbleDrift} 3.4s ease-in-out infinite;
    filter: blur(0.15px);
    opacity: 0.86;
  }

  &:hover {
    transform: translateY(-3px) scale(1.03);
    background: linear-gradient(135deg, #fff2c6 0%, #ffc15a 46%, #c86a0f 100%);
    border-color: rgba(255, 210, 122, 0.95);
    box-shadow:
      0 24px 60px rgba(0, 0, 0, 0.8),
      0 0 34px rgba(245, 166, 35, 0.78),
      0 0 92px rgba(255, 178, 74, 0.34),
      inset 0 2px 12px rgba(255, 255, 255, 0.52);

    &::before {
      animation-duration: 3.8s, 2.6s;
      opacity: 0.95;
    }
  }

  &:active {
    transform: scale(0.985) translateY(1px);
    background: linear-gradient(135deg, #ffb24a 0%, #f07c12 55%, #7a3f09 100%);
    box-shadow: inset 0 10px 22px rgba(0, 0, 0, 0.82);

    &::before {
      animation-duration: 8.2s, 4.4s;
      opacity: 0.28;
    }
    &::after {
      opacity: 0.55;
    }
  }

  @media (max-width: 480px) {
    white-space: normal;
    text-align: center;
    font-size: 15px;
    padding: 12px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none !important;
    }
  }
`;
export const FancyButton = ({ children, ...props }) => {
  return <FancyButtonWrapper {...props}>{children}</FancyButtonWrapper>;
};
