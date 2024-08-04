import styled from 'styled-components';

export const LandingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #45474b;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const LandingInfoHeader = styled.h1`
  color: #f5f7f8;
  text-align: center;

  @media (max-width: 1280px) {
    max-width: 90%;
  }
`;

export const LandingInfoHeaderSub = styled.h3`
  color: #f5f7f8;

  @media (max-width: 1280px) {
    max-width: 90%;
  }
`;

export const LandingInfoContent = styled.p`
  color: #f5f7f8;
  max-width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #f5f7f8;
  border-radius: 10px;
  padding: 15px;

  @media (max-width: 1280px) {
    max-width: 70%;
  }

  @media (max-width: 768px) {
    max-width: 85%;
  }
`;
