'use client';

import { motion } from 'framer-motion';

const events = [
  {
    year: '2500+ Years',
    title: 'Ancient Roots',
    description: 'Sri Lanka has been known as "Ratna-Dweepa" (Island of Gems) for millennia, mentioned in ancient scriptures and by legendary travelers like Marco Polo.'
  },
  {
    year: '1970s',
    title: 'Modern Regulation',
    description: 'The establishment of the State Gem Corporation brought formal structure and quality standards to the Sri Lankan gemstone industry.'
  },
  {
    year: '1998',
    title: 'AgraniGems Founded',
    description: 'AgraniGems was established with a vision to bring the highest quality Ceylon sapphires to the international luxury market.'
  },
  {
    year: '2010',
    title: 'Global Expansion',
    description: 'Expanding our reach to major luxury hubs including Geneva, New York, and Hong Kong, becoming a trusted name in high jewelry.'
  },
  {
    year: 'Today',
    title: 'Ethical Excellence',
    description: 'Leading the industry with sustainable mining practices and fully traceable gemstone sourcing from our own mines.'
  }
];

export default function HistoryTimeline() {
  return (
    <div className="relative py-20">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

      <div className="space-y-24">
        {events.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center gap-12 ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Year Dot */}
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-luxury-black z-10 hidden md:block" />

            {/* Content Card */}
            <div className="w-full md:w-1/2 px-6">
              <div className={`p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-gold/30 hover:bg-white/10 ${
                idx % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                <span className="text-3xl font-serif font-bold text-gold mb-2 block">{event.year}</span>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{event.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Spacer for the other side */}
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
