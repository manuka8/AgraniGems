'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { X, Sparkles } from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('PromoPopup');

  useEffect(() => {
    // Wait a short moment before showing
    const timer = setTimeout(() => {
      const today = new Date().toDateString();
      const lastClosed = localStorage.getItem('garnet_promo_closed_date');

      // Only show if they haven't closed it today
      if (lastClosed !== today) {
        setIsVisible(true);
        // Lock body scroll when modal is open
        document.body.style.overflow = 'hidden';
      }
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    document.body.style.overflow = 'unset';
    localStorage.setItem('garnet_promo_closed_date', new Date().toDateString());
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          >
            <div className="relative bg-[#0A1A18] border border-gold/40 rounded-3xl overflow-hidden">
              
              {/* Background Image & Glow */}
              <div className="absolute inset-0 opacity-[0.15]">
                <Image 
                  src="/images/Garnet/Almandine Garnet/gem_image1.jpg"
                  alt="Garnet Background"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A18] via-[#0A1A18]/80 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-900/40 blur-[80px] rounded-full pointer-events-none" />
              
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-5 right-5 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur-md p-2 rounded-full transition-all z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 sm:p-12 text-center relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center space-x-2 mb-6 bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs tracking-widest uppercase font-medium">
                    Premium Collection
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                  {t('title')}
                </h3>
                
                <p className="text-white/70 text-base font-light leading-relaxed mb-10 max-w-sm">
                  {t('desc')}
                </p>
                
                <Link 
                  href="/garnets"
                  onClick={handleClose}
                  className="block text-center w-full bg-gold text-[#050505] py-4 px-8 rounded-xl uppercase tracking-widest text-sm font-bold hover:bg-white hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                >
                  {t('button')}
                </Link>
                
                <button 
                  onClick={handleClose}
                  className="mt-6 text-white/50 hover:text-white text-xs tracking-wider uppercase underline-offset-4 hover:underline transition-all"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
