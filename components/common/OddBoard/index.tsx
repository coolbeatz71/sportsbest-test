import React, { FC } from 'react';
import { Text } from '@heathmont/moon-components';

export interface IOddBoardProps {
    odd?: number;
}

const OddBoard: FC<IOddBoardProps> = ({ odd = '-' }) => {
    return (
        <div className="col-span-1 flex flex-row items-center justify-center bg-gray-600 rounded-md p-2">
            <Text isBold size={20} color="goten.100">
                {odd}
            </Text>
        </div>
    );
};

export default OddBoard;
