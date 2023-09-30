import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ErrorPage from './error-page';

const ComicMap = {'09082023': ['09082023.jpeg'], '09092023': ['09092023.jpg']};

const MonthMap = {
  '01': 'January', 
  '02': 'February', 
  '03': 'March', 
  '04': 'April', 
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December',
};

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
  const comics = ComicMap[id];
  let nextComic = null;
  let prevComic = null;

  if (!comics) return { comics: null, nextComic, prevComic };

  const comicMapArray = convertToSortedArray(ComicMap);
  const comicIndex = comicMapArray.findIndex(comic => comic === id);

  if (comicIndex + 1 <= comicMapArray.length - 1) {
    nextComic = comicMapArray[comicIndex + 1];
  }

  if (comicIndex - 1 > -1) {
    prevComic = comicMapArray[comicIndex - 1];
  }

  return { comics, nextComic, prevComic };
}

const dateCalc = (input: string) => {
  const inputMonth = input.slice(0, 2);
  const inputDay = input.slice(2, 4);
  const inputYear = input.slice(4);

  return `${MonthMap[inputMonth]} ${inputDay}, ${inputYear}`;
}

const Comic = () => {
  const {id} = useParams();
  if (!id) return <ErrorPage errorMsg={'Not Found'} />;

  const {comics} = comicLoader({id});

  if (!comics) return <ErrorPage errorMsg={'Not Found'} />;

  return <Container>{comics.map(comic => <StyledComic src={require(`../assets/${comic}`)} />)}
    <div>{dateCalc(id)}</div>
  </Container>
}

export default Comic;