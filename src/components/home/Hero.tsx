'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Feather, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

// CountUp component for individual stats
const CountUp = ({ end, duration = 2000, startCounting }: { end: number; duration?: number; startCounting: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startCounting]);

  return <>{count.toLocaleString()}</>;
};

// Helper to extract number from string like "25+", "500+", "10k+", "45+"
const parseStatValue = (value: string): number => {
  if (value.includes('k+')) {
    return parseFloat(value) * 1000;
  }
  if (value.includes('+')) {
    return parseFloat(value);
  }
  return parseFloat(value);
};

export default function Hero() {
  const t = useTranslations('Index.hero');
  const s = useTranslations('Index.stats');
  
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { value: '25+', label: s('years'), numericValue: parseStatValue('25+') },
    { value: '500+', label: s('collections'), numericValue: parseStatValue('500+') },
    { value: '10k+', label: s('customers'), numericValue: parseStatValue('10k+') },
    { value: '45+', label: s('countries'), numericValue: parseStatValue('45+') },
  ];

  // Intersection Observer to trigger animation when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_gems_background3.png"
          alt="Premium Gemstones"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay - Dark on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        
        {/* Subtle vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-10" />
      </div>

      {/* Subtle Luxury Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-20 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Title */}
            <h1 className="text-2xl mt-15 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                {t('title')}
              </span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "6rem" }}
              transition={{ delay: 0.8, duration: 1 }}
              className="h-1 bg-gradient-to-r from-amber-500 via-emerald-500 to-blue-500 rounded-full mb-8"
            />

            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed max-w-xl drop-shadow-md">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/gems"
                className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-gray-900 rounded-full font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  {t('cta_explore')}
                </span>
              </Link>
              
              <Link
                href="/garnets"
                className="group px-8 sm:px-10 py-4 border border-amber-500/30 rounded-full font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-amber-500/5 hover:border-amber-500 backdrop-blur-sm"
              >
                {t('cta_garnets')}
              </Link>
            </div>
          </motion.div>

          {/* Stats Section with Countdown Effect */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="group">
                <div>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-amber-500 to-emerald-500 bg-clip-text text-transparent mb-1 block">
                    {hasAnimated ? (
                      <>
                        <CountUp end={stat.numericValue} startCounting={hasAnimated} />
                        {stat.value.includes('k+') ? 'k+' : '+'}
                      </>
                    ) : (
                      '0'
                    )}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-medium group-hover:text-amber-500 transition-colors duration-300 block">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 z-30 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[8px] uppercase tracking-[0.5em] text-white/40 [writing-mode:vertical-lr]">Discover</span>
          <div className="w-px h-16 bg-gradient-to-b from-amber-500/50 via-emerald-500/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}