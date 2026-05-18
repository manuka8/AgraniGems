'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { timelessTreasureData } from '@/data/timelessTreasure';
import { useLocale } from 'next-intl';

const AUTO_PLAY_INTERVAL = 8000; // 8 seconds per section
const RESUME_AUTO_PLAY_DELAY = 30000; // 30 seconds after manual interaction

export default function TimelessTreasure() {
  const locale = useLocale() as 'en' | 'fr' | 'de' | 'es';
  const data = timelessTreasureData[locale] || timelessTreasureData.en;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const lastScrollTime = useRef(0);

  // Clear all timers
  const clearAllTimers = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  // Start auto-play
  const startAutoPlay = useCallback(() => {
    clearAllTimers();
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % data.sections.length);
      }, AUTO_PLAY_INTERVAL);
    }
  }, [isAutoPlaying, data.sections.length, clearAllTimers]);

  // Stop auto-play
  const stopAutoPlay = useCallback(() => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  }, []);

  // Effect to manage auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    
    return () => {
      stopAutoPlay();
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  // Handle manual navigation
  const handleManualNav = useCallback((index: number) => {
    if (index === activeIndex) return;
    
    setActiveIndex(index);
    
    // If auto-play was running, pause it temporarily
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      
      // Clear any existing resume timer
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
      
      // Resume auto-play after delay
      resumeTimerRef.current = setTimeout(() => {
        setIsAutoPlaying(true);
        resumeTimerRef.current = null;
      }, RESUME_AUTO_PLAY_DELAY);
    }
  }, [activeIndex, isAutoPlaying]);

  // Manual navigation buttons (previous/next)
  const goToPrevious = useCallback(() => {
    handleManualNav((activeIndex - 1 + data.sections.length) % data.sections.length);
  }, [activeIndex, data.sections.length, handleManualNav]);

  const goToNext = useCallback(() => {
    handleManualNav((activeIndex + 1) % data.sections.length);
  }, [activeIndex, data.sections.length, handleManualNav]);

  // Wheel listener for section switching
  const handleWheel = useCallback((e: WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 1200) return; // Throttling for smooth transitions

    // Find the text content container
    const scrollContainer = sectionRef.current?.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const isAtTop = scrollTop <= 2;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) <= 2;

      // Only switch section if we're at the scroll boundaries of the text content
      if (e.deltaY > 0 && !isAtBottom) return; 
      if (e.deltaY < 0 && !isAtTop) return;
    }

    if (Math.abs(e.deltaY) > 30) {
      if (e.deltaY > 0) {
        if (activeIndex < data.sections.length - 1) {
          e.preventDefault();
          goToNext();
          lastScrollTime.current = now;
        }
      } else {
        if (activeIndex > 0) {
          e.preventDefault();
          goToPrevious();
          lastScrollTime.current = now;
        }
      }
    }
  }, [activeIndex, data.sections.length, goToNext, goToPrevious]);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
    }
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel]);

  const currentSection = data.sections[activeIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[100dvh] overflow-hidden bg-[#0a0a0a] font-sans flex flex-col lg:flex-row"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a0a] to-[#0a0a0a] z-0">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.08) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      {/* Sidebar Navigation - Fixed full height on desktop */}
      <nav className="absolute lg:relative bottom-6 lg:bottom-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 lg:h-full lg:w-24 z-50 flex lg:flex-col items-center justify-center pointer-events-none">
        <div className="flex flex-row lg:flex-col items-center justify-center gap-4 sm:gap-8 bg-black/60 backdrop-blur-xl border border-gold/20 lg:border-y-0 lg:border-l-0 lg:border-r px-6 py-4 lg:py-16 lg:h-full lg:w-full rounded-full lg:rounded-none pointer-events-auto shadow-2xl transition-all duration-500">
          {data.sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleManualNav(index)}
              className="group relative flex flex-col items-center transition-all duration-300"
            >
              <span className={`text-[11px] lg:text-sm font-bold tracking-widest transition-all duration-500 ${
                activeIndex === index 
                  ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)] scale-110' 
                  : 'text-white/20 group-hover:text-white/50'
              }`}>
                0{section.id}
              </span>
              
              {/* Desktop Progress Line */}
              <div className="hidden lg:block mt-4 w-[2px] h-12 xl:h-16 bg-white/10 relative overflow-hidden rounded-full">
                {activeIndex === index && (
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                  />
                )}
              </div>
              
              {/* Mobile Progress Line */}
              <div className="lg:hidden mt-2 w-8 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                {activeIndex === index && (
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="relative flex-1 h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="h-full flex flex-col lg:flex-row"
          >
            {/* Image Section - Pinned/Featured */}
            <div className="flex-1 relative lg:h-full order-first lg:order-last p-4 lg:p-8 xl:p-12 min-h-[35vh] lg:min-h-0">
               <div className="relative w-full h-full rounded-2xl lg:rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                  <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={currentSection.image}
                      alt={currentSection.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/50 lg:via-transparent" />
                  </motion.div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 lg:top-10 lg:right-10 bg-black/40 backdrop-blur-md border border-gold/30 px-5 py-2 rounded-full">
                    <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">
                      Heritage 0{currentSection.id}
                    </span>
                  </div>
               </div>
            </div>

            {/* Text Content - Adjustable and Scrolls Separately */}
            <div className="flex-[1.2] lg:flex-1 flex flex-col px-6 sm:px-12 lg:px-16 xl:px-24 py-8 lg:py-16 overflow-y-auto custom-scrollbar">
              <div className="my-auto w-full max-w-2xl">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-px bg-gold" />
                    <span className="text-gold text-[10px] sm:text-xs uppercase tracking-[0.5em] font-bold">
                      {data.title}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
                    {currentSection.title}
                  </h2>

                  <div className="space-y-6 text-white/70 text-base sm:text-lg font-light leading-relaxed mb-10">
                    {currentSection.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  <div className="relative p-6 sm:p-8 bg-white/[0.03] backdrop-blur-sm border-l-4 border-gold/50 rounded-r-2xl group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <h4 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-4 font-bold flex items-center gap-2">
                      <span className="w-4 h-px bg-gold" />
                      Why It Matters
                    </h4>
                    <p className="text-white text-lg sm:text-xl italic font-serif leading-relaxed relative z-10">
                      "{currentSection.whyItMatters}"
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls - Desktop Only */}
      <div className="hidden lg:flex absolute right-12 bottom-12 z-50 gap-4">
        <button
          onClick={goToPrevious}
          className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-gold/20 flex items-center justify-center hover:bg-gold/30 hover:border-gold/50 transition-all duration-300 group shadow-2xl"
          aria-label="Previous Section"
        >
          <svg className="w-6 h-6 text-white group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-gold/20 flex items-center justify-center hover:bg-gold/30 hover:border-gold/50 transition-all duration-300 group shadow-2xl"
          aria-label="Next Section"
        >
          <svg className="w-6 h-6 text-white group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Auto-play Status */}
      <div className="absolute top-8 right-8 z-50 flex items-center gap-4 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-gold/10">
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-gold animate-pulse shadow-[0_0_8px_#C5A059]' : 'bg-white/20'}`} />
        <span className="text-white/40 text-[9px] font-bold tracking-[0.2em] uppercase hidden sm:block">
          {isAutoPlaying ? 'Auto Exploration' : 'Manual Mode'}
        </span>
        {!isAutoPlaying && (
          <button
            onClick={() => {
              setIsAutoPlaying(true);
              if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
            }}
            className="text-gold text-[9px] font-bold hover:text-white transition-colors tracking-widest"
          >
            RESUME
          </button>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(197, 160, 89, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(197, 160, 89, 0.4);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(197, 160, 89, 0.2) transparent;
        }
      `}</style>
    </section>
  );
}