import React, { FC } from 'react';
import Image from 'next/image';
import calendar from 'public/calendar.svg';

const CalendarCard: FC = () => (
    <div className="rounded bg-gray-900 rounded-md overflow-hidden bg-opacity-40 p-5 my-3">
        <div className="flex items-center justify-center">
            <Image src={calendar} width={52} height={52} />
        </div>
    </div>
);

export default CalendarCard;
