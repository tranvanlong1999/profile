import Link from 'next/link';
import React from 'react';

import GridItem from './GridItem';

const ProfileCard = ({ delay = 0 }: { delay?: number }) => {
  return (
    <GridItem
      delay={delay}
      className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-10 relative overflow-hidden group cursor-pointer"
    >
      {/* Full Card Link Overlay */}
      <Link href="/about" className="absolute inset-0 z-10" />

      {/* Image Side - Takes half width on md/lg */}
      <div className="flex-1 w-full aspect-square md:max-w-none max-w-[280px] shrink-0 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] overflow-hidden bg-gradient-to-br from-[#4A72FF] to-[#2D46B9]">
        <img src="/images/avartar.png" alt="Profile" className="w-full h-full object-cover opacity-90 brightness-110" />
      </div>

      {/* Content Side - Takes half width on md/lg */}
      <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
        <span className="uppercase text-[12px] tracking-[0.2em] text-zinc-500 font-medium mb-1">A Web Designer</span>
        <h1 className="text-4xl md:text-5xl lg:text-[44px] font-bold text-white leading-none tracking-tight">
          Tran Van
          <br />
          Long.
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed mt-2 max-w-[280px]">
          I am a Backend-focused Full-stack Engineer.
        </p>
      </div>

      {/* Action Button - Star Icon */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-zinc-600 group-hover:text-inherit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L13.5 9L18.5 10.5L13.5 12L12 17L10.5 12L5.5 10.5L10.5 9L12 4Z" fill="currentColor" />
          </svg>
        </div>
      </div>
    </GridItem>
  );
};

export default ProfileCard;
