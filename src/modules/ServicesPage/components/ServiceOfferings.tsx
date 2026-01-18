import React from 'react';

import { VStack } from '@/components/ui/Utilities';

const ServiceOfferings = () => {
  const offerings = [
    {
      title: 'PHOTOGRAPHY',
      description:
        'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
    },
    {
      title: 'WEB DESIGNING',
      description:
        'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
    },
    {
      title: 'BRANDING',
      description:
        'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
    },
    {
      title: 'DEVELOPMENT',
      description:
        'Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor asna rhoncus dolor purus non enim aberitin praesent in elementum sahas facilisis leo, vel fringilla est etisam dignissim.',
    },
  ];

  return (
    <VStack
      justify="center"
      className="bg-[#0f0f0f] rounded-[30px] p-8 md:p-12 border border-white/5 h-full"
      spacing={0}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {offerings.map((offering, index) => (
          <VStack
            key={index}
            spacing={16}
            className="bg-[#131313] rounded-[24px] p-6 md:p-10 border border-white/5 hover:border-white/10 transition-colors group"
          >
            <h4 className="text-zinc-500 font-bold text-[10px] md:text-[11px] tracking-[0.2em] uppercase group-hover:text-white transition-colors">
              {offering.title}
            </h4>
            <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed">{offering.description}</p>
          </VStack>
        ))}
      </div>
    </VStack>
  );
};

export default ServiceOfferings;
