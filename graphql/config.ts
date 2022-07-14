import { cacheExchange, Client, debugExchange, fetchExchange } from 'urql';
import getPlatformUrl from '@helpers/getPlatformUrl';

const platformUrl = getPlatformUrl();
const client = new Client({
    url: platformUrl,
    exchanges: [debugExchange, cacheExchange, fetchExchange],
});

export default client;
