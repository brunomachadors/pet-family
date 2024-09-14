import styled from 'styled-components';

export const BannerDiv = styled.div`
  background-color: #f5f7f8;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;

    @media (max-width: 768px) {
      object-fit: cover;
    }
  }
`;
