import styled from 'styled-components';

const ChoreFormStyles = styled.form`
  padding: 1rem;
  display: grid;
  grid-template-columns: 40% 20% 25% 15%;
  grid-template-areas: "chore value frequency add";

  input {
    padding: 0.5rem 0.75rem;
    font-family: Lato;
    font-size: 100%;
    margin-right: 1rem;
    border-radius: 5px;
    border: 1px solid ${ props => props.theme.lightGrey }
  }

  #chore-title {
    grid-area: chore;
  }

  #chore-value {
    grid-area: value;
  }

  #chore-frequency {
    grid-area: frequency;
  }

  #add-chore-btn {
    grid-area: add;
    background-color: #E79B3D;
    font-size: 80%;
  }

  #add-chore-btn:hover {
    background-color: #AD742E;
  }
`;

export default ChoreFormStyles;
