
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#d4af37]/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 border-2 border-[#d4af37] rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-[#d4af37]">RA</span>
              </div>
              <span className="text-xl font-display font-bold tracking-wider text-[#d4af37]">ROYAL ARABIA</span>
            </Link>
            <p className="text-[#fdf8f3]/60 text-sm leading-relaxed">
              Experience the finest blend of Middle Eastern and International cuisines in an atmosphere of regal elegance and warm hospitality.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all">
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-[#d4af37] font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-[#fdf8f3]/60 hover:text-[#d4af37] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-[#d4af37] font-semibold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 text-sm text-[#fdf8f3]/60">
              <li className="flex items-start">
                <span className="text-[#d4af37] mr-3">📍</span>
                123 Royal Palace Road, Downtown District, City 456789
              </li>
              <li className="flex items-center">
                <span className="text-[#d4af37] mr-3">📞</span>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <span className="text-[#d4af37] mr-3">✉️</span>
                info@royalarabia.com
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-[#d4af37] font-semibold text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-[#fdf8f3]/60">
              <li className="flex justify-between">
                <span>Mon - Thu:</span>
                <span className="text-[#fdf8f3]">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat:</span>
                <span className="text-[#fdf8f3]">11:00 AM - 12:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-[#fdf8f3]">10:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#d4af37]/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-[#fdf8f3]/40">
          <p>© 2024 Royal Arabia Multi Cuisine Restaurant. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#d4af37]">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
