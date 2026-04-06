// src/components/Footer/Footer.styles.js
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.gradients.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 80px 0 40px;
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 20px;
  margin: 0 auto;
`;
export const FooterTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 32px;
  }
`;

export const FooterCol = styled.div`
  flex: 1;
  min-width: 220px;

  h4 {
    font-size: ${({ theme }) => theme.font.size.lg};
    margin-bottom: 16px;
    text-transform: uppercase;

    color: ${({ theme }) => theme.colors.light};
  }

  p {
    color: ${({ theme }) => theme.colors.light};
    line-height: 1.6;
  }

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;

    a {
      color: ${({ theme }) => theme.colors.light};
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.light};
      }
    }
  }
`;
export const CTABox = styled.div`
  background: ${({ theme }) => theme.gradients.card};
  border-radius: 16px;
  padding: 24px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  z-index: 999;
  text-transform: uppercase;

  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
export const CTAText = styled.div`
  strong {
    font-weight: ${({ theme }) => theme.font.weight.extrabold};

    display: block;
    font-size: ${({ theme }) => theme.font.size["2xl"]};
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.light};
    margin: 0;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    strong {
      font-size: 21px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const CTAButton = styled.div`
  button {
    min-width: 180px;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 20px;
  text-align: center;
`;

export const LegalText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 1.4;
  margin: 0;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
`;

export const ResponsibleIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const IconItem = styled.div`
  border-radius: 5px;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 75px;
    height: 75px;
    object-fit: contain;
    // filter: invert(1);
  }

  @media (max-width: 768px) {
    img {
      width: 55px;
      height: 55px;
      object-fit: contain;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;

  a {
    display: inline-block;

    img {
      width: 28px;
      height: 28px;
      transition: transform 0.2s ease;
      filter: invert(1);

      &:hover {
        transform: scale(1.15);
      }
    }
  }
`;
