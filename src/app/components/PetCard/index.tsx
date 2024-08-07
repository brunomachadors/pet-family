import React from 'react';
import {
  CardContainer,
  CardContent,
  PetName,
  PetBreed,
  DetailsText,
  PetSpecies,
} from './style';
import { PetType } from '@/app/utils/types';

type PetCardProps = {
  pet: PetType;
  onClick: (pet: PetType) => void;
};

const PetCard: React.FC<PetCardProps> = ({ pet, onClick }) => {
  return (
    <CardContainer onClick={() => onClick(pet)}>
      <CardContent>
        <PetName>{pet.name}</PetName>
        <PetSpecies>{pet.species}</PetSpecies>
        {pet.breed && <PetBreed>{pet.breed}</PetBreed>}{' '}
      </CardContent>
      <DetailsText>Ver Detalhes</DetailsText>
    </CardContainer>
  );
};

export default PetCard;
