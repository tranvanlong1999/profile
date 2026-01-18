import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-white text-3xl font-bold font-sans">GridX</span>
    </div>
  );
};

export default Logo;
