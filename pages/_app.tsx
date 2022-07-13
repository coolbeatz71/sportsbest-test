import type { AppProps } from 'next/app';
import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';

import '@styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={sportsbetDark}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
