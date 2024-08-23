'use client';

import React, { useState } from 'react';
import { Container, FeatureHeader, FeatureItem, FeatureList } from './style';

export type FeatureType = {
  id: number;
  name: string;
};

function Features() {
  const [features] = useState<FeatureType[]>([
    { id: 1, name: 'Registro de histórico de vacinas e tratamentos' },
    { id: 2, name: 'Contatos de veterinários' },
    { id: 3, name: 'Informações específicas para cada tipo de animal e raça' },
    { id: 4, name: 'Dicas e informações personalizadas para o seu pet' },
    { id: 5, name: 'Localização de lugares pet-friendly' },
    { id: 6, name: 'Cupons de desconto em lojas parceiras' },
    {
      id: 7,
      name: 'Guardar informações sobre o seu animal, incluindo peso, alergias, raça, nome e fotos.',
    },
  ]);

  return (
    <Container>
      <FeatureHeader>NOSSOS SERVIÇOS</FeatureHeader>
      <FeatureList>
        {features.map((feature) => (
          <FeatureItem key={feature.id}>{feature.name}</FeatureItem>
        ))}
      </FeatureList>
    </Container>
  );
}

export default Features;
