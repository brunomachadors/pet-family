import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #45474b;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px; /* Arredondar os cantos */
  width: 100%;
  max-width: 500px; /* Ajusta a largura máxima conforme necessário */
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px; /* Arredondar os cantos */
  width: 100%;
  max-width: 500px; /* Ajusta a largura máxima conforme necessário */
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 1rem;
  color: #45474b;
`;

export const Radio = styled.input`
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #45474b;
  border: none;
  border-radius: 8px; /* Arredondar os cantos */
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin-top: -10px;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
  margin-top: -10px;
  margin-bottom: 20px;
`;
