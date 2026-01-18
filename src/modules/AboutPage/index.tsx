import { motion } from 'framer-motion';
import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';
import CTACard from '@/modules/HomePage/components/CTACard';
import InfoCard from '@/modules/HomePage/components/InfoCard';
import ProfilesCard from '@/modules/HomePage/components/ProfilesCard';

import BioSection, { Starburst } from './components/BioSection';
import EducationCard from './components/EducationCard';
import ExperienceCard from './components/ExperienceCard';
import ProfileImage from './components/ProfileImage';

const AboutPage = () => {
  const isMobile = useMobile();
  return (
    <>
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
        className="fixed inset-0 bg-[#0f0f0f] z-[9999] pointer-events-none"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 0.6,
              duration: 1.2,
              ease: [0.2, 0, 0.2, 1],
              staggerChildren: 0.15,
            },
          },
        }}
        className="container mx-auto px-4 py-12 md:py-20 max-w-[1200px]"
      >
        <VStack spacing={isMobile ? 12 : 24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Profile Image */}
            <div className="lg:col-span-4 h-full">
              <ProfileImage />
            </div>

            {/* Right: Title + Bio */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Section Header */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.2, 0, 0.2, 1] } },
                }}
                className="flex items-center gap-4 md:gap-6"
              >
                <Starburst className="text-white w-6 h-6 md:w-8 md:h-8" />
                <h1 className="text-3xl md:text-5xl lg:text-[68px] font-black text-white tracking-[-2px] uppercase leading-none">
                  Self-Summary
                </h1>
                <Starburst className="text-white w-6 h-6 md:w-8 md:h-8" />
              </motion.div>

              <div className="flex-1">
                <BioSection />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExperienceCard />
            <EducationCard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <ProfilesCard />
            </div>
            <div className="md:col-span-2">
              <CTACard />
            </div>
            <div className="md:col-span-1">
              <InfoCard
                subtitle="More About Me"
                title="Credentials"
                image="/images/tech-abstract.png"
                href="/credentials"
              />
            </div>
          </div>
        </VStack>
      </motion.div>
    </>
  );
};

export default AboutPage;
