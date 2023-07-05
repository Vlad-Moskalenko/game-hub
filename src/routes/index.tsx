import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import GameDetailPage from '../pages/GameDetailPage';
import Layout from '../pages/Layout';
import ErrorPage from '../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/games/:slug',
        element: <GameDetailPage />,
      },
    ],
  },
]);
