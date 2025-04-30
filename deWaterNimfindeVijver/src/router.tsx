import * as React from 'react';
import { createBrowserRouter, Outlet, Router } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import LandingsPagina from './Pages/LandingsPagina';
import Home  from './Pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navigation />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/LandingsPagina',
        element: <LandingsPagina />,
      },
    ],
  },
]);

export default router;
