import styled from "styled-components";

export const BannerWrap = styled.div`
  position: relative;
  width: 100%;
  height: ${({ $height }) => $height};
  height: 60vh;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 20vh;
  }

  @media (max-width: 380px) {
    height: 18vh;
  }

  @media (max-width: 330px) {
    height: 15vh;
  }
`;

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.06);
  z-index: 2;
`;

export const BannerContent = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
`;
