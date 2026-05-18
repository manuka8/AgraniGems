'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Translations for the component
const translations = {
  en: {
    specialization: "Our Specialization",
    title: "Masters of",
    titleHighlight: "Garnet Craftsmanship",
    description: "At AGRANI GEMS, we specialize in the expert processing of premium Garnet gemstones, transforming raw natural stones into finely crafted treasures.",
    features: [
      { title: "Expert Processing", desc: "Deep expertise in handling various garnet types with surgical precision.", icon: "⚡" },
      { title: "Precision Cutting", desc: "Masterfully cut to maximize light return and characteristic color depth.", icon: "💎" },
      { title: "Quality Brilliance", desc: "Careful polishing techniques ensure exceptional beauty and lasting quality.", icon: "✨" }
    ],
    button: "Explore Collection",
    badge: "100%",
    badgeLabel: "Natural Origin",
    craftsmenLabel: "Expert Craftsmen",
    backgroundText: "GARNET"
  },
  fr: {
    specialization: "Notre Spécialisation",
    title: "Maîtres de l'",
    titleHighlight: "Artisanat du Grenat",
    description: "Chez AGRANI GEMS, nous sommes spécialisés dans le traitement expert des pierres précieuses en grenat premium, transformant les pierres naturelles brutes en trésors finement travaillés.",
    features: [
      { title: "Traitement Expert", desc: "Une expertise approfondie dans la manipulation de divers types de grenat avec une précision chirurgicale.", icon: "⚡" },
      { title: "Coupe de Précision", desc: "Taillé avec maîtrise pour maximiser le retour de lumière et la profondeur de couleur caractéristique.", icon: "💎" },
      { title: "Éclat de Qualité", desc: "Des techniques de polissage minutieuses assurent une beauté exceptionnelle et une qualité durable.", icon: "✨" }
    ],
    button: "Explorer la Collection",
    badge: "100%",
    badgeLabel: "Origine Naturelle",
    craftsmenLabel: "Artisans Experts",
    backgroundText: "GRENAT"
  },
  de: {
    specialization: "Unsere Spezialisierung",
    title: "Meister der",
    titleHighlight: "Granat-Handwerkskunst",
    description: "Bei AGRANI GEMS sind wir spezialisiert auf die fachmännische Verarbeitung von hochwertigen Granat-Edelsteinen und verwandeln rohe Natursteine in fein gearbeitete Schätze.",
    features: [
      { title: "Fachgerechte Verarbeitung", desc: "Tiefgehende Expertise in der Handhabung verschiedener Granatarten mit chirurgischer Präzision.", icon: "⚡" },
      { title: "Präzisionsschliff", desc: "Meisterhafter Schliff zur Maximierung der Lichtreflexion und charakteristischen Farbtiefe.", icon: "💎" },
      { title: "Qualitätsglanz", desc: "Sorgfältige Poliertechniken gewährleisten außergewöhnliche Schönheit und dauerhafte Qualität.", icon: "✨" }
    ],
    button: "Kollektion Entdecken",
    badge: "100%",
    badgeLabel: "Natürlicher Ursprung",
    craftsmenLabel: "Experten-Handwerker",
    backgroundText: "GRANAT"
  }
};

