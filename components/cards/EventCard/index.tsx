import React, { FC } from 'react';

const EventCard: FC = () => {
    return (
        <div className="rounded bg-gray-900 rounded-md overflow-hidden bg-opacity-40 p-2 my-4">
            <div className="grid grid grid-cols-8 gap-3">
                <div className="col-span-4 flex flex-row items-center">
                    <div className="grid grid-rows-3 gap-1 w-full">
                        <div>
                            <div className="grid grid grid-cols-4 gap-1">
                                <div className="col-span-3 flex flex-row justify-start">lol</div>
                                <div className="col-span-1 flex flex-row justify-end">lol</div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid grid-cols-4 gap-1">
                                <div className="col-span-3 flex flex-row justify-start">lol</div>
                                <div className="col-span-1 flex flex-row justify-end">lol</div>
                            </div>
                        </div>
                        <div>lol</div>
                    </div>
                </div>
                <div className="col-span-1 flex flex-row items-center justify-center bg-gray-400 rounded-md p-2">
                    lol
                </div>
                <div className="col-span-1 flex flex-row items-center justify-center bg-gray-400 rounded-md p-2">
                    lol
                </div>
                <div className="col-span-1 flex flex-row items-center justify-center bg-gray-400 rounded-md p-2">
                    lol
                </div>
                <div className="col-span-1 flex flex-row items-center justify-center bg-gray-400 rounded-md p-2">
                    lol
                </div>
            </div>
        </div>
    );
};

export default EventCard;
