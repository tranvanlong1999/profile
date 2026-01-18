import Link from 'next/link';
import React from 'react';

import { Icons } from '@/assets/icons';

import GridItem from './GridItem';

const ServicesCard = ({ delay = 0 }: { delay?: number }) => {
  const services = [
    { icon: <Icons.camera size={32} />, label: 'Photography' },
    { icon: <Icons.pencil size={32} />, label: 'Design' },
    { icon: <Icons.layers size={32} />, label: 'Branding' },
    { icon: <Icons.code size={32} />, label: 'Web' },
  ];
  return (
    <GridItem className="p-8 md:p-10 flex flex-col justify-between relative group cursor-pointer" delay={delay}>
      <Link href="/service-offerings" className="absolute inset-0 z-30" aria-label="Our services" />
      <div className="flex-1 flex items-center justify-around gap-4 py-6 relative z-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 text-white opacity-90 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
          >
            <div className="text-3xl md:text-4xl">{s.icon}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-0.5 relative z-10">
        <span className="text-[12px] uppercase text-zinc-500 font-medium tracking-widest mb-1">Specialization</span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">Services Offering</h3>
      </div>

      <div className="absolute bottom-6 right-6 z-20">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-zinc-800 bg-zinc-900 group-hover:bg-white group-hover:border-white transition-all duration-300"></div>
          <svg
            width="40"
            height="18"
            viewBox="0 0 40 18"
            fill="none"
            className="relative z-10 -ml-2 text-zinc-600 group-hover:text-black transition-colors duration-300"
          >
            <path
              d="M16 9L0 9"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="opacity-20 group-hover:opacity-0 transition-opacity"
            />
            <circle
              cx="31"
              cy="9"
              r="7"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-20 group-hover:opacity-0 transition-opacity"
            />
            <path
              d="M31 6V12M28 9H34"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              className="opacity-20 group-hover:opacity-0 transition-opacity"
            />
            <path
              d="M6 9H31M31 9L27 5M31 9L27 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </svg>
        </div>
      </div>
    </GridItem>
  );
};

export default ServicesCard;
