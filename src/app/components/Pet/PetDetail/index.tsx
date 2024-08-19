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
import PetAppointments from '../Appointments';

type PetDetailProps = {
  pet: TPet;
};

const PetDetail: React.FC<PetDetailProps> = ({ pet }) => {
  const [currentPet, setCurrentPet] = useState<TPet>(pet);

  const imageUrl =
    pet.breed && breedImageMap[pet.breed]
      ? breedImageMap[pet.breed]
      : defaultImageUrl;

  const handleUpdatePet = (updatedPet: TPet) => {
    setCurrentPet(updatedPet);
  };

  return (
    <PetDetailContainer>
      <PetDetailHeader>{currentPet.name.toUpperCase()}</PetDetailHeader>
      <PetImageContainer>
        <Image
          src={imageUrl}
          alt={currentPet.breed ? currentPet.breed : 'Imagem padrão'}
          width={100}
          height={100}
          priority
        />
      </PetImageContainer>
      <PetDetailInfoComponent pet={currentPet} onUpdatePet={handleUpdatePet} />
      <Divider />
      <PetDetailWeighComponent pet={currentPet} />

      <Divider />
      <PetAppointments pet={currentPet} />
      <Divider />
      <PetDetailHealthComponent />

      {currentPet.species === 'Cachorro' && (
        <>
          <Divider />
          <PetDetailCuriosityComponents
            breed={currentPet.breed || 'Sem raça'}
          />
        </>
      )}
    </PetDetailContainer>
  );
};

export default PetDetail;
