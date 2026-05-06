import React from 'react';
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
 * Strategic Narrative Flow:
 * 1. Hero: High-impact branding, launch video, and primary conversion CTA (Sign Me Up).
 * 2. Bio: Flint roots, multi-generational UAW history, and 20 years of service.
 * 3. Platform: The 8 Strategic Pillars (Verbatim).
 * 4. Involve: Actionable dual sign-up funnels for updates and amplifiers.
 * 5. Endorsements: Rank-and-file validation from local leaders.
 * 6. Resources: Organizing tools and campaign materials.
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold selection:text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-campaign-black text-white px-6 py-3 rounded-lg font-bold shadow-2xl ring-4 ring-campaign-gold transition-all"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" role="main" className="outline-none">
        <HeroSection />
        <BioSection />
        <PlatformSection />
        <InvolveSection />
        <Endorsements />
        <ResourcesSection />
      </main>
      <Footer />
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
          },
        }}
      />
    </div>
  );
}