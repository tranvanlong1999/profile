import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';
import GridItem from '@/modules/HomePage/components/GridItem';

import InfoItem from './InfoItem';

const ExperienceCard = () => {
  const isMobile = useMobile();
  return (
    <GridItem className={`h-full ${isMobile ? 'p-6' : 'p-8 md:p-10'}`}>
      <VStack spacing={24}>
        <h2 className="text-sm font-bold text-white uppercase tracking-[0.2em]">Experience</h2>
        <VStack spacing={20}>
          <InfoItem date="2025 - Present" title="Java Software Engineer" subtitle="CMC Global – Samsung Project" />
          <InfoItem date="2021 - 2025" title="Java Software Engineer" subtitle="Fubon Life Vietnam" />
          <InfoItem date="2021 - 2021" title="Java Developer" subtitle="VTI" />
        </VStack>
      </VStack>
    </GridItem>
  );
};

export default ExperienceCard;
