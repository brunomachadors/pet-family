import React from 'react';
import { PetType } from '@/app/utils/types';
import {
  PetDetailInfo,
  PetDetailInfoFieldName,
  PetDetailInfoValue,
  PetDetailInfoContainer,
  PetDetailInfoLine,
} from './style';

type PetDetailInfoProps = {
  pet: PetType;
};

const PetDetailInfoComponent: React.FC<PetDetailInfoProps> = ({ pet }) => {
  return (
    <PetDetailInfo>
      <PetDetailInfoContainer>
        <PetDetailInfoFieldName>Espécie: </PetDetailInfoFieldName>
        <PetDetailInfoValue>
          {pet.species || 'Não informado'}
        </PetDetailInfoValue>
      </PetDetailInfoContainer>
      <PetDetailInfoLine>
        <PetDetailInfoContainer>
          <PetDetailInfoFieldName>Raça: </PetDetailInfoFieldName>
          <PetDetailInfoValue>
            {pet.breed || 'Não informado'}
          </PetDetailInfoValue>
        </PetDetailInfoContainer>
        <PetDetailInfoContainer>
          <PetDetailInfoFieldName>Cor: </PetDetailInfoFieldName>
          <PetDetailInfoValue>
            {pet.color || 'Não informado'}
          </PetDetailInfoValue>
        </PetDetailInfoContainer>
      </PetDetailInfoLine>
      <PetDetailInfoLine>
        <PetDetailInfoContainer>
          <PetDetailInfoFieldName>Data de Nascimento: </PetDetailInfoFieldName>
          <PetDetailInfoValue>
            {pet.dob ? new Date(pet.dob).toLocaleDateString() : 'Não informado'}
          </PetDetailInfoValue>
        </PetDetailInfoContainer>
        <PetDetailInfoContainer>
          <PetDetailInfoFieldName>Sexo: </PetDetailInfoFieldName>
          <PetDetailInfoValue>{pet.sex || 'Não informado'}</PetDetailInfoValue>
        </PetDetailInfoContainer>
      </PetDetailInfoLine>
    </PetDetailInfo>
  );
};

export default PetDetailInfoComponent;
