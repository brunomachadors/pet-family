import styled from 'styled-components';

export const RemoveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const RemoveIcon = styled.img`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;

export const ConfirmText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
`;

export const ConfirmButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: #c0392b;
  }

  &:first-child {
    margin-right: 5px;
  }
`;
