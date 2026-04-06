import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const pulse = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-1px); }
  100% { transform: translateY(0); }
`;

export const FloatingButtonWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  pointer-events: none;

  padding: 14px 16px calc(14px + env(safe-area-inset-bottom));
  background: ${({ theme }) => theme.colors?.overlay};
  backdrop-filter: blur(10px);
  border-top: 1px solid ${({ theme }) => theme.colors?.muted};

  @media (max-width: 520px) {
    padding: 12px 12px calc(12px + env(safe-area-inset-bottom));
  }

  @media (max-width: 360px) {
    padding: 10px 10px calc(10px + env(safe-area-inset-bottom));
  }
`;

export const FloatingButtonLink = styled.a`
  pointer-events: auto;

  width: min(1200px, 100%);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 14px 18px;
  border-radius: 16px;

  color: ${({ theme }) => theme.colors?.light};
  font-size: 15px;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  border: 1px solid rgba(255, 211, 77, 0.55);

  background: linear-gradient(
    90deg,
    #ff7a1f 0%,
    #ff8e2c 18%,
    #ffb14a 34%,
    #ffd07a 50%,
    #ffb14a 64%,
    #ff8e2c 80%,
    #c9551f 100%
  );
  background-size: 220% 220%;
  animation:
    ${shimmer} 3.2s ease-in-out infinite,
    ${pulse} 2.6s ease-in-out infinite;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.55),
    0 0 28px ${({ theme }) => theme.colors?.glow},
    inset 0 2px 6px rgba(255, 255, 255, 0.35),
    inset 0 -6px 10px rgba(120, 70, 10, 0.35);

  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    filter 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.04);
    box-shadow:
      0 14px 38px rgba(0, 0, 0, 0.62),
      0 0 34px ${({ theme }) => theme.colors?.glow},
      inset 0 2px 7px rgba(255, 255, 255, 0.42);
  }

  &:active {
    transform: translateY(1px) scale(0.995);
    box-shadow: inset 0 6px 14px rgba(0, 0, 0, 0.55);
  }

  @media (max-width: 520px) {
    padding: 13px 14px;
    border-radius: 14px;
    font-size: 14px;
  }

  @media (max-width: 360px) {
    padding: 12px 12px;
    border-radius: 12px;
    font-size: 13px;
  }
`;

export const IconWrapper = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(
    circle at 30% 0%,
    #fff6cf 0%,
    #ffd34d 45%,
    #8a5a12 100%
  );
  box-shadow:
    0 0 14px rgba(255, 211, 77, 0.65),
    inset 0 2px 4px rgba(255, 255, 255, 0.45);

  svg {
    display: block;
  }

  @media (max-width: 360px) {
    width: 26px;
    height: 26px;
  }
`;
export const Label = styled.span`
  color: ${({ theme }) => theme.colors?.dark};
  line-height: 1.15;
  white-space: normal;
  word-break: break-word;
  text-align: center;

  @media (max-width: 520px) {
    font-size: 11px;
    max-width: 120px;
  }

  @media (max-width: 420px) {
    font-size: 10px;
    max-width: 100px;
  }

  @media (max-width: 360px) {
    font-size: 9px;
    max-width: 88px;
    letter-spacing: 0.01em;
  }
`;
