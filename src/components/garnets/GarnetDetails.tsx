'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { 
  Gem, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  Flame, 
  ArrowRight, 
  Compass, 
  MapPin 
} from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function GarnetDetails() {
  const t = useTranslations('Garnets');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredReason, setHoveredReason] = useState<number | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const specTable = [
    { label: "Family", value: "Silicate Minerals (Pyrope, Almandine, Spessartite)" },
    { label: "Mohs Hardness", value: "6.5 – 7.5 (Highly Durable)" },
    { label: "Refractive Index", value: "1.720 – 1.888 (High Brilliance & Fire)" },
    { label: "Origin Status", value: "100% Natural, Unheated & Untreated" },
    { label: "Primary Mines", value: "Elahera & Ratnapura, Sri Lanka (Agrani Owned)" }
  ];

  const reasons = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
      title: t('special.reason1.title'),
      desc: t('special.reason1.desc')
    },
    {
      icon: <Compass className="w-8 h-8 text-rose-500" />,
      title: t('special.reason2.title'),
      desc: t('special.reason2.desc')
    },
    {
      icon: <Flame className="w-8 h-8 text-rose-500" />,
      title: t('special.reason3.title'),
      desc: t('special.reason3.desc')
    },
    {
      icon: <Award className="w-8 h-8 text-rose-500" />,
      title: t('special.reason4.title'),
      desc: t('special.reason4.desc')
    }
  ];

  const steps = [
    {
      num: t('process.step1.num'),
      title: t('process.step1.title'),
      desc: t('process.step1.desc'),
      location: "Elahera Private Deposits",
      highlight: "Direct Sourcing"
    },
    {
      num: t('process.step2.num'),
      title: t('process.step2.title'),
      desc: t('process.step2.desc'),
      location: "Agrani Geology Lab",
      highlight: "Geological Selection"
    },
    {
      num: t('process.step3.num'),
      title: t('process.step3.title'),
      desc: t('process.step3.desc'),
      location: "Colombo Lapidary Studios",
      highlight: "Bespoke Mapping"
    },
    {
      num: t('process.step4.num'),
      title: t('process.step4.title'),
      desc: t('process.step4.desc'),
      location: "Precision Workshops",
      highlight: "Mirror Finish"
    },
    {
      num: t('process.step5.num'),
      title: t('process.step5.title'),
      desc: t('process.step5.desc'),
      location: "GIA / GRS Vaults",
      highlight: "Worldwide Escrow"
    }
  ];

  return (
    <div className="relative overflow-hidden pt-28">
      {/* Background Ambient Glows (Peacock Teal + Garnet Rose Red) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-950/20 blur-[130px] rounded-full -mt-20 opacity-60" />
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-teal-950/15 blur-[150px] rounded-full opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-amber-950/10 blur-[120px] rounded-full opacity-35" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 z-10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
              <span className="text-white/80 text-[10px] font-bold uppercase tracking-[0.25em]">
                {t('hero.tagline')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.08] tracking-tight"
            >
              {t('hero.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm font-semibold">
                {t('hero.title').split(' ').pop()}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/70 max-w-xl text-lg md:text-xl font-light leading-relaxed mb-12"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 rounded-full font-bold uppercase tracking-widest text-xs text-white shadow-[0_0_30px_rgba(244,39,103,0.35)] hover:shadow-[0_0_40px_rgba(244,39,103,0.5)] transition-all duration-500 flex items-center gap-3"
              >
                {t('cta.button')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <a 
                href="#what-is-garnet"
                className="text-white/60 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors duration-300 py-3 px-4 border-b border-transparent hover:border-rose-500"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: 25 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/5"
            >
              {/* Rotating outer accent border */}
              <motion.div 
                className="absolute -inset-[3px] border border-rose-500/25 rounded-3xl"
                animate={{ borderColor: ['rgba(244,39,54,0.15)', 'rgba(244,39,54,0.4)', 'rgba(244,39,54,0.15)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-rose-950/60 via-transparent to-teal-950/40 z-10 mix-blend-overlay" />
              
              <Image
                src="/images/garnet-specialist.png"
                alt="Agrani Premium Sri Lankan Garnets"
                fill
                priority
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 z-10" />

              {/* Float badge inside image frame */}
              <div className="absolute bottom-6 left-6 z-20 flex flex-col">
                <span className="text-rose-400 text-[10px] uppercase tracking-[0.3em] font-bold">Agrani Signature</span>
                <span className="text-white font-serif text-2xl font-bold mt-1">Direct from Source</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT ARE GARNETS (INTRO) */}
      <section id="what-is-garnet" className="py-24 relative z-10 border-t border-white/5 bg-[#080808]/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Image with Sparks */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-square w-full max-w-[450px] rounded-2xl overflow-hidden border border-white/10 group bg-black/40 shadow-2xl"
              >
                {/* Dynamic diamond sparkle particles */}
                {mounted && [...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-rose-400 rounded-full z-20 opacity-0"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      scale: [0, 1.2, 0],
                      opacity: [0, 0.9, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeInOut",
                    }}
                  />
                ))}

                <Image
                  src="/images/garnet.png"
                  alt="Precious Sri Lankan Garnet Crystal"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] text-rose-400 uppercase tracking-widest font-bold">Gemological specimen</span>
                    <h3 className="text-white text-2xl font-serif mt-1 font-bold">Ceylon Almandine</h3>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-rose-400 font-bold text-sm">
                    100%
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Text details & Spec table */}
            <div className="order-1 lg:order-2">
              <span className="text-rose-500 text-[10px] uppercase tracking-[0.4em] mb-4 inline-block font-bold">
                Gemological Heritage
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                {t('intro.title')}
              </h2>
              
              <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed mb-10">
                <p>{t('intro.description1')}</p>
                <p>{t('intro.description2')}</p>
              </div>

              {/* Spec Table */}
              <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur-md">
                {specTable.map((spec, i) => (
                  <div 
                    key={i} 
                    className={`grid grid-cols-3 p-4 text-sm border-b border-white/5 ${
                      i === specTable.length - 1 ? 'border-b-0' : ''
                    }`}
                  >
                    <span className="col-span-1 text-white/50 uppercase tracking-widest text-[10px] font-bold self-center">
                      {spec.label}
                    </span>
                    <span className="col-span-2 text-white font-medium pl-4 border-l border-white/5">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY WE ARE SPECIAL */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-[#050505]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-rose-500 text-[10px] uppercase tracking-[0.4em] mb-4 inline-block font-bold">
              {t('special.tagline')}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {t('special.title')}
            </h2>
            <div className="w-20 h-[1.5px] bg-rose-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onHoverStart={() => setHoveredReason(i)}
                onHoverEnd={() => setHoveredReason(null)}
                className={`relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-500/30 transition-all duration-500 group flex flex-col items-center text-center cursor-pointer ${
                  hoveredReason === i ? 'shadow-[0_15px_40px_-15px_rgba(244,39,103,0.15)] -translate-y-2' : ''
                }`}
              >
                {/* Glowing subtle card background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br from-rose-950/60 to-rose-900/30 border border-rose-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                  {reason.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest relative z-10">
                  {reason.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed relative z-10 font-light">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: PROCESS (Timeline of extraction & producing) */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#080808]/40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Static Text Context (Mining focus) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <span className="text-rose-500 text-[10px] uppercase tracking-[0.4em] mb-4 inline-block font-bold">
                {t('process.tagline')}
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                {t('process.title')}
              </h2>
              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-8">
                {t('process.description')}
              </p>

              {/* Mine Ownership highlight block */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950/20 to-teal-950/10 border border-rose-500/20 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-rose-400" />
                  </div>
                  <h4 className="text-white font-serif font-bold text-lg">100% Owned Mining Operations</h4>
                </div>
                <p className="text-white/50 text-xs leading-relaxed font-light">
                  Unlike conventional gemstone exporters, <span className="text-rose-300 font-medium">Agrani Gems owns private concessions</span> in Elahera and Ratnapura, Sri Lanka. This allows us to guarantee strict conflict-free standards, direct geosecurity, and a continuous supply of unheated gems.
                </p>
              </div>

              {/* Interactive Timeline progress indicators */}
              <div className="hidden lg:flex flex-col gap-3 mt-12">
                {steps.map((step, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex items-center gap-4 text-left py-2 px-4 rounded-lg transition-all duration-300 border ${
                      activeStep === idx 
                        ? 'bg-rose-500/10 border-rose-500/20 text-rose-300' 
                        : 'border-transparent text-white/40 hover:text-white/70'
                    }`}
                  >
                    <span className="font-serif font-bold text-sm">{step.num}</span>
                    <span className="text-xs uppercase tracking-widest font-semibold">{step.highlight}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Interactive Pipeline */}
            <div className="lg:col-span-8 space-y-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeStep === idx
                      ? 'bg-white/[0.04] border-rose-500/40 shadow-[0_10px_30px_-15px_rgba(244,39,103,0.1)]'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {/* Step index circle indicator */}
                      <div className={`w-12 h-12 rounded-full font-serif font-bold text-lg flex items-center justify-center shrink-0 transition-colors duration-500 border ${
                        activeStep === idx 
                          ? 'bg-rose-600 text-white border-transparent shadow-[0_0_15px_rgba(244,39,103,0.4)]'
                          : 'bg-white/5 text-white/50 border-white/10'
                      }`}>
                        {step.num}
                      </div>
                      <div>
                        <span className="text-rose-400 text-[10px] uppercase tracking-widest font-bold mb-0.5 block">
                          {step.highlight}
                        </span>
                        <h3 className="text-white font-serif font-bold text-xl md:text-2xl">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start md:self-center bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white/40 text-[10px] uppercase tracking-widest font-semibold">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      {step.location}
                    </div>
                  </div>

                  <p className="text-white/60 text-sm md:text-base font-light leading-relaxed pl-0 md:pl-16">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: LUXURY GLASS CTA */}
      <section className="py-28 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-950/30 via-red-950/20 to-teal-950/15 border border-white/10 p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl"
          >
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-60 h-60 bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <Gem className="w-12 h-12 text-rose-500 mb-6 animate-bounce" />
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                {t('cta.title')}
              </h2>
              
              <p className="text-white/60 text-base md:text-lg font-light leading-relaxed mb-12">
                {t('cta.subtitle')}
              </p>

              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-600 via-rose-700 to-red-700 hover:from-rose-500 hover:to-red-600 rounded-full font-bold uppercase tracking-widest text-xs text-white shadow-lg hover:shadow-rose-500/40 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('cta.button')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Button shine animation */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-rose-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative background bottom watermark */}
      <div className="absolute -bottom-16 -left-16 pointer-events-none opacity-[0.02] select-none z-0">
        <h1 className="text-[18vw] font-serif font-bold text-rose-400 uppercase tracking-widest">
          GARNET
        </h1>
      </div>
    </div>
  );
}
