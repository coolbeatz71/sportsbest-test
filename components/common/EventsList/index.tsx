import React, { FC, useEffect, useState } from 'react';
import { Heading } from '@heathmont/moon-core';
import { useQuery } from 'urql';
import { Button } from '@heathmont/moon-core';
import GET_EVENTS_QUERY from '@graphql/query/events';
import { MIN_LIMIT } from '@constants/api';
import { IEvent, IEventResult } from '@interfaces/query';
import ViewMoreEventModal from '@components/modal/ViewMoreEventModal';
import EventsContent from '@components/common/EventsContent';

const EventsList: FC = () => {
    const [showDialog, setShowDialog] = useState<boolean>(false);
    const [events, setEvents] = useState<IEvent[]>([]);
    const [{ data, fetching, error }] = useQuery<IEventResult>({
        query: GET_EVENTS_QUERY,
        variables: { first: MIN_LIMIT },
    });

    useEffect(() => {
        if (data) setEvents(data.events);
    }, [data]);

    const onShowDialog = () => setShowDialog(true);

    return (
        <div className="py-4">
            <Heading size={24} color="goten.100" className="text-white">
                Go to Sportsbet and place your own bet!
            </Heading>

            <ViewMoreEventModal showDialog={showDialog} setShowDialog={setShowDialog} />

            <EventsContent limit={MIN_LIMIT} fetching={fetching} error={error} events={events} />

            <Button size="large" color="piccolo.100" fullWidth onClick={onShowDialog}>
                See all feature events
            </Button>
        </div>
    );
};

export default EventsList;
