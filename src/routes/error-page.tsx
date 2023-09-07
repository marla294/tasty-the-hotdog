import { useRouteError } from "react-router-dom";
import styled from 'styled-components';

const ErrorDiv = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100% !important;
`;

const ContentP = styled.p`
  display: grid;
  justify-self: center;
`;

const ErrorPage = () => {
  const error: any = useRouteError()

  return <ErrorDiv>

    <h1>Sorry, an unexpected error has occurred</h1>
    <ContentP>
      Error message: {error?.statusText || error?.message}
    </ContentP>
  </ErrorDiv>
}

export default ErrorPage;