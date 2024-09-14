import styled from 'styled-components';

export const BannerDiv = styled.div`
  background-color: #f5f7f8;
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 1281px) {
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    object-fit: cover;

    @media (min-width: 1281px) {
      object-fit: contain;
    }
  }
`;
