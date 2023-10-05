import { styled } from "styled-components";
import { firstComicLoader } from "./comic";
import ErrorPage from "./error-page";
import { Link } from "react-router-dom";

const StyledComic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
`;

const Home = () => {
  const { comics } = firstComicLoader();

  if (!comics) return <ErrorPage errorMsg={"Not Found"} />;

  return (
    <Container>
      {comics.map((comic, index) => (
        <Link to={`/comic/${comic.id}`}>
          <StyledComic
            key={index}
            src={require(`../assets/${comic.firstComic}`)}
          />
        </Link>
      ))}
    </Container>
  );
};

export default Home;
