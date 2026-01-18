import React from 'react';

import GridItem from './GridItem';

const StatsCard = ({ delay = 0 }: { delay?: number }) => {
  return (
    <GridItem className="!px-3 md:!px-4 !py-5 !flex-row items-center justify-between gap-3 md:gap-4" delay={delay}>
      {[
        { value: '07', label: 'YEARS\nEXPERIENCE' },
        { value: '+125', label: 'CLIENTS\nWORLDWIDE' },
        { value: '+210', label: 'TOTAL\nPROJECTS' },
      ].map((stat, index) => (
        <div
          key={index}
          className="flex-1 min-w-0 flex flex-col items-center justify-center p-4 md:p-6 min-h-[180px] md:min-h-[220px] rounded-[30px] border border-white/5 bg-gradient-to-br from-[#1e1e1e] to-[#141414] text-center shadow-2xl transition-transform hover:scale-[1.02]"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{stat.value}</h2>
          <span className="text-[12px] md:text-[13px] uppercase text-zinc-500 font-medium tracking-[0.25em] leading-tight whitespace-pre-line">
            {stat.label}
          </span>
        </div>
      ))}
    </GridItem>
  );
};

export default StatsCard;
