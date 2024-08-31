'use client';

import React, { useState } from 'react';
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavContainer>
      <NavDivBlack>
        <Link href="/" passHref>
          <NavLinkBlack>PET FAMILY</NavLinkBlack>
        </Link>
      </NavDivBlack>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerButton>
      <MobileMenuContainer isOpen={isMenuOpen}>
        <NavList>
          <NavItem>
            <Link href="/pages/login" passHref>
              <NavLink onClick={closeMenu}>LOGIN</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/pages/about" passHref>
              <NavLink onClick={closeMenu}>SOBRE</NavLink>
            </Link>
          </NavItem>
        </NavList>
      </MobileMenuContainer>
    </NavContainer>
  );
};

export default NavBar;
