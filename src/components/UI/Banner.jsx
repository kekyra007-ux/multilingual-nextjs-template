import Image from "next/image";
import { BannerWrap, BannerOverlay, BannerContent } from "./Banner.styled";

const DEFAULT_ALT =
  "SH777 Philippines – Trusted Online Casino with Fast Login, Secure Registration, Real-Money Games, Instant GCash Deposits & Same-Day Withdrawals";

export const Banner = ({
  image,
  alt = DEFAULT_ALT,
  imgTitle = DEFAULT_ALT,
  priority = false,
  children,
}) => {
  return (
    <BannerWrap>
      <Image
        src={image}
        alt={alt}
        title={imgTitle}
        fill
        priority={priority}
        sizes="100vw"
        style={{ objectFit: "cover", zIndex: 1 }}
      />

      <BannerOverlay />

      <BannerContent>{children}</BannerContent>
    </BannerWrap>
  );
};
