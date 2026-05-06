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
 * HomePage: The primary orchestration component for Tricia Geiger's 2026 UAW Presidential campaign.
 *
 * FINAL PRODUCTION AUDIT:
 * - Strategic narrative flow: Branding -> Biography -> Policy -> Engagement -> Social Proof -> Resources.
 * - Branding: Verified tan/gold/black palette consistency (#C5A059 Gold).
 * - Accessibility: Functional 'Skip to content' link for keyboard navigation.
 * - SEO/Metadata: Official title "Tricia Geiger for UAW President 2026 | Prepared. Democratic. Accountable."
 * - Interaction: Global toast configuration with campaign-themed borders.
 */
export function HomePage() {
  useEffect(() => {
    // Official campaign title for SEO and browser tabs
    document.title = "Tricia Geiger for UAW President 2026 | Prepared. Democratic. Accountable.";
    // Ensure initial entry is at the top of the page
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold selection:text-white antialiased overflow-x-hidden">
      {/* Accessibility Skip Link: Points to #main-content anchor */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-campaign-black text-white px-6 py-3 rounded-lg font-bold shadow-2xl ring-4 ring-campaign-gold transition-all"
      >
        Skip to main content
      </a>
      {/* Persistent Navigation Layer */}
      <Navbar />
      <main id="main-content" role="main" className="outline-none" tabIndex={-1}>
        {/* Visual Hero & Primary CTA */}
        <HeroSection />
        {/* Biographical Journey & Heritage */}
        <BioSection />
        {/* 8-Pillar Strategic Reform Platform */}
        <PlatformSection />
        {/* Dual Sign-up Funnels (Sender.site) */}
        <InvolveSection />
        {/* Verbatim Member Endorsements */}
        <Endorsements />
        {/* Organizing Materials & Downloadable Toolkit */}
        <ResourcesSection />
      </main>
      {/* Footer with Donations (Anedot) and Social Links */}
      <Footer />
      {/* Global Campaign Notifications (Sonner) */}
      <Toaster
        richColors
        closeButton
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '12px',
            border: '1px solid #D4C4A8', // Campaign Tan
            background: 'white',
            color: '#1A1A1A',
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
    </div>
  );
}