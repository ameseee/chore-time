import React from 'react';
import BillsDueContainer from '../BillsDueContainer/BillsDueContainer.js';
import PaidBillsContainer from '../PaidBillsContainer/PaidBillsContainer.js';
import BillsStyles from './BillsStyles';

function Bills() {
  return(
    <BillsStyles>
      <h2>Bills Due</h2>
      <BillsDueContainer />
      <h2>Paid Bills</h2>
      <PaidBillsContainer />
    </BillsStyles>
  )
}

export default Bills;
