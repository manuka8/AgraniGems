'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gemstone } from '@/data/gems';
import { MapPin } from 'lucide-react';

export default function GemCard({ gem }: { gem: Gemstone }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative h-full flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-gold/30"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden shrink-0">
        <Image
          src={gem.image}
          alt={gem.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80" />

        {/* Rarity Badge */}
        <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-md text-luxury-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
          {gem.rarity}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <div className="flex justify-between items-start mb-2 min-h-[56px]">
          <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors">
            {gem.name}
          </h3>

          <span className="text-xs text-white/40 uppercase tracking-widest whitespace-nowrap ml-2">
            {gem.category}
          </span>
        </div>

        {/* Origin */}
        <div className="flex items-center gap-2 text-white/50 text-xs mb-4 min-h-[20px]">
          <MapPin className="w-3 h-3 text-gold shrink-0" />
          <span>{gem.origin}</span>
        </div>

        {/* Description - fixed height */}
        <p className="text-white/60 text-sm mb-5 line-clamp-3 font-light min-h-[72px]">
          {gem.description}
        </p>

        {/* Characteristics - fixed area */}
        <div className="flex flex-wrap gap-2 mb-6 min-h-[30px]">
          {gem.characteristics.slice(0, 4).map((char, i) => (
            <span
              key={i}
              className="text-[7px] bg-white/5 border border-white/10 px-2  py-2 rounded-md text-white/70 uppercase h-fit"
            >
              {char}
            </span>
          ))}
        </div>

        {/* Button always bottom */}
        <button className="mt-auto w-full py-3 border border-white/10 group-hover:border-gold rounded-xl text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 group-hover:bg-gold group-hover:text-luxury-black">
          View Details
        </button>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 rounded-tl-2xl" />
    </motion.div>
  );
}