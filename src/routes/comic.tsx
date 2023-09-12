import { useParams } from 'react-router-dom';
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

export const comicLoader = ({id}) => {
  const comicFileName = ComicMap[id];

  let nextComic = null;
  let prevComic = null;
  const comicMapArray = Object.keys(ComicMap);
  const comicIndex = comicMapArray.findIndex(comic => comic === id);

  if (comicIndex + 1 <= comicMapArray.length - 1) {
    nextComic = comicMapArray[comicIndex + 1];
  }

  if (comicIndex - 1 > -1) {
    prevComic = comicMapArray[comicIndex - 1];
  }

  return { comicFileName, nextComic, prevComic };
}

const Comic = () => {
  const {id} = useParams();
  const {comicFileName} = comicLoader({id});

  return <Container>
    <StyledComic src={require(`../assets/${comicFileName}`)} />
  </Container>
}

export default Comic;