import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: coral;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  justify-items: center;
`;


const Header = () => {
  return <HeaderContainer>
    <Link to={'/comic/09082023'}>Prev</Link>
    <h1>Tasty the Hotdog</h1>
    <Link to={'/comic/09092023'}>Next</Link>
  </HeaderContainer>
}

export default Header;