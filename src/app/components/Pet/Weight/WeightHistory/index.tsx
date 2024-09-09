import React, { useState } from 'react';
import WeightItem from '../Item';
import { LineContainer, WeightLine } from '../style';
import {
  ExpandButton,
  RemoveWeightButton,
} from '@/app/components/Buttons/style';
import { TWeight } from '@/app/types/types';
import { getWeight, removeWeight } from '@/app/utils/weight';
import ConfirWeightRemoveModal from '@/app/components/Modal/ConfirmWeightRemoval';

interface WeightHistoryProps {
  weights: TWeight[];
  isExpanded: boolean;
  onToggleExpand: () => void;
  pet_id: number;
  setWeights: React.Dispatch<React.SetStateAction<TWeight[]>>;
}

const WeightHistory: React.FC<WeightHistoryProps> = ({
  weights,
  isExpanded,
  onToggleExpand,
  pet_id,
  setWeights,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weightToRemove, setWeightToRemove] = useState<number | null>(null);

  const visibleWeights = isExpanded ? weights : weights.slice(0, 3);

  const handleItemClick = (index: number) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleRemoveClick = (weight_id: number) => {
    setWeightToRemove(weight_id);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = async () => {
    if (weightToRemove !== null) {
      try {
        await removeWeight(weightToRemove);
        const updatedWeights = await getWeight(pet_id);
        setWeights(updatedWeights);
      } catch (error) {
        console.error('Erro ao remover o peso:', error);
      } finally {
        setIsModalOpen(false);
        setWeightToRemove(null);
      }
    }
  };

  return (
    <>
      {visibleWeights.map((weight, index) => (
        <WeightLine key={weight.date}>
          <WeightItem
            weight={weight}
            previousWeight={weights[index + 1]?.weight}
            index={index}
            isSelected={selectedIndex === index}
            onClick={() => handleItemClick(index)}
          />
          {selectedIndex === index && (
            <RemoveWeightButton
              onClick={() => handleRemoveClick(weight.weight_id)}
            >
              Remover
            </RemoveWeightButton>
          )}
        </WeightLine>
      ))}

      {weights.length > 3 && (
        <LineContainer>
          <ExpandButton onClick={onToggleExpand}>
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </ExpandButton>
        </LineContainer>
      )}

      <ConfirWeightRemoveModal
        $isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmRemove}
      />
    </>
  );
};

export default WeightHistory;
