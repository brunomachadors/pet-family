import styled from 'styled-components';

export const RegisterPage = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f7f8;
  padding-top: 5%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const LoginLink = styled.a`
  cursor: pointer;
  color: #45474b;
  text-decoration: underline;
  &:hover {
    color: #45474b;
    text-decoration: none;
  }
`;
