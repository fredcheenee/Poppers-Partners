/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Flame, Utensils, Citrus, MapPin, Phone, Facebook, 
  Star, ArrowRight, ShoppingBag, User, ChevronLeft, ChevronRight,
  Menu, Search, Instagram, Twitter, Youtube, Heart, PlayCircle
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-brand-dark selection:bg-brand-orange selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <MenuCategories />
      <PromoGrid />
      <MasterChefBanner />
      <MobileAppSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-brand-red text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-red">
              <Utensils size={24} strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl tracking-wide font-bold italic">
              POPPERS'
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-display text-sm tracking-wider">
            <a href="#menu" className="hover:text-brand-yellow transition-colors">MENU</a>
            <a href="#about" className="hover:text-brand-yellow transition-colors">ABOUT US</a>
            <a href="#contact" className="hover:text-brand-yellow transition-colors">FIND US</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <User size={24} />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
            <ShoppingBag size={24} />
            <span className="absolute top-0 right-0 bg-white text-brand-red text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
              3
            </span>
          </button>
          <button className="md:hidden p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative bg-brand-red text-white pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-black rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-30"></div>
        <svg className="absolute top-20 right-20 w-32 h-32 text-white opacity-20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl lg:text-7xl font-black uppercase leading-none mb-6">
              Ultimate<br />
              Flavor<br />
              Explosion
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-md leading-relaxed">
              Our pride and joy: hand-breaded and fried perfection in house. 
              10 mouth-watering flavors from sweet honey to inferno spicy!
            </p>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-white hover:text-brand-red transition-all">
              Order Now
            </button>
            
            <div className="flex gap-2 mt-12">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <div className="w-3 h-3 bg-white/40 rounded-full"></div>
              <div className="w-3 h-3 bg-white/40 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop" 
              alt="Bucket of Poppers" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-yellow text-brand-dark font-display font-bold text-xl p-6 rounded-full shadow-lg rotate-12 border-4 border-white">
              <span className="text-3xl block">₱199</span>
              Bucket
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MenuCategories() {
  const categories = [
    { name: "Spicy", icon: "🔥", img: "https://images.unsplash.com/photo-1569691830917-ccb3c1528c24?q=80&w=400&auto=format&fit=crop" },
    { name: "Savory", icon: "🍖", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=400&auto=format&fit=crop" },
    { name: "Sweet", icon: "🍯", img: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?q=80&w=400&auto=format&fit=crop" },
    { name: "Drinks", icon: "🥤", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop" },
    { name: "Combos", icon: "🍟", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <section className="relative -mt-8 mb-20 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="bg-brand-yellow text-brand-dark font-display font-bold text-xl px-12 py-3 rounded-t-2xl shadow-lg uppercase tracking-widest">
            Menu
          </div>
        </div>
        
        <div className="relative group">
          <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 snap-x hide-scrollbar justify-start md:justify-center">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="flex-shrink-0 w-40 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-3 cursor-pointer border border-gray-100 snap-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-orange/20">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" />
                </div>
                <span className="font-display font-bold text-brand-dark uppercase text-sm tracking-wider">
                  {cat.name}
                </span>
              </motion.div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-brand-dark hover:text-brand-red hidden md:block">
            <ChevronLeft />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-brand-dark hover:text-brand-red hidden md:block">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function PromoGrid() {
  return (
    <section className="py-12 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden flex items-center"
          >
            <div className="relative z-10 w-1/2">
              <h3 className="font-display font-black text-3xl uppercase leading-tight mb-2">
                Any Day<br />Offers
              </h3>
              <p className="text-gray-500 text-sm font-bold tracking-wider mb-4">NEW INCREDIBLE TASTE</p>
              <div className="text-brand-orange font-display font-black text-4xl mb-4">
                ₱149
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
                <div className="w-8 h-3 bg-brand-red rounded-full"></div>
                <div className="w-3 h-3 bg-brand-yellow rounded-full"></div>
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-3/5">
               <img 
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop" 
                alt="Burger" 
                className="w-full h-full object-cover object-center mask-image-gradient"
              />
              <div className="absolute top-4 right-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                NEW
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-brand-red rounded-3xl p-8 shadow-xl relative overflow-hidden text-white flex items-center justify-between"
          >
            <div className="relative z-10 w-1/2">
              <h3 className="font-display font-black text-3xl uppercase leading-tight mb-6">
                Find A Store<br />Near You
              </h3>
              <div className="flex gap-2">
                <div className="w-8 h-3 bg-brand-yellow rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
            </div>
            <div className="w-48 h-48 bg-white rounded-full p-2 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
               <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-100">
                 <img 
                  src="https://images.unsplash.com/photo-1569388330292-7a6a841cd2e0?q=80&w=400&auto=format&fit=crop" 
                  alt="Map"
                  className="w-full h-full object-cover opacity-80"
                 />
                 <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-red fill-brand-red" size={32} />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MasterChefBanner() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-12 relative z-10">
              <h2 className="font-display font-black text-4xl lg:text-5xl uppercase leading-none mb-6 text-brand-dark">
                Crispy and<br />
                Fresh Chicken<br />
                Master Chef
              </h2>
              <button className="bg-brand-red text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg shadow-brand-red/30">
                100% Real Chicken
              </button>
            </div>
            <div className="relative h-full min-h-[300px] flex items-center justify-center bg-gray-50">
               {/* Chef Graphic */}
               <div className="absolute inset-0 bg-brand-cream/50"></div>
               <div className="w-64 h-64 bg-brand-yellow rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
               <img 
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop" 
                alt="Chef" 
                className="relative z-10 h-full object-cover mask-image-bottom"
               />
               <div className="absolute top-10 left-10 font-handwriting text-brand-red text-3xl rotate-[-15deg]">
                 Chef<br/>Daniel
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAppSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-yellow rounded-3xl overflow-hidden shadow-xl relative">
          <div className="grid md:grid-cols-2 items-center">
            {/* Phone Mockup Side */}
            <div className="relative h-[500px] flex items-end justify-center bg-gradient-to-b from-brand-red/80 to-brand-red p-8">
              <div className="w-64 h-[90%] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden relative transform translate-y-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop" 
                  alt="App Interface" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="font-display font-bold text-2xl mb-2">Poppers' App</div>
                  <div className="text-sm opacity-80">Order with ease</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute top-20 left-10 bg-white p-3 rounded-2xl shadow-lg"
              >
                <div className="bg-brand-red/10 p-2 rounded-xl">
                  <Utensils className="text-brand-red" />
                </div>
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute bottom-40 right-10 bg-white p-3 rounded-2xl shadow-lg"
              >
                <div className="bg-brand-yellow/20 p-2 rounded-xl">
                  <Flame className="text-brand-orange" />
                </div>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="p-12 text-brand-dark">
              <h2 className="font-display font-black text-4xl lg:text-5xl uppercase leading-tight mb-6 text-white drop-shadow-md">
                Now You Can Place Order From Every Place By Just Downloading <span className="text-brand-red">Poppers Mobile App</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <div className="text-2xl"></div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider">Download on the</div>
                    <div className="font-bold leading-none">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <div className="text-2xl">▶</div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider">Get it on</div>
                    <div className="font-bold leading-none">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-brand-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg relative mt-8">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="User" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <h4 className="font-display font-bold text-xl uppercase">Christine</h4>
              <p className="text-gray-500 text-sm mb-4">I love Poppers Fried Chicken</p>
              <div className="flex justify-center gap-1 text-brand-yellow mb-4">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              <div className="rounded-xl overflow-hidden h-32">
                <img src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=400&auto=format&fit=crop" alt="Food" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-3xl shadow-lg relative mt-8">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full border-4 border-white shadow-md overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" alt="User" />
              </div>
            </div>
            <div className="mt-8 text-center">
              <h4 className="font-display font-bold text-xl uppercase">Joe</h4>
              <p className="text-gray-500 text-sm mb-4">Best spicy chicken in town!</p>
              <div className="flex justify-center gap-1 text-brand-yellow mb-4">
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
                <Star fill="currentColor" size={16} />
              </div>
              <div className="rounded-xl overflow-hidden h-32">
                <img src="https://images.unsplash.com/photo-1569691830917-ccb3c1528c24?q=80&w=400&auto=format&fit=crop" alt="Food" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Video Card */}
          <div className="bg-black rounded-3xl shadow-lg overflow-hidden relative group cursor-pointer h-full min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <h3 className="text-white font-display font-bold text-3xl uppercase leading-tight">
                Get Zinger with 2<br/>Tender Chicken<br/>bites
              </h3>
              <div className="self-center">
                <PlayCircle className="text-white w-16 h-16 opacity-80 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Red Bar */}
      <div className="bg-brand-red py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-red">
              <div className="font-display font-bold text-2xl">P</div>
            </div>
            <span className="font-display font-bold text-2xl">POPPERS' PARTNERS</span>
          </div>
          
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span className="font-bold">+63 927 729 8167</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1 rounded">
                <Phone size={16} />
              </div>
              <span className="font-bold">1(277) 378 9822</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-brand-red transition-colors"><Instagram size={20} /></a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-brand-red transition-colors"><Facebook size={20} /></a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-brand-red transition-colors"><Twitter size={20} /></a>
            <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white hover:text-brand-red transition-colors"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-gray-400 text-sm">About</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Legal Policy</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-gray-400 text-sm">Site Map</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Location</a></li>
                <li><a href="#" className="hover:text-white">Franchise Locations</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-wider text-gray-400 text-sm">Nutrition</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Full Nutrition Guide</a></li>
                <li><a href="#" className="hover:text-white">Food Making Process</a></li>
              </ul>
            </div>
            <div className="opacity-20">
              <Utensils size={120} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

