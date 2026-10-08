import React, { useState } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-24 sm:h-28',
    xl: 'h-36 sm:h-44',
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {!imgError ? (
        <img
          src="/chokoPatty.png"
          alt="ChocoPatty - Chocolates que alegran el corazón"
          className={`${sizeClasses} w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Vector SVG Fallback matching the official logo */
        <div className="flex flex-col items-center">
          {showTagline && (
            <span className="text-[10px] sm:text-xs font-bold text-[#6D381E] tracking-tight uppercase mb-0.5">
              Chocolates que alegran el corazón
            </span>
          )}
          <div className="flex items-center gap-1.5">
            <span className="text-2xl">💖</span>
            <span className="font-display font-black text-2xl sm:text-3xl text-pink-500 drop-shadow-[0_2px_0_#5B2B1B] tracking-tight">
              Choco<span className="text-rose-500">Patty</span>
            </span>
            <span className="text-xl">🎁</span>
          </div>
        </div>
      )}
    </div>
  );
};
