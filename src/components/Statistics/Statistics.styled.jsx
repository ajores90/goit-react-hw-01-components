import styled from '@emotion/styled';

export const Container = styled.section`
  width: 450px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 40px;
  padding-top: 40px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #555555;
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Item = styled.li`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f4f4f4;
  background-color: ${({ color }) => color || '#282828'};
`;

export const Label = styled.span`
  margin-bottom: 18px;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
