'use client';
import React, { useState } from 'react';
import { PetType } from '@/app/utils/types';
import { PetDetailContainer, PetDetailHeader } from './style';
import PetDetailInfoComponent from '../Info';

import Image from 'next/image';
import { breedImageMap, defaultImageUrl } from '@/app/assets/imageLinks';
import { PetImageContainer } from '../PetCard/style';

type PetDetailProps = {
  pet: PetType;
};

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  const imageUrl =
    pet.breed && breedImageMap[pet.breed]
      ? breedImageMap[pet.breed]
      : defaultImageUrl;
  return (
    <PetDetailContainer>
      <PetDetailHeader>{pet.name.toUpperCase()}</PetDetailHeader>
      <PetImageContainer>
        <Image
          src={imageUrl}
          alt={pet.breed ? pet.breed : 'Imagem padrão'}
          width={100}
          height={100}
          objectFit="contain"
        />
      </PetImageContainer>
      <PetDetailInfoComponent pet={pet}></PetDetailInfoComponent>
    </PetDetailContainer>
  );
};

export default PetDetail;
