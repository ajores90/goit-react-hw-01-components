import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 350px;
  margin: 0 auto;
  margin-bottom: 15px;
  padding: 15px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const setBgColor = props => {
  switch (props.isOnline) {
    case true:
      return 'green';
    case false:
      return 'red';
    default:
      return '#000';
  }
};
export const Status = styled.span`
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${setBgColor};
`;

export const Avatar = styled.img`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;
