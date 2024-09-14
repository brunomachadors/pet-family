'use client';

import { SignIn } from '@clerk/nextjs';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Container, CreateAccountLink, LoginPage } from './style';

function Login() {
  const router = useRouter();

  return (
    <LoginPage>
      <Container>
        <SignIn
          appearance={{
            elements: {
              footer: {
                display: 'none',
              },
            },
            layout: {
              logoPlacement: 'inside',
            },
          }}
          routing="hash"
          fallbackRedirectUrl="/pages/mypets"
        />
        Não possui conta?
        <CreateAccountLink onClick={() => router.push('/pages/register')}>
          Criar conta
        </CreateAccountLink>
      </Container>
    </LoginPage>
  );
}

export default Login;
