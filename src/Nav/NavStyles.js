import styled from 'styled-components';

const NavStyles = styled.nav`
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem 4rem;
  background-color: ${props => props.theme.darkBlue};

  h1 {
    color: ${props => props.theme.offWhite};
    font-size: 175%;
    font-family: Lato;
  }

  aside {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 18rem;
    font-size: 95%;

    a {
      color: #CACAD2;
      font-family: Lato;
      text-transform: uppercase;
      text-decoration: none;
      transition: 0.25s ease all;
    }

    a:hover {
      color: #f5f5f2;
    }
}
`

export default NavStyles;
