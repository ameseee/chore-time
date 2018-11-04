import React from 'react';
import { Link } from "@reach/router";
import NavBar from './NavStyles';

function Nav(props) {
  return (
    <NavBar>
      <h1>ChoreTime🐷</h1>
      <aside>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/bills">Bills</Link>
        <Link to="/">Sign Out</Link>
      </aside>
    </NavBar>
  );
}

export default Nav;
