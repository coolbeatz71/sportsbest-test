import { cacheExchange, Client as CreateClient, debugExchange, fetchExchange, subscriptionExchange } from 'urql';
import { Client, createClient as createWSClient } from 'graphql-ws';
import getPlatformUrl from '@helpers/getPlatformUrl';
import { isBrowser } from '@interfaces/app';
import { WEB_SOCKET_KEY } from '@constants/platform';

const apiUrl = getPlatformUrl();

const wsClient = isBrowser
    ? createWSClient({
          url: `wss://${apiUrl}`,
          connectionParams: {
              'Sec-Websocket-Protocol': 'graphql-transport-ws',
              'Sec-WebSocket-Key': WEB_SOCKET_KEY,
          },
      })
    : undefined;

const client = new CreateClient({
    url: `https://${apiUrl}`,
    exchanges: [
        debugExchange,
        cacheExchange,
        fetchExchange,
        subscriptionExchange({
            forwardSubscription(operation) {
                return {
                    subscribe: (sink) => {
                        const dispose = (wsClient as Client).subscribe(operation, sink);
                        return {
                            unsubscribe: dispose,
                        };
                    },
                };
            },
        }),
    ],
});

export default client;
