import { useLoaderData } from 'react-router-dom';
// import comic from '../assets/09082023.jpeg';
import styled from 'styled-components';

const ComicMap = {'09082023': '09082023.jpeg', '09092023': '09092023.jpg'};

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;

const StyledComic = styled.img`
  width: 400px;
  object-fit: cover;
`;

export const loader = ({params}) => {
  const comicFileName = ComicMap[params.id];
  return { comicFileName };
}

const Comic = () => {
  const {comicFileName} = useLoaderData();

  return <Container>
    <StyledComic src={require(`../assets/${comicFileName}`)} />
  </Container>
}

export default Comic;