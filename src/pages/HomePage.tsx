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
 * FINAL AUDIT (Phase 80):
 * - Strategic narrative flow: Branding -> Biography -> Policy -> Engagement -> Social Proof -> Resources.
 * - Branding: Verified tan/gold/black palette consistency.
 * - Accessibility: 'Skip to content' link for keyboard navigation and ARIA landmarks.
 * - SEO/Metadata: Title set to official campaign slogan.
 * - Interaction: Smooth scroll, selection colors, and global toast configuration.
 */
export function HomePage() {
  useEffect(() => {
    // Update document title for SEO and campaign branding
    document.title = "Tricia Geiger for UAW President 2026 | Prepared. Democratic. Accountable.";
    // Ensure scroll starts at top on initial load
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold selection:text-white antialiased overflow-x-hidden">
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
        {/* Hero & Launch Video: High-impact branding and first-touch conversion point */}
        <HeroSection />
        {/* Biography: Heritage, 20 Years of Service, and personal journey */}
        <BioSection />
        {/* Platform: The 8 Strategic Pillars (Verbatim Commitments) */}
        <PlatformSection />
        {/* Get Involved: Dual Sign-up Funnels (Updates & Amplifier tracks) */}
        <InvolveSection />
        {/* Endorsements: Social Proof from floor members and local leaders */}
        <Endorsements />
        {/* Resources: Member Organizing materials and download toolkit */}
        <ResourcesSection />
      </main>
      {/* Global Campaign Footer: Donation links, social presence, and legal disclosures */}
      <Footer />
      {/* Campaign-themed Notification System (Sonner) */}
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