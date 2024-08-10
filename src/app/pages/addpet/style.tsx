import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: #f5f7f8;
`;

export const Header = styled.header`
  padding: 20px;
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
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
`;
