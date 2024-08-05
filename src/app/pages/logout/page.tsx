'use client';

import { SignOutButton } from '@clerk/nextjs';
import React from 'react';
import { LogoutPage } from './style';

function Logout() {
  return (
    <LogoutPage>
      <SignOutButton></SignOutButton>
    </LogoutPage>
  );
}

export default Logout;
