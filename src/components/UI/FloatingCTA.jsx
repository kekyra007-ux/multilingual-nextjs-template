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
        <Label>{label}</Label>
      </FloatingButtonLink>
    </FloatingButtonWrapper>
  );
};

export default FloatingCTA;
