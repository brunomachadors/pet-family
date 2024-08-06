'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Container, Header, MainContent, ContactSection } from './style';
import { User } from '@/app/utils/types';
import { getUser } from '@/app/utils/getUser';
import { createUser } from '@/app/utils/createUser';

const Home: React.FC = () => {
  const { user } = useUser();
  const [userExists, setUserExists] = useState<boolean | null>(null);

  useEffect(() => {
    if (user) {
      const userData: User = {
        id: user.id,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        emailAddresses: user.emailAddresses[0]?.emailAddress || '',
      };

      checkAndCreateUser(userData);
    }
  }, [user]);

  const checkAndCreateUser = async (userData: User) => {
    try {
      const data = await getUser(userData.id);
      if (data) {
        setUserExists(true);
      } else {
        const createdUser = await createUser(userData);
        setUserExists(!!createdUser);
      }
    } catch (error) {
      console.error('Erro ao verificar ou criar usuário:', error);
      setUserExists(false);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>
        <h1>Bem-vindo, {user.firstName || 'Usuário'}!</h1>
        <p>Aqui está a sua página principal.</p>
      </Header>
      <MainContent>
        <ContactSection>
          <h2>Entre em Contato</h2>
          <p>Se tiver alguma dúvida ou sugestão, entre em contato conosco!</p>
          <a href="/contact">Contato</a>
        </ContactSection>
      </MainContent>
    </Container>
  );
};

export default Home;
