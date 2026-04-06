import React from "react";
import {
  FloatingButtonWrapper,
  FloatingButtonLink,
  IconWrapper,
  Label,
} from "./FloatingCTA.styled";

const FloatingCTA = ({
  href = "https://github.com/kekyra007-ux/multilingual-nextjs-template",
  label = "Invite & Earn",
  ariaLabel = "Open referral link",
}) => {
  return (
    <FloatingButtonWrapper>
      <FloatingButtonLink
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label={ariaLabel}
      >
        <IconWrapper>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient
                id="giftGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#f72710ff" />
                <stop offset="45%" stopColor="#fb6424ff" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
            <rect
              x="3"
              y="9"
              width="18"
              height="11"
              rx="2"
              fill="url(#giftGradient)"
            />
            <path
              d="M11 3.5C10 2.5 8.6 2.4 7.7 3.3C6.8 4.2 6.9 5.6 7.9 6.6L9.5 8.1H11V6.5C11 5.6 11.4 4.6 11 3.5Z"
              fill="#F97316"
            />
            <path
              d="M13 3.5C14 2.5 15.4 2.4 16.3 3.3C17.2 4.2 17.1 5.6 16.1 6.6L14.5 8.1H13V6.5C13 5.6 12.6 4.6 13 3.5Z"
              fill="#F97316"
            />
            <rect x="11" y="3" width="2" height="17" fill="#7C2D12" />
          </svg>
        </IconWrapper>
        <Label>{label}</Label>
      </FloatingButtonLink>
    </FloatingButtonWrapper>
  );
};

export default FloatingCTA;
