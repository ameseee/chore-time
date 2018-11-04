import React from 'react';
import PaidBill from '../PaidBill/PaidBill.js';
import PaidBillsContainerStyles from './PaidBillsContainerStyles';
import PaidBillStyles from '../PaidBill/PaidBillStyles';

function PaidBillsContainer() {
  return(
    <PaidBillsContainerStyles>
      <PaidBillStyles className="header-container">
        <p className="header date-received">Date Received</p>
        <p className="header amount">Amount</p>
        <p className="header payee">Payee</p>
        <p className="header date-paid">Date Paid</p>
      </PaidBillStyles>
      <PaidBill />
      <PaidBill />
    </PaidBillsContainerStyles>
  )
}

export default PaidBillsContainer;
