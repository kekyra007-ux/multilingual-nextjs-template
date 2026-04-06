import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";

import Button from "../UI/Button";

import Link from "../Link";

import {
  HeaderWrapper,
  HeaderContainer,
  TopBar,
  LogoWrapper,
  LanguageSwitcher,
  NavBar,
  Nav,
  NavList,
  NavItem,
  NavLink,
  MobileMenuButton,
  MobileCloseButton,
  MobileMenu,
  MobileMenuTop,
  MobileNavList,
  MobileNavItem,
  MobileNavLink,
} from "./Header.styled";

export const Header = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: t("nav.home"), icon: "/icons/home.svg" },
    { href: "/features", label: t("nav.features"), icon: "/icons/app.svg" },
    { href: "/get-started", label: t("nav.getStarted"), icon: "/icons/login.svg" },
  ];
  const isActive = (href) => router.pathname === href;
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <TopBar>
          <Link href="/" passHref legacyBehavior>
            <LogoWrapper>
              <img src="/logo.png" alt={t("site.name")} />
            </LogoWrapper>
          </Link>

          <LanguageSwitcher>
            <Link href="/" locale="es">
              <Button
                $variant={
                  router.query.locale === "es" ? "primary" : "secondary"
                }
                size="small"
              >
                ES
              </Button>
            </Link>

            <Link href="/" locale="en">
              <Button
                $variant={
                  router.query.locale === "en" ? "primary" : "secondary"
                }
                size="small"
              >
                EN
              </Button>
            </Link>
          </LanguageSwitcher>

          <MobileMenuButton
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </MobileMenuButton>
        </TopBar>

        <NavBar>
          <Nav>
            <NavList>
              {navItems.map((item) => (
                <NavItem key={item.href}>
                  <Link href={item.href} passHref legacyBehavior>
                    <NavLink $active={isActive(item.href)}>
                      <Image
                        src={item.icon}
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden="true"
                      />
                      {item.label}
                    </NavLink>
                  </Link>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        </NavBar>

        <MobileMenu $open={mobileMenuOpen}>
          <MobileMenuTop>
            <MobileCloseButton
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </MobileCloseButton>

            <div style={{ display: "flex", gap: "10px" }}>
              <Link href="/" locale="es">
                <Button
                  $variant={
                    router.query.locale === "es" ? "primary" : "secondary"
                  }
                  size="small"
                >
                  ES
                </Button>
              </Link>

              <Link href="/" locale="en">
                <Button
                  $variant={
                    router.query.locale === "en" ? "primary" : "secondary"
                  }
                  size="small"
                >
                  EN
                </Button>
              </Link>
            </div>
          </MobileMenuTop>

          <MobileNavList>
            {navItems.map((item) => (
              <MobileNavItem key={item.href}>
                <Link href={item.href} passHref legacyBehavior>
                  <MobileNavLink
                    $active={isActive(item.href)}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Image src={item.icon} alt="" width={18} height={18} />
                    {item.label}
                  </MobileNavLink>
                </Link>
              </MobileNavItem>
            ))}
          </MobileNavList>
        </MobileMenu>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
