/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Flame, Utensils, Citrus, MapPin, Phone, Facebook, Star, ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-dark selection:bg-brand-orange selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white">
                <Utensils size={24} />
              </div>
              <span className="font-display text-2xl text-brand-red tracking-wide">
                Poppers' Partners
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#best-sellers" className="text-brand-dark hover:text-brand-red font-medium transition-colors">Best Sellers</a>
              <a href="#menu" className="text-brand-dark hover:text-brand-red font-medium transition-colors">Menu</a>
              <a href="#contact" className="text-brand-dark hover:text-brand-red font-medium transition-colors">Contact</a>
              <button className="bg-brand-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-orange/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-brand-orange/10 text-brand-orange rounded-full font-bold text-sm mb-6 border border-brand-orange/20">
                🔥 The Hottest Poppers in Town
              </div>
              <h1 className="font-display text-5xl lg:text-7xl leading-tight text-brand-dark mb-6">
                Tikman ang <span className="text-brand-red">Ultimate Flavor</span> Explosion!
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Crispy, juicy, bite-sized chicken poppers in 10 mouth-watering flavors. 
                Mula sa maasim-tamis na orange, hanggang sa apoy ng Inferno!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-brand-red/30 flex items-center justify-center gap-2 group">
                  Order Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-brand-dark border-2 border-brand-dark/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
                  View Menu
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop" 
                  alt="Delicious Chicken Poppers Bowl" 
                  className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
                />
                
                {/* Floating Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-6 -right-6 bg-brand-yellow text-brand-dark p-4 rounded-full shadow-lg font-display text-lg border-4 border-white transform rotate-12"
                >
                  10 Flavors!
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-4 rounded-full shadow-lg font-display text-lg border-4 border-white transform -rotate-12"
                >
                  Crispy & Juicy
                </motion.div>
              </div>
              
              {/* Decorative blob behind image */}
              <div className="absolute inset-0 bg-brand-red rounded-3xl transform rotate-6 scale-105 opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section id="best-sellers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl text-brand-dark mb-4">Our Best Sellers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tatlong best-sellers, tatlong sarap na siguradong babalik-balikan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BestSellerCard 
              title="Blazing Buffalo"
              description="Spicy, tangy, and absolutely addictive."
              image="https://images.unsplash.com/photo-1569691830917-ccb3c1528c24?q=80&w=800&auto=format&fit=crop"
              tag="Spicy"
              color="bg-brand-red"
            />
            <BestSellerCard 
              title="Smokey Barbecue"
              description="Rich, savory, and full of smokey goodness."
              image="https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop"
              tag="Savory"
              color="bg-brand-dark"
            />
            <BestSellerCard 
              title="Honeybee Poppers"
              description="Perfectly sweet with a hint of sour tang."
              image="https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?q=80&w=800&auto=format&fit=crop"
              tag="Sweet & Sour"
              color="bg-brand-yellow"
              textColor="text-brand-dark"
            />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Full Menu</span>
            <h2 className="font-display text-4xl lg:text-5xl text-brand-dark mt-2">
              Piliin ang Iyong Paborito
            </h2>
          </div>

          <div className="space-y-16">
            {/* Spicy Category */}
            <MenuCategory 
              title="Spicy Flavors" 
              icon={<Flame className="w-8 h-8 text-brand-red" />}
              description="Para sa mga mahilig sa anghang!"
            >
              <MenuCard 
                name="Blazing Buffalo" 
                tagline="Classic spicy kick!"
                intensity={2}
              />
              <MenuCard 
                name="Inferno" 
                tagline="Kaya mo bang tikman ang init ng impyerno?"
                intensity={3}
                highlight
              />
              <MenuCard 
                name="Carolina Reaper" 
                tagline="Para lang sa tunay na mandirigma ng anghang!"
                intensity={4}
                warning
              />
            </MenuCategory>

            {/* Savory Category */}
            <MenuCategory 
              title="Savory & Smokey" 
              icon={<Utensils className="w-8 h-8 text-brand-dark" />}
              description="Malinamnam at puno ng flavor."
            >
              <MenuCard 
                name="Smokey Barbecue" 
                tagline="Classic smokey BBQ taste."
              />
              <MenuCard 
                name="Arabians Taste" 
                tagline="Exotic spices and savory goodness."
              />
              <MenuCard 
                name="Hawaiian Delight" 
                tagline="Sweet and savory tropical twist."
              />
              <MenuCard 
                name="Nutty Delight" 
                tagline="Binalot sa creamy, malinamnam, at nutty peanut sauce!"
                highlight
              />
            </MenuCategory>

            {/* Sweet & Sour Category */}
            <MenuCategory 
              title="Sweet & Sour" 
              icon={<Citrus className="w-8 h-8 text-brand-yellow" />}
              description="Tamang balanse ng tamis at asim."
            >
              <MenuCard 
                name="Honeybee" 
                tagline="Sweet, citrusy, and irresistible."
              />
              <MenuCard 
                name="Mango" 
                tagline="Tropical sweetness in every bite."
              />
              <MenuCard 
                name="Orange Zest" 
                tagline="Parang orange juice na kinain, hindi ininom!"
                highlight
              />
            </MenuCategory>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-brand-dark text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl mb-6 text-brand-yellow">
                Visit Us & Satisfy Your Cravings!
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Handa na ba ang taste buds mo? Punta na sa Poppers' Partners Food Hub at tikman ang difference!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Location</h3>
                    <p className="text-gray-300">1090 Negros St., Balic-Balic, Sampaloc, Manila</p>
                    <p className="text-gray-400 text-sm">(Behind Motortrade G. Tuazon)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Call Us</h3>
                    <p className="text-gray-300">0927 729 8167</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Facebook className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">Follow Us</h3>
                    <a href="#" className="text-brand-yellow hover:underline">@popperspartnersfoodhub</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="w-full h-80 bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden relative">
                 {/* Placeholder for map */}
                 <img 
                  src="https://images.unsplash.com/photo-1569388330292-7a6a841cd2e0?q=80&w=1000&auto=format&fit=crop" 
                  alt="Location Map Placeholder" 
                  className="w-full h-full object-cover opacity-50"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-brand-red p-4 rounded-full shadow-xl animate-bounce">
                      <MapPin className="text-white w-8 h-8" />
                    </div>
                 </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-brand-yellow font-display text-xl">Open Daily: 10:00 AM - 9:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Poppers' Partners Food Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function BestSellerCard({ title, description, image, tag, color, textColor = "text-white" }: { title: string, description: string, image: string, tag: string, color: string, textColor?: string }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
    >
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute top-4 left-4 ${color} ${textColor} px-4 py-1 rounded-full text-sm font-bold z-10 shadow-md`}>
          {tag}
        </div>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl text-brand-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-brand-red font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
          Order Now <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}

function MenuCategory({ title, icon, description, children }: { title: string, icon: ReactNode, description: string, children: ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-white rounded-2xl shadow-md">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-3xl text-brand-dark">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}

function MenuCard({ name, tagline, intensity = 0, highlight = false, warning = false }: { name: string, tagline: string, intensity?: number, highlight?: boolean, warning?: boolean }) {
  return (
    <div className={`
      relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg
      ${highlight ? 'bg-white border-brand-orange/30 shadow-md' : 'bg-white/50 border-transparent hover:bg-white'}
      ${warning ? 'bg-red-50 border-red-200' : ''}
    `}>
      {highlight && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          MUST TRY
        </div>
      )}
      
      <div className="flex justify-between items-start mb-3">
        <h4 className={`font-display text-xl ${warning ? 'text-red-700' : 'text-brand-dark'}`}>{name}</h4>
        {intensity > 0 && (
          <div className="flex gap-0.5">
            {[...Array(intensity)].map((_, i) => (
              <Flame key={i} size={14} className="text-brand-red fill-brand-red" />
            ))}
          </div>
        )}
      </div>
      
      <p className={`text-sm leading-relaxed ${warning ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
        "{tagline}"
      </p>
      
      <button className="mt-4 w-full py-2 rounded-xl bg-gray-100 hover:bg-brand-dark hover:text-white text-gray-800 text-sm font-bold transition-colors">
        Add to Order
      </button>
    </div>
  );
}

