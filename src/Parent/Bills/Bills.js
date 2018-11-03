import React from 'react';
import BillsDueContainer from '../BillsDueContainer/BillsDueContainer.js';
import PaidBillsContainer from '../PaidBillsContainer/PaidBillsContainer.js';

function Bills() {
  return(
    <div>
      <BillsDueContainer />
      <PaidBillsContainer />
    </div>
  )
}

export default Bills;
