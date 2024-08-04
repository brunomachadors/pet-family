'use client';
import React from 'react';
import {
  LandingInfoContainer,
  LandingInfoContent,
  LandingInfoHeader,
  LandingInfoHeaderSub,
} from './style';

function LandingInfo() {
  console.log('LandingInfo rendered'); // Adicione logging para verificar se o componente está sendo renderizado corretamente
  return (
    <LandingInfoContainer>
      <LandingInfoHeader>Bem-vindo ao Pet Family! </LandingInfoHeader>

      <LandingInfoHeaderSub>
        Este site será o seu melhor amigo para administrar a vida do seu pet.
      </LandingInfoHeaderSub>
      <LandingInfoContent>
        Pets têm uma função fundamental e fazem parte das nossas famílias, por
        isso estamos criando um site que ajude a gerir toda a rotina e cuidados
        do seu pet.
      </LandingInfoContent>
    </LandingInfoContainer>
  );
}

export default LandingInfo;
