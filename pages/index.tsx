import React from 'react';
import type { NextPage } from 'next';
import Layout from '@components/layout';
import CalendarCard from '@components/cards/CalendarCard';
import EventsList from '@components/common/EventsList';

const Home: NextPage = () => {
    return (
        <Layout title="Home">
            <div className="px-8 py-1">
                {Array.from(Array(3).keys()).map((item) => (
                    <CalendarCard key={item} />
                ))}

                <EventsList />
            </div>
        </Layout>
    );
};

export default Home;
