import React, { FC } from 'react';
import { Heading } from '@heathmont/moon-core';
import partnersList from '@constants/partners';
import PartnerLogo from '../PartnerLogo';

const PartnersSection: FC = () => (
    <div className="flex flex-col">
        <Heading size={20} color="goten.100">
            Official partners of
        </Heading>

        <div className="grid grid grid-cols-4 gap-4">
            {partnersList.map((partner) => (
                <PartnerLogo key={partner.label} imgUrl={partner.icon} />
            ))}
        </div>
    </div>
);

export default PartnersSection;
