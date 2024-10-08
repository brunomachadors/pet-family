'use client';

import React from 'react';
import {
  Container,
  Header,
  HeaderParagraph,
  HeaderTitle,
  MainContent,
} from './style';
import AddPetComponent from '@/app/components/Pet/Add';
import AuthGuard from '@/app/components/AuthGuard';

function AddPet() {
  return (
    <AuthGuard>
      <Container>
        <Header>
          <HeaderTitle>Adicionar pets</HeaderTitle>
          <HeaderParagraph>
            Nesta pagina podemos adicionar os pets
          </HeaderParagraph>
        </Header>

        <MainContent>
          <AddPetComponent></AddPetComponent>
        </MainContent>
      </Container>
    </AuthGuard>
  );
}

export default AddPet;
