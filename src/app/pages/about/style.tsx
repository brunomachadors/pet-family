import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  align-items: center;
  justify-content: flex-start;
  margin-top: 60px;
  gap: 20px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 0 1rem;
    /* Adiciona padding superior e inferior para melhorar o espaçamento */
    padding: 1rem 1rem;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  border: 1px solid #45474b;
  padding: 2%;
  border-radius: 12px;
  max-width: 90vw;

  @media (max-width: 768px) {
    gap: 12px;
    padding: 4%;
    /* Ajusta a largura máxima para dispositivos móveis */
    max-width: 100%;
  }
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: #f5f7f8;
  background-color: #45474b;
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8c919c;
    color: #f5f7f8;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StyledList = styled.ul`
  list-style: none; /* Remove os marcadores da lista */
  padding: 0; /* Remove o padding padrão da lista */
  margin: 0; /* Remove a margem padrão da lista */
  text-align: center; /* Centraliza o texto dos itens da lista */

  li {
    color: #45474b;
    font-size: 1rem; /* Ajusta o tamanho da fonte dos itens da lista */
    margin-bottom: 8px; /* Adiciona um espaçamento entre os itens da lista */
  }

  @media (max-width: 768px) {
    font-size: 0.875rem; /* Reduz o tamanho da fonte em dispositivos móveis */
  }
`;

export const StyledHeader = styled.h1`
  color: #45474b;
  font-family: Arial, sans-serif;
  font-weight: bold;
  margin: 16px 0;
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StyledParagraph = styled.p`
  color: #45474b;
  width: 60%;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    width: 90%;
    font-size: 0.875rem;
  }
`;
