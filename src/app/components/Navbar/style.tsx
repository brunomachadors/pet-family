import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fad72c;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;

// Item da lista de navegação
export const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

// Link de navegação padrão
export const NavLink = styled.p`
  text-decoration: none;
  color: #45474b;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NavLinkBlack = styled.p`
  text-decoration: none;
  color: #fad72c;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const NavDivBlack = styled.div`
  background-color: #45474b;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 1rem;
  }
`;
