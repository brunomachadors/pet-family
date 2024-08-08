import styled from 'styled-components';

export const PetDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  height: 60vh;
  background-color: #f5f7f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 4px solid #45474b;
  border-radius: 15px;
  box-sizing: border-box;
  color: #45474b;
`;

export const PetDetailHeader = styled.div`
  text-align: center;
  width: 100%;

  padding-bottom: none;
  background-color: #495e57;
  h1 {
    font-size: 2em;
    margin: 0;
    color: #f5f7f8;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
