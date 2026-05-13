'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gemstone } from '@/data/gems';
import { MapPin, Star, ShieldCheck } from 'lucide-react';

export default function GemCard({ gem }: { gem: Gemstone }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-gold/30"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
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
      <div className="p-6 relative">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold transition-colors">
            {gem.name}
          </h3>
          <span className="text-xs text-white/40 uppercase tracking-widest">{gem.category}</span>
        </div>

        <div className="flex items-center gap-2 text-white/50 text-xs mb-4">
          <MapPin className="w-3 h-3 text-gold" />
          <span>{gem.origin}</span>
        </div>

        <p className="text-white/60 text-sm mb-6 line-clamp-2 font-light">
          {gem.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {gem.characteristics.map((char, i) => (
            <span key={i} className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded-md text-white/70 uppercase">
              {char}
            </span>
          ))}
        </div>

        <button className="w-full py-3 border border-white/10 group-hover:border-gold rounded-xl text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 group-hover:bg-gold group-hover:text-luxury-black">
          View Details
        </button>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 rounded-tl-2xl" />
    </motion.div>
  );
}
