import React, { useState } from 'react';
import {
  DetailsContainer,
  InfoTitle,
  LineContainer,
  PetDetailFieldName,
  PetDetailValue,
  PetDetailWeigh,
} from './style';

function PetDetailWeighComponent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <PetDetailWeigh>
      <InfoTitle onClick={toggleExpand}>
        Peso e Altura {isExpanded ? '▲' : '▼'}
      </InfoTitle>
      <DetailsContainer $isVisible={isExpanded}>
        <LineContainer>
          <PetDetailFieldName>Peso:</PetDetailFieldName>
          <PetDetailValue>Pesado</PetDetailValue>
        </LineContainer>
        <LineContainer>
          <PetDetailFieldName>Altura:</PetDetailFieldName>
          <PetDetailValue>Baixinho</PetDetailValue>
        </LineContainer>
      </DetailsContainer>
    </PetDetailWeigh>
  );
}

export default PetDetailWeighComponent;
