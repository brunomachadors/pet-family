'use client';

import React from 'react';
import { useUser } from '@clerk/nextjs';
import {
  Container,
  Header,
  MainContent,
  FeatureSection,
  ContactSection,
} from './style';

const Home: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Header>
        <h1>Bem-vindo, {user.firstName}!</h1>
        <p>Aqui está a sua página principal.</p>
      </Header>
      <MainContent>
        <FeatureSection>
          <h2>O que oferecemos</h2>
          <ul>
            <li>Registro de histórico de vacinas e tratamentos</li>
            <li>Contatos de veterinários</li>
            <li>Informações específicas para cada tipo de animal e raça</li>
            <li>Dicas e informações personalizadas para o seu pet</li>
            <li>Localização de lugares pet-friendly</li>
            <li>Cupons de desconto em lojas parceiras</li>
          </ul>
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
