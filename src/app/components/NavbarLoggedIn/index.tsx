'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useClerk } from '@clerk/nextjs';
import {
  NavContainer,
  NavDivBlack,
  NavItem,
  NavLink,
  NavLinkBlack,
  NavList,
} from './style';

import ModalLogout from '../Modal/Logout';

export const NavBarLoggedIn = () => {
  const [showModal, setShowModal] = useState(false);
  const { signOut } = useClerk();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' });
  };

  return (
    <>
      <NavContainer>
        <NavDivBlack>
          <Link href="/" passHref>
            <NavLinkBlack>PET FAMILY</NavLinkBlack>
          </Link>
        </NavDivBlack>
        <NavList>
          <NavItem>
            <Link href="/pages/mypets">
              <NavLink>MEUS PETS</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/pages/about">
              <NavLink>SOBRE</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink style={{ cursor: 'pointer' }} onClick={openModal}>
              LOGOUT
            </NavLink>
          </NavItem>
        </NavList>
      </NavContainer>

      {showModal && (
        <ModalLogout closeModal={closeModal} handleSignOut={handleSignOut} />
      )}
    </>
  );
};

export default NavBarLoggedIn;
