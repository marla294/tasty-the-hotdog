import comic from '../assets/09082023.jpeg';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`;

const StyledComic = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const Comic = () => {
  return <Container>
    <StyledComic src={comic} />
  </Container>
}

export default Comic;