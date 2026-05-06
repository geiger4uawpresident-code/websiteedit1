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
 * Final Polish:
 * - Strategic narrative flow from launch to organizing tools.
 * - Accessibility 'Skip to content' link for keyboard navigation.
 * - Global toast configuration for consistent feedback.
 */
export function HomePage() {
  useEffect(() => {
    // Update document title for SEO and campaign branding
    document.title = "Tricia Geiger for UAW President 2026 | Prepared. Democratic. Accountable.";
  }, []);
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold selection:text-white antialiased">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-campaign-black text-white px-6 py-3 rounded-lg font-bold shadow-2xl ring-4 ring-campaign-gold transition-all"
      >
        Skip to main content
      </a>
      {/* Sticky Navigation Layer */}
      <Navbar />
      <main id="main-content" role="main" className="outline-none" tabIndex={-1}>
        {/* Phase 1: High Impact Branding & Launch Video */}
        <HeroSection />
        {/* Phase 2: Heritage and 20 Years of Service */}
        <BioSection />
        {/* Phase 3: The 8 Strategic Pillars (Verbatim) */}
        <PlatformSection />
        {/* Phase 4: Call to Action & Dual Sign-up Funnels */}
        <InvolveSection />
        {/* Phase 5: Social Proof from Local Leaders */}
        <Endorsements />
        {/* Phase 6: Member Organizing Resources */}
        <ResourcesSection />
      </main>
      {/* Global Campaign Footer */}
      <Footer />
      {/* Campaign-themed Notification System */}
      <Toaster
        richColors
        closeButton
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '12px',
            border: '1px solid #D4C4A8',
            background: 'white',
            color: '#1A1A1A',
            fontFamily: 'Inter, sans-serif',
          },
        }}
      />
    </div>
  );
}