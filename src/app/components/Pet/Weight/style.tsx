import styled from 'styled-components';

interface DetailsContainerProps {
  $isVisible: boolean;
}

interface WeightContainerProps {
  index: number;
}

interface WeightDifferenceProps {
  isGain: boolean;
}

export const DetailsContainer = styled.div<DetailsContainerProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center; /* Alinha os itens ao centro */
  width: 100%; /* Garante que o contêiner ocupe a largura total disponível */
  overflow: auto; /* Permite que o conteúdo dentro do contêiner role, se necessário */
`;

export const PetDetailWeigh = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #45474b;
`;

export const InfoTitle = styled.h2`
  cursor: pointer;
  width: 100%;
  text-align: center;
`;

export const InfoSubTitle = styled.h3`
  cursor: pointer;
  width: 100%;
  text-align: center;
`;

export const LineContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  padding: 10px 0;
`;

export const WeightContainer = styled.div<WeightContainerProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ index }) => (index === 0 ? '#f9f9f9' : '#e0e0e0')};
  margin: 0;
  gap: 10px;
`;

export const PetDetailFieldName = styled.p`
  font-weight: bold;
  margin: 0;
  color: #333;
`;

export const PetDetailValue = styled.p`
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PetWeightDate = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface WeightDifferenceProps {
  isGain: boolean;
  difference: number | null;
}

export const WeightDifference = styled.p<WeightDifferenceProps>`
  margin: 5px 0 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isGain, difference }) =>
    difference === null || difference === 0
      ? '#666'
      : isGain
      ? 'green'
      : 'red'};
  font-weight: bold;
`;
export const StyledChartContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
`;
