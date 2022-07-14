import { FC } from 'react';
import Image from 'next/image';

export interface IPartnerLogoProps {
    imgUrl: string;
}

const PartnerLogo: FC<IPartnerLogoProps> = ({ imgUrl }) => (
    <div className="flex flex-col items-start pt-1">
        <div data-icon className="bg-gray-600 p-3 flex items-center rounded-full">
            <Image src={imgUrl} width={40} height={40} />
        </div>
    </div>
);

export default PartnerLogo;
