import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from './routes/error-page';
import About from './routes/about';
import Comic, {loader as comicLoader} from './routes/comic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: comicLoader,
    children: [
      {
        path: "about",
        element: <About />
      },
      {
        path: "comic/:id",
        element: <Comic />,
        loader: comicLoader
      }
    ]
  },
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
