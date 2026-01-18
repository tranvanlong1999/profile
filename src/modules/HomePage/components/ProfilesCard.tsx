import Link from 'next/link';
import React from 'react';

import { Icons } from '@/assets/icons';

import GridItem from './GridItem';

const ProfilesCard = ({ delay = 0 }: { delay?: number }) => {
  return (
    <GridItem className="p-6 md:p-7 flex flex-col justify-between" delay={delay}>
      <div className="flex-1 flex items-center justify-center relative z-10 w-full mb-8">
        <div className="w-full h-32 md:h-36 rounded-[30px] border border-white/5 bg-gradient-to-br from-[#2a2a2a]/20 to-[#161616]/20 flex items-center justify-center gap-6 px-6">
          <Link
            href="#"
            className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#161616] hover:bg-white hover:text-black transition-all text-white group/icon"
          >
            <Icons.dribbble size={36} className="transition-transform group-hover/icon:scale-110" />
          </Link>
          <Link
            href="#"
            className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#161616] hover:bg-white hover:text-black transition-all text-white group/icon"
          >
            <Icons.twitter size={36} className="transition-transform group-hover/icon:scale-110" />
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-0.5 relative z-10">
        <span className="text-[12px] uppercase text-zinc-500 font-medium tracking-widest mb-1">Stay with me</span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">Profiles</h3>
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

export default ProfilesCard;
