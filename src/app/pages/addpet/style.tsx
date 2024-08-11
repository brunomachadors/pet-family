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
  padding-top: 10px;

  @media (max-width: 768px) {
    padding-top: 5px;
  }
`;

export const Header = styled.header`
  padding: 10px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  color: #45474b;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeaderParagraph = styled.p`
  font-size: 1.2rem;
  color: #45474b;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const MainContent = styled.main`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 50vw;
  max-width: 50vw;
  box-sizing: border-box;
  padding-top: 20px;

  @media (max-width: 1024px) {
    width: 70vw;
    max-width: 70vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
    max-width: 90vw;
  }
`;
