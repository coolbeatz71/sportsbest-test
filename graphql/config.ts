import { ApolloClient, InMemoryCache } from '@apollo/client';

import { WebSocketLink } from '@apollo/client/link/ws';
import getPlatformUrl from '@helpers/getPlatformUrl';
import { isBrowser } from '@interfaces/app';

const platformUrl = getPlatformUrl();

const link = isBrowser
    ? new WebSocketLink({
          uri: `ws://${platformUrl}`,
          options: {
              reconnect: true,
          },
      })
    : undefined;

const client = new ApolloClient({
    link,
    uri: `https://${platformUrl}`,
    cache: new InMemoryCache(),
});

export default client;
