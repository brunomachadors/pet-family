import React, { useEffect, useState } from 'react';
import {
  DetailsContainer,
  InfoTitle,
  LineContainer,
  PetDetail,
  PetDetailFieldName,
  PetDetailValue,
} from './style';
import { getDogBreedByName } from '@/app/utils/breeds';
import { TDogBreed } from '@/app/types/types';
import PetBreedCountry from './Country';

interface PetDetailCuriosityComponentsProps {
  breed: string;
}

function PetDetailCuriosityComponents({
  breed,
}: PetDetailCuriosityComponentsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [dogBreedDetails, setDogBreedDetails] = useState<TDogBreed | null>(
    null
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const fetchDogBreedDetails = async () => {
      const response = await getDogBreedByName(breed);
      if (response.success && response.breed) {
        setDogBreedDetails(response.breed);
      }
    };

    fetchDogBreedDetails();
  }, [breed]);

  return (
    <PetDetail>
      <InfoTitle onClick={toggleExpand}>
        Curiosidades {isExpanded ? '▲' : '▼'}
      </InfoTitle>
      <DetailsContainer $isVisible={isExpanded}>
        {dogBreedDetails ? (
          <>
            <PetBreedCountry breed={dogBreedDetails.breed_name} />
            <LineContainer>
              <PetDetailFieldName>Porte:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.size}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Peso Médio:</PetDetailFieldName>
              <PetDetailValue>
                {dogBreedDetails.average_weight_min}kg -{' '}
                {dogBreedDetails.average_weight_max}kg
              </PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Altura Média:</PetDetailFieldName>
              <PetDetailValue>
                {dogBreedDetails.average_height_min}cm -{' '}
                {dogBreedDetails.average_height_max}cm
              </PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Expectativa de Vida:</PetDetailFieldName>
              <PetDetailValue>
                {dogBreedDetails.lifespan_min} - {dogBreedDetails.lifespan_max}{' '}
                anos
              </PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>
                Problemas de Saúde Comuns:
              </PetDetailFieldName>
            </LineContainer>
            <LineContainer>
              <PetDetailValue>
                {dogBreedDetails.common_health_issues}
              </PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Nível de Energia:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.energy_level}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>
                Necessidades de Exercício:
              </PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.exercise_needs}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Temperamento:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.temperament}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>
                Dificuldade de Treinamento:
              </PetDetailFieldName>
              <PetDetailValue>
                {dogBreedDetails.training_difficulty}
              </PetDetailValue>
            </LineContainer>
          </>
        ) : (
          <PetDetailValue>Carregando...</PetDetailValue>
        )}
      </DetailsContainer>
    </PetDetail>
  );
}

export default PetDetailCuriosityComponents;
