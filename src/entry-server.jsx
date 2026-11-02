import { renderToString } from 'react-dom/server';
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router';
import { routes } from './routes';

export async function render(request) {
  const handler = createStaticHandler(routes);
  const context = await handler.query(request);
  if (context instanceof Response) return { redirect: context };
  const router = createStaticRouter(handler.dataRoutes, context);
  const html = renderToString(
    <StaticRouterProvider router={router} context={context} />
  );
  return { html };
}