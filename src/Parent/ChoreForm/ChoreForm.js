import React from 'react';
import ChoreContainerStyles from '../ChoreContainer/ChoreContainerStyles';
import ChoreFormStyles from './ChoreFormStyles';

function ChoreForm() {
  return(
    <ChoreContainerStyles>
      <ChoreFormStyles>
        <label htmlFor="chore-title"></label>
        <input id="chore-title" type="text" placeholder="Chore" aria-required="true" />
        <label htmlFor="chore-value"></label>
        <input id="chore-value" type="number" placeholder="Value" aria-required="true" />
        <label htmlFor="chore-frequency"></label>
        <input id="chore-frequency" type="text" placeholder="Frequency" aria-required="true" />
        <button id="add-chore-btn">Add Chore</button>
      </ChoreFormStyles>
    </ChoreContainerStyles>
  );
}

export default ChoreForm;
