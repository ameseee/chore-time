import React from 'react';
import BillDueStyles from './BillDueStyles';

function BillDue() {
  return(
    <BillDueStyles>
      <p className="chore">October 21, 2018</p>
      <p className="amount">$7</p>
      <p className="payee">Riley</p>
      <button>Mark Paid</button>
    </BillDueStyles>
  )
}

export default BillDue;
