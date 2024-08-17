import styled from 'styled-components';

interface DetailsContainerProps {
  $isVisible: boolean;
}

export const DetailsContainer = styled.div<DetailsContainerProps>`
  display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
  flex-direction: column;
  transition: max-height 0.3s ease;
  overflow: hidden;
  max-height: ${({ $isVisible }) => ($isVisible ? 'none' : '0')};
  align-items: center;
`;

export const PetDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
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
  gap: 2px;
  justify-content: center; /* Centraliza o conteúdo */
  text-align: center;
  padding: 8px 10px;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-bottom: 4px;
  align-items: center; /* Alinha o conteúdo verticalmente */
`;

export const PetDetailFieldName = styled.p`
  font-weight: bold;
  margin: 0;
  flex: none; /* Remove o efeito de flex */
  text-align: center;
`;

export const PetDetailValue = styled.p`
  margin: 0;
  flex: none; /* Remove o efeito de flex */
  text-align: center;
  padding-left: 8px; /* Pequeno espaçamento entre os itens */
`;

export const InfoSubTitle = styled.h3`
  display: inline-block;
  text-align: center;
  margin: 15px 0 8px 0;
  padding-top: 8px;
  font-size: 1.1em;
  width: 70%;
  color: #eaeaea;
  background-color: #45474b;
  padding: 8px 0;
  border-radius: 5px;
`;
