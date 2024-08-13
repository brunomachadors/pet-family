'use client';
import React, { useState } from 'react';
import { TPet } from '@/app/types/types';
import { Divider, PetDetailContainer, PetDetailHeader } from './style';
import PetDetailInfoComponent from '../Info';

import Image from 'next/image';
import { breedImageMap, defaultImageUrl } from '@/app/assets/imageLinks';
import { PetImageContainer } from '../PetCard/style';

import PetDetailWeighComponent from '../Weigh';
import PetDetailHealthComponent from '../Health';

type PetDetailProps = {
  pet: TPet;
};

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  const [currentPet, setCurrentPet] = useState<TPet>(pet); // Mantenha o estado do pet atualizado

  const imageUrl =
    pet.breed && breedImageMap[pet.breed]
      ? breedImageMap[pet.breed]
      : defaultImageUrl;

  // Função que será chamada quando um pet for atualizado
  const handleUpdatePet = (updatedPet: TPet) => {
    setCurrentPet(updatedPet); // Atualize o estado com o pet atualizado
  };

  return (
    <PetDetailContainer>
      <PetDetailHeader>{pet.name.toUpperCase()}</PetDetailHeader>
      <PetImageContainer>
        <Image
          src={imageUrl}
          alt={pet.breed ? pet.breed : 'Imagem padrão'}
          width={100}
          height={100}
          priority
        />
      </PetImageContainer>
      <PetDetailInfoComponent pet={currentPet} onUpdatePet={handleUpdatePet} />
      <Divider></Divider>
      <PetDetailWeighComponent></PetDetailWeighComponent>
      <Divider></Divider>
      <PetDetailHealthComponent></PetDetailHealthComponent>
    </PetDetailContainer>
  );
};

export default PetDetail;
