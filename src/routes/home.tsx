import { styled } from "styled-components";
import { firstComicLoader, getDisplayDate } from "./comic";
import ErrorPage from "./error-page";
import { Link } from "react-router-dom";

const StyledComic = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border: 1px solid black;
  box-sizing: border-box;
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  margin: 0px 10px;
`;

const Home = () => {
  const { comics } = firstComicLoader();

  if (!comics) return <ErrorPage errorMsg={"Not Found"} />;

  return (
    <Container>
      {comics.map((comic, index) => (
        <Link key={`link-${index}`} to={`/comic/${comic.id}`}>
          <ImageTitleContainer>
            <StyledComic
              key={`comic-${index}`}
              src={require(`../assets/${comic.firstComic}`)}
            />
            <TitleOverlay className={"title"} key={`overlay-${index}`}>
              {getDisplayDate(comic.id)}
            </TitleOverlay>
          </ImageTitleContainer>
        </Link>
      ))}
    </Container>
  );
};

export default Home;
