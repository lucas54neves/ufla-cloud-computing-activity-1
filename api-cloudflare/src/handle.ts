import { createName } from './controllers/createName';
import { returnNames } from './controllers/returnNames';

export const handle = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  const uri = url.pathname;

  if (uri === '/names' && request.method === 'GET') {
    return returnNames();
  }

  if (uri === '/names' && request.method === 'POST') {
    return createName(request);
  }

  const status = 404;
  const message = 'URL not found';

  return new Response(message, { status: status });
};
