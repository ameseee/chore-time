import styled from 'styled-components';

const ChoreStyles = styled.div`
  border-top: 1px solid ${ props => props.theme.lightGrey };
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 0.4fr;
  grid-template-areas: "chore value frequency delete";
  align-items: center;
  margin: 0 1rem;
  padding: 0.75rem;


  p {
    font-family: Lato;
  }

  .header {
    font-size: 110%;
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
    padding: 0.5rem;
    background-color: #CE3A63;
  }

  button:hover {
    background-color: #9B2B4A;
  }
`;

export default ChoreStyles;
