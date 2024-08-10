'use client';

import { SignIn } from '@clerk/nextjs';
import React from 'react';
import { LoginPage } from './style';

function Login() {
  return (
    <LoginPage>
      <SignIn routing="hash" fallbackRedirectUrl="/pages/mypets" />
    </LoginPage>
  );
}

export default Login;
