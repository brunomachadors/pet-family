'use client';

import React from 'react';
import Link from 'next/link';
import { SignOutButton } from '@clerk/nextjs';
import {
  NavContainer,
  NavDivBlack,
  NavItem,
  NavLink,
  NavLinkBlack,
  NavList,
} from './style';

export const NavBarLoggedIn = () => {
  return (
    <NavContainer>
      <NavDivBlack>
        <Link href="/" passHref>
          <NavLinkBlack>PET FAMILY</NavLinkBlack>
        </Link>
      </NavDivBlack>
      <NavList>
        <NavItem>
          <SignOutButton>
            <NavLink style={{ cursor: 'pointer' }}>LOGOUT</NavLink>
          </SignOutButton>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavBarLoggedIn;
