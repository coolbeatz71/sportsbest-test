import React, { FC, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useSubscription } from 'urql';
import ScoreBoard from '@components/common/ScoreBoard';
import OddBoard from '@components/common/OddBoard';
import { IEvent, ISelection } from '@interfaces/query';
import { MARKET_FILTER } from '@constants/api';
import UPDATE_EVENT_SUBSCRIPTION from '@graphql/subscription/event';

export interface IEventCardProps {
    event: IEvent;
}

const EventCard: FC<IEventCardProps> = ({ event }) => {
    const [updatedEvent, setUpdatedEvent] = useState<IEvent>(event);

    const { competitors, markets, startTime } = updatedEvent;
    const filteredMarkets = markets.filter((market) => market.name === MARKET_FILTER);
    const onClickOdds = (isClickable: boolean, selection: ISelection) => {
        if (isClickable) console.log('selection', selection);
    };

    const [{ data }] = useSubscription<{ eventUpdate: IEvent }>({
        query: UPDATE_EVENT_SUBSCRIPTION,
        variables: { eventId: updatedEvent.id },
    });

    useEffect(() => {
        if (data) setUpdatedEvent(data.eventUpdate);
    }, [data]);

    return !isEmpty(filteredMarkets) ? (
        <div className="rounded bg-gray-900 rounded-md overflow-hidden bg-opacity-40 p-3 my-4">
            <div className="grid grid-cols-6 gap-3">
                <ScoreBoard startTime={startTime} competitors={competitors} />
                {filteredMarkets[0].selections.map((select) => {
                    const isClickable = select.odds !== null;

                    return (
                        <OddBoard
                            key={select.id}
                            odds={select.odds}
                            isClickable={isClickable}
                            onClick={() => onClickOdds(isClickable, select)}
                        />
                    );
                })}
            </div>
        </div>
    ) : null;
};

export default EventCard;
