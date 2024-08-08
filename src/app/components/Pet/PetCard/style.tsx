import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 24px;
  margin: 16px;
  width: 300px;
  background-color: #f5f7f8;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #45474b;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background-color: #45474b;
  }
`;

export const CardContent = styled.div`
  text-align: center;
  color: #45474b;
  transition: color 0.3s ease;
  flex-grow: 1;

  ${CardContainer}:hover & {
    color: #f5f7f8;
  }
`;

export const PetName = styled.h3`
  margin: 0;
  font-size: 2em;
  font-weight: bold;
  border: 2px solid #45474b;
  border-radius: 12px;
  padding: 8px 16px;
  background-color: #f5f7f8;
  color: #45474b;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${CardContainer}:hover & {
    background-color: #45474b;
    color: #f5f7f8;
    border: 2px solid #f5f7f8;
  }
`;

export const PetSpecies = styled.p`
  margin: 8px 0;
  font-size: 1.2em;
  color: #45474b;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: #f5f7f8;
  }
`;

export const PetBreed = styled.p`
  margin: 8px 0;
  font-size: 1.1em;
  color: #45474b;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: #f5f7f8;
  }
`;

export const DetailsText = styled.p`
  margin: 16px 0 0 0;
  font-size: 1.1em;
  text-align: center;
  color: #45474b;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: #f5f7f8;
  }
`;

export const PetImageContainer = styled.div`
  margin: 16px 0; // Espaçamento entre o nome e a imagem
  display: flex;
  justify-content: center;
  align-items: center;
`;
