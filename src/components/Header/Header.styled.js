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
  max-width: 500px;
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
  gap: 50px;

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

  font-size: 16px;
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

export const LogoLink = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  isolation: isolate;
  transition: transform 0.24s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const LogoMark = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 14px;
  background:
    linear-gradient(
      180deg,
      rgba(214, 178, 94, 0.18) 0%,
      rgba(214, 178, 94, 0.08) 100%
    ),
    linear-gradient(180deg, #241b36 0%, #140f20 100%);
  border: 1px solid rgba(214, 178, 94, 0.24);
  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  flex-shrink: 0;

  @media (max-width: 576px) {
    width: 38px;
    height: 38px;
    font-size: 13px;
    border-radius: 12px;
  }
`;

export const LogoTextGroup = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1;
`;

export const LogoTitle = styled.span`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 22px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const LogoSubtitle = styled.span`
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 11px;
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: 576px) {
    font-size: 10px;
    letter-spacing: 0.1em;
  }
`;

export const LogoGlow = styled.span`
  position: absolute;
  inset: -8px -12px;
  z-index: 0;
  border-radius: 20px;
  background: radial-gradient(
    circle,
    rgba(139, 108, 255, 0.14) 0%,
    transparent 70%
  );
  filter: blur(18px);
  opacity: 0.8;
  pointer-events: none;
`;
