import React, { useState } from 'react';
import { PetType } from '@/app/utils/types';
import {
  InfoTitle,
  LineContainer,
  PetDetailInfo,
  PetDetailInfoFieldName,
  PetDetailInfoValue,
  DetailsContainer,
} from './style';

type PetDetailInfoProps = {
  pet: PetType;
};

const PetDetailInfoComponent: React.FC<PetDetailInfoProps> = ({ pet }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <PetDetailInfo>
      <InfoTitle onClick={toggleExpand}>
        Info {isExpanded ? '▲' : '▼'}
      </InfoTitle>
      <DetailsContainer isVisible={isExpanded}>
        <LineContainer>
          <PetDetailInfoFieldName>Espécie:</PetDetailInfoFieldName>
          <PetDetailInfoValue>
            {pet.species || 'Não informado'}
          </PetDetailInfoValue>
        </LineContainer>
        <LineContainer>
          <PetDetailInfoFieldName>Raça:</PetDetailInfoFieldName>
          <PetDetailInfoValue>
            {pet.breed || 'Não informado'}
          </PetDetailInfoValue>
        </LineContainer>
        <LineContainer>
          <PetDetailInfoFieldName>Cor:</PetDetailInfoFieldName>
          <PetDetailInfoValue>
            {pet.color || 'Não informado'}
          </PetDetailInfoValue>
          <PetDetailInfoFieldName>Sexo:</PetDetailInfoFieldName>
          <PetDetailInfoValue>{pet.sex || 'Não informado'}</PetDetailInfoValue>
        </LineContainer>
        <LineContainer>
          <PetDetailInfoFieldName>Nascimento:</PetDetailInfoFieldName>
          <PetDetailInfoValue>
            {pet.dob ? new Date(pet.dob).toLocaleDateString() : 'Não informado'}
          </PetDetailInfoValue>
        </LineContainer>
      </DetailsContainer>
    </PetDetailInfo>
  );
};

export default PetDetailInfoComponent;
