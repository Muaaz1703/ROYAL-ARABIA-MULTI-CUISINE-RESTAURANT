
import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Food' | 'Interior' | 'Events'>('All');
  
  const filteredGallery = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <span className="text-[#d4af37] uppercase tracking-[0.4em] font-semibold text-sm">Visual Splendor</span>
        <h1 className="font-display text-5xl md:text-7xl text-[#fdf8f3] mt-4 mb-8">The Royal Gallery</h1>
        
        {/* Gallery Filter */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {['All', 'Food', 'Interior', 'Events'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-8 py-2 text-xs uppercase tracking-widest border transition-all ${filter === cat ? 'bg-[#d4af37] text-[#0a0a0a] border-[#d4af37]' : 'border-[#d4af37]/30 text-[#fdf8f3]/60 hover:border-[#d4af37]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredGallery.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg break-inside-avoid shadow-lg">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#4a0e0e]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] mb-2 block">{item.category}</span>
                  <h3 className="font-display text-2xl text-[#fdf8f3]">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
