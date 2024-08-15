import React from 'react';
import {
  PetDetailValue,
  PetWeightDate,
  WeightContainer,
  WeightDifference,
} from '../style';

interface WeightItemProps {
  weight: { weight: number; date: string };
  previousWeight?: number;
  index: number; // Adicione o índice aqui
}

const WeightItem: React.FC<WeightItemProps> = ({
  weight,
  previousWeight,
  index,
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
    <WeightContainer index={index}>
      {' '}
      {/* Passe o índice aqui */}
      <PetDetailValue>{(weight.weight / 1000).toFixed(1)} kg</PetDetailValue>
      {' | '}
      <PetWeightDate>
        {new Date(weight.date).toLocaleDateString()}
      </PetWeightDate>
      {' | '}
      <WeightDifference isGain={isGain} difference={difference}>
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
