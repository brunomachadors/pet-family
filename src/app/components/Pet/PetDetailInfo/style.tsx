import styled from 'styled-components';

export const PetDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 10%;
  margin-top: 5%;
`;

export const PetDetailInfoLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

export const PetDetailInfoContainer = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: flex-start;
`;

export const PetDetailInfoFieldName = styled.div`
  font-size: x-large;
  font-weight: bold;
`;

export const PetDetailInfoValue = styled.div`
  font-size: x-large;
  display: flex;
`;
