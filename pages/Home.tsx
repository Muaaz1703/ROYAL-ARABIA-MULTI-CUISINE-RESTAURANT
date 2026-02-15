
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const featuredDishes = MENU_ITEMS.filter(item => item.isFeatured);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
            alt="Royal Dining Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-1 border border-[#d4af37]/30 rounded-full mb-4 animate-fade-in">
            <span className="text-[#d4af37] text-xs uppercase tracking-[0.4em] font-medium">Fine Dining Reimagined</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#fdf8f3] leading-tight">
            A Journey Through <br />
            <span className="text-[#d4af37] italic">Royal Flavors</span>
          </h1>
          <p className="text-lg md:text-xl text-[#fdf8f3]/80 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
            Experience the exquisite fusion of traditional Arabic spices and global culinary techniques in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
            <Link to="/menu" className="px-10 py-4 bg-[#d4af37] text-[#0a0a0a] font-bold uppercase tracking-widest rounded shadow-2xl hover:bg-[#b8932d] transition-all transform hover:-translate-y-1">
              Explore Menu
            </Link>
            <Link to="/contact" className="px-10 py-4 border border-[#d4af37] text-[#d4af37] font-bold uppercase tracking-widest rounded hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all transform hover:-translate-y-1">
              Reservations
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-[#d4af37]/60 mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#d4af37] to-transparent"></div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[#d4af37]/30"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-[#d4af37]/30"></div>
              <img
                src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=1000"
                alt="Chef Cooking"
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl relative z-10"
              />
            </div>
            <div className="space-y-8">
              <span className="text-[#d4af37] uppercase tracking-[0.3em] font-semibold text-sm">Our Philosophy</span>
              <h2 className="font-display text-4xl md:text-5xl text-[#fdf8f3] leading-tight">
                Crafted with Passion, <br />Served with <span className="text-[#d4af37]">Honor</span>
              </h2>
              <p className="text-[#fdf8f3]/70 text-lg leading-relaxed font-light">
                At Royal Arabia, we believe that food is more than just sustenance—it's a storyteller of heritage and a bridge between cultures. Our chefs hand-pick every spice and ingredient to ensure that every plate served is a masterpiece of flavor and presentation.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="space-y-2">
                  <h4 className="text-[#d4af37] font-bold text-2xl font-display">100%</h4>
                  <p className="text-xs uppercase tracking-widest text-[#fdf8f3]/60">Authentic Ingredients</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[#d4af37] font-bold text-2xl font-display">25+</h4>
                  <p className="text-xs uppercase tracking-widest text-[#fdf8f3]/60">Years of Heritage</p>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-[#d4af37] font-bold uppercase tracking-[0.2em] text-xs hover:tracking-[0.3em] transition-all">
                Learn Our History <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] font-semibold text-sm">Chef's Recommendations</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#fdf8f3] mt-4 mb-16">The Royal Specials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="group relative overflow-hidden rounded-lg bg-[#0a0a0a] border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500">
                <div className="h-80 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37]">{dish.category}</span>
                    <span className="text-[#d4af37] font-display font-bold">{dish.price}</span>
                  </div>
                  <h3 className="text-2xl font-display text-[#fdf8f3] group-hover:text-[#d4af37] transition-colors">{dish.name}</h3>
                  <p className="text-sm text-[#fdf8f3]/60 line-clamp-2">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <Link to="/menu" className="px-10 py-4 border border-[#d4af37]/30 text-[#fdf8f3] hover:bg-[#d4af37] hover:text-[#0a0a0a] hover:border-[#d4af37] transition-all text-sm uppercase tracking-widest font-bold">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 text-8xl font-display text-[#d4af37]">"</div>
          <div className="absolute bottom-10 right-10 text-8xl font-display text-[#d4af37]">"</div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-[#d4af37] uppercase tracking-[0.3em] font-semibold text-sm">Guest Experiences</span>
          <h2 className="font-display text-4xl md:text-5xl text-[#fdf8f3] mt-4 mb-16">What Royalty Says</h2>
          
          <div className="space-y-12">
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.id} className={`${idx !== 0 ? 'hidden md:block opacity-40 hover:opacity-100 transition-opacity' : ''}`}>
                <div className="space-y-8">
                  <p className="text-2xl md:text-3xl font-light italic text-[#fdf8f3]/90 leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-[#d4af37]/30" />
                    <div className="text-left">
                      <h4 className="text-[#d4af37] font-bold uppercase tracking-widest text-sm">{t.name}</h4>
                      <p className="text-[10px] text-[#fdf8f3]/40 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-32 bg-[#4a0e0e] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 space-y-8">
          <h2 className="font-display text-4xl md:text-6xl text-[#fdf8f3]">Ready for a Royal Feast?</h2>
          <p className="text-[#fdf8f3]/80 text-xl max-w-2xl mx-auto font-light">
            Reserve your table now and immerse yourself in an evening of culinary excellence and unparalleled service.
          </p>
          <div className="pt-8">
            <Link to="/contact" className="px-12 py-5 bg-[#d4af37] text-[#0a0a0a] font-bold uppercase tracking-[0.2em] rounded shadow-2xl hover:bg-[#fdf8f3] transition-all transform hover:scale-105 inline-block">
              Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
