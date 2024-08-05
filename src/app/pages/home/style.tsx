import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  max-width: 100vw;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  padding: 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
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
  box-sizing: border-box; /* Inclui o padding na largura total */
`;

export const FeatureSection = styled.section`
  width: 100%;
  margin-bottom: 20px; /* Espaçamento inferior entre as seções */

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px; /* Espaçamento inferior do título */
  }

  ul {
    list-style-type: none;
    padding: 0;
    text-align: center; /* Centralizar a lista */
    margin: 0; /* Remove o espaço padrão da lista */
  }

  li {
    margin-bottom: 10px;
  }
`;

export const ContactSection = styled.section`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around; /* Distribuir o espaço ao redor dos itens */

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    color: #0070f3;
    text-decoration: none;
    margin: 5px 0;
  }

  a:hover {
    text-decoration: underline;
  }
`;
