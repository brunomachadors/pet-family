import React from 'react';
import { PetDetailValue, PetWeightDate, WeightContainer } from '../style';
import { WeightDifference } from './style';

interface WeightItemProps {
  weight: { weight: number; date: string };
  previousWeight?: number;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

const WeightItem: React.FC<WeightItemProps> = ({
  weight,
  previousWeight,
  index,
  isSelected,
  onClick,
}) => {
  const calculateWeightDifference = (
    currentWeight: number,
    previousWeight: number
  ) => {
    return ((currentWeight - previousWeight) / 1000).toFixed(2);
  };

  const difference = previousWeight
    ? parseFloat(calculateWeightDifference(weight.weight, previousWeight))
    : null;
  const isGain = difference !== null && difference > 0;

  return (
    <WeightContainer
      $index={index}
      onClick={onClick}
      style={{
        border: isSelected ? '2px solid #000' : '1px solid #ddd',
      }}
    >
      <PetDetailValue>{(weight.weight / 1000).toFixed(1)} kg</PetDetailValue>
      {' | '}
      <PetWeightDate>
        {new Date(weight.date).toLocaleDateString()}
      </PetWeightDate>
      {' | '}
      <WeightDifference $isGain={isGain} $difference={difference}>
        {difference === null
          ? '0.0 kg'
          : isGain
          ? `+${difference.toFixed(1)} kg`
          : `${difference.toFixed(1)} kg`}
      </WeightDifference>
    </WeightContainer>
  );
};

export default WeightItem;
