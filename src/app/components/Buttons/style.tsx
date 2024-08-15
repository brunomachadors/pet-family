import Image from 'next/image';
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

export const ClickableImage = styled(Image)`
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

export const RedirectButton = styled.button`
  border: 2px solid #2c3e50;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #7f8c8d;
    color: white;
  }
`;

export const ExpandButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #45474b;
  color: white;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-block;

  &:hover {
    background-color: #5c5f63;
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(69, 71, 75, 0.4);
  }
`;
