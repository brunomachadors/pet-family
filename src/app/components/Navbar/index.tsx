'use client';

import React from 'react';
import Link from 'next/link';
import {
  NavContainer,
  NavDivBlack,
  NavItem,
  NavLink,
  NavLinkBlack,
  NavList,
} from './style';

export const NavBar = () => {
  return (
    <NavContainer>
      <NavDivBlack>
        <Link href="/" passHref>
          <NavLinkBlack>PET FAMILY</NavLinkBlack>
        </Link>
      </NavDivBlack>
      <NavList>
        <NavItem></NavItem>
        <NavItem>
          <Link href="/pages/login" passHref>
            <NavLink>LOGIN</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/pages/about" passHref>
            <NavLink>SOBRE</NavLink>
          </Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
