import React, { FC, useEffect, useState } from 'react';
import { Dialog } from '@heathmont/moon-components';
import { Header } from '@heathmont/moon-core';

import { ControlsClose, ControlsChevronLeft } from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import { MAX_LIMIT } from '@constants/api';
import { GET_ALL_EVENTS_QUERY } from '@graphql/query/events';
import { IEvent, IEventResult } from '@interfaces/query';
import { useQuery } from 'urql';
import EventsContent from '@components/common/EventsContent';

export interface IViewMoreEventModalProps {
    showDialog: boolean;
    setShowDialog: (val: boolean) => void;
}

const ViewMoreEventModal: FC<IViewMoreEventModalProps> = ({ showDialog, setShowDialog }) => {
    const [events, setEvents] = useState<IEvent[]>([]);
    const [{ data, fetching, error }] = useQuery<IEventResult>({
        query: GET_ALL_EVENTS_QUERY,
    });

    useEffect(() => {
        if (data) setEvents(data.events);
    }, [data]);

    const handleClose = () => setShowDialog(false);

    return (
        <Dialog
            isOpen={showDialog}
            onDismiss={handleClose}
            maxWidth="750px"
            position="TOP"
            hideCloseButton
            heading={
                <Header
                    backButton={<ControlsChevronLeft fontSize={rem(32)} onClick={handleClose} />}
                    closeButton={<ControlsClose fontSize={rem(32)} onClick={handleClose} />}
                    isDivider={true}
                >
                    All feature events
                </Header>
            }
        >
            <EventsContent limit={MAX_LIMIT} fetching={fetching} error={error} events={events} />
        </Dialog>
    );
};

export default ViewMoreEventModal;
