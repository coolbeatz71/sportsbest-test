import { FC } from 'react';
import Image from 'next/image';

export interface IPartnerLogoProps {
    imgUrl: string;
}

const PartnerLogo: FC<IPartnerLogoProps> = ({ imgUrl }) => {
    return (
        <div className="flex flex-col items-start pt-3">
            <div className="bg-gray-100 p-2 flex items-center rounded-full">
                <Image src={imgUrl} width={48} height={48} />
            </div>
        </div>
    );
};

export default PartnerLogo;
