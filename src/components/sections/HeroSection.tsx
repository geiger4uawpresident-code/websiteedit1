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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-12 overflow-hidden bg-campaign-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888941255-2574b1752175?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-campaign-black/95 via-campaign-black/70 to-campaign-black" />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 md:space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
          <motion.div
            className="flex justify-center mb-4 md:mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <CampaignLogo 
              variant="black-on-gold" 
              size="lg" 
              className="shadow-[0_0_50px_rgba(197,160,89,0.4)] scale-110 md:scale-125" 
            />
          </motion.div>
          <span className="inline-block px-6 py-2 rounded-full bg-campaign-gold text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-campaign-gold/20">
            Prepared. Democratic. Accountable.
          </span>
          <h1 className="text-[2.25rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tight text-balance">
            Tricia Geiger <br />
            <span className="text-campaign-gold italic text-[1.75rem] sm:text-inherit">for UAW President</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-campaign-tan max-w-3xl mx-auto font-medium drop-shadow-sm leading-relaxed px-4 opacity-95 tracking-tight text-balance">
            One Union. One Movement. Building a transparent and <span className="relative inline-block border-b-[3px] sm:border-b-[5px] border-campaign-red/80 pb-0.5 sm:pb-1 text-white font-bold mx-1">accountable</span> future for every member.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto w-full px-2 mt-4 md:mt-8"
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/sAoPSp2HQGo?rel=0"
            title="Tricia Geiger Campaign Launch Speech"
            className="shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border-campaign-gold/20"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto items-center justify-center">
            <Button asChild size="lg" className="bg-campaign-gold hover:opacity-95 text-white font-bold h-14 px-10 w-full sm:w-64 transition-all active:scale-95 shadow-xl shadow-campaign-gold/20 backdrop-blur-sm text-base md:text-lg">
              <a href="#involve">Sign Me Up</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-campaign-tan text-campaign-tan hover:bg-white/10 hover:border-campaign-gold hover:text-white h-14 px-10 w-full sm:w-64 transition-all active:scale-95 backdrop-blur-sm text-base md:text-lg">
              <a href="#platform">Read the Platform</a>
            </Button>
          </div>
          <motion.a
            href="#about"
            className="transition-all mt-6 md:mt-12 hover:scale-110 active:scale-90 hidden sm:block"
            animate={{
              y: [0, 8, 0],
              color: ["#D4C4A8", "#C5A059", "#D4C4A8"]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}