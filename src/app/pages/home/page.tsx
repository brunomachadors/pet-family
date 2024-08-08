'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  Container,
  Header,
  MainContent,
  ContactSection,
  FeatureSection,
  HeaderTitle,
  HeaderParagraph,
} from './style';
import { User } from '@/app/utils/types';
import PetList from '@/app/components/Pet/PetCardList';

const Home: React.FC = () => {
  const { user } = useUser();
  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    if (user) {
      const fetchUser = async () => {
        try {
          const response = await fetch(`/api/users/${user.id}`);
          const data = await response.json();

          if (data.error) {
            const userData: User = {
              firstName: user.firstName || '',
              lastName: user.lastName || '',
              email: user.emailAddresses[0].emailAddress || '',
              externalId: user.id,
            };
            const createdUserResponse = await fetch('/api/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(userData),
            });
            const createdUser = await createdUserResponse.json();
            setUserId(createdUser.id_user);
          } else {
            setUserId(data.id_user);
          }
        } catch (error) {
          console.error('Erro ao verificar ou criar usuário:', error);
          setUserExists(false);
        }
      };

      fetchUser();
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem-vindo{user.firstName ? ', ' + user.firstName : ''}!
        </HeaderTitle>
        <HeaderParagraph>Aqui estão todos os seus pets:</HeaderParagraph>
      </Header>
      <MainContent>
        <FeatureSection>
          {userId && <PetList userId={userId} />}{' '}
        </FeatureSection>
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
