import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  max-width: 100vw;
  align-items: center;
  justify-content: flex-start;
  background-color: #f5f7f8;
  box-sizing: border-box;
  margin-top: 20%;

  @media (max-width: 768px) {
    margin-top: 15%;
  }

  @media (max-width: 480px) {
    margin-top: 10%;
  }
`;
