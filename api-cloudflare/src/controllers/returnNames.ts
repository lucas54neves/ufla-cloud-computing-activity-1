import { returnAllNames } from '../services/returnAllNames';

export const returnNames = async () => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
    'Access-Control-Max-Age': '86400',
    'content-type': 'application/json;charset=UTF-8',
  };

  const names = await returnAllNames();

  const responseBody = {
    names,
  };

  return new Response(JSON.stringify(responseBody), {
    status: 200,
    headers,
  });
};
