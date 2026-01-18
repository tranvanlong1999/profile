import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';
import GridItem from '@/modules/HomePage/components/GridItem';

export const Starburst = ({ className }: { className?: string }) => (
  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M25 0L28 17L45 20L28 23L25 40L22 23L5 20L22 17L25 0Z" fill="currentColor" />
    <path
      d="M25 5L27 18L40 20L27 22L25 35L23 22L10 20L23 18L25 5Z"
      fill="currentColor"
      fillOpacity="0.5"
      transform="rotate(45 25 20)"
    />
  </svg>
);

const BioSection = () => {
  const isMobile = useMobile();
  return (
    <GridItem className={`h-full relative overflow-hidden ${isMobile ? 'p-6' : 'p-10'}`}>
      {/* Decorative star */}
      <div className="absolute top-8 left-8 text-white/10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
        </svg>
      </div>

      <VStack spacing={4} className="mt-4 md:mt-8">
        <h2 className="text-3xl md:text-[44px] font-bold text-white tracking-[-1px] uppercase leading-tight">
          TRAN VAN LONG
        </h2>
        <p className="text-zinc-500 leading-relaxed text-sm md:text-base font-medium max-w-[100%]">
          I am a Backend-focused Full-stack Software Engineer with 5+ years of experience in enterprise systems using
          Java, Spring Boot, and Oracle. I specialize in modernizing legacy systems toward microservices architectures.
        </p>
      </VStack>
    </GridItem>
  );
};

export default BioSection;
