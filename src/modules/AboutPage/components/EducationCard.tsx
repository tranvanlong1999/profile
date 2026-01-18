import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';
import GridItem from '@/modules/HomePage/components/GridItem';

import InfoItem from './InfoItem';

const EducationCard = () => {
  const isMobile = useMobile();
  return (
    <GridItem className={`h-full ${isMobile ? 'p-6' : 'p-8 md:p-10'}`}>
      <VStack spacing={24}>
        <h2 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Education</h2>
        <VStack spacing={20}>
          <InfoItem date="2017 - 2021" title="Bachelor of Engineering" subtitle="Ha Noi University of Industry" />
        </VStack>
      </VStack>
    </GridItem>
  );
};

export default EducationCard;
