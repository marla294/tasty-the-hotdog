import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: coral;
  display: grid;
  justify-content: center;
  align-content: center;
`;


const Header = () => {
  return <HeaderContainer>
    <h1>Tasty the Hotdog</h1>
  </HeaderContainer>
}

export default Header;