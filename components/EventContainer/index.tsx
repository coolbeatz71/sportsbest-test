import React, { FC, useEffect, useState } from 'react';
import EventCard from '@components/cards/EventCard';
import { Heading } from '@heathmont/moon-core';
import { useQuery } from 'urql';
import { Button } from '@heathmont/moon-core';
import GET_EVENTS_QUERY from '@graphql/query/events';
import { MIN_LIMIT } from '@constants/api';
import { IEvent, IEventResult } from '@interfaces/query';
import EventCardSkeleton from '@components/skeletons/EventCardSkeleton';
import ErrorAlert from '@components/common/AlertError';
import ViewMoreEventModal from '@components/modal/ViewMoreEventModal';

const EventContainer: FC = () => {
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

            {error ? <ErrorAlert message={error.message} /> : null}

            {fetching ? Array.from(Array(MIN_LIMIT).keys()).map((item) => <EventCardSkeleton key={item} />) : null}

            {events ? events.map((event) => <EventCard key={event.category.id} event={event} />) : null}

            <Button size="large" color="piccolo.100" fullWidth onClick={onShowDialog}>
                See all feature events
            </Button>
        </div>
    );
};

export default EventContainer;
