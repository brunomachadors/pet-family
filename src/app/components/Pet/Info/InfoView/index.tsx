import React from 'react';
import {
  LineContainer,
  PetDetailInfoFieldName,
  PetDetailInfoValue,
} from './style';
import { TPet } from '@/app/types/types';
import Image from 'next/image';

type PetDetailViewProps = {
  pet: TPet;
  onEdit: () => void;
};

const PetDetailView: React.FC<PetDetailViewProps> = ({ pet, onEdit }) => {
  return (
    <>
      <LineContainer>
        <PetDetailInfoFieldName>Espécie:</PetDetailInfoFieldName>
        <PetDetailInfoValue>
          {pet.species || 'Não informado'}
        </PetDetailInfoValue>
      </LineContainer>
      <LineContainer>
        <PetDetailInfoFieldName>Raça:</PetDetailInfoFieldName>
        <PetDetailInfoValue>{pet.breed || 'Não informado'}</PetDetailInfoValue>
      </LineContainer>
      <LineContainer>
        <PetDetailInfoFieldName>Cor:</PetDetailInfoFieldName>
        <PetDetailInfoValue>{pet.color || 'Não informado'}</PetDetailInfoValue>
      </LineContainer>
      <LineContainer>
        <PetDetailInfoFieldName>Sexo:</PetDetailInfoFieldName>
        <PetDetailInfoValue>{pet.sex || 'Não informado'}</PetDetailInfoValue>
      </LineContainer>
      <LineContainer>
        <PetDetailInfoFieldName>Nascimento:</PetDetailInfoFieldName>
        <PetDetailInfoValue>
          {pet.dob ? new Date(pet.dob).toLocaleDateString() : 'Não informado'}
        </PetDetailInfoValue>
      </LineContainer>

      <LineContainer>
        <Image
          src="https://res.cloudinary.com/dtglidvcw/image/upload/v1723561403/PET%20FAMILTY/buttons/editbutton.png"
          onClick={onEdit}
          width={24}
          height={24}
          alt="editIcon"
        ></Image>
      </LineContainer>
    </>
  );
};

export default PetDetailView;
