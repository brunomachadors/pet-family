import React, { useEffect, useState } from 'react';
import {
  ColumnContainer,
  DetailsContainer,
  InfoTitle,
  PetDetailWeigh,
} from './style';
import { TPet, TWeight } from '@/app/types/types';
import { getWeight, addWeight } from '@/app/utils/weight';
import WeightChart from './WeightChart';
import WeightHistory from './WeightHistory';
import AddPetWeight from './Add';

interface PetDetailWeighComponentProps {
  pet: TPet;
}

const PetDetailWeighComponent: React.FC<PetDetailWeighComponentProps> = ({
  pet,
}) => {
  const [isComponentExpanded, setIsComponentExpanded] = useState(false);
  const [isWeightHistoryExpanded, setIsWeightHistoryExpanded] = useState(false);
  const [weights, setWeights] = useState<TWeight[]>([]);
  const [hasData, setHasData] = useState(true);

  const toggleComponentExpand = async () => {
    setIsComponentExpanded((prev) => !prev);

    if (!isComponentExpanded) {
      // Quando expandir, busque novamente os pesos
      try {
        if (pet.id_pet !== undefined) {
          const weightData = await getWeight(pet.id_pet);
          setWeights(weightData);
          setHasData(weightData.length > 0);
        } else {
          console.error('ID do pet não está definido');
        }
      } catch (error) {
        console.error('Erro ao buscar pesos do pet:', error);
        setHasData(false);
      }
    }
  };

  const toggleWeightHistoryExpand = () =>
    setIsWeightHistoryExpanded(!isWeightHistoryExpanded);

  useEffect(() => {
    // Busca inicial dos pesos
    const fetchWeights = async () => {
      try {
        if (pet.id_pet !== undefined) {
          const weightData = await getWeight(pet.id_pet);
          setWeights(weightData);
          setHasData(weightData.length > 0);
        } else {
          console.error('ID do pet não está definido');
        }
      } catch (error) {
        console.error('Erro ao buscar pesos do pet:', error);
        setHasData(false);
      }
    };

    fetchWeights();
  }, [pet.id_pet]);

  const handleSave = async (id_pet: number, weight: string) => {
    if (!weight) {
      alert('Por favor, insira um valor de peso.');
      return;
    }

    const normalizedWeight = parseInt(weight.replace(',', ''), 10) * 100;

    try {
      await addWeight(id_pet, normalizedWeight);
      console.log('Peso atualizado com sucesso');

      const updatedWeights = await getWeight(id_pet);
      setWeights(updatedWeights);
      setHasData(updatedWeights.length > 0);
    } catch (error) {
      console.error('Erro ao atualizar o peso:', error);
      alert('Erro ao salvar o peso. Tente novamente.');
    }
  };

  if (pet.id_pet === undefined) {
    return <p>ID do pet não está definido.</p>;
  }

  return (
    <PetDetailWeigh>
      <InfoTitle onClick={toggleComponentExpand}>
        Peso {isComponentExpanded ? '▲' : '▼'}
      </InfoTitle>
      <DetailsContainer $isVisible={isComponentExpanded}>
        <AddPetWeight id_pet={pet.id_pet} onSave={handleSave} />
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
                pet_id={pet.id_pet}
                setWeights={setWeights}
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
