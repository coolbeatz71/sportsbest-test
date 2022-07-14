import React, { FC } from 'react';
import { isEmpty } from 'lodash';
import ScoreBoard from '@components/common/ScoreBoard';
import OddBoard from '@components/common/OddBoard';
import { IEvent, ISelection } from '@interfaces/query';
import { MARKET_FILTER } from '@constants/api';

export interface IEventCardProps {
    event: IEvent;
}

const EventCard: FC<IEventCardProps> = ({ event }) => {
    const { competitors, markets, startTime } = event;
    const filteredMarkets = markets.filter((market) => market.name === MARKET_FILTER);

    const onClickOdds = (isClickable: boolean, selection: ISelection) => {
        if (isClickable) console.log('selection', selection);
    };

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
