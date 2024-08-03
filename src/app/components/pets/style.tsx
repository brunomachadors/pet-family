import styled from 'styled-components';

// Container principal
export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

// Título
export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #45474b;
`;

// Lista de pets
export const PetList = styled.ul`
  list-style: none;
  padding: 0;
`;

// Item da lista de pets
export const PetItem = styled.li`
  padding: 1rem;
  margin-bottom: 1rem;
  color: #45474b;
`;

// Nome do pet
export const PetName = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

// Descrição do pet
export const PetDescription = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 1rem;
  padding: 1rem;
  border: 1px solid red;
  border-radius: 4px;
  background-color: #fdd;
`;

// Mensagem de carregamento
export const LoadingMessage = styled.div`
  font-size: 1rem;
  padding: 1rem;
  background-color: #eef;
  border-radius: 4px;
`;
