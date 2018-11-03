import React from 'react';
import BillDue from '../BillDue/BillDue.js';

function BillsDueContainer() {
  return(
    <div>List of all bills due:
      <BillDue />
      <BillDue />
      <BillDue />
    </div>
  )

}

export default BillsDueContainer;
