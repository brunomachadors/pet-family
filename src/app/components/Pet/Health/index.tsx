import React, { useState } from 'react';
import {
  DetailsContainer,
  InfoTitle,
  LineContainer,
  PetDetailFieldName,
  PetDetailValue,
  PetDetailHealth,
} from './style';

function PetDetailHealthComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <PetDetailHealth>
      <InfoTitle onClick={toggleExpand}>
        Saúde {isExpanded ? '▲' : '▼'}
      </InfoTitle>
      <DetailsContainer isVisible={isExpanded}>
        <LineContainer>
          <PetDetailFieldName>Vacinação:</PetDetailFieldName>
          <PetDetailValue>Em dia</PetDetailValue>
        </LineContainer>
        <LineContainer>
          <PetDetailFieldName>Vermifugação:</PetDetailFieldName>
          <PetDetailValue>Feita</PetDetailValue>
        </LineContainer>
        <LineContainer>
          <PetDetailFieldName>Castração:</PetDetailFieldName>
          <PetDetailValue>Sim</PetDetailValue>
        </LineContainer>
        <LineContainer>
          <PetDetailFieldName>Condição geral:</PetDetailFieldName>
          <PetDetailValue>Boa</PetDetailValue>
        </LineContainer>
      </DetailsContainer>
    </PetDetailHealth>
  );
}

export default PetDetailHealthComponent;
