'use client';

import { SignIn } from '@clerk/nextjs';
import React from 'react';
import { LoginPage } from './style';

function Login() {
  return (
    <LoginPage>
      <SignIn
        appearance={{
          elements: {
            footer: {
              display: 'none',
            },
          },
          layout: {
            socialButtonsPlacement: 'bottom',
            logoPlacement: 'inside',
          },
        }}
        routing="hash"
        fallbackRedirectUrl="/pages/mypets"
      />
    </LoginPage>
  );
}

export default Login;
