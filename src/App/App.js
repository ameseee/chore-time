import React from 'react';
import { Router } from "@reach/router";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppBackground from './AppStyles.js';
import Nav from '../Nav/Nav.js';
import Bills from '../Parent/Bills/Bills.js';
import ParentDashboard from '../Parent/ParentDashboard/ParentDashboard.js';

const theme = {
  offWhite: '#f5f5f2',
  darkBlue: '#2b2c4b',
  darkGrey: '#3C3C3C',
  lightGrey: '#CECECE',
};

const GlobalStyle = createGlobalStyle`
  ${ reset }
  @font-face {
    font-family: Lato, sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Lato:300,400");
    font-weight: 400;
  }

  h2, p {
    color: ${ theme.darkGrey };
    font-family: Lato;
  }

  button {
    font-family: Lato;
    padding: 0.25rem;
    text-transform: uppercase;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: 300;
    transition: 0.25s ease all;
  }

  button:hover {
    cursor: pointer;
  }
`;

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <React.Fragment>
        <GlobalStyle />
        <AppBackground>
          <Nav />
          <Router>
            <ParentDashboard path="/dashboard" />
            <Bills path="bills" />
          </Router>
        </AppBackground>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
