import React from 'react';
import WeightItem from '../Item';
import { LineContainer } from '../style';
import { ExpandButton } from '@/app/components/Buttons/style';

interface WeightHistoryProps {
  weights: { weight: number; date: string }[];
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const WeightHistory: React.FC<WeightHistoryProps> = ({
  weights,
  isExpanded,
  onToggleExpand,
}) => {
  const visibleWeights = isExpanded ? weights : weights.slice(0, 3);

  return (
    <>
      {visibleWeights.map((weight, index) => (
        <WeightItem
          key={weight.date}
          weight={weight}
          previousWeight={weights[index + 1]?.weight}
          index={index}
        />
      ))}

      {weights.length > 3 && (
        <LineContainer>
          <ExpandButton onClick={onToggleExpand}>
            {isExpanded ? 'Ver menos' : 'Ver mais'}
          </ExpandButton>
        </LineContainer>
      )}
    </>
  );
};

export default WeightHistory;
