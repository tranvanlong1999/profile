import React from 'react';

import BentoCard from '@/components/ui/BentoCard';
import { VStack } from '@/components/ui/Utilities';

interface ProjectContentProps {
  date: string;
  client: string;
  services: string;
  year: string;
  description: string;
  about: string;
}

const ProjectContent = ({ date, client, services, year, description, about }: ProjectContentProps) => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Detail Info Card */}
        <div className="md:col-span-4 lg:col-span-3">
          <BentoCard className="h-full p-8 bg-gradient-to-br from-[#1e1e1e] to-[#141414] border-white/5">
            <VStack spacing={24}>
              <div>
                <span className="text-[12px] uppercase text-zinc-500 font-medium tracking-widest mb-1 block">Date</span>
                <p className="text-white font-semibold">{date}</p>
              </div>
              <div>
                <span className="text-[12px] uppercase text-zinc-500 font-medium tracking-widest mb-1 block">
                  Client
                </span>
                <p className="text-white font-semibold">{client}</p>
              </div>
              <div>
                <span className="text-[12px] uppercase text-zinc-500 font-medium tracking-widest mb-1 block">
                  Services
                </span>
                <p className="text-white font-semibold">{services}</p>
              </div>
              <div>
                <span className="text-[12px] uppercase text-zinc-500 font-medium tracking-widest mb-1 block">Year</span>
                <p className="text-white font-semibold">{year}</p>
              </div>
            </VStack>
          </BentoCard>
        </div>

        {/* Description Card */}
        <div className="md:col-span-8 lg:col-span-9">
          <BentoCard className="h-full p-8 md:p-12 bg-gradient-to-br from-[#1e1e1e] to-[#141414] border-white/5">
            <VStack spacing={24}>
              <h3 className="text-[14px] uppercase text-white font-medium tracking-widest leading-none">
                About Project
              </h3>
              <div className="space-y-6">
                <p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
                <p className="text-zinc-400 text-lg leading-relaxed">{about}</p>
              </div>
            </VStack>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default ProjectContent;
