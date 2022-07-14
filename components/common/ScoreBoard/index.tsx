import React, { FC } from 'react';
import dayjs from 'dayjs';
import { Text } from '@heathmont/moon-components';
import { ICompetitor } from '@interfaces/query';
import { truncate } from 'lodash';

export interface IScoreBoardProps {
    startTime: string;
    competitors: ICompetitor[];
}

const ScoreBoard: FC<IScoreBoardProps> = ({ competitors, startTime }) => (
    <div className="col-span-3 flex flex-row items-center">
        <div className="grid grid-rows-3 gap-1 w-full">
            {competitors.map((comp) => (
                <div className="grid grid grid-cols-4 gap-1" key={comp.id}>
                    <div className="col-span-3 flex flex-row justify-between">
                        <Text size={18} color="goten.100">
                            {truncate(comp.name, { length: 20 })}
                        </Text>
                    </div>
                    <div className="col-span-1 flex flex-row justify-end">
                        <Text size={18} color="piccolo.100">
                            {comp.score}
                        </Text>
                    </div>
                </div>
            ))}

            <Text size={16} color="trunks.100">
                {dayjs(startTime).format('DD/MM h:mm A')}
            </Text>
        </div>
    </div>
);

export default ScoreBoard;
