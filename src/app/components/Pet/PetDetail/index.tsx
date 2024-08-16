'use client';
import React, { useState } from 'react';
import { TPet } from '@/app/types/types';
import { Divider, PetDetailContainer, PetDetailHeader } from './style';
import PetDetailInfoComponent from '../Info';
import Image from 'next/image';
import { breedImageMap, defaultImageUrl } from '@/app/assets/imageLinks';
import { PetImageContainer } from '../PetCard/style';
import PetDetailWeighComponent from '../Weight';
import PetDetailHealthComponent from '../Health';
import PetDetailCuriosityComponents from '../Curiosity';

type PetDetailProps = {
  pet: TPet;
};

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  const [currentPet, setCurrentPet] = useState<TPet>(pet);

  // Determine the image URL based on breed or use a default image
  const imageUrl =
    pet.breed && breedImageMap[pet.breed]
      ? breedImageMap[pet.breed]
      : defaultImageUrl;

  const handleUpdatePet = (updatedPet: TPet) => {
    setCurrentPet(updatedPet);
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
      <Divider />
      <PetDetailWeighComponent pet={pet} />
      <Divider />
      <PetDetailHealthComponent />

      {pet.species === 'Cachorro' && (
        <>
          <Divider />
          <PetDetailCuriosityComponents breed={pet.breed || 'Sem raça'} />
        </>
      )}
    </PetDetailContainer>
  );
};

export default PetDetail;
