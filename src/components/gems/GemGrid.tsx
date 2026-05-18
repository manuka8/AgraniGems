'use client';

import { useState } from 'react';
import { gems, Gemstone } from '@/data/gems';
import GemCard from './GemCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Sparkles, Gem, ArrowRight, Flame } from 'lucide-react';
import Link from 'next/link';

export default function GemGrid() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', ...Array.from(new Set(gems.map(g => g.category)))];

  const filteredGems = gems.filter(gem => {
    const matchesCategory = filter === 'All' || gem.category === filter;
    const matchesSearch = gem.name.toLowerCase().includes(search.toLowerCase()) || 
                          gem.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-6 py-10">
      
      {/* Garnet Specialization Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 relative overflow-hidden rounded-2xl"
      >
        <div className="relative bg-gradient-to-r from-red-950 via-red-900 to-amber-900 rounded-2xl p-6 md:p-8 border border-red-500/30 shadow-[0_0_50px_rgba(220,38,38,0.3)]">
          
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                x: [0, -80, 0],
                y: [0, 30, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-20 -left-20 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-red-500/10 to-transparent"
            />
            
            {/* Floating Garnet Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-12 opacity-20"
            >
              <Gem className="w-12 h-12 text-red-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 left-12 opacity-20"
            >
              <Sparkles className="w-10 h-10 text-amber-400" />
            </motion.div>
          </div>

          {/* Banner Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mb-3"
              >
                <Flame className="w-6 h-6 text-red-400" />
                <span className="text-red-300 text-[10px] uppercase tracking-[0.3em] font-bold">
                  World's Finest
                </span>
                <Flame className="w-6 h-6 text-red-400" />
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-serif font-bold text-white mb-2"
              >
                Masters of <span className="bg-gradient-to-r from-red-400 via-red-500 to-amber-400 bg-clip-text text-transparent">Premium Garnet</span> Processing
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/70 text-sm md:text-base max-w-2xl"
              >
                Internationally recognized expertise in processing and exporting high-quality natural Garnet gemstones 
                sourced from the mineral-rich lands of Sri Lanka. <span className="text-red-300 font-semibold">100% Natural · Certified Quality · Global Excellence</span>
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/en/garnets"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 rounded-full font-bold uppercase tracking-wider text-white shadow-lg hover:shadow-red-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Garnet Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </motion.div>
          </div>

          {/* Bottom Border Animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent"
          />
        </div>

        {/* Decorative Sparkle Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-4 -right-4 w-20 h-20 pointer-events-none"
        >
          <Sparkles className="w-full h-full text-red-400/10" />
        </motion.div>
      </motion.div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-amber-500 border-amber-500 text-black font-bold' 
                  : 'border-white/10 text-white/60 hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search gemstones..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pl-12 text-sm text-white focus:outline-none focus:border-amber-500/50 transition-colors"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredGems.map(gem => (
            <GemCard key={gem.id} gem={gem} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredGems.length === 0 && (
        <div className="text-center py-40">
          <p className="text-white/40 text-lg italic">No gemstones found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}