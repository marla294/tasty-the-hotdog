import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: coral;
  display: grid;
  align-content: center;
`;


const Header = () => {
  return <HeaderContainer>
    <Link to={'/comic/09092023'}>Next</Link>
    <h1>Tasty the Hotdog</h1>
  </HeaderContainer>
}

export default Header;