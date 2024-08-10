import React from 'react';
import Image from 'next/image';
import {
  CardContainer,
  CardContent,
  PetName,
  PetBreed,
  DetailsText,
  PetSpecies,
  PetImageContainer,
} from './style';

import { breedImageMap, defaultImageUrl } from '@/app/assets/imageLinks';
import { TPet } from '@/app/types/types';

type PetCardProps = {
  pet: TPet;
  onClick: (pet: TPet) => void;
};

const PetCard: React.FC<PetCardProps> = ({ pet, onClick }) => {
  const imageUrl =
    pet.breed && breedImageMap[pet.breed]
      ? breedImageMap[pet.breed]
      : defaultImageUrl;

  return (
    <CardContainer onClick={() => onClick(pet)}>
      <CardContent>
        <PetName>{pet.name}</PetName>
        <PetImageContainer>
          <Image
            src={imageUrl}
            alt={pet.breed ? pet.breed : 'Imagem padrão'}
            width={100}
            height={100}
          />
        </PetImageContainer>
        <PetSpecies>{pet.species}</PetSpecies>
        {pet.breed && <PetBreed>{pet.breed}</PetBreed>}
      </CardContent>
      <DetailsText>Ver Detalhes</DetailsText>
    </CardContainer>
  );
};

export default PetCard;
