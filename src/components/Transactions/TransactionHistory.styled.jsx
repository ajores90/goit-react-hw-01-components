import styled from '@emotion/styled';

export const Table = styled.table`
  width: 600px;
  margin: 0 auto;
  margin: 40px auto;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.th`
  background-color: #4a90e2;
  color: white;
  padding: 10px;
`;

export const Cell = styled.td`
  padding: 10px;
  text-align: center;
`;

export const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: #e8e8e8;
  }

  &:nth-of-type(odd) {
    background-color: #f7fafa;
  }
`;
