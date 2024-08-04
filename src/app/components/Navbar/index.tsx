// NavBar.tsx
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

const NavBar = () => {
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
          <Link href="/login" passHref>
            <NavLink>LOGIN</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/create-account" passHref>
            <NavLink>CRIAR CONTA</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about" passHref>
            <NavLink>SOBRE</NavLink>
          </Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
