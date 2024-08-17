import React, { useEffect, useState } from 'react';
import {
  DetailsContainer,
  InfoSubTitle,
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
        Raça {isExpanded ? '▲' : '▼'}
      </InfoTitle>
      <DetailsContainer $isVisible={isExpanded}>
        {dogBreedDetails ? (
          <>
            <PetBreedCountry breed={dogBreedDetails.breed_name} />

            <InfoSubTitle>Características Físicas</InfoSubTitle>
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

            <InfoSubTitle>Saúde e Cuidados</InfoSubTitle>
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
              <PetDetailValue>
                {dogBreedDetails.common_health_issues}
              </PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Tipo de Pelagem:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.coat_type}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>
                Necessidade de Cuidados com a Pelagem:
              </PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.grooming_needs}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Nível de Queda de Pelos:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.shedding_level}</PetDetailValue>
            </LineContainer>

            <InfoSubTitle>Energia e Exercício</InfoSubTitle>
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

            <InfoSubTitle>Personalidade e Interação</InfoSubTitle>
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
            <LineContainer>
              <PetDetailFieldName>Amigável com Crianças:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.child_friendly}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Amigável com Animais:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.animal_friendly}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Intensidade do Latido:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.barking_level}</PetDetailValue>
            </LineContainer>

            <InfoSubTitle>Informações Gerais</InfoSubTitle>
            <LineContainer>
              <PetDetailFieldName>Utilização:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.common_usage}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Custo Médio:</PetDetailFieldName>
              <PetDetailValue>R$ {dogBreedDetails.average_cost}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Popularidade:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.popularity}</PetDetailValue>
            </LineContainer>
            <LineContainer>
              <PetDetailFieldName>Inteligência:</PetDetailFieldName>
              <PetDetailValue>{dogBreedDetails.intelligence}</PetDetailValue>
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
