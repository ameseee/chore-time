import React from 'react';
import ChoreContainer from '../ChoreContainer/ChoreContainer.js';
import ChoreForm from '../ChoreForm/ChoreForm.js';
import ParentDashboardStyles from './ParentDashboardStyles';

function ParentDashboard() {
  return (
    <ParentDashboardStyles>
      <h2>All Chores</h2>
      <ChoreContainer />
      <h2>Add A Chore</h2>
      <ChoreForm />
    </ParentDashboardStyles>
  );
}

export default ParentDashboard;
