import React from 'react';
import Chore from '../Chore/Chore.js';
import ChoreContainerStyles from './ChoreContainerStyles';
import ChoreStyles from '../Chore/ChoreStyles';

function ChoreContainer() {
  return(
    <ChoreContainerStyles>
      <ChoreStyles className="header-container">
        <p className="header chore">Chore</p>
        <p className="header value">Value</p>
        <p className="header frequency">Frequency</p>
      </ChoreStyles>
      <Chore />
      <Chore />
      <Chore />
    </ChoreContainerStyles>
  );
}

export default ChoreContainer;
