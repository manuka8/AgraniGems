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
      en: "Master Rohan Silva",
      fr: "Maître Rohan Silva",
      de: "Meister Rohan Silva",
      es: "Maestro Rohan Silva"
    },
    position: {
      en: "Master Lapidary",
      fr: "Maître Lapidaire",
      de: "Meister-Lapidar",
      es: "Maestro Lapidario"
    },
    description: {
      en: "A third-generation gemstone cutter, Master Silva is renowned for his precision in traditional and modern faceting techniques.",
      fr: "Tailleur de pierres précieuses de troisième génération, Maître Silva est réputé pour sa précision dans les techniques de facettage traditionnelles et modernes.",
      de: "Als Edelsteinschleifer der dritten Generation ist Meister Silva bekannt für seine Präzision bei traditionellen und modernen Facettiertechniken.",
      es: "Un cortador de piedras preciosas de tercera generación, el Maestro Silva es reconocido por su precisión en técnicas de tallado tradicionales y modernas."
    },
    image: "/images/expert1.png"
    
  },
  {
    id: 2,
    name: {
      en: "Dr. Aruni Perera",
      fr: "Dr. Aruni Perera",
      de: "Dr. Aruni Perera",
      es: "Dra. Aruni Perera"
    },
    position: {
      en: "Chief Gemologist",
      fr: "Chef Gemmologue",
      de: "Oberster Gemmologe",
      es: "Gemóloga Jefa"
    },
    description: {
      en: "With over 20 years of experience in the field, Dr. Perera specializes in the scientific authentication and grading of rare Ceylon Sapphires.",
      fr: "Avec plus de 20 ans d'expérience dans le domaine, le Dr Perera se spécialise dans l'authentification scientifique et le classement des rares saphirs de Ceylan.",
      de: "Mit über 20 Jahren Erfahrung auf diesem Gebiet spezialisiert sich Dr. Perera auf die wissenschaftliche Authentifizierung und Bewertung seltener Ceylon-Saphire.",
      es: "Con más de 20 años de experiencia en el campo, la Dra. Perera se especializa en la autenticación científica y clasificación de zafiros raros de Ceilán."
    },
    image: "/images/expert2.png"
  },
  {
    id: 3,
    name: {
      en: "Ms. Isabella Chen",
      fr: "Mme Isabella Chen",
      de: "Frau Isabella Chen",
      es: "Sra. Isabella Chen"
    },
    position: {
      en: "Market Analyst",
      fr: "Analyste de Marché",
      de: "Marktanalystin",
      es: "Analista de Mercado"
    },
    description: {
      en: "Isabella provides strategic insights into global gemstone market trends, helping collectors make informed investment choices.",
      fr: "Isabella fournit des informations stratégiques sur les tendances du marché mondial des pierres précieuses, aidant les collectionneurs à faire des choix d'investissement éclairés.",
      de: "Isabella liefert strategische Einblicke in globale Edelsteinmarkttrends und hilft Sammlern, fundierte Investitionsentscheidungen zu treffen.",
      es: "Isabella proporciona información estratégica sobre las tendencias del mercado mundial de piedras preciosas, ayudando a los coleccionistas a tomar decisiones de inversión informadas."
    },
    image: "/images/expert3.png"
  },
  {
    id: 4,
    name: {
      en: "Mr. Kamal de Silva",
      fr: "M. Kamal de Silva",
      de: "Herr Kamal de Silva",
      es: "Sr. Kamal de Silva"
    },
    position: {
      en: "Quality Assurance Head",
      fr: "Responsable Assurance Qualité",
      de: "Leiter Qualitätssicherung",
      es: "Jefe de Garantía de Calidad"
    },
    description: {
      en: "Kamal oversees our rigorous multi-stage verification process to ensure every gemstone meets the highest standards of purity.",
      fr: "Kamal supervise notre processus de vérification rigoureux en plusieurs étapes pour garantir que chaque pierre précieuse répond aux normes de pureté les plus élevées.",
      de: "Kamal überwacht unseren strengen, mehrstufigen Verifizierungsprozess, um sicherzustellen, dass jeder Edelstein den höchsten Reinheitsstandards entspricht.",
      es: "Kamal supervisa nuestro riguroso proceso de verificación de múltiples etapas para garantizar que cada gema cumpla con los más altos estándares de pureza."
    },
    image: "/images/expert4.png"
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