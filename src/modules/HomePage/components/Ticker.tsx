import React from 'react';

import GridItem from './GridItem';

const Ticker = ({ delay = 0 }: { delay?: number }) => {
  return (
    <GridItem className="py-5 px-6 !rounded-full flex items-center bg-[#1e1e1e]" delay={delay}>
      <div className="flex whitespace-nowrap gap-10 animate-marquee">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-10 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-zinc-600"
          >
            <span>
              LATEST WORK AND <span className="text-white font-bold">FEATURED</span>
            </span>
            <span className="text-zinc-700 font-bold">•</span>
          </div>
        ))}
      </div>
    </GridItem>
  );
};

export default Ticker;
