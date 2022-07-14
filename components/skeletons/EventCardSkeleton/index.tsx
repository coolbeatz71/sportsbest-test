import React, { FC } from 'react';

const EventCardSkeleton: FC = () => {
    return (
        <div className="rounded bg-slate-300 rounded-md overflow-hidden p-3 my-4">
            <div className="grid grid-cols-6 gap-3 animate-pulse">
                <div className="col-span-3 flex flex-row items-center rounded-md bg-slate-400 h-24 w-full"></div>
                <div className="col-span-1 flex flex-row items-center rounded-md bg-slate-400"></div>
                <div className="col-span-1 flex flex-row items-center rounded-md bg-slate-400"></div>
                <div className="col-span-1 flex flex-row items-center rounded-md bg-slate-400"></div>
            </div>
        </div>
    );
};

export default EventCardSkeleton;
