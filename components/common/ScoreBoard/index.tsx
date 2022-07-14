import React, { FC } from 'react';
import { Text } from '@heathmont/moon-components';

// export interface IScoreBoardProps {
//     competitors: {
//         name: string;
//         score: string;
//     }[];
//     startTime: string;
// }

const ScoreBoard: FC = () => {
    return (
        <div className="col-span-3 flex flex-row items-center">
            <div className="grid grid-rows-3 gap-1 w-full">
                <div className="grid grid grid-cols-4 gap-1">
                    <div className="col-span-3 flex flex-row justify-start">
                        <Text size={18} color="goten.100">
                            Kuopion Palloseura
                        </Text>
                    </div>
                    <div className="col-span-1 flex flex-row justify-end">
                        <Text size={18} color="piccolo.100">
                            0
                        </Text>
                    </div>
                </div>
                <div className="grid grid grid-cols-4 gap-1">
                    <div className="col-span-3 flex flex-row justify-start">
                        <Text size={18} color="goten.100">
                            FC Viktoria Plzen
                        </Text>
                    </div>
                    <div className="col-span-1 flex flex-row justify-end">
                        <Text size={18} color="piccolo.100">
                            0
                        </Text>
                    </div>
                </div>
                <div>
                    <Text size={18} color="trunks.100">
                        24/09 18:30
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;
