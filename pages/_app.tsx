import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';
import client from '@graphql/config';

import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={sportsbetDark}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default MyApp;
