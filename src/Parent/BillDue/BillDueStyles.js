import styled from 'styled-components';

const BillDueStyles = styled.div`
  border-top: 1px solid ${ props => props.theme.lightGrey };
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
  grid-template-areas: "chore amount payee mark-paid";
  align-items: center;
  margin: 0 1rem;
  padding: 0.75rem;

  .header {
    font-size: 110%;
  }
  
  .chore {
    grid-area: chore;
  }

  .amount {
    grid-area: amount;
  }

  .payee {
    grid-area: payee;
  }

  button {
    background-color: #E79B3D;
    grid-area: mark-paid;
    padding: 0.5rem;
  }

  button:hover {
    background-color: #AD742E;
  }
`;

export default BillDueStyles;
