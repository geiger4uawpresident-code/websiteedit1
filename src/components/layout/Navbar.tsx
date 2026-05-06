import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CampaignLogo } from '@/components/ui/CampaignLogo';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);
  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'Join Us', href: '#involve' },
    { name: 'Resources', href: '#resources' },
  ];
  const DONATE_URL = "https://secure.anedot.com/2026-tricia-geiger-for-uaw-president/donate";
  const isNavActive = isScrolled || isMobileMenuOpen;
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isNavActive
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-transparent py-6"
      )}
      aria-label="Campaign Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group/logo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-campaign-gold rounded-full p-1 transition-all">
          <CampaignLogo
            variant={isNavActive ? "gold-on-black" : "black-on-gold"}
            size="md"
            className="group-hover/logo:scale-110 group-hover/logo:rotate-3 transition-all duration-500"
          />
          <span className={cn(
            "font-display font-black text-lg tracking-tight uppercase transition-colors duration-300 hidden sm:block",
            isNavActive ? "text-campaign-black" : "text-white"
          )}>
            Tricia Geiger <span className="text-campaign-gold">2026</span>
          </span>
        </a>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-bold uppercase tracking-widest hover:text-campaign-gold transition-all relative group py-2",
                isNavActive ? "text-campaign-black" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-campaign-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button asChild className="bg-campaign-gold hover:opacity-90 text-white font-bold px-7 shadow-lg shadow-campaign-gold/10 active:scale-95 transition-all">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Donate</a>
          </Button>
        </div>
        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-campaign-gold transition-all active:scale-90",
            isNavActive ? "bg-gray-100 text-campaign-black" : "bg-white/10 text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu Backdrop & Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[64px] bg-white z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-y-auto transform",
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 space-y-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-black text-campaign-black py-5 border-b border-gray-50 last:border-0 active:text-campaign-gold transition-all uppercase tracking-tight transform",
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              )}
              style={{ transitionDelay: `${idx * 75}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-10">
            <Button asChild size="lg" className="bg-campaign-gold hover:opacity-95 text-white font-black w-full h-16 text-lg shadow-xl active:scale-[0.98] transition-all">
              <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
                Donate to the Campaign
              </a>
            </Button>
          </div>
          <div className="py-12 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-relaxed">
              Paid for by Tricia Geiger for UAW President 2026<br />
              Solidarity • Accountability • Reform
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}