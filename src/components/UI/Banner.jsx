import { useEffect, useState } from "react";
import Image from "next/image";
import {
  BannerWrap,
  BannerMedia,
  BannerOverlay,
  BannerContent,
  BannerText,
  BannerKicker,
  BannerTitle,
  BannerSubtitle,
} from "./Banner.styled";

const DEFAULT_ALT = "Banner image";

export const Banner = ({
  image,
  alt = DEFAULT_ALT,
  imgTitle = DEFAULT_ALT,
  priority = false,
  kicker,
  title,
  subtitle,
  children = null,
}) => {
  const [offsetY, setOffsetY] = useState(0);

  return (
    <BannerWrap>
      <BannerMedia
        style={{ transform: `translate3d(0, ${offsetY}px, 0) scale(1.08)` }}
      >
        <Image
          src={image}
          alt={alt}
          title={imgTitle}
          fill
          priority={priority}
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </BannerMedia>

      <BannerOverlay />
      <BannerContent>
        {(kicker || title || subtitle) && (
          <BannerText>
            {kicker && <BannerKicker>{kicker}</BannerKicker>}
            {title && <BannerTitle>{title}</BannerTitle>}
            {subtitle && <BannerSubtitle>{subtitle}</BannerSubtitle>}
          </BannerText>
        )}

        {children}
      </BannerContent>
    </BannerWrap>
  );
};
