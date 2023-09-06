import { useRouteError } from "react-router-dom";
import styled from 'styled-components';

const ErrorDiv = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100% !important;
`;

const ErrorPage = () => {
  const error: any = useRouteError()

  return <ErrorDiv>
    <h1>Sorry, an unexpected error has occurred</h1>
    <p>
      Error message: <i>{error?.statusText || error?.message}</i>
    </p>
  </ErrorDiv>
}

export default ErrorPage;