import { putNames } from '../services/putNames';
import { returnAllNames } from '../services/returnAllNames';

export const createName = async (request: Request) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Max-Age': '86400',
    'content-type': 'application/json;charset=UTF-8',
  };

  const body: { name: string } = await request.json();

  if (JSON.stringify(body) === JSON.stringify({})) {
    return new Response(JSON.stringify({ message: 'Data is missing' }), {
      status: 400,
      headers,
    });
  }

  if (!body || !body.name) {
    return new Response(JSON.stringify({ message: 'Name is missing' }), {
      status: 400,
      headers,
    });
  }

  const name = body.name;

  const names = await returnAllNames();

  if (names.includes(name)) {
    return new Response(JSON.stringify({ message: 'Name is already added' }), {
      status: 400,
      headers,
    });
  }

  names.push(name);

  await putNames(names);

  return new Response(null, {
    status: 201,
    headers,
  });
};
