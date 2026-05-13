'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { MousePointer2, Star } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Index.hero');
  const s = useTranslations('Index.stats');

  const stats = [
    { value: '25+', label: s('years') },
    { value: '500+', label: s('collections') },
    { value: '10k+', label: s('customers') },
    { value: '45+', label: s('countries') },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_gems_background.png"
          alt="Premium Gemstones"
          fill
          className="object-cover opacity-60 scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-transparent to-luxury-black" />
      </div>

      {/* Floating Elements (Animated) */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 blur-[60px] rounded-full"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-accent/20 blur-[80px] rounded-full"
      />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1 border border-gold/30 rounded-full text-gold text-[10px] uppercase tracking-[0.4em] mb-8 bg-gold/5 backdrop-blur-sm">
              Established 1998 • Authentic Ceylon
            </span>
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] text-glow">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/gems"
                className="group relative px-10 py-4 bg-gold text-luxury-black rounded-full font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-gold hover:scale-105"
              >
                <span className="relative z-10">{t('cta_explore')}</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group px-10 py-4 border border-white/20 hover:border-gold rounded-full font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-gold/10"
              >
                {t('cta_contact')}
              </Link>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
