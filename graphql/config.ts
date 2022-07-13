import { ApolloClient, InMemoryCache } from '@apollo/client';

import { WebSocketLink } from '@apollo/client/link/ws';
import getPlatformUrl from '@helpers/getPlatformUrl';

const platformUrl = getPlatformUrl();

const link = new WebSocketLink({
    uri: `ws://${platformUrl}`,
    options: {
        reconnect: true,
    },
});

const client = new ApolloClient({
    link,
    uri: `https://${platformUrl}`,
    cache: new InMemoryCache(),
});

export default client;
