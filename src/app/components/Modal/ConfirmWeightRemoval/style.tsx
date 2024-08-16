import styled from 'styled-components';

const primaryColor = '#2c3e50';
const secondaryColor = '#7f8c8d';
const backgroundColor = '#f5f5f5';
const dangerColor = '#e74c3c';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${backgroundColor};
  border-radius: 8px;
  max-width: 500px; /* Ajuste a largura máxima para evitar problemas de layout */
  width: 100%; /* Faz com que o modal ocupe a largura máxima permitida */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
  padding: 25px;
  border: 2px solid ${primaryColor};
  box-sizing: border-box; /* Garante que o padding e a borda não afetam o cálculo da largura total */

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 15px;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${primaryColor};
  text-align: center; /* Centraliza o texto do header */
`;

export const ModalBody = styled.div`
  padding: 20px;
  font-size: 1rem;
  color: ${primaryColor};
  text-align: center;
`;

export const ModalFooter = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center; /* Centraliza os botões */
  gap: 10px;
`;

export const ConfirmButton = styled.button`
  color: ${dangerColor};
  border: 2px solid ${dangerColor};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c0392b;
    color: white;
  }
`;

export const CancelButton = styled.button`
  background-color: ${secondaryColor};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #95a5a6;
  }
`;
