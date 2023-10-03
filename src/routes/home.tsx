import { styled } from "styled-components";
import { firstComicLoader } from "./comic";
import ErrorPage from "./error-page";

const StyledComic = styled.img`
  width: 200px;
  object-fit: cover;
`;

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(5, 200px);
`;

const Home = () => {
  const {comics} = firstComicLoader();

  if (!comics) return <ErrorPage errorMsg={'Not Found'} />;

  return <Container>{comics.map((comic, index) => 
      <StyledComic key={index} src={require(`../assets/${comic}`)} />
    )}
  </Container>
}

export default Home;