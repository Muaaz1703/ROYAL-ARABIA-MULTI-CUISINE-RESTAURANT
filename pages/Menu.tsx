
import React, { useState } from 'react';
import { MenuCategory } from '../types';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'All'>('All');
  
  const categories = ['All', ...Object.values(MenuCategory)];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <span className="text-[#d4af37] uppercase tracking-[0.4em] font-semibold text-sm">Selection of Flavors</span>
        <h1 className="font-display text-5xl md:text-7xl text-[#fdf8f3] mt-4 mb-8">The Royal Menu</h1>
        <p className="text-[#fdf8f3]/60 max-w-2xl mx-auto font-light text-lg">
          Explore our carefully curated selection of appetizers, traditional Arabic specialties, and international favorites.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-y border-[#d4af37]/10 py-6 mb-16">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex justify-center items-center space-x-4 md:space-x-8 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 relative group ${activeCategory === cat ? 'text-[#d4af37]' : 'text-[#fdf8f3]/60 hover:text-[#fdf8f3]'}`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-[2px] bg-[#d4af37]"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 group">
              <div className="w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden rounded-lg shadow-xl border border-[#d4af37]/10 group-hover:border-[#d4af37]/40 transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex-grow space-y-3 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl text-[#fdf8f3] group-hover:text-[#d4af37] transition-colors">{item.name}</h3>
                  <div className="hidden sm:block flex-grow border-b border-dotted border-[#d4af37]/30 mx-4 h-[1px]"></div>
                  <span className="text-[#d4af37] font-display font-bold text-xl">{item.price}</span>
                </div>
                <p className="text-[#fdf8f3]/50 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#fdf8f3]/40 uppercase tracking-widest italic">No items found in this category.</p>
          </div>
        )}
      </div>

      {/* Note */}
      <div className="max-w-4xl mx-auto px-4 mt-24 text-center border-t border-[#d4af37]/10 pt-12">
        <p className="text-xs text-[#fdf8f3]/40 tracking-widest leading-loose">
          * Please inform our staff of any food allergies or special dietary requirements. <br />
          All prices are subject to local taxes and a 10% service charge.
        </p>
      </div>
    </div>
  );
};

export default Menu;
