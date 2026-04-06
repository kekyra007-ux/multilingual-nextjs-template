import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px 28px;
  background: ${({ theme }) => theme.gradients.header};
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};

  @media (max-width: 900px) {
    padding: 12px 18px;
  }
`;

// export const LogoWrapper = styled.a`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   text-decoration: none;
// `;

export const LogoText = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`;

export const LanguageSwitcher = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavBar = styled.nav`
  background: ${({ theme }) => theme.gradients.dark};
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
`;

export const Nav = styled.div`
  max-width: 400px;
  width: 100%;

  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 900px) {
    padding: 0 18px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  list-style: none;
  margin: 0;
  padding: 10px 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.4px;
  text-transform: uppercase;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.light};

  text-decoration: none;
  padding: 8px 10px;
  border-radius: 10px;

  transition: 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.lightText};
    background: ${({ theme }) => theme.colors.muted};
  }

  // &:hover {
  //   img {
  //     filter: brightness(0) saturate(100%) invert(84%) sepia(24%) saturate(520%)
  //       hue-rotate(350deg);
  //   }
  // }

  img {
    flex: 0 0 auto;
    opacity: ${({ $active }) => ($active ? 1 : 0.85)};

    // filter: brightness(0) saturate(100%) invert(84%) sepia(24%) saturate(520%)
    //   hue-rotate(350deg);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 22px;
  cursor: pointer;

  @media (max-width: 900px) {
    display: block;
  }
`;
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100dvh;

  background-color: #5b0f24;
  background: ${({ theme }) => theme.gradients.header};

  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;

  padding: 22px 18px;

  z-index: 2147483647;
  opacity: 1;
  isolation: isolate;
`;
export const MobileMenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};
`;

export const MobileNavList = styled.ul`
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
  display: flex;

  flex-direction: column;
`;

export const MobileNavItem = styled.li`
  display: flex;
`;

export const MobileNavLink = styled.a`
  width: 100%;
  padding: 14px 6px;

  font-size: 16px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.3px;

  color: ${({ $active, theme }) =>
    $active ? theme.colors.accent : theme.colors.light};

  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.muted};

  display: flex;
  align-items: center;
  gap: 10px;

  // &:hover {
  //   img {
  //     filter: brightness(0) saturate(100%) invert(84%) sepia(24%) saturate(520%)
  //       hue-rotate(350deg);
  //   }
  // }

  img {
    flex: 0 0 auto;
    opacity: ${({ $active }) => ($active ? 1 : 0.85)};
    // filter: brightness(0) saturate(100%) invert(84%) sepia(24%) saturate(520%)
    //   hue-rotate(350deg);

    // filter: brightness(0) saturate(100%) invert(32%) sepia(94%) saturate(2900%)
    //   hue-rotate(195deg) brightness(95%) contrast(105%);
  }
`;

export const PH = styled.span.attrs({ "data-text": "XX" })`
  font-size: 48px;
  font-weight: 900;
  position: relative;
  display: inline-block;

  background: linear-gradient(
    120deg,
    #fff6c8 0%,
    #ffe08a 20%,
    #f6b63e 40%,
    #fff2b0 55%,
    #d89a18 70%,
    #fff6c8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  filter: drop-shadow(-2px -2px 0 rgba(3, 39, 75, 0.95))
    drop-shadow(2px -2px 0 rgba(6, 107, 208, 0.98))
    drop-shadow(-2px 2px 0 rgba(20, 90, 160, 0.55))
    drop-shadow(2px 2px 0 rgba(20, 90, 160, 0.55))
    drop-shadow(0 6px 12px rgba(40, 160, 220, 0.45))
    drop-shadow(0 14px 28px rgba(20, 90, 180, 0.4));
  @media (max-width: 750px) {
    font-size: 32px;
  }
  @media (max-width: 550px) {
    font-size: 28px;
  }
`;

export const Enjoy = styled.span.attrs({ "data-text": "BET" })`
  font-size: 56px;
  font-weight: 900;
  position: relative;
  display: inline-block;

  background: linear-gradient(
    120deg,
    #f8fbff 0%,
    #e6eef6 18%,
    #cfd8e3 35%,
    #ffffff 50%,
    #b9c4d1 65%,
    #eef3f8 82%,
    #ffffff 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(-2px -2px 0 rgba(3, 41, 79, 0.95))
    drop-shadow(2px -2px 0 rgba(9, 108, 208, 1))
    drop-shadow(-2px 2px 0 rgba(20, 90, 160, 0.55))
    drop-shadow(2px 2px 0 rgba(20, 90, 160, 0.55))
    drop-shadow(0 6px 12px rgba(40, 160, 220, 0.45))
    drop-shadow(0 14px 28px rgba(20, 90, 180, 0.4));
  @media (max-width: 750px) {
    font-size: 38px;
  }
  @media (max-width: 550px) {
    font-size: 32px;
  }
`;
export const DotCom = styled.span.attrs({ "data-text": "88" })`
  font-size: 28px;
  font-weight: 900;
  position: relative;

  background: linear-gradient(180deg, #f2ffd6 0%, #caff8a 50%, #9be24a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    z-index: -1;
    color: transparent;

    text-shadow:
      -2px -2px 0 #173000,
      2px -2px 0 #173000,
      -2px 2px 0 #0b1800,
      2px 2px 0 #0b1800,
      0 4px 6px rgba(0, 0, 0, 0.85);
  }

  @media (max-width: 750px) {
    font-size: 22px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

export const MobileCloseButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;

  padding: 4px 8px;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  img {
    height: 80px;
    width: auto;
    object-fit: contain;
    transition: transform 0.2s ease-in-out;

    @media (max-width: 480px) {
      height: 60px;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;
