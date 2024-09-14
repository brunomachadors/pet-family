import styled from 'styled-components';

interface MobileMenuContainerProps {
  $isOpen: boolean;
}

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fad72c;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const NavItem = styled.li`
  margin: 0 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #45474b;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    text-decoration: underline;
    color: #333;
  }

  &:visited {
    color: #45474b;
  }

  &:active {
    color: #45474b;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const NavLinkBlack = styled.a`
  text-decoration: none;
  color: #fad72c;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  height: 100%;
  transition: color 0.2s;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 0;
  }

  &:hover {
    text-decoration: none;
    color: #fad72c;
  }

  &:visited {
    color: #fad72c;
  }

  &:active {
    color: #fad72c;
  }
`;

export const NavDivBlack = styled.div`
  background-color: #45474b;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    text-align: center;
    padding: 1.5rem 0;
  }
`;

export const HamburgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 768px) {
    display: flex;
    padding: 10px;
    position: relative;
  }
`;

export const HamburgerLine = styled.div`
  width: 100%;
  height: 3px;
  background-color: #45474b;
`;

export const MobileMenuContainer = styled.div<MobileMenuContainerProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: #fad72c;
  width: 100%;
  position: relative;
  left: 0;
  padding: 20px 0;
  z-index: 2;

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    position: static;
    top: auto;
    left: auto;
    padding: 0;
    justify-content: flex-end;
  }
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
