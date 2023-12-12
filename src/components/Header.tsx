import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { singleComicLoader } from "../routes/comic";

const HeaderContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  align-items: center;
  justify-items: center;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 5000;
`;

const StyledNavLink = styled.img`
  height: 60px;
`;

const StyledHeaderLink = styled.img`
  height: 80px;
  object-fit: cover;
`;

const Header = () => {
  const { id } = useParams();
  const { nextComic, prevComic } = singleComicLoader({ id });

  return (
    <HeaderContainer>
      <div>
        {prevComic && (
          <Link to={prevComic ? `/comic/${prevComic}` : ""}>
            <StyledNavLink src={require(`../assets/Prev.jpg`)} />
          </Link>
        )}
      </div>
      <Link to="/">
        <StyledHeaderLink src={require(`../assets/Header.jpg`)} />
      </Link>
      <div>
        {nextComic && (
          <Link to={nextComic ? `/comic/${nextComic}` : ""}>
            <StyledNavLink src={require(`../assets/Next.jpg`)} />
          </Link>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Header;
