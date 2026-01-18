import Link from 'next/link';
import React from 'react';

import GridItem from './GridItem';

interface InfoCardProps {
  title: string;
  subtitle: string;
  image?: string;
  href?: string;
  icon?: React.ReactNode;
  delay?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, subtitle, image, href = '#', icon, delay = 0 }) => {
  return (
    <GridItem
      className="p-6 md:p-7 flex flex-col justify-between min-h-[220px] md:min-h-[260px] cursor-pointer"
      delay={delay}
    >
      {/* Full Card Link Overlay - Moved to top for reliability */}
      <Link href={href} className="absolute inset-0 z-30" aria-label={title} />

      <div className="flex-1 flex items-center justify-center mb-10 relative z-10 pt-4">
        {image && (
          <div className="relative w-full h-24 md:h-28 flex items-center justify-center">
            <img src={image} alt={title} className="max-w-full max-h-[140%] object-contain drop-shadow-lg" />
          </div>
        )}
        {icon && <div className="text-5xl text-white">{icon}</div>}
      </div>

      <div className="flex flex-col gap-0.5 relative z-10">
        <span className="text-[12px] uppercase text-zinc-500 font-medium tracking-widest mb-1">{subtitle}</span>
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">{title}</h3>
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

export default InfoCard;
