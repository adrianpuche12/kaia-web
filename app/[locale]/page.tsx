import dynamic from 'next/dynamic';
import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/sections/Hero';

// Lazy load heavy components
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'), {
  loading: () => <div className="h-screen flex items-center justify-center">Loading...</div>,
});
const TechStack = dynamic(() => import('@/components/sections/TechStack'));
const Stats = dynamic(() => import('@/components/sections/Stats'));
const Download = dynamic(() => import('@/components/sections/Download'));
const Releases = dynamic(() => import('@/components/sections/Releases'));
const Changelog = dynamic(() => import('@/components/sections/Changelog'));
const FAQSection = dynamic(() => import('@/components/sections/FAQ'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));
const Footer = dynamic(() => import('@/components/sections/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TechStack />
      <Stats />
      <Download />
      <Releases />
      <Changelog />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
