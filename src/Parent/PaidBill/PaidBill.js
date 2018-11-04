import React from 'react';
import PaidBillStyles from './PaidBillStyles';

function PaidBill() {
  return(
    <PaidBillStyles>
      <p className="date-received">Oct 13, 2018</p>
      <p className="amount">$8</p>
      <p className="payee">Parker</p>
      <p className="date-paid">Oct 17, 2018</p>
    </PaidBillStyles>
  )
}

export default PaidBill;
