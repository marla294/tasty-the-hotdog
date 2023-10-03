import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ErrorPage from './error-page';

const ComicMap = {'09082023': ['09082023.jpeg', '09302023.png'], '09092023': ['09092023.jpg']};

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

const convertKeysToSortedArray = (map: Object) => Object.keys(map).sort((a, b) => {
  const aDate = new Date(getISODate(a));
  const bDate = new Date(getISODate(b));

  return bDate.getTime() - aDate.getTime();
});

const convertEntriesToSortedArray = (map: Object) => Object.entries(map).sort((a, b) => {
  const aDate = new Date(getISODate(a[0]));
  const bDate = new Date(getISODate(b[0]));

  return bDate.getTime() - aDate.getTime();
});

const parseDate = (input: string) => {
  const month = input.slice(0, 2);
  const day = input.slice(2, 4);
  const year = input.slice(4);

  return {month, day, year};
}

const getDisplayDate = (input: string) => {
  const {month, day, year} = parseDate(input);

  return `${MonthMap[month]} ${day}, ${year}`;
}

const getISODate = (input: string) => {
  const {month, day, year} = parseDate(input);

  return `${year}-${month}-${day}`;
}

const getPagination = (id: string) => {
  let nextComic = null;
  let prevComic = null;
  const comicMapArray = convertKeysToSortedArray(ComicMap);
  const comicIndex = comicMapArray.findIndex(comic => comic === id);

  if (comicIndex + 1 <= comicMapArray.length - 1) {
    nextComic = comicMapArray[comicIndex + 1];
  }

  if (comicIndex - 1 > -1) {
    prevComic = comicMapArray[comicIndex - 1];
  }

  return {nextComic, prevComic};
}

export const firstComicLoader = () => {
  const comics: any[] = convertEntriesToSortedArray(ComicMap);

  const firstComicArray: string[] = comics.map(comic => {
    return comic[1][0];
  })

  return {comics: firstComicArray};
}

export const singleComicLoader = ({id}: {id?: string}) => {
  if (!id) return { comics: null, nextComic: null, prevComic: null };

  const comics: string[] = ComicMap[id];

  if (!comics) return { comics: null, nextComic: null, prevComic: null };

  const {nextComic, prevComic} = getPagination(id);

  return { comics, nextComic, prevComic };
}

const Comic = () => {
  const {id} = useParams();
  if (!id) return <ErrorPage errorMsg={'Not Found'} />;

  const {comics} = singleComicLoader({id});

  if (!comics) return <ErrorPage errorMsg={'Not Found'} />;

  return <Container>{comics.map((comic, index) => 
      <StyledComic key={index} src={require(`../assets/${comic}`)} />
    )}
    <div>{getDisplayDate(id)}</div>
  </Container>
}

export default Comic;