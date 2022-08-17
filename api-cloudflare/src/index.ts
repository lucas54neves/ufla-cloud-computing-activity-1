import { handle } from './handle';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handle(event.request));
});
