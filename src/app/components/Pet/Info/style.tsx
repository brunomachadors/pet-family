import styled from 'styled-components';

interface DetailsContainerProps {
  $isVisible: boolean; // Usando o prefixo $ para evitar problemas com o DOM
}

export const DetailsContainer = styled.div<DetailsContainerProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  flex-direction: column;
  transition: max-height 0.3s ease;
  overflow: hidden;
  max-height: ${({ $isVisible }) => ($isVisible ? '500px' : '0')};
  align-items: center;
`;

export const PetDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 90%;
  color: #45474b;
`;

export const InfoTitle = styled.h2`
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

export const PetDetailInfoFieldName = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const PetDetailInfoValue = styled.p`
  margin: 0;
`;
