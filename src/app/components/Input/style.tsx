import styled from 'styled-components';

interface StyledProps {
  fullWidth?: boolean;
}

export const Label = styled.label`
  font-size: 1.1rem;
  color: #45474b;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input<StyledProps>`
  padding: 12px;
  font-size: 1rem;
  margin-bottom: 16px;
  border: 1px solid #45474b;
  border-radius: 8px;
  width: ${(props) => (props.fullWidth ? '80%' : 'calc(40% - 24px)')};
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  text-align: center;

  &:focus {
    border-color: #45474b;
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;

export const DateInput = styled(Input).attrs({ type: 'date' })``;
