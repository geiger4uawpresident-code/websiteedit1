import React from 'react';
import { cn } from '@/lib/utils';
interface VideoPlayerProps {
  url: string;
  className?: string;
  title?: string;
}
export function VideoPlayer({ url, className, title = "Campaign Video" }: VideoPlayerProps) {
  return (
    <div 
      className={cn("relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-campaign-gold/20 bg-black group", className)}
      aria-label={title}
    >
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-0 z-10"
      />
      {/* Visual fallback/background while loading */}
      <div className="absolute inset-0 bg-gradient-to-br from-campaign-black to-zinc-900 flex items-center justify-center -z-0">
        <span className="text-campaign-gold/20 font-black text-4xl animate-pulse">UAW 2026</span>
      </div>
    </div>
  );
}