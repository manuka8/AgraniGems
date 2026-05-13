'use client';

import { useState } from 'react';
import { gems, Gemstone } from '@/data/gems';
import GemCard from './GemCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

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
    <div className="container mx-auto px-6 py-20">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-gold border-gold text-luxury-black font-bold' 
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
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 pl-12 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors"
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
