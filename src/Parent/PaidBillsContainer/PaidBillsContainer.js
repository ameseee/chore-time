import React from 'react';
import PaidBill from '../PaidBill/PaidBill.js';

function PaidBillsContainer() {
  return(
    <div>List of all paid bills:
      <PaidBill />
      <PaidBill />
    </div>
  )
}

export default PaidBillsContainer;
