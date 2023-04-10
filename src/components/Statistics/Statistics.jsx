import PropTypes from 'prop-types';
import { getRandomColor } from 'Functions/RandomColor';
import {
  Container,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => {
          return (
            <Item key={stat.id} color={getRandomColor()}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
