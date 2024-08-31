import styled from 'styled-components';

interface MobileMenuContainerProps {
  isOpen: boolean;
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
  }
`;

export const NavItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const NavLink = styled.p`
  text-decoration: none;
  color: #45474b;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const NavLinkBlack = styled.p`
  text-decoration: none;
  color: #fad72c;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  &:hover {
    text-decoration: none;
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
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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
