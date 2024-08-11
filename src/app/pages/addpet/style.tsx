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
  padding-top: 10px; /* Reduzir o espaço no topo do Container */
`;

export const Header = styled.header`
  padding: 10px; /* Diminuir o padding do Header */
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  color: #45474b; /* Cor cinza escuro */
  margin: 0;
`;

export const HeaderParagraph = styled.p`
  font-size: 1.2rem;
  color: #45474b;
`;

export const MainContent = styled.main`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 20vw;
  max-width: 20vw;
  box-sizing: border-box;
  padding-top: 20px;
`;
