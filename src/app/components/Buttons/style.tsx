import styled from 'styled-components';

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #45474b;
  color: white;
  border-radius: 25px; /* Torna o botão mais arredondado */
  border: none;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5c5f63; /* Cor mais clara ao passar o mouse */
  }

  &:focus {
    outline: none; /* Remove o contorno padrão ao focar */
    box-shadow: 0 0 0 3px rgba(69, 71, 75, 0.4); /* Adiciona uma sombra ao focar */
  }
`;

export const AddButon = styled.button``;
