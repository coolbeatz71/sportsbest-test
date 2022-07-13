import React, { FC } from 'react';
import { Heading } from '@heathmont/moon-core';
import partnersList from '@constants/partners';
import PartnerLogo from '../PartnerLogo';

const PartnersSection: FC = () => {
    return (
        <div className="flex flex-col">
            <Heading size={24} color="goten.100">
                Official partners of
            </Heading>

            <div className="grid grid grid-cols-4 gap-4">
                {partnersList.map((partner) => (
                    <PartnerLogo key={partner.label} imgUrl={partner.icon} />
                ))}
            </div>
        </div>
    );
};

export default PartnersSection;
