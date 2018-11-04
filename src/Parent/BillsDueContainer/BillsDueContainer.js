import React from 'react';
import BillDue from '../BillDue/BillDue.js';
import BillsDueContainerStyles from './BillsDueContainerStyles';
import BillDueStyles from '../BillDue/BillDueStyles';

function BillsDueContainer() {
  return(
    <BillsDueContainerStyles>
      <BillDueStyles className="header-container">
        <p className="header chore">Date Received</p>
        <p className="header amount">Amount Due</p>
        <p className="header payee">Payee</p>
      </BillDueStyles>
      <BillDue />
    </BillsDueContainerStyles>
  );
}

export default BillsDueContainer;
