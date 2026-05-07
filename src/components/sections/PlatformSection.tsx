import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
export function PlatformSection() {
  const PLATFORM_DOC_URL = "https://drive.google.com/file/d/1mBRbcsOS-rWPY0xR16652fBG2LLrd589/view?usp=sharing";
  return (
    <section id="platform" className="py-24 bg-campaign-tan/10 scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase tracking-tight mb-6">
              The 2026 Strategic Platform
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              A comprehensive Member-First blueprint designed to restore power, 
              transparency, and results to the UAW membership.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-2 border-campaign-gold/20 shadow-2xl rounded-[2rem] overflow-hidden">
              <CardContent className="p-8 md:p-16 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-campaign-gold/10 rounded-2xl flex items-center justify-center text-campaign-gold mb-8">
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-campaign-black uppercase mb-6">
                  Ready to Lead. Ready to Deliver.
                </h3>
                <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed max-w-xl">
                  Our platform is built on three unbreakable pillars: 
                  <span className="font-bold text-campaign-black"> Prepared, Democratic, and Accountable.</span> 
                  Explore the full 8-point strategic plan for UAW reform and industrial power.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-black h-16 px-10 text-lg shadow-xl shadow-campaign-gold/20 transition-all active:scale-95 group"
                  >
                    <a 
                      href={PLATFORM_DOC_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <FileText className="w-5 h-5" />
                      View Full Strategic Platform
                      <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
                <p className="mt-8 text-xs text-muted-foreground uppercase tracking-widest font-bold">
                  Official Campaign Document • 2026 Cycle
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}