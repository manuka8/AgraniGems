import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GemGrid from '@/components/gems/GemGrid';

export default async function GemsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-luxury-black min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full -mt-40 opacity-50" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">The Collection</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">Exquisite Gemstones</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Explore our curated selection of rare and precious gemstones, each handpicked for its exceptional color, clarity, and brilliance.
          </p>
        </div>
      </section>

      <GemGrid />

      <Footer />
    </main>
  );
}
