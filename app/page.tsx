import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Download from '@/components/sections/Download';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Download />
      <Footer />
    </main>
  );
}
