import React from 'react';
import { Link } from "@reach/router";

function Nav(props) {
  return (
    <nav>
      <h1>Chore$</h1>
      <ul>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/bills">Bills</Link>
        <li>Sign Out</li>
      </ul>
    </nav>
  );
}

export default Nav;
