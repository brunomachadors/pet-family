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
  flex-direction: column;
  width: 100%;
  gap: 4px; /* Aumenta o espaço entre os itens */
  justify-content: center; /* Centraliza o conteúdo */
  text-align: center;
  padding: 8px 10px;
  background-color: #f8f8f8;
  border-radius: 5px;
  margin-bottom: 8px; /* Aumenta o espaçamento inferior */
  align-items: stretch; /* Alinha o conteúdo para ocupar a largura disponível */

  @media (max-width: 768px) {
    /* Ajusta o layout em dispositivos móveis */
    flex-direction: column;
    padding: 10px;
  }
`;

export const PetDetailFieldName = styled.p`
  font-weight: bold;
  margin: 0;
  text-align: center;
  overflow-wrap: break-word; /* Quebra palavras longas */
  word-wrap: break-word; /* Quebra palavras longas */
`;

export const PetDetailValue = styled.p`
  margin: 0;
  text-align: center;
  padding-left: 8px; /* Pequeno espaçamento entre os itens */
  overflow-wrap: break-word; /* Quebra palavras longas */
  word-wrap: break-word; /* Quebra palavras longas */
`;

export const InfoSubTitle = styled.h3`
  display: inline-block;
  text-align: center;
  margin: 15px 0 8px 0;
  padding-top: 8px;
  font-size: 1.1em;
  width: 100%; /* Ajusta a largura para 100% */
  max-width: 100%; /* Garante que a largura não ultrapasse o container */
  color: #eaeaea;
  background-color: #45474b;
  padding: 8px 0;
  border-radius: 5px;
  box-sizing: border-box; /* Inclui padding e border no cálculo da largura */
`;
