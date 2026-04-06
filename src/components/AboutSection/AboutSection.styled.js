import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 100px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    max-width: 1000px;
    padding: 0 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: ${({ $reversed }) => ($reversed ? "row-reverse" : "row")};
  align-items: center;
  justify-content: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: left;
    gap: 32px;
  }
`;
export const Heading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  background: ${({ theme }) => theme.gradients.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;

  margin-bottom: ${({ theme }) => theme.spacing.md};

  filter: drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.secondary})
    drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.background})
    drop-shadow(0px 6px 3px rgba(31, 4, 58, 0.24))
    drop-shadow(2px 2px 0px #29144971) drop-shadow(-2px 2px 0px rgb(54, 43, 38));

  @media (maz-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 500px) {
    font-size: 21px;
  }

  @media (max-width: 38px) {
    font-size: 18px;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 460px;
    border-radius: 20px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    img {
      max-width: 320px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 260px;
    }
  }
`;

export const TextBlock = styled.div`
  flex: 1;
  max-width: 580px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
  box-sizing: border-box;

  border-left: 3px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding: 0 12px;
    max-width: 100%;
  }
  ul {
    margin-top: 22px;
    padding-left: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 34px;
      margin-bottom: 18px;

      font-size: 18px;
      font-weight: 600;
      line-height: 1.55;

      color: ${({ theme }) => theme.colors.text};
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);

      /* Маркер-жетон */
      &::before {
        content: "-";
        position: absolute;
        left: 0;
        top: 6px;
        width: 14px;
        height: 14px;

        border-radius: 50%;
        background: ${({ theme }) => theme.gradients.jackpot};
        box-shadow:
          0 0 8px ${({ theme }) => theme.colors.accent},
          inset 0 1px 2px rgba(255, 255, 255, 0.65);

        transform: scale(1);
        transition: transform 0.25s ease;
      }

      /* Ховер для дорогого эффекта */
      &:hover::before {
        transform: scale(1.2);
        box-shadow:
          0 0 12px ${({ theme }) => theme.colors.accent},
          0 0 6px ${({ theme }) => theme.colors.glow};
      }

      @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 14px;

        &::before {
          width: 12px;
          height: 12px;
          top: 5px;
        }
      }

      @media (max-width: 420px) {
        font-size: 15px;

        &::before {
          width: 10px;
          height: 10px;
          top: 6px;
        }
      }
    }
  }
`;

export const TextBlock2 = styled.div`
  flex: 1;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
  box-sizing: border-box;

  border-left: 3px solid ${({ theme }) => theme.colors.accent};

  @media (max-width: 768px) {
    padding: 0 12px;
    max-width: 100%;
  }

  ul {
    margin-top: 22px;
    padding-left: 0;
    list-style: none;

    li {
      position: relative;
      padding-left: 34px;
      margin-bottom: 18px;

      font-size: 18px;
      font-weight: 600;
      line-height: 1.55;

      color: ${({ theme }) => theme.colors.text};
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);

      /* Маркер-жетон */
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 6px;
        width: 14px;
        height: 14px;

        border-radius: 50%;
        background: ${({ theme }) => theme.gradients.jackpot};
        box-shadow:
          0 0 8px ${({ theme }) => theme.colors.accent},
          inset 0 1px 2px rgba(255, 255, 255, 0.65);

        transform: scale(1);
        transition: transform 0.25s ease;
      }

      /* Ховер для дорогого эффекта */
      &:hover::before {
        transform: scale(1.2);
        box-shadow:
          0 0 12px ${({ theme }) => theme.colors.accent},
          0 0 6px ${({ theme }) => theme.colors.glow};
      }

      @media (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 14px;

        &::before {
          width: 12px;
          height: 12px;
          top: 5px;
        }
      }

      @media (max-width: 420px) {
        font-size: 15px;

        &::before {
          width: 10px;
          height: 10px;
          top: 6px;
        }
      }
    }
  }
`;
export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.75;
  margin: 0;
  text-shadow: 0 0 4px rgba(50, 48, 54, 0.15);

  @media (max-width: 540px) {
    font-size: 17px;
  }

  @media (max-width: 420px) {
    font-size: 16px;
  }
`;
export const ExtendedBlock = styled.div`
  margin: 80px auto;
  padding: 48px;
  border-radius: 24px;
  max-width: 1024px;
  // background: radial-gradient(
  //   circle at top left,
  //   rgba(221, 166, 236, 0.06) 0%,
  //   ${({ theme }) => theme.colors.glow} 80%
  // );
  background: ${({ theme }) => theme.gradients.card};

  border: 2px solid ${({ theme }) => theme.colors.borderPink};
  box-shadow:
    0 4px 18px rgba(0, 0, 0, 0.6),
    inset 0 0 0.5px rgba(255, 255, 255, 0.05),
    0 0 30px rgba(255, 100, 100, 0.15);

  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.font.size.base};
  line-height: 1.8;

  h3 {
    font-size: ${({ theme }) => theme.font.size["2xl"]};
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 24px;
    text-shadow: 0 0 6px rgba(255, 80, 80, 0.3);
  }

  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.light};
    text-shadow: 0 0 4px rgba(50, 48, 54, 0.15);
  }

  @media (max-width: 768px) {
    padding: 24px;
    margin: 40px auto;
  }
`;
