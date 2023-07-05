import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import { GamesPage } from '../pages/GamesPage';
import GameDetailPage from '../pages/GameDetailPage';
import Layout from '../pages/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/games/:id',
        element: <GameDetailPage />,
      },
    ],
  },
]);
