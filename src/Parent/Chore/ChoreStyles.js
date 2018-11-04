import styled from 'styled-components';

const ChoreStyles = styled.div`
  border-bottom: 1px solid #CECECE;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 0.4fr;
  grid-template-areas: "chore value frequency delete";
  margin: 0 1rem;
  padding: 1rem;

  p {
    font-family: Lato;
    color: ${ props => props.theme.darkGrey }
  }

  .header {
    font-size: 110%;
    font-color: ${ props => props.theme.darkBlue }
  }

  .chore {
    grid-area: chore;
  }

  .value {
    grid-area: value;
  }

  .frequency {
    grid-area: frequency;
  }

  .delete {
    grid-area: delete;
  }

  button {
    padding: 0.25rem;
    text-transform: uppercase;
    border-radius: 5px;
    background-color: #CE3A63;
    border: none;
    color: white;
    font-weight: 300;
    transition: 0.25s ease all;
  }

  button:hover {
    cursor: pointer;
    background-color: #9B2B4A;
  }
`;

export default ChoreStyles;
