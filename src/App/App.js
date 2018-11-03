import React from 'react';
import { Router } from "@reach/router";
import './App.css';
import Nav from '../Nav/Nav.js';
import Bills from '../Parent/Bills/Bills.js';
import ParentDashboard from '../Parent/ParentDashboard/ParentDashboard.js';

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <ParentDashboard path="/dashboard" />
        <Bills path="bills" />
      </Router>
    </div>
  )
}

export default App;
