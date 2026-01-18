import Link from 'next/link';
import React from 'react';

import { Icons } from '@/assets/icons';

import GridItem from './GridItem';

const CTACard = ({ delay = 0 }: { delay?: number }) => {
  return (
    <GridItem
      className="relative overflow-hidden group !p-0 min-h-[140px] md:min-h-[200px] cursor-pointer"
      delay={delay}
    >
      <Link href="/contact" className="absolute inset-0 z-30" aria-label="Work together" />

      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/bg-cta.png')] bg-cover bg-center opacity-5"></div>

      <div className="relative z-10 flex flex-col justify-center h-full p-6 md:p-8">
        {/* Top Left Decoration */}
        <div className="absolute top-0 left-10 flex flex-col items-center gap-0">
          <div className="w-px h-10 bg-gradient-to-b from-white/0 to-white/20" />
          <div className="text-white/40 -mt-1">
            <Icons.sparkles size={32} />
          </div>
        </div>

        <div className="relative z-10 mt-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
            Let&apos;s <br />
            work <span className="text-[#5b78f6]">together.</span>
          </h2>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-zinc-800 bg-zinc-900 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl"></div>
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

export default CTACard;
