import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    margin-bottom: 14px;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.accentSecondary};
  display: flex;
  align-items: center;
  gap: 8px;
  filter: drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.secondary})
    drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.background})
    drop-shadow(0px 6px 3px rgba(31, 4, 58, 0.24))
    drop-shadow(2px 2px 0px #29144971) drop-shadow(-2px 2px 0px rgb(54, 43, 38));

  @media (max-width: 600px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const MoreButton = styled.a`
  padding: 10px 32px;
  border-radius: 50px;
  font-size: 16px;

  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
  background: ${({ theme }) => theme.gradients.dark};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

export const GamesRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 22px;
  padding-bottom: 12px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GameCard = styled.div`
  background: ${({ theme }) => theme.gradients.card};
  border-radius: 18px;
  border: 1px solid rgba(255, 230, 150, 0.15);
  padding: 14px;
  width: 250px;
  flex-shrink: 0;

  box-shadow: 0 0 14px rgba(0, 0, 0, 0.35);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 26px rgba(255, 215, 0, 0.25);
  }

  @media (max-width: 768px) {
    width: 46%;
  }

  @media (max-width: 480px) {
    flex: 0 0 150px;
  }
`;

export const GameImage = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`;
export const GameTitle = styled.div`
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light};
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    font-size: 11px;
  }
`;

export const FireIcon = styled.svg.attrs({
  viewBox: "0 0 24 24",
})`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;

export const CategoriesBar = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;

  overflow-x: auto;
  padding-bottom: 6px;

  /* скрываем некрасивый скролл */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 20px;
  }
`;

// ✨ Тэг категории
export const CategoryItem = styled.div`
  flex-shrink: 0;
  padding: 10px 20px;
  border-radius: 999px;

  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  cursor: pointer;

  background: ${({ theme }) => theme.gradients.header};
  color: ${({ theme }) => theme.colors.light};
  border: 1px solid ${({ theme }) => theme.colors.borderPink};

  box-shadow:
    0 3px 10px rgba(255, 143, 105, 0.25),
    inset 0 1px 3px rgba(255, 255, 255, 0.15);

  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.dark};
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(255, 179, 120, 0.45);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.45);
  }

  /* 📱 mobile */
  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 8px 16px;
  }

  /* 📱 супер мелкие 360–320 px */
  @media (max-width: 360px) {
    font-size: 0.7rem;
    padding: 7px 14px;
  }
`;

export const ArticleSection = styled.section`
  width: 100%;
  padding: 48px 0 60px;
  background: ${({ theme }) => theme.gradients.card};
  border-radius: 18px;
  margin: 32px auto 40px;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.28);
  border: 1px solid ${({ theme }) => theme.colors.borderGold};

  @media (max-width: 768px) {
    padding: 32px 0 44px;
    border-radius: 14px;
  }
`;

export const ArticleContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const ArticleTitle = styled.h2`
  font-size: 34px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 24px;
  filter: drop-shadow(0px 1px 0px ${({ theme }) => theme.colors.secondary})
    drop-shadow(0px 2px 0px ${({ theme }) => theme.colors.background})
    drop-shadow(0px 6px 3px rgba(31, 4, 58, 0.24))
    drop-shadow(2px 2px 0px #29144971) drop-shadow(-2px 2px 0px rgb(54, 43, 38));

  background: ${({ theme }) => theme.gradients.goldText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 550px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ArticleParagraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 20px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ArticleHighlight = styled.div`
  padding: 16px 20px;
  margin: 22px 0;
  background: ${({ theme }) => theme.gradients.jackpot};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 800;
  font-size: 18px;
  line-height: 1.6;
  text-align: center;
  box-shadow: ${({ theme }) => theme.colors.shadowSoft};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
