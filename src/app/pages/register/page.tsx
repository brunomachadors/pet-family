'use client';

import { SignUp } from '@clerk/nextjs';
import React from 'react';
import { RegisterPage } from './style';

function Register() {
  return (
    <RegisterPage>
      <SignUp
        appearance={{
          elements: {
            footer: {
              display: 'none',
            },
          },
          layout: {
            socialButtonsPlacement: 'bottom',
          },
        }}
        routing="hash"
        fallbackRedirectUrl="/pages/mypets"
      />
    </RegisterPage>
  );
}

export default Register;
