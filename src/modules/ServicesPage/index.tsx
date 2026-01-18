import { motion } from 'framer-motion';
import React from 'react';

import { VStack } from '@/components/ui/Utilities';
import { useMobile } from '@/hooks/breakpoint';
import CTACard from '@/modules/HomePage/components/CTACard';
import InfoCard from '@/modules/HomePage/components/InfoCard';
import ProfilesCard from '@/modules/HomePage/components/ProfilesCard';

import ServiceOfferings from './components/ServiceOfferings';
import ServiceSidebar from './components/ServiceSidebar';

const ServicesPage = () => {
  const isMobile = useMobile();
  return (
    <>
      {/* Curtain Reveal Overlay */}
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
        className={`container mx-auto px-5 2xl:px-0 ${isMobile ? 'py-12' : 'py-24'} max-w-[1200px]`}
      >
        <VStack spacing={isMobile ? 12 : 24}>
          <div className="flex flex-col gap-10">
            {/* Top Section: Sidebar + Offerings */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left: Sidebar */}
              <div className="lg:col-span-3">
                <ServiceSidebar />
              </div>

              {/* Right: Offerings */}
              <div className="lg:col-span-9 flex flex-col gap-8">
                {/* Title Section */}
                <div className="flex items-center justify-center gap-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white opacity-90"
                  >
                    <path d="M25 0L28 17L45 20L28 23L25 40L22 23L5 20L22 17L25 0Z" fill="currentColor" />
                    <path
                      d="M25 5L27 18L40 20L27 22L25 35L23 22L10 20L23 18L25 5Z"
                      fill="currentColor"
                      fillOpacity="0.5"
                      transform="rotate(45 25 20)"
                    />
                  </svg>
                  <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white tracking-tight uppercase text-center leading-none">
                    My Offerings
                  </h1>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white opacity-90"
                  >
                    <path d="M25 0L28 17L45 20L28 23L25 40L22 23L5 20L22 17L25 0Z" fill="currentColor" />
                    <path
                      d="M25 5L27 18L40 20L27 22L25 35L23 22L10 20L23 18L25 5Z"
                      fill="currentColor"
                      fillOpacity="0.5"
                      transform="rotate(45 25 20)"
                    />
                  </svg>
                </div>

                <ServiceOfferings />
              </div>
            </div>

            {/* Bottom Section: Footer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <ProfilesCard />
              </div>
              <div className="lg:col-span-2">
                <CTACard />
              </div>
              <div className="lg:col-span-1">
                <InfoCard
                  subtitle="More About Me"
                  title="Credentials"
                  image="/images/signature.svg"
                  href="/credentials"
                />
              </div>
            </div>
          </div>
        </VStack>
      </motion.div>
    </>
  );
};

export default ServicesPage;
