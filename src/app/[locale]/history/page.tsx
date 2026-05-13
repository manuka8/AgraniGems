import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HistoryTimeline from '@/components/home/HistoryTimeline';
import Image from 'next/image';

export default async function HistoryPage({
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/mining.png"
          alt="Sri Lankan Gem Mining History"
          fill
          className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/20 to-luxury-black" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">Legacy & Heritage</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6">A Journey Through Time</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            The story of Ceylon gems is etched in the earth and celebrated across civilizations. 
            Join us in exploring the rich heritage of Sri Lankan gemstone craftsmanship.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <HistoryTimeline />
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-8">Traditional Craftsmanship</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                For generations, Sri Lankan lapidaries have mastered the art of "reading" rough stones. Our traditional methods of cutting and polishing preserve the natural soul of every gem while maximizing its inherent brilliance.
              </p>
              <ul className="space-y-4">
                {['Ethically Sourced', 'Hand-Selected', 'Expertly Cut', 'Global Certification'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/80 uppercase tracking-widest text-xs">
                    <span className="w-6 h-[1px] bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square rounded-full overflow-hidden border border-gold/20 p-4">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <Image
                  src="/images/blue_sapphire.png"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gold/10 animate-pulse-slow pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
