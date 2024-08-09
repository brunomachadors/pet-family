import styled from 'styled-components';

export const PetDetailContainer = styled.div`
  width: 30vw;
  border: 2px solid #45474b;
  border-radius: 15px;

  @media (max-width: 1024px) {
    width: 70vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const PetDetailHeader = styled.h1`
  text-align: center;
  width: 100%;
  color: #45474b;
`;
export const Divider = styled.div`
  border-top: 1px solid #45474b;
  width: 30%;
  display: flex;
  align-items: center;
  margin: 5px auto;
`;
