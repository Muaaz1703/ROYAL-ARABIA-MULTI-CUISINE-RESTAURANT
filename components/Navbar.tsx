
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 border-2 border-[#d4af37] rounded-full flex items-center justify-center group-hover:bg-[#d4af37] transition-all">
              <span className="font-display font-bold text-[#d4af37] group-hover:text-[#0a0a0a]">RA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-bold tracking-wider text-[#d4af37]">ROYAL ARABIA</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#fdf8f3]/60">Multi Cuisine Restaurant</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-[#d4af37] transition-colors relative group ${location.pathname === link.path ? 'text-[#d4af37]' : 'text-[#fdf8f3]/80'}`}
              >
                {link.name}
                <span className={`absolute bottom-[-4px] left-0 h-[1px] bg-[#d4af37] transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-2 bg-[#d4af37] text-[#0a0a0a] font-semibold text-sm rounded hover:bg-[#b8932d] transition-all transform hover:scale-105">
              Book a Table
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#d4af37] hover:text-[#fdf8f3] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-[#0a0a0a] border-b border-[#d4af37]/20 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium uppercase tracking-widest text-[#fdf8f3] hover:text-[#d4af37] hover:bg-[#d4af37]/10"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full px-3 py-4 text-base font-bold uppercase tracking-widest text-[#0a0a0a] bg-[#d4af37]"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
