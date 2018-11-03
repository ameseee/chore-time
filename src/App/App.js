import React from 'react';
import './App.css';
import Nav from '../Nav/Nav.js';
import Bills from '../Parent/Bills/Bills.js';
import ParentDashboard from '../Parent/ParentDashboard/ParentDashboard.js';

function App() {
  return (
    <div>
      <Nav />
      <ParentDashboard />
    </div>
  )
}

export default App;
