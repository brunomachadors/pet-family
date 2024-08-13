import styled from 'styled-components';

export const Label = styled.label`
  font-size: 1.1rem;
  color: #45474b;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  color: #45474b;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #45474b;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Radio = styled.input`
  margin-right: 8px;
`;
