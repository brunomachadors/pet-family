'use client';

import { useUser } from '@clerk/nextjs';
import NavBarLoggedIn from '../NavbarLoggedIn';
import NavBar from '../Navbar';

const NavBarSwitcher = () => {
  const { isSignedIn } = useUser();

  return isSignedIn ? <NavBarLoggedIn /> : <NavBar />;
};

export default NavBarSwitcher;
