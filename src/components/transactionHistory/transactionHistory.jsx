import PropTypes from 'prop-types';
import {
    TtransactionHistoryTable, 
    Thead, 
    TrList, 
    TdItem,
    ThItem,
    TbodyItems, 
} from './transactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
    <TtransactionHistoryTable>
    <Thead>
    <TrList>
      <ThItem>Type</ThItem>
      <ThItem>Amount</ThItem>
      <ThItem>Currency</ThItem>
    </TrList>
  </Thead>
  <TbodyItems>
    {items.map(({ id, type, amount, currency }) => (
    <TrList key={id}>
      <TdItem>{type}</TdItem>
      <TdItem>{amount}</TdItem>
      <TdItem>{currency}</TdItem>
    </TrList>
  
   ))}
   </TbodyItems>
 </TtransactionHistoryTable>
    );
}

TransactionHistory.proTotype = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };