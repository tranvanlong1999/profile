import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import BentoCard from '@/components/ui/BentoCard';

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  href?: string;
  className?: string;
}

const ProjectCard = ({ image, category, title, href = '#', className = '' }: ProjectCardProps) => {
  return (
    <Link href={href} className="block h-full">
      <BentoCard className={`group h-full gap-4 border border-white/5 ${className}`}>
        {/* Image Container */}
        <div className="relative w-full overflow-hidden rounded-2xl flex-1 min-h-[200px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
        </div>

        {/* Content */}
        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{category}</span>
            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
          </div>

          {/* Action Button (Visual only, Link is now outer) */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/50 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
            <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>
      </BentoCard>
    </Link>
  );
};

export default ProjectCard;
