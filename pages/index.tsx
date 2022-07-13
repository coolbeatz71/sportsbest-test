import React from 'react';
import type { NextPage } from 'next';
import Layout from '@components/layout';
import CalendarCard from '@components/common/CalendarCard';

const Home: NextPage = () => {
    return (
        <div>
            <Layout title="Home">
                <div className="px-8 py-1">
                    <CalendarCard />
                    <CalendarCard />
                    <CalendarCard />
                </div>
            </Layout>
        </div>
    );
};

export default Home;
