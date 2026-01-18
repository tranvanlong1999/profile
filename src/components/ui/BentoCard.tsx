import React from 'react';

import { cn } from '@/lib/utils';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '' }) => {
  return (
    <div className={cn('bg-gridx-card rounded-[30px] p-6 flex flex-col justify-between', className)}>{children}</div>
  );
};

export default BentoCard;
