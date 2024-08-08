import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  width: 100%;
`;

export const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 12px;
  background-color: ${({ active }) => (active ? '#F5F7F8' : '#d3d3d3')};

  border-bottom: ${({ active }) => (active ? 'none' : '1px solid #45474b')};
  border-left: none;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
  font-size: 1.2em;
  color: #45474b;
  transition: background-color 0.3s;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
`;
