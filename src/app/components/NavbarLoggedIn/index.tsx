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
  HamburgerButton,
  HamburgerLine,
  MobileMenuContainer,
} from '../Navbar/style';
import ModalLogout from '../Modal/Logout';

export const NavBarLoggedIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { signOut } = useClerk();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSignOut = () => {
    signOut({ redirectUrl: '/' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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
              <Link href="/pages/mypets" style={{ textDecoration: 'none' }}>
                <NavLink onClick={closeMenu}>MEUS PETS</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/pages/about" style={{ textDecoration: 'none' }}>
                <NavLink onClick={closeMenu}>SOBRE</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
              >
                LOGOUT
              </NavLink>
            </NavItem>
          </NavList>
        </MobileMenuContainer>
      </NavContainer>

      {showModal && (
        <ModalLogout closeModal={closeModal} handleSignOut={handleSignOut} />
      )}
    </>
  );
};

export default NavBarLoggedIn;
