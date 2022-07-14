import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';
import client from '@graphql/config';

import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider value={client}>
            <ThemeProvider theme={sportsbetDark}>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
};

export default MyApp;
