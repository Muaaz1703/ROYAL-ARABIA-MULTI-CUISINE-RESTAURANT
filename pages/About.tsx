
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-[#0a0a0a]">
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="About Banner"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-[#d4af37] uppercase tracking-[0.4em] font-semibold text-sm">Discover Our Legacy</span>
          <h1 className="font-display text-5xl md:text-7xl text-[#fdf8f3] mt-4">The Story of <span className="text-[#d4af37]">Royal Arabia</span></h1>
        </div>
      </section>

      {/* History */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl text-[#fdf8f3]">Two Decades of Culinary Excellence</h2>
            <p className="text-[#fdf8f3]/70 text-lg leading-relaxed font-light">
              Founded in 1998, Royal Arabia started as a small boutique eatery dedicated to serving authentic Yemeni and Saudi dishes. Over the years, we have evolved into a premier multi-cuisine destination, blending the rich heritage of the Arab world with flavors from across the globe.
            </p>
            <p className="text-[#fdf8f3]/70 text-lg leading-relaxed font-light">
              Our vision has always been to provide a "Royal Experience" to every guest, where the hospitality is as warm as our fresh-baked Khaboos and the atmosphere is as inviting as a desert oasis.
            </p>
            <div className="pt-6">
              <div className="p-8 border border-[#d4af37]/20 rounded-lg bg-[#0f0f0f] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full group-hover:bg-[#d4af37]/10 transition-colors"></div>
                <h3 className="font-display text-[#d4af37] text-2xl mb-4">Our Mission</h3>
                <p className="text-[#fdf8f3]/60 italic font-light leading-relaxed">
                  "To bridge cultures through the universal language of food, ensuring every guest departs with the memory of a truly royal feast."
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/abt1/400/600" className="w-full h-full object-cover rounded-lg shadow-2xl" alt="History 1" />
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/abt2/400/400" className="w-full h-64 object-cover rounded-lg shadow-2xl" alt="History 2" />
              <img src="https://picsum.photos/seed/abt3/400/400" className="w-full h-64 object-cover rounded-lg shadow-2xl" alt="History 3" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Chef */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#d4af37] uppercase tracking-[0.4em] font-semibold text-sm">Culinary Mastermind</span>
            <h2 className="font-display text-4xl text-[#fdf8f3] mt-4">The Hands Behind the Flavors</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-[#d4af37] translate-x-4 translate-y-4 rounded-lg -z-10"></div>
                <img
                  src="https://picsum.photos/seed/chef/500/700"
                  alt="Executive Chef"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h3 className="text-[#d4af37] font-display text-3xl">Executive Chef Al-Zahrani</h3>
              <p className="text-[#fdf8f3]/80 text-xl font-light italic">"Cooking is a form of art where the canvas is the plate and the paints are the spices of the world."</p>
              <p className="text-[#fdf8f3]/60 text-lg leading-relaxed font-light">
                With over 30 years of experience in Michelin-starred kitchens across Europe and the Middle East, Chef Al-Zahrani brings a unique perspective to Royal Arabia. His passion lies in deconstructing traditional recipes and rebuilding them with modern flair, creating dishes that are visually stunning and explosion of flavors.
              </p>
              <div className="pt-8 flex space-x-8">
                <div>
                  <h4 className="text-[#d4af37] font-bold text-xl font-display">Award-Winning</h4>
                  <p className="text-xs uppercase tracking-widest text-[#fdf8f3]/40 mt-1">Culinary Excellence</p>
                </div>
                <div>
                  <h4 className="text-[#d4af37] font-bold text-xl font-display">Sustainable</h4>
                  <p className="text-xs uppercase tracking-widest text-[#fdf8f3]/40 mt-1">Farm-to-Table Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
