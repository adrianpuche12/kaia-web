import Navbar from '@/components/shared/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import TechStack from '@/components/sections/TechStack';
import Stats from '@/components/sections/Stats';
import Download from '@/components/sections/Download';
import Releases from '@/components/sections/Releases';
import Changelog from '@/components/sections/Changelog';
import FAQSection from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
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
