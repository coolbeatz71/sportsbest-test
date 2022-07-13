import { FC } from 'react';
import Image from 'next/image';

export interface IPartnerLogoProps {
    imgUrl: string;
}

const PartnerLogo: FC<IPartnerLogoProps> = ({ imgUrl }) => {
    return (
        <div className="flex flex-col items-start pt-1">
            <div className="bg-gray-600 p-3 flex items-center rounded-full">
                <Image src={imgUrl} width={64} height={64} />
            </div>
        </div>
    );
};

export default PartnerLogo;
