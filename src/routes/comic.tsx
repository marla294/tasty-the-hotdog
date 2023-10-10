import { useParams } from "react-router-dom";
import styled from "styled-components";
import ErrorPage from "./error-page";

const ComicMap = {
  "01092022": [
    "01092022-1.jpg",
    "01092022-2.jpg",
    "01092022-3.jpg",
    "01092022-4.jpg",
    "01092022-5.jpg",
  ],
  "08282023": ["08282023.jpg"],
  "08032023": ["08032023.jpg"],
  "02032022": ["02032022.jpg"],
  "02202022": ["02202022.jpg"],
  "03282022": ["03282022-1.jpg", "03282022-2.jpg"],
  "03292022": ["03292022.jpg"],
  "03302022": [
    "03302022-1.jpg",
    "03302022-2.jpg",
    "03302022-3.jpg",
    "03302022-4.jpg",
  ],
  "08112022": ["08112022.jpg"],
  "08132022": ["08132022-1.jpg", "08132022-2.jpg"],
  "08272022": ["08272022.jpg"],
  "08282022": ["08282022.jpg"],
  "08192023": ["08192023.jpg"],
};

const MonthMap = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
`;

const StyledComic = styled.img`
  width: 90%;
  max-width: 700px;
  object-fit: cover;
`;

const convertKeysToSortedArray = (map: Object) =>
  Object.keys(map).sort((a, b) => {
    const aDate = new Date(getISODate(a));
    const bDate = new Date(getISODate(b));

    return bDate.getTime() - aDate.getTime();
  });

const convertEntriesToSortedArray = (map: Object) =>
  Object.entries(map).sort((a, b) => {
    const aDate = new Date(getISODate(a[0]));
    const bDate = new Date(getISODate(b[0]));

    return bDate.getTime() - aDate.getTime();
  });

const parseDate = (input: string) => {
  const month = input.slice(0, 2);
  const day = input.slice(2, 4);
  const year = input.slice(4);

  return { month, day, year };
};

export const getDisplayDate = (input: string) => {
  const { month, day, year } = parseDate(input);

  return `${MonthMap[month]} ${day}, ${year}`;
};

const getISODate = (input: string) => {
  const { month, day, year } = parseDate(input);

  return `${year}-${month}-${day}`;
};

const getPagination = (id: string) => {
  let nextComic = null;
  let prevComic = null;
  const comicMapArray = convertKeysToSortedArray(ComicMap);
  const comicIndex = comicMapArray.findIndex((comic) => comic === id);

  if (comicIndex + 1 <= comicMapArray.length - 1) {
    nextComic = comicMapArray[comicIndex + 1];
  }

  if (comicIndex - 1 > -1) {
    prevComic = comicMapArray[comicIndex - 1];
  }

  return { nextComic, prevComic };
};

export const firstComicLoader = () => {
  const comics: any[] = convertEntriesToSortedArray(ComicMap);

  const firstComicArray: any[] = comics.map((comic) => {
    return { id: comic[0], firstComic: comic[1][0] };
  });

  return { comics: firstComicArray };
};

export const singleComicLoader = ({ id }: { id?: string }) => {
  if (!id) return { comics: null, nextComic: null, prevComic: null };

  const comics: string[] = ComicMap[id];

  if (!comics) return { comics: null, nextComic: null, prevComic: null };

  const { nextComic, prevComic } = getPagination(id);

  return { comics, nextComic, prevComic };
};

const Comic = () => {
  const { id } = useParams();
  if (!id) return <ErrorPage errorMsg={"Not Found"} />;

  const { comics } = singleComicLoader({ id });

  if (!comics) return <ErrorPage errorMsg={"Not Found"} />;

  return (
    <Container>
      <div>{getDisplayDate(id)}</div>
      {comics.map((comic, index) => (
        <StyledComic key={index} src={require(`../assets/${comic}`)} />
      ))}
    </Container>
  );
};

export default Comic;
