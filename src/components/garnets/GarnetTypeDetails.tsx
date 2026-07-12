'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { ArrowLeft, Sparkles, MapPin, Palette, Gem, Star, Heart, CheckCircle } from 'lucide-react';

const GARNET_DATA = {
  hessonite: {
    heroImage: '/images/Garnet/Hessonite Garnet/gem_image1.jpg',
    detailsImage: '/images/Garnet/Hessonite Garnet/gem_image4.jpg',
    galleryImages: [
      '/images/Garnet/Hessonite Garnet/gem_image3.jpg',
      '/images/Garnet/Hessonite Garnet/Hassoinat jewellary.jpg',
      '/images/Garnet/Hessonite Garnet/gem_image2.jpg'
    ]
  },
  rhodolite: {
    heroImage: '/images/Garnet/Rodholight Garnet/gem_image1.jpg',
    detailsImage: '/images/Garnet/Rodholight Garnet/gem_image4.jpg',
    galleryImages: [
      '/images/Garnet/Rodholight Garnet/gem_image3.jpg',
      '/images/Garnet/Rodholight Garnet/jewllery.jpg',
      '/images/Garnet/Rodholight Garnet/jewellary2.jpg',
      '/images/Garnet/Rodholight Garnet/gem_image2.jpg'
    ]
  },
  pyrope: {
    heroImage: '/images/Garnet/Pyrope Garnet/gem_image1.jpg',
    detailsImage: '/images/Garnet/Pyrope Garnet/gem_image2.jpg',
    galleryImages: [
      '/images/Garnet/Pyrope Garnet/gem_image3.jpg',
      '/images/Garnet/Pyrope Garnet/gem_image4.jpg',
      '/images/Garnet/Pyrope Garnet/gem_image5.jpg'
    ]
  },
  almandine: {
    heroImage: '/images/Garnet/Almandine Garnet/gem_image1.jpg',
    detailsImage: '/images/Garnet/Almandine Garnet/gem_image3.jpg',
    galleryImages: [
      '/images/Garnet/Almandine Garnet/gem_image4.jpg',
      '/images/Garnet/Almandine Garnet/jeweelary.jpg',
      '/images/Garnet/Almandine Garnet/gem_imahe2.jpg'
    ]
  }
};

export default function GarnetTypeDetails({ type }: { type: string }) {
  const t = useTranslations('Garnets.types');
  const commonT = useTranslations('Common');
  
  const garnetKey = type.toLowerCase() as keyof typeof GARNET_DATA;
  const garnetData = GARNET_DATA[garnetKey];

  if (!garnetData) {
    notFound();
  }

  // Ensure type matches the keys in translation JSON
  const title = t(`${garnetKey}.title`);
  const subtitle = t(`${garnetKey}.subtitle`);
  const desc = t(`${garnetKey}.desc`);
  const story = t(`${garnetKey}.story`);

  return (
    <div className="relative pt-28 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-rose-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-[#053D38]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Link 
          href="/garnets" 
          className="inline-flex items-center space-x-2 text-gold/80 hover:text-gold transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Garnets</span>
        </Link>

        {/* SECTION 1: Image Left, Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image 
              src={garnetData.heroImage} 
              alt={`${title} Feature`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold text-sm tracking-wider uppercase font-medium">
                  Premium Collection
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-white tracking-wide">
                {title}
              </h1>
              <h2 className="text-2xl text-rose-300 font-serif italic">
                {subtitle}
              </h2>
            </div>

            <p className="text-lg text-rose-100/70 leading-relaxed font-light">
              {desc}
            </p>

            <div className="pl-6 border-l-2 border-rose-500/30">
              <p className="text-base text-white/50 italic leading-relaxed">
                {story}
              </p>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2: Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-12"
          >
            {/* Characteristics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start space-x-4 hover:border-rose-500/30 transition-colors">
                <MapPin className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Origin</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{t(`${garnetKey}.origin`)}</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start space-x-4 hover:border-rose-500/30 transition-colors">
                <Palette className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Color</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{t(`${garnetKey}.color`)}</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start space-x-4 hover:border-rose-500/30 transition-colors">
                <Gem className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Hardness & Clarity</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{t(`${garnetKey}.hardness`)} • {t(`${garnetKey}.clarity`)}</p>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start space-x-4 hover:border-rose-500/30 transition-colors">
                <Star className="w-6 h-6 text-rose-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-serif font-bold text-lg mb-1">Rarity</h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{t(`${garnetKey}.rarity`)}</p>
                </div>
              </div>
            </div>

            {/* Lists Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {/* Uses */}
              <div>
                <h4 className="text-white font-serif font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-gold" /> Ideal For
                </h4>
                <ul className="space-y-3">
                  {(t.raw(`${garnetKey}.uses`) as string[]).map((use, i) => (
                    <li key={i} className="flex items-center space-x-3 text-white/70 text-sm font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gold/80 text-xs italic mt-5 leading-relaxed bg-gold/10 p-3 rounded-lg border border-gold/20">
                  {t(`${garnetKey}.bestFor`)}
                </p>
              </div>

              {/* Symbolism */}
              <div>
                <h4 className="text-white font-serif font-bold text-xl mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-gold" /> Symbolism
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(t.raw(`${garnetKey}.symbolism`) as string[]).map((sym, i) => (
                    <span key={i} className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-rose-300 text-xs tracking-wider uppercase font-medium">
                      {sym}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <Image 
              src={garnetData.detailsImage} 
              alt={`${title} Details`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        {/* SECTION 3: Bottom Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif text-white mb-4">Discover the Collection</h3>
            <div className="w-12 h-[1px] bg-gold mx-auto" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {garnetData.galleryImages.map((imgSrc, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-2xl overflow-hidden shadow-lg border border-white/5 ${
                  garnetData.galleryImages.length === 3 ? 'aspect-[4/5]' : 'aspect-square'
                }`}
              >
                <Image 
                  src={imgSrc} 
                  alt={`${title} Gallery ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Link href="/contact" className="inline-block bg-gold text-[#050505] px-12 py-5 rounded-full uppercase tracking-widest text-sm font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            Inquire About This Gem
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
