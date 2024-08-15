import React, { useEffect, useState } from 'react';
import {
  ColumnContainer,
  DetailsContainer,
  InfoTitle,
  PetDetailWeigh,
} from './style';
import { TPet, TWeight } from '@/app/types/types';
import { getWeight } from '@/app/utils/weight';
import WeightChart from './WeightChart';
import WeightHistory from './WeightHistory';

interface PetDetailWeighComponentProps {
  pet: TPet;
}

const PetDetailWeighComponent: React.FC<PetDetailWeighComponentProps> = ({
  pet,
}) => {
  const [isComponentExpanded, setIsComponentExpanded] = useState(false);
  const [isWeightHistoryExpanded, setIsWeightHistoryExpanded] = useState(false);
  const [weights, setWeights] = useState<TWeight[]>([]);
  const [hasData, setHasData] = useState(true); // Novo estado para verificar a disponibilidade de dados

  const toggleComponentExpand = () =>
    setIsComponentExpanded(!isComponentExpanded);
  const toggleWeightHistoryExpand = () =>
    setIsWeightHistoryExpanded(!isWeightHistoryExpanded);

  useEffect(() => {
    const fetchWeights = async () => {
      try {
        if (pet.id_pet) {
          const weightData = await getWeight(pet.id_pet);
          if (weightData.length === 0) {
            setHasData(false);
          } else {
            setHasData(true);
            setWeights(weightData);
          }
        } else {
          console.error('ID do pet não está definido');
        }
      } catch (error) {
        console.error('Erro ao buscar pesos do pet:', error);
        setHasData(false); // Defina como sem dados em caso de erro
      }
    };

    fetchWeights();
  }, [pet.id_pet]);

  return (
    <PetDetailWeigh>
      <InfoTitle onClick={toggleComponentExpand}>
        Peso {isComponentExpanded ? '▲' : '▼'}
      </InfoTitle>
      <DetailsContainer $isVisible={isComponentExpanded}>
        {!hasData ? (
          <ColumnContainer>
            <p>Não há peso registrado para este pet.</p>
          </ColumnContainer>
        ) : (
          <>
            <ColumnContainer>
              <WeightHistory
                weights={weights}
                isExpanded={isWeightHistoryExpanded}
                onToggleExpand={toggleWeightHistoryExpand}
              />
            </ColumnContainer>
            <WeightChart weightData={weights} />
          </>
        )}
      </DetailsContainer>
    </PetDetailWeigh>
  );
};

export default PetDetailWeighComponent;
