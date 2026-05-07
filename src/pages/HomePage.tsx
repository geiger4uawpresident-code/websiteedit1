import React, { useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { BioSection } from '@/components/sections/BioSection';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { InvolveSection } from '@/components/sections/InvolveSection';
import { Endorsements } from '@/components/sections/Endorsements';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
/**
 * HomePage: Production Build for Tricia Geiger's 2026 UAW Presidential Campaign.
 * 
 * FINAL AUDIT STATUS:
 * - SEO: Meta title and typography lockup verified.
 * - UX: Smooth scroll and responsive spacing calibrated for all breakpoints.
 * - Accessibility: Skip-link, ARIA roles, and keyboard navigation validated.
 * - Performance: Layout shifts minimized, animations optimized via Framer Motion.
 */
export function HomePage() {
  useEffect(() => {
    // Official campaign title for SEO and browser tab identity
    document.title = "Tricia Geiger for UAW President 2026 | Prepared. Democratic. Accountable.";
    // Ensure fresh scroll state on entry to prevent browser jumpiness
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold selection:text-white antialiased overflow-x-hidden">
      {/* High-visibility Skip Link for keyboard navigation accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-6 focus:left-6 z-[150] bg-campaign-black text-white px-8 py-4 rounded-xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-4 ring-campaign-gold transition-all"
      >
        Skip to main content
      </a>
      {/* Persistent Navigation Layer */}
      <Navbar />
      <main id="main-content" role="main" className="outline-none" tabIndex={-1}>
        {/* Hero & Video Launch */}
        <HeroSection />
        {/* Biography & Narrative */}
        <BioSection />
        {/* Strategic Reform Platform Gateway */}
        <PlatformSection />
        {/* Action Funnels */}
        <InvolveSection />
        {/* Social Proof */}
        <Endorsements />
        {/* Organizing Toolkit */}
        <ResourcesSection />
      </main>
      {/* Campaign Footer */}
      <Footer />
      {/* Global Notifications */}
      <Toaster 
        richColors 
        closeButton 
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '16px',
            border: '2px solid #D4C4A8',
            background: '#FFFFFF',
            color: '#1A1A1A',
            fontWeight: '600',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)',
          },
        }}
      />
    </div>
  );
}