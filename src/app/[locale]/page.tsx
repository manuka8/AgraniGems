import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedGems from '@/components/home/FeaturedGems';
import TimelessTreasure from '@/components/home/TimelessTreasure';
import ExpertGallery from '@/components/home/ExpertGallery';
import GarnetSpecialist from '@/components/home/GarnetSpecialist';

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-luxury-black text-white selection:bg-gold selection:text-luxury-black">
      <Navbar />
      <Hero />
      
      <FeaturedGems />
      
      <TimelessTreasure />
      <GarnetSpecialist />
      <ExpertGallery />

      <Footer />
    </main>
  );
}
