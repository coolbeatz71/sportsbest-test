import React, { FC } from 'react';
import Logo from '@components/common/Logo';
import PartnersSection from '@components/common/PartnersSection';

import styles from './index.module.scss';

export interface IHeaderProps {
    scrolled: string;
}

const Header: FC<IHeaderProps> = ({ scrolled }) => {
    return (
        <div className={styles.header}>
            <header data-scroll={scrolled} className="sticky top-0 p-5">
                <div className="grid grid grid-cols-3 gap-4">
                    <div className="col-span-1 flex flex-row items-center">
                        <Logo canRedirect className={styles.header__logo} />
                    </div>
                    <div className="col-span-2">
                        <PartnersSection />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
