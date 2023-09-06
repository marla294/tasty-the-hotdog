import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError()

  return <div>
    <h1>Sorry, an unexpected error has occurred</h1>
    <p>
      <i>{error?.statusText || error?.message}</i>
    </p>
  </div>
}

export default ErrorPage;