'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  NavContainer,
  NavDivBlack,
  NavItem,
  NavLink,
  NavLinkBlack,
  NavList,
  HamburgerButton,
  HamburgerLine,
  MobileMenuContainer,
} from './style';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Certificar que estamos no lado do cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (!isClient) return null;

  return (
    <NavContainer>
      <NavDivBlack>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <NavLinkBlack>PETSAURO</NavLinkBlack>
        </Link>
      </NavDivBlack>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerButton>
      <MobileMenuContainer $isOpen={isMenuOpen}>
        <NavList>
          <NavItem>
            <Link href="/pages/login" style={{ textDecoration: 'none' }}>
              <NavLink onClick={closeMenu}>LOGIN</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/pages/about" style={{ textDecoration: 'none' }}>
              <NavLink onClick={closeMenu}>SOBRE</NavLink>
            </Link>
          </NavItem>
        </NavList>
      </MobileMenuContainer>
    </NavContainer>
  );
};

export default NavBar;
