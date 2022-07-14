import React, { FC, Fragment } from 'react';
import EventCard from '@components/cards/EventCard';
import EventCardSkeleton from '@components/skeletons/EventCardSkeleton';
import { IEvent } from '@interfaces/query';
import { CombinedError } from 'urql';
import ErrorAlert from '../AlertError';

export interface IEventsContentProps {
    limit: number;
    fetching: boolean;
    error: CombinedError | undefined;
    events?: IEvent[] | undefined;
}

const EventsContent: FC<IEventsContentProps> = ({ limit, error, fetching, events }) => (
    <Fragment>
        {error ? <ErrorAlert message={error.message} /> : null}

        {fetching ? Array.from(Array(limit).keys()).map((item) => <EventCardSkeleton key={item} />) : null}

        {events ? events.map((event) => <EventCard key={event.category.id} event={event} />) : null}
    </Fragment>
);

export default EventsContent;
