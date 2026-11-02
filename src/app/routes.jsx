import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import('./pages/Home.jsx')).default }),
      },
      {
        path: 'haqqimizda',
        lazy: async () => ({ Component: (await import('./pages/About.jsx')).default }),
      },
      {
        path: 'xidmetler',
        lazy: async () => ({ Component: (await import('./pages/Services.jsx')).default }),
      },
      {
        path: 'elaqe',
        lazy: async () => ({ Component: (await import('./pages/Contact.jsx')).default }),
      },
      {
        path: '*',
        lazy: async () => ({ Component: (await import('./pages/NotFound.jsx')).default }),
      },
    ],
  },
]);