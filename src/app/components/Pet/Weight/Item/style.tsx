import styled from 'styled-components';

interface WeightDifferenceProps {
  $isGain: boolean;
  $difference: number | null;
}

export const WeightDifference = styled.p<WeightDifferenceProps>`
  margin: 5px 0 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $isGain, $difference }) =>
    $difference === null || $difference === 0
      ? '#666'
      : $isGain
      ? 'green'
      : 'red'};
  font-weight: bold;
`;
