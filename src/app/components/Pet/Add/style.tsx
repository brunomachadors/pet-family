import styled from 'styled-components';

interface StyledProps {
  fullWidth?: boolean;
}

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #45474b;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #45474b;
  color: white;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
  width: 200px;
  max-width: 100%;

  &:hover {
    background-color: #5c5f63;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(69, 71, 75, 0.4);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9em;
    width: 150px;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.8em;
    width: 120px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const LineContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const FieldContainer = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.fullWidth ? '120%' : 'auto')};
  align-items: center;
`;
