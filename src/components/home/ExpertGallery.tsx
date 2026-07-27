'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useLocale } from 'next-intl'; // Assuming you're using next-intl for i18n

// If you're not using next-intl, you can create a simple context or hook
// For now, I'll show both approaches

// Option 1: Using next-intl (recommended)
// Import from 'next-intl' if available

// Option 2: Simple locale hook (if you don't have next-intl setup)
// const useLocale = () => {
//   const [locale] = React.useState<'en' | 'fr' | 'de'>('en');
//   // You would implement your actual locale detection logic here
//   return locale;
// };

const experts = [
  {
    id: 1,
    name: {
      en: "Priyantha Jayasingha",
      fr: "Priyantha Jayasingha",
      de: "Priyantha Jayasingha",
      es: "Priyantha Jayasingha"
    },
    position: {
      en: "Managing Director (CEO)",
      fr: "Directeur Général (CEO)",
      de: "Geschäftsführer (CEO)",
      es: "Director General (CEO)"
    },
    description: {
      en: "Leads the company's vision, strategy, and long-term growth while ensuring excellence, integrity, and exceptional customer satisfaction across every aspect of the business.",
      fr: "Dirige la vision, la stratégie et la croissance à long terme de l'entreprise tout en garantissant l'excellence, l'intégrité et une satisfaction client exceptionnelle.",
      de: "Leitet die Vision, Strategie und das langfristige Wachstum des Unternehmens und gewährleistet Exzellenz, Integrität sowie höchste Kundenzufriedenheit.",
      es: "Lidera la visión, la estrategia y el crecimiento a largo plazo de la empresa, garantizando la excelencia, la integridad y una satisfacción excepcional del cliente."
    },
    image: "/images/expert1.png"
  },
  {
    id: 2,
    name: {
      en: "Agrani Jayasingha",
      fr: "Agrani Jayasingha",
      de: "Agrani Jayasingha",
      es: "Agrani Jayasingha"
    },
    position: {
      en: "Head of Marketing",
      fr: "Chef de Marketing",
      de: "Leiter Marketing",
      es: "Jefa de Marketing"
    },
    description: {
      en: "Drives the company's brand strategy, digital marketing, customer engagement, and market expansion through innovative campaigns and data-driven insights.",
      fr: "Pilote la stratégie de marque, le marketing numérique, l'engagement client et le développement du marché grâce à des campagnes innovantes et à des analyses basées sur les données.",
      de: "Verantwortet Markenstrategie, digitales Marketing, Kundenbindung und Marktexpansion durch innovative Kampagnen und datenbasierte Entscheidungen.",
      es: "Dirige la estrategia de marca, el marketing digital, la participación del cliente y la expansión del mercado mediante campañas innovadoras y análisis basados en datos."
    },
    image: "/images/expert2.jpeg"
  }
];

// Text translations for UI elements
const translations = {
  en: {
    subtitle: "The Minds Behind The Brilliance",
    title: "Our Specialist Team"
  },
  fr: {
    subtitle: "Les Esprits Derrière l'Éclat",
    title: "Notre Équipe de Spécialistes"
  },
  de: {
    subtitle: "Die Köpfe Hinter dem Glanz",
    title: "Unser Spezialistenteam"
  },
  es: {
    subtitle: "Las Mentes Detrás del Brillo",
    title: "Nuestro Equipo de Especialistas"
  }
};

export default function ExpertGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const locale = useLocale() as 'en' | 'fr' | 'de' | 'es';

  const nextExpert = () => {
    setActiveIndex((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setActiveIndex((prev) => (prev - 1 + experts.length) % experts.length);
  };

  const currentExpert = experts[activeIndex];

  return (
    <section className="relative py-0 md:py-16 bg-[#050505] overflow-hidden min-h-screen flex items-center">
      {/* Background Decorative Title */}
      <div className="absolute top-5 left-5 pointer-events-none opacity-[0.02] select-none z-0">
        <h1 className="text-[8vw] font-serif font-bold text-white leading-none">
          {locale === 'en' ? 'EXPERTS' : locale === 'fr' ? 'EXPERTS' : locale === 'es' ? 'EXPERTOS' : 'EXPERTEN'}
        </h1>
      </div>

      <div className="container mx-auto px-2 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-[10px] uppercase tracking-[0.3em] mb-2 block font-bold"
          >
            {translations[locale].subtitle}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white"
          >
            {translations[locale].title}
          </motion.h2>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[480px]">
          
          {/* Gallery Image Area */}
          <div className="w-full lg:w-3/5 relative h-[320px] md:h-[420px] flex items-center justify-center">
            <AnimatePresence mode='wait'>
              {experts.map((expert, index) => {
                const isActive = index === activeIndex;
                const isNext = (index === (activeIndex + 1) % experts.length);
                const isPrev = (index === (activeIndex - 1 + experts.length) % experts.length);

                if (!isActive && !isNext && !isPrev) return null;

                return (
                  <motion.div
                    key={expert.id}
                    initial={{ 
                      opacity: 0, 
                      scale: isActive ? 1.1 : 0.8,
                      x: isActive ? 0 : isNext ? 100 : -100,
                      zIndex: isActive ? 10 : 5
                    }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.3, 
                      scale: isActive ? 1 : 0.85,
                      x: isActive ? 0 : isNext ? 150 : -150,
                      filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                      zIndex: isActive ? 10 : 5
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: "circOut" }}
                    className="absolute w-full max-w-[260px] md:max-w-[300px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                    onClick={() => setActiveIndex(index)}
                    style={{ cursor: isActive ? 'default' : 'pointer' }}
                  >
                    <Image
                      src={expert.image}
                      alt={expert.name[locale]}
                      fill
                      className="object-cover"
                      priority={isActive}
                    />
                    {/* Dark Overlay for background images */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                    )}
                    {/* Active highlight border */}
                    {isActive && (
                      <div className="absolute inset-0 border-2 border-gold/40 rounded-xl pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-2 md:bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              <button 
                onClick={prevExpert}
                className="w-10 h-10 rounded-full border border-gold/30 bg-black/50 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 backdrop-blur-sm"
                aria-label={locale === 'en' ? 'Previous expert' : locale === 'fr' ? 'Expert précédent' : locale === 'es' ? 'Experto anterior' : 'Vorheriger Experte'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextExpert}
                className="w-10 h-10 rounded-full border border-gold/30 bg-black/50 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 backdrop-blur-sm"
                aria-label={locale === 'en' ? 'Next expert' : locale === 'fr' ? 'Expert suivant' : locale === 'es' ? 'Siguiente experto' : 'Nächster Experte'}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Expert Information Area */}
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1">
                    {currentExpert.name[locale]}
                  </h3>
                  <p className="text-gold text-base font-medium tracking-wide">
                    {currentExpert.position[locale]}
                  </p>
                </div>
                
                <div className="w-16 h-0.5 bg-gold/50 mb-6 mx-auto lg:mx-0" />
                
                <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                  {currentExpert.description[locale]}
                </p>

                <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
                   <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold transition-colors cursor-pointer group">
                      <div className="w-3.5 h-3.5 bg-white/20 group-hover:bg-gold rounded-full transition-colors" />
                   </div>
                   <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-gold transition-colors cursor-pointer group">
                      <div className="w-3.5 h-3.5 bg-white/20 group-hover:bg-gold rounded-full transition-colors" />
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {experts.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'}`}
            aria-label={`${locale === 'en' ? 'Go to expert' : locale === 'fr' ? 'Aller à l\'expert' : locale === 'es' ? 'Ir al experto' : 'Zu Experte wechseln'} ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}