import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes'; // путь к вашему файлу с роутером

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);