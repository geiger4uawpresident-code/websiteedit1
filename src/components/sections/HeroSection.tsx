import React from 'react';
import { motion, Variants } from 'framer-motion';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { CampaignLogo } from '@/components/ui/CampaignLogo';
export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden bg-campaign-black">
      {/* Background with optimized opacity for contrast */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888941255-2574b1752175?auto=format&fit=crop&q=80')] opacity-[0.15] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-campaign-black/95 via-campaign-black/80 to-campaign-black" />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 md:space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
          <motion.div
            className="flex justify-center mb-4 md:mb-6"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CampaignLogo
              variant="black-on-gold"
              size="lg"
              className="shadow-[0_0_50px_rgba(197,160,89,0.3)] scale-110 md:scale-125"
            />
          </motion.div>
          <div className="flex justify-center">
            <span className="inline-block px-5 py-1.5 rounded-full bg-campaign-gold text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-lg shadow-campaign-gold/10 border border-white/10">
              Prepared. Democratic. Accountable.
            </span>
          </div>
          <h1 className="flex flex-col items-center font-display font-black text-white uppercase text-balance leading-[0.9]">
            <span className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter block">
              Tricia Geiger
            </span>
            {/*
              Precision Typography Lockup:
              - Adjusted leading to 0.9 for descender safety (the 'g').
              - Added mt-[-0.05em] for tight visual lockup.
              - Calibrated tracking and font-size to be slightly wider than the name above.
            */}
            <span className="text-campaign-gold text-[1.15rem] sm:text-[1.85rem] md:text-[2.35rem] lg:text-[2.9rem] block tracking-[0.22em] sm:tracking-[0.28em] font-black uppercase opacity-95 transition-all whitespace-nowrap mt-[-0.05em]">
              for UAW President
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-campaign-tan max-w-3xl mx-auto font-medium leading-relaxed px-4 opacity-95 tracking-tight text-balance">
            A <span className="relative inline-block border-b-[4px] sm:border-b-[5px] border-campaign-red/90 pb-0.5 sm:pb-1 text-white font-bold px-1 transition-all">member-first</span> movement dedicated to restoring the power, dignity, and future of every UAW member. One union. One movement.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto w-full px-2 mt-2"
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/nr6qFuFN8Ms?rel=0"
            title="Tricia Geiger Campaign Launch Speech"
            className="shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-campaign-gold/10"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto items-center justify-center">
            <Button asChild size="lg" className="bg-campaign-gold hover:opacity-95 text-white font-black h-14 px-10 w-full sm:w-64 transition-all active:scale-95 shadow-xl shadow-campaign-gold/20 text-base md:text-lg">
              <a href="#involve">Sign Me Up</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-campaign-tan/40 text-white hover:bg-white/10 hover:border-campaign-gold hover:text-white h-14 px-10 w-full sm:w-64 transition-all active:scale-95 backdrop-blur-sm bg-white/5 text-base md:text-lg">
              <a href="#platform">View the Platform</a>
            </Button>
          </div>
          <motion.a
            href="#about"
            className="transition-all mt-6 md:mt-8 hover:scale-110 active:scale-90 hidden sm:block"
            animate={{
              y: [0, 10, 0],
              color: ["#D4C4A8", "#C5A059", "#D4C4A8"]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to about section"
          >
            <ChevronDown size={36} strokeWidth={2.5} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}