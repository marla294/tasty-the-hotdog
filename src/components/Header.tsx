import { Link, useLoaderData } from 'react-router-dom';
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
  const {nextComic, prevComic} = useLoaderData();

  return <HeaderContainer>
    <div>
      {prevComic && <Link to={prevComic ? `/comic/${prevComic}` : ''}>Prev</Link>}
    </div>
    <h1>Tasty the Hotdog</h1>
    <div>
      {nextComic && <Link to={nextComic ? `/comic/${nextComic}` : ''}>Next</Link>}
    </div>
  </HeaderContainer>
}

export default Header;