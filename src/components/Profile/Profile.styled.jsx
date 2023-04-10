import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 350px;
  font-family: Arial, sans-serif;
  background-color: #fff;
  margin: 50px auto;
  padding: 20px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  padding: 4px;
`;

export const UserName = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: #777;
  margin: 5px 0 0;
`;

export const Location = styled.p`
  font-size: 16px;
  color: #777;
  margin: 5px 0 0;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding: 0;
  list-style-type: none;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 10px 0;
  border-right: 1px solid #e0e0e0;

  &:last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  color: #777;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
