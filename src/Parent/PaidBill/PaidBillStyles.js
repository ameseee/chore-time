import styled from 'styled-components';

const PaidBillStyles = styled.div`
  border-top: 1px solid ${ props => props.theme.lightGrey };
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "date-received amount payee date-paid";
  align-items: center;
  margin: 0 1rem;
  padding: 0.75rem;

  .header {
    font-size: 110%;
  }
  
  .date-received {
    grid-area: date-received;
  }

  .amount {
    grid-area: amount;
  }

  .payee {
    grid-area: payee;
  }

  .date-paid {
    grid-area: date-paid;
  }

  button {
    background-color: green;
    grid-area: mark-paid;
  }
`;

export default PaidBillStyles;