export default function GarnetSpecialist() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const locale = useLocale() as 'en' | 'fr' | 'de';
  const t = translations[locale];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax effect for background elements
  const parallaxOffset = scrollY * 0.3;

  return (
    <section className="relative py-8 md:py-20 overflow-hidden min-h-screen flex items-center">
      
      {/* Dynamic Gradient Background - Matches Home Page Theme Colors (Luxury Black with Navy Depth) */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D17] via-[#0A1628] to-[#0B0D17]" />
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-tr from-[#050505]/40 via-[#0B0D17]/80 to-transparent"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Additional emerald glow */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-bl from-emerald-950/20 via-transparent to-blue-950/25"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Peacock Theme Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-900/30 to-transparent" />
        
        {/* Animated peacock glows - Updated colors & opacities */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: -parallaxOffset * 0.5 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/25 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: parallaxOffset * 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/25 rounded-full blur-[120px]"
        />
        
        {/* Additional emerald glow */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]"
        />
        
        {/* Peacock feather pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(16, 185, 129, 0.15) 2px, transparent 2px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Subtle wave pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute bottom-0 left-0 w-full h-64" preserveAspectRatio="none" viewBox="0 0 1440 320">
            <path fill="rgba(16, 185, 129, 0.1)" fillOpacity="1" d="M0,192L48,186.7C96,181,192,171,288,160C384,149,480,139,576,149.3C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Image Content with Advanced Animations */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              {/* Decorative Frame with rotating border */}
              <motion.div 
                className="absolute -inset-4 border border-emerald-500/20 rounded-2xl"
                animate={{ 
                  borderColor: ['rgba(16, 185, 129, 0.2)', 'rgba(16, 185, 129, 0.5)', 'rgba(16, 185, 129, 0.2)']
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-br from-emerald-500/20 via-transparent to-blue-500/20 rounded-2xl blur-sm"
                animate={{ 
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative aspect-square overflow-hidden rounded-xl bg-black/40 shadow-2xl max-w-md mx-auto lg:max-w-full">
                <Image
                  src="/images/garnet.png"
                  alt={t.titleHighlight}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Shimmer effect overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent"
                  animate={{ 
                    y: ['-100%', '100%']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Peacock-colored overlays */}
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 via-transparent to-blue-900/40 opacity-60" />
                
                {/* Floating particles or light streaks */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    animate={{ x: ['100%', '-100%'], y: ['-100%', '100%'] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-1 h-full bg-emerald-500/20 rotate-45 blur-md"
                  />
                </div>

                {/* Sparkle particles */}
                {mounted && [...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Floating Badge with 3D animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="absolute -bottom-5 -right-5 bg-gradient-to-br from-blue-900 to-emerald-900 border border-emerald-500/30 p-4 rounded-lg backdrop-blur-md shadow-xl hidden md:block"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-emerald-400 font-serif text-xl font-bold"
                >
                  {t.badge}
                </motion.div>
                <div className="text-white/60 text-[10px] uppercase tracking-widest">{t.badgeLabel}</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Text Content with Enhanced Animations */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center gap-4 mb-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="h-px w-10 bg-emerald-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.span 
                  className="text-emerald-400 text-xs uppercase tracking-[0.3em] font-bold"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t.specialization}
                </motion.span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                {t.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400">
                  {t.titleHighlight}
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.description}
              </motion.p>
              
              <div className="space-y-4">
                {t.features.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.15), duration: 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      transition: { duration: 0.2 }
                    }}
                    onHoverStart={() => setHoveredItem(i)}
                    onHoverEnd={() => setHoveredItem(null)}
                    className="flex gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-emerald-500/[0.05] hover:border-emerald-500/30 transition-all duration-500 group cursor-pointer"
                  >
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-blue-700 flex items-center justify-center shrink-0 border border-emerald-500/20"
                      animate={hoveredItem === i ? {
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="text-white text-lg"
                        animate={hoveredItem === i ? {
                          rotate: [0, 360],
                        } : {}}
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="text-white font-bold text-sm mb-0.5"
                        animate={hoveredItem === i ? { color: '#10b981' } : { color: '#ffffff' }}
                      >
                        {item.title}
                      </motion.h4>
                      <p className="text-white/50 text-xs">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-8 flex flex-wrap gap-5 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button 
                  className="px-7 py-3 bg-gradient-to-r from-emerald-600 to-blue-700 text-white rounded-full font-bold uppercase tracking-widest text-xs relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{t.button}</span>
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"
                  />
                </motion.button>
                
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i, idx) => (
                    <motion.div 
                      key={i} 
                      className="w-8 h-8 rounded-full border-2 border-emerald-900/50 bg-emerald-800/50 flex items-center justify-center text-[8px] text-white overflow-hidden backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + (idx * 0.1) }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                    >
                      <Image src={`/images/garnet.png`} alt={t.craftsmenLabel} width={32} height={32} className="object-cover" />
                    </motion.div>
                  ))}
                  <motion.div 
                    className="w-8 h-8 rounded-full border-2 border-emerald-500/50 bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center text-[9px] text-white font-bold backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    +15
                  </motion.div>
                </div>
                <motion.span 
                  className="text-white/40 text-xs tracking-wider"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {t.craftsmenLabel}
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Animated Decorative background text */}
      <motion.div 
        className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.03] select-none z-0"
        animate={{ 
          x: [0, -20, 0],
          y: [0, -10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <h1 className="text-[20vw] font-serif font-bold whitespace-nowrap text-emerald-400">
          {t.backgroundText}
        </h1>
      </motion.div>

      {/* Bottom decorative line animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
        animate={{ 
          opacity: [0, 1, 0],
          scaleX: [0, 1, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}