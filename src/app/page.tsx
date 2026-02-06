"use client";

import { PROPERTIES } from "@/lib/mockData";
import PropertyCard from "@/components/property/PropertyCard";
import SearchBar from "@/components/home/SearchBar";
import { BadgeCheck, Key, Shield, Star, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
           {/* Premium Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30 mix-blend-multiply transition-opacity duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto space-y-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-premium"
          >
             <Star size={14} className="text-accent fill-accent animate-pulse" />
             <span className="text-sm font-medium tracking-wide">#1 Luxury Real Estate in Saudi Arabia</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight"
          >
            Discover True <br />
            <span className="text-gold-gradient">
              Luxury Living
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-blue-50/90 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Exclusive access to verified villas, penthouses, and estates across the Kingdom's most prestigious districts.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 w-full"
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Trust Stats / Brands */}
      <section className="bg-white border-b py-10 relative z-20 -mt-8 mx-4 rounded-xl shadow-premium lg:mx-20">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-around items-center gap-8 text-gray-400 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
           {/* Simple placeholders for partner logos */}
           <span className="text-xl font-bold tracking-widest hover:text-primary transition-colors cursor-default">EMAAR</span>
           <span className="text-xl font-bold tracking-widest hover:text-primary transition-colors cursor-default">ROSHN</span>
           <span className="text-xl font-bold tracking-widest hover:text-primary transition-colors cursor-default">RITUAL</span>
           <span className="text-xl font-bold tracking-widest hover:text-primary transition-colors cursor-default">AL SAEDAN</span>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
               <h2 className="text-4xl font-bold text-primary mb-3">Featured Residences</h2>
               <p className="text-gray-500 text-lg">Handpicked exclusive properties for the discerning buyer</p>
            </div>
            <button className="group flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              View All Properties 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PROPERTIES.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
          
           <div className="mt-12 text-center md:hidden">
            <button className="text-primary font-bold hover:text-accent transition-colors">
              View All Properties &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Value Props / Trust Section */}
      <section className="py-24 bg-white relative overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="container mx-auto px-4 relative z-10">
              <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl font-bold text-primary mb-6">Why Choose SaudiHome?</h2>
                  <p className="text-gray-500 text-lg">We combine cutting-edge technology with traditional hospitality to provide an unmatched real estate journey.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-premium-hover hover:border-accent/20 transition-all duration-300">
                      <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <BadgeCheck size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Verified Listings</h3>
                      <p className="text-gray-500 leading-relaxed">Every property is physically verified by our team. Look for the TruCheck badge for guaranteed authenticity.</p>
                  </div>
                   <div className="text-center group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-premium-hover hover:border-accent/20 transition-all duration-300">
                      <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Shield size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Contracts</h3>
                      <p className="text-gray-500 leading-relaxed">We provide standard unified contracts and secure escrow services to protect your rights.</p>
                  </div>
                   <div className="text-center group p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-premium-hover hover:border-accent/20 transition-all duration-300">
                      <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Key size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct from Owner</h3>
                      <p className="text-gray-500 leading-relaxed">Connect directly with landlords and property management companies. No hidden middleman fees.</p>
                  </div>
              </div>
          </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577083288073-40892c0860a2?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed opacity-10 mix-blend-overlay" />
           <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
           
          <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-5xl font-bold mb-6 font-cairo">List Your Property With Us</h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-xl">Join the Kingdom's fastest-growing premium real estate network.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-1">
                      Start Listing Now
                  </button>
                  <button className="bg-white/5 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                      Learn More
                  </button>
              </div>
          </div>
      </section>
    </main>
  );
}
