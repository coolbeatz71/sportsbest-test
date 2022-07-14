import React, { FC } from 'react';
import { Text } from '@heathmont/moon-components';

export interface IOddBoardProps {
    odds?: number;
    isClickable: boolean;
    onClick: () => void;
}
const oddBoardClasses = `col-span-1 flex flex-row items-center justify-center bg-gray-600 rounded-md p-2`;

const OddBoard: FC<IOddBoardProps> = ({ odds, onClick, isClickable }) => (
    <div
        data-odd
        onClick={onClick}
        className={`${oddBoardClasses} ${isClickable ? 'cursor-pointer hover:bg-gray-500' : 'cursor-not-allowed'}`}
    >
        <Text isBold size={20} color="goten.100">
            {odds ? odds.toFixed(2) : '-'}
        </Text>
    </div>
);

export default OddBoard;
