import React, { FC } from 'react';
import ScoreBoard from '@components/common/ScoreBoard';
import OddBoard from '@components/common/OddBoard';

const EventCard: FC = () => {
    return (
        <div className="rounded bg-gray-900 rounded-md overflow-hidden bg-opacity-40 p-3 my-4">
            <div className="grid grid grid-cols-6 gap-3">
                <ScoreBoard />
                <OddBoard odd={2.7} />
                <OddBoard />
                <OddBoard odd={3.4} />
            </div>
        </div>
    );
};

export default EventCard;
