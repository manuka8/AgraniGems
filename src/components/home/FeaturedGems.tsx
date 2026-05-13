'use client';

import { gems } from '@/data/gems';
import GemCard from '@/components/gems/GemCard';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';

export default function FeaturedGems() {
  const featured = gems.slice(0, 4);

  return (
    <section className="py-32 bg-luxury-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-luxury-black to-luxury-black pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 inline-block">Masterpiece Collection</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Exquisite Ceylon Gems</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Experience the brilliance of genuine Sri Lankan gemstones, ethically sourced and masterfully cut by our artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((gem, index) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <GemCard gem={gem} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/gems"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gold/50 text-gold rounded-full hover:bg-gold hover:text-luxury-black transition-all duration-300 font-bold uppercase tracking-widest text-xs"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
