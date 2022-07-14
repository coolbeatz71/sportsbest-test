import React, { FC } from 'react';
import EventCard from '@components/cards/EventCard';
import { Heading } from '@heathmont/moon-core';
import { Button } from '@heathmont/moon-core';

const EventContainer: FC = () => {
    return (
        <div className="py-4">
            <Heading size={24} color="goten.100" className="text-white">
                Go to Sportsbet and place your own bet!
            </Heading>
            <EventCard />
            <EventCard />
            <Button size="large" color="piccolo.100" fullWidth>
                See all featured events
            </Button>
        </div>
    );
};

export default EventContainer;
