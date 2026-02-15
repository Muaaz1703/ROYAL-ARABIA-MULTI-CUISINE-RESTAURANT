
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your reservation request has been received. We will contact you shortly to confirm.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <span className="text-[#d4af37] uppercase tracking-[0.4em] font-semibold text-sm">Get In Touch</span>
        <h1 className="font-display text-5xl md:text-7xl text-[#fdf8f3] mt-4 mb-8">Contact & Reservations</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Reservation Form */}
          <div className="bg-[#0f0f0f] p-8 md:p-12 rounded-lg border border-[#d4af37]/20 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10"></div>
             
             <h2 className="font-display text-3xl text-[#d4af37] mb-8">Make a Reservation</h2>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#fdf8f3]/60">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-[#fdf8f3] focus:outline-none focus:border-[#d4af37] transition-all rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#fdf8f3]/60">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-[#fdf8f3] focus:outline-none focus:border-[#d4af37] transition-all rounded"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#fdf8f3]/60">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-[#fdf8f3] focus:outline-none focus:border-[#d4af37] transition-all rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#fdf8f3]/60">Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-[#fdf8f3] focus:outline-none focus:border-[#d4af37] transition-all rounded"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#fdf8f3]/60">Time</label>
                    <input
                      type="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-[#fdf8f3] focus:outline-none focus:border-[#d4af37] transition-all rounded"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#fdf8f3]/60">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-[#fdf8f3] focus:outline-none focus:border-[#d4af37] transition-all rounded appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8,10,12].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                    <option value="15+">15+ (Corporate/Event)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#fdf8f3]/60">Special Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about any allergies or special occasions..."
                    className="w-full bg-[#0a0a0a] border border-[#d4af37]/20 px-4 py-3 text-[#fdf8f3] focus:outline-none focus:border-[#d4af37] transition-all rounded resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#d4af37] text-[#0a0a0a] font-bold uppercase tracking-widest hover:bg-[#b8932d] transition-all rounded shadow-lg transform hover:-translate-y-1"
                >
                  Confirm Request
                </button>
             </form>
          </div>

          {/* Contact Details & Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="font-display text-3xl text-[#fdf8f3]">Visit the Palace</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-[#d4af37] uppercase tracking-widest text-xs font-bold">Address</h4>
                  <p className="text-[#fdf8f3]/60 text-sm leading-relaxed">
                    123 Royal Palace Road, Downtown District, <br />
                    City Central, CP 456789
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[#d4af37] uppercase tracking-widest text-xs font-bold">Contact</h4>
                  <p className="text-[#fdf8f3]/60 text-sm leading-relaxed">
                    T: +1 (555) 123-4567 <br />
                    E: reservations@royalarabia.com
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[#d4af37] uppercase tracking-widest text-xs font-bold">Our Location</h4>
              <div className="w-full h-[400px] rounded-lg overflow-hidden border border-[#d4af37]/20 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  title="Royal Arabia Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.0538350172!2d-79.378902!3d43.642566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM4JzMzLjIiTiA3OcKwMjInNDQuMCJX!5e0!3m2!1sen!2sca!4v1625678901234!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="p-8 bg-[#4a0e0e]/10 border border-[#4a0e0e]/30 rounded-lg">
              <h4 className="text-[#4a0e0e] font-display text-xl mb-4">Direct Inquiry</h4>
              <p className="text-[#fdf8f3]/60 text-sm mb-4">For corporate events, weddings, or large parties above 20 people, please email our events coordinator directly at:</p>
              <a href="mailto:events@royalarabia.com" className="text-[#d4af37] font-bold hover:underline">events@royalarabia.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
