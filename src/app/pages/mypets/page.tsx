'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  Container,
  Header,
  MainContent,
  FeatureSection,
  HeaderTitle,
  HeaderParagraph,
} from './style';
import PetList from '@/app/components/Pet/PetCardList';
import { AddPetButton } from '@/app/components/Buttons';
import AuthGuard from '@/app/components/AuthGuard';
import { initializeUser } from '@/app/utils/user/user';

const Mypets: React.FC = () => {
  const { user } = useUser();
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserId = async () => {
      if (user) {
        const userObj = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.emailAddresses[0]?.emailAddress,
          id: user.id,
          externalId: user.id,
        };

        const verifiedUserId = await initializeUser(userObj);

        if (verifiedUserId !== null) {
          setUserId(verifiedUserId);
        }
      }
    };

    fetchUserId();
  }, [user]);

  return (
    <AuthGuard>
      <Container>
        <Header>
          <HeaderTitle>
            Bem-vindo{user?.firstName ? ', ' + user.firstName : ''}!
          </HeaderTitle>
          <HeaderParagraph>Aqui estão todos os seus pets:</HeaderParagraph>
        </Header>
        <MainContent>
          <FeatureSection>
            {userId && <PetList userId={userId} />}
          </FeatureSection>
          <AddPetButton />
        </MainContent>
      </Container>
    </AuthGuard>
  );
};

export default Mypets;
