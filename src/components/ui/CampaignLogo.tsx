import React, { useId } from 'react';
import { cn } from '@/lib/utils';
interface CampaignLogoProps {
  className?: string;
  variant?: 'gold-on-black' | 'black-on-gold';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
export function CampaignLogo({
  className,
  variant = 'gold-on-black',
  size = 'md'
}: CampaignLogoProps) {
  const uniqueId = useId();
  // Sanitize ID for SVG reference safety by removing characters that break CSS selectors
  const pathId = `curve-${uniqueId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24 md:h-32 md:w-32'
  };
  const bgClass = variant === 'gold-on-black' ? 'bg-campaign-black' : 'bg-campaign-gold';
  const iconClass = variant === 'gold-on-black' ? 'fill-campaign-gold' : 'fill-campaign-black';
  const textClass = variant === 'gold-on-black' ? 'fill-campaign-gold' : 'fill-campaign-black';
  return (
    <div className={cn(
      "relative rounded-full flex items-center justify-center shadow-xl transition-transform hover:rotate-6 duration-300 select-none shrink-0",
      sizeMap[size],
      bgClass,
      className
    )}>
      {/* Central Initials */}
      <svg
        viewBox="0 0 100 100"
        className={cn("w-full h-full", iconClass)}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <text
          x="50%"
          y="52%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="32"
          className="font-display font-black"
          style={{ pointerEvents: 'none' }}
        >
          TG
        </text>
      </svg>
      {/* 2026 Circular Text Decoration */}
      <svg 
        className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <defs>
          <path
            id={pathId}
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          className={cn("font-black uppercase", textClass)}
          fontSize="11"
          letterSpacing="0.2em"
        >
          <textPath
            href={`#${pathId}`}
            startOffset="25%"
            textAnchor="middle"
          >
            2026
          </textPath>
        </text>
      </svg>
    </div>
  );
}