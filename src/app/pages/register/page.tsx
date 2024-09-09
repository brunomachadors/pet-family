'use client';

import { SignUp } from '@clerk/nextjs';
import React from 'react';
import { Container, LoginLink, RegisterPage } from './style';
import { useRouter } from 'next/navigation';

function Register() {
  const router = useRouter();
  return (
    <RegisterPage>
      <Container>
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
        Já possui conta?
        <LoginLink onClick={() => router.push('/pages/login')}>Login</LoginLink>
      </Container>
    </RegisterPage>
  );
}

export default Register;
