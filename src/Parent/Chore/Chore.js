import React from 'react';
import ChoreStyles from './ChoreStyles';

function Chore() {
  return(
    <ChoreStyles>
      <p className="chore">Sweep kitchen floor</p>
      <p className="value">$3</p>
      <p className="frequency">Weekly</p>
      <button>Delete</button>
    </ChoreStyles>
  );
}

export default Chore;
