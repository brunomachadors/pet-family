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
import PetList from '@/app/components/Pet/PetCardList';
import { verifyUser } from '@/app/utils/verifyUser';

import { useRouter } from 'next/navigation';
import { AddPetButton } from '@/app/components/Buttons';

const Mypets: React.FC = () => {
  const { user } = useUser();
  const [userId, setUserId] = useState<number | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      const initializeUser = async () => {
        const verifiedUserId = await verifyUser({
          firstName: user.firstName || '',
          lastName: user.lastName || '',
          email: user.emailAddresses[0]?.emailAddress || '',
          externalId: user.id,
        });

        if (verifiedUserId !== null) {
          setUserId(verifiedUserId);
        }
      };

      initializeUser();
    }
  }, [user]);

  const handleAddPetClick = () => {
    router.push('/pages/addpet');
  };

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
        <FeatureSection>{userId && <PetList userId={userId} />}</FeatureSection>
        <AddPetButton />
        <ContactSection>
          <h2>Entre em Contato</h2>
          <p>Se tiver alguma dúvida ou sugestão, entre em contato conosco!</p>
          <a href="/contact">Contato</a>
        </ContactSection>
      </MainContent>
    </Container>
  );
};

export default Mypets;
