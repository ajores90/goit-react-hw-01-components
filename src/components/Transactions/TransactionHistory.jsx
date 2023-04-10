import PropTypes from 'prop-types';
import { Table, Header, Cell, Row } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <Row>
          <Header>Type</Header>
          <Header>Amount</Header>
          <Header>Currency</Header>
        </Row>
      </thead>
      <tbody>
        {items.map(item => (
          <Row key={item.id}>
            <Cell>{item.type}</Cell>
            <Cell>{item.amount}</Cell>
            <Cell>{item.currency}</Cell>
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
