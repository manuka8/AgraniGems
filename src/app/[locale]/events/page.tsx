import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Geneva Luxury Gem Show 2026',
    date: 'Oct 12-15, 2026',
    location: 'Palexpo, Geneva, Switzerland',
    description: 'Join us as we showcase our most exclusive "Masterpiece Collection" to the world\'s leading jewelry houses.',
    image: '/images/hero_gems_background.png'
  },
  {
    title: 'Hong Kong International Jewelry Fair',
    date: 'Nov 05-09, 2026',
    location: 'HKCEC, Hong Kong',
    description: 'Explore the brilliance of Ceylon Sapphires at Asia\'s premier gemstone event.',
    image: '/images/blue_sapphire.png'
  },
  {
    title: 'Private Viewing: London',
    date: 'Dec 02, 2026',
    location: 'Mayfair, London, UK',
    description: 'An exclusive, by-invitation-only evening featuring rare untreated gemstones.',
    image: '/images/ruby.png'
  }
];

export default async function EventsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="bg-luxury-black min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6 text-center">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">Global Presence</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Upcoming Events</h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Discover where AgraniGems will be next. Visit our exhibitions and private viewings worldwide.
          </p>
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="space-y-12">
            {events.map((event, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row hover:border-gold/30 transition-all duration-500">
                <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-serif font-bold text-white mb-6 group-hover:text-gold transition-colors">{event.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-xl">
                    {event.description}
                  </p>
                  
                  <button className="flex items-center gap-3 text-gold text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
                    Register Interest <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
