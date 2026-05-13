import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { ShieldCheck, Award, Zap, Heart } from 'lucide-react';

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-gold" />,
      title: 'Authenticity',
      description: 'Every gemstone we export is 100% natural and accompanied by internationally recognized laboratory certifications.'
    },
    {
      icon: <Award className="w-8 h-8 text-gold" />,
      title: 'Excellence',
      description: 'We adhere to the highest standards of gemstone selection, ensuring only the most exceptional pieces reach our clients.'
    },
    {
      icon: <Zap className="w-8 h-8 text-gold" />,
      title: 'Innovation',
      description: 'Combining traditional Sri Lankan expertise with modern geological technology for superior gemstone evaluation.'
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Ethics',
      description: 'Our mining and sourcing practices are strictly ethical, supporting local communities and environmental conservation.'
    }
  ];

  return (
    <main className="bg-luxury-black min-h-screen">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-40 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">The Story of AgraniGems</span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-12">Pioneering Ceylon Brilliance</h1>
            <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed mb-16 max-w-2xl">
              Founded on the principles of trust and excellence, AgraniGems has grown from a boutique family business into a leading global exporter of premium Sri Lankan gemstones.
            </p>
          </div>
        </div>
      </section>

      {/* Image & Text Section */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              <Image
                src="/images/team.png"
                alt="Our Team of Experts"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-8 leading-tight">Bringing the Soul of the Earth to You</h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  Sri Lanka, historically known as Serendib, has been the source of the world's most famous sapphires. At AgraniGems, we carry forward this legacy with a modern approach to global export.
                </p>
                <p>
                  Our journey begins in the rich soils of Ratnapura and Elahera, where our geologists and mining experts identify high-potential deposits. We believe that a gemstone is more than just a mineral; it is a piece of history that has been millions of years in the making.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="text-gold text-3xl font-serif font-bold mb-1">1998</h4>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">Year Founded</p>
                </div>
                <div>
                  <h4 className="text-gold text-3xl font-serif font-bold mb-1">100%</h4>
                  <p className="text-white/40 uppercase tracking-widest text-[10px]">Natural Gems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Core Values</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 group text-center">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{value.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-white/30 uppercase tracking-[0.3em] text-[10px] mb-12 block">Certified By Leading Labs</span>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {['GIA', 'GIC', 'NGJA', 'EGL', 'GRS'].map((lab, i) => (
              <span key={i} className="text-4xl font-bold font-serif text-white">{lab}</span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
