import React from 'react';

import { useMobile } from '@/hooks/breakpoint';
import GridItem from '@/modules/HomePage/components/GridItem';

const ProfileImage = () => {
  const isMobile = useMobile();
  return (
    <GridItem className={`h-full ${isMobile ? 'p-4' : 'p-6'} !overflow-visible`}>
      <div className="relative w-full h-full rounded-[24px] overflow-hidden group aspect-square">
        <div className="absolute inset-0 bg-[#3b3b3b]"></div>
        <img
          src="/images/avartar.png"
          alt="Profile"
          className="w-full h-full object-cover object-center opacity-100 relative z-10 scale-100 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </GridItem>
  );
};

export default ProfileImage;
