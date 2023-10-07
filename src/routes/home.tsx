import { styled } from "styled-components";
import { firstComicLoader } from "./comic";
import ErrorPage from "./error-page";
import { Link } from "react-router-dom";

const StyledComic = styled.img`
  width: 100%;
  height: 225px;
  object-fit: cover;
  display: block;
`;

const TitleOverlay = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 25px;
  display: grid;
  align-content: center;
  justify-content: center;
  opacity: 0;
  transition: 0.6s;
`;

const ImageTitleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:hover .title {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 225px);
  justify-content: center;
`;

const Home = () => {
  const { comics } = firstComicLoader();

  if (!comics) return <ErrorPage errorMsg={"Not Found"} />;

  return (
    <Container>
      {comics.map((comic, index) => (
        <Link key={index} to={`/comic/${comic.id}`}>
          <ImageTitleContainer>
            <StyledComic
              key={index}
              src={require(`../assets/${comic.firstComic}`)}
            />
            <TitleOverlay className={"title"} key={index}>
              {comic.id}
            </TitleOverlay>
          </ImageTitleContainer>
        </Link>
      ))}
    </Container>
  );
};

export default Home;
