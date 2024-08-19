import styled from 'styled-components';

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
`;

export const InfoTitle = styled.h2`
  cursor: pointer;
  width: 100%;
  text-align: center;
  color: #45474b;
`;

export const ContentContainer = styled.div<ContainerProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

export const TableHeader = styled.th`
  background-color: #45474b;
  padding: 12px;
  text-align: center;
  border-bottom: 2px solid #ddd;
  color: #f5f5f5;
  border-right: 1px solid #ddd;
`;

export const TableCell = styled.td<{ isSelected?: boolean }>`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  border-right: 1px solid #ddd;
  word-wrap: break-word;
  border: ${({ isSelected }) =>
    isSelected ? '2px solid #45474b' : '1px solid #ddd'};
`;

export const TableRow = styled.tr<{ isSelected?: boolean }>`
  &:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }
`;

export const ExpandedRow = styled.tr<{ isSelected?: boolean }>`
  background-color: #f2f2f2;
  td {
    padding: 20px;
    text-align: left;
    border-top: ${({ isSelected }) =>
      isSelected ? '2px solid #45474b' : '1px solid #ddd'};
  }

  p {
    margin: 0 0 10px 0;
  }

  strong {
    color: #333;
  }
`;

export const ExpandedCell = styled.td<{ isSelected?: boolean }>`
  padding: 20px;
  text-align: center;
  background-color: #f2f2f2;
  width: 100%;
  border: ${({ isSelected }) =>
    isSelected ? '2px solid #45474b' : '1px solid #ddd'};
`;

export const DetailParagraph = styled.p`
  margin: 10px 0;
  color: #333;
  font-size: 14px;
  text-align: center;
`;

export const DetailStrong = styled.strong`
  color: #000;
  font-weight: bold;
`;
