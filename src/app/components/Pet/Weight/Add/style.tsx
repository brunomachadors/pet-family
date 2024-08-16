import styled from 'styled-components';

export const AddPetWeightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddPetWeightInput = styled.input`
  margin-top: 10px;
  padding: 4px 6px;
  width: 50px;
  text-align: right;
  border-radius: 12px 0 0 12px;
  border: 2px solid #45474b;
  border-right: none;
  height: 32px;
  font-size: 1.2rem;
`;

export const Kilo = styled.span`
  margin-top: 10px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  border-radius: 0 12px 12px 0;
  border: 2px solid #45474b;
  border-left: none;
  height: 40px;
  line-height: 40px;
`;
