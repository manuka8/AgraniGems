import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedGems from '@/components/home/FeaturedGems';

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

      <Footer />
    </main>
  );
}
