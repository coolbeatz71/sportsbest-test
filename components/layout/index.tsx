import React, { FC, ReactElement, useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import getPlatformUrl from '@helpers/getPlatformUrl';
import Header from './Header';
import { APP_NAME } from '@constants/platform';

import styles from './index.module.scss';

export interface ILayoutProps {
    title: string;
    children: ReactElement;
}

const Layout: FC<ILayoutProps> = ({ title, children }) => {
    const router = useRouter();
    const _url = `${getPlatformUrl()}${router.asPath}`;

    const [scrolled, setScrolled] = useState<string>('');

    const scrollHandler = useCallback(() => {
        setScrolled(window.pageYOffset > 640 ? 'over' : window.pageYOffset > 80 ? 'scrolled' : '');
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, { passive: true });
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollHandler]);

    return (
        <div className={styles.layout}>
            <Head>
                <title>{`${title} | ${APP_NAME}`}</title>
                <link rel="canonical" href={_url} />
            </Head>

            <main className={styles.layout__main}>
                <Header scrolled={scrolled} />
                <div className={styles.layout__main__content}>{children}</div>
            </main>
        </div>
    );
};

export default Layout;
