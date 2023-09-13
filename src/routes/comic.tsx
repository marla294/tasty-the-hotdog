import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ErrorPage from './error-page';

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

const convertToSortedArray = (map: Object) => Object.keys(map).sort();

export const comicLoader = ({id}: {id: string}) => {
  const comicFileName = ComicMap[id];
  let nextComic = null;
  let prevComic = null;

  if (!comicFileName) return { comicFileName, nextComic, prevComic };

  const comicMapArray = convertToSortedArray(ComicMap);
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
  if (!id) return <ErrorPage errorMsg={'Not Found'} />;

  const {comicFileName} = comicLoader({id});

  if (!comicFileName) return <ErrorPage errorMsg={'Not Found'} />;

  return <Container>
    <StyledComic src={require(`../assets/${comicFileName}`)} />
  </Container>
}

export default Comic;