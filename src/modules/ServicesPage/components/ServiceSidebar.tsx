import React from 'react';

import { Icons } from '@/assets/icons';
import { HStack, VStack } from '@/components/ui/Utilities';

const ServiceSidebar = () => {
  const services = [
    { icon: <Icons.camera size={24} />, label: 'PHOTOGRAPHY' },
    { icon: <Icons.pencil size={24} />, label: 'WEB DESIGNING' },
    { icon: <Icons.layers size={24} />, label: 'BRANDING' },
    { icon: <Icons.code size={24} />, label: 'DEVELOPMENT' },
  ];

  return (
    <VStack
      justify="center"
      spacing={32}
      className="bg-[#0f0f0f] rounded-[30px] p-8 md:p-12 border border-white/5 h-full lg:gap-20"
    >
      {services.map((service, index) => (
        <HStack key={index} spacing={24} className="md:gap-8 group cursor-pointer transition-all">
          <div className="text-white/80 group-hover:text-white transition-colors duration-300">
            {React.cloneElement(service.icon as React.ReactElement, { size: 28, strokeWidth: 1.5 })}
          </div>
          <span className="text-white/80 group-hover:text-white transition-colors duration-300 font-bold text-[13px] md:text-sm tracking-[0.1em] uppercase">
            {service.label}
          </span>
        </HStack>
      ))}
    </VStack>
  );
};

export default ServiceSidebar;
