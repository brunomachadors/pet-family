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
  color: #45474b; /* Cor cinza escuro */
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

export const FeatureSection = styled.section`
  width: 100%;
  margin-bottom: 20px;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: #45474b; /* Cor cinza escuro */
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: center;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    color: #45474b;
  }
`;

export const ContactSection = styled.section`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: #45474b;
  }

  p {
    font-size: 1.2rem;
    color: #45474b; /* Cor cinza escuro */
    text-align: center;
  }

  a {
    color: #45474b; /* Cor cinza escuro */
    text-decoration: none;
    margin: 5px 0;
    transition: color 0.3s ease;
  }

  a:hover {
    text-decoration: underline;
    color: #45474b; /* Mantém a cor cinza escuro no hover */
  }
`;
