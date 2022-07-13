import React, { FC } from 'react';
import EventCard from '@components/cards/EventCard';
import { Heading } from '@heathmont/moon-core';

const EventContainer: FC = () => {
    return (
        <div className="py-4">
            <Heading size={24} color="goten.100" className="text-white">
                Go to Sportsbet and place your own bet!
            </Heading>
            <EventCard />
            <EventCard />
        </div>
    );
};

export default EventContainer;
