"use client";

import { useState } from "react";
import { PROPERTIES } from "@/lib/mockData";
import PropertyCard from "@/components/property/PropertyCard";
import SearchBar from "@/components/home/SearchBar";
import { BadgeCheck, Shield, ArrowRight, TrendingUp, Users, Phone } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomeContent({ dict, lang }: { dict: any, lang: string }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);   
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); 
  
  const [hero1Error, setHero1Error] = useState(false);
  const [hero2Error, setHero2Error] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* 1. Levitating Split Hero */}
      <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden mesh-gradient">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20 pt-32 pb-20">
            {/* Left: Typography */}
            <div className="space-y-8 text-center lg:text-left">
                <motion.div 
                    initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                     <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm font-medium tracking-wide">{dict.hero.badge}</span>
                    </div>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]"
                >
                    {dict.hero.title_prefix} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                        {dict.hero.title_suffix}
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-blue-100/80 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed"
                >
                    {dict.hero.subtitle}
                </motion.p>
                
                <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="p-1 glass-card rounded-3xl mt-8">
                       <SearchBar dict={dict.search_bar} lang={lang} />
                    </div>
                </motion.div>
            </div>

            {/* Right: Levitating Cards */}
            <div className="relative h-[600px] hidden lg:block perspective-1000">
                {/* Floating Card 1 */}
                <motion.div 
                    style={{ y: y1 }}
                    className="absolute top-0 right-0 w-80 z-20"
                    initial={{ opacity: 0, rotate: 6, y: 100 }}
                    animate={{ opacity: 1, rotate: 6, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="glass-card p-3 rounded-3xl transform hover:scale-105 transition-transform duration-500">
                        <div className="h-64 rounded-2xl overflow-hidden relative mb-3 bg-gray-800">
                             {!hero1Error ? (
                                <Image 
                                    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Hero 1" 
                                    fill 
                                    className="object-cover"
                                    onError={() => setHero1Error(true)}
                                />
                             ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                                    <span className="text-white/30 font-bold text-5xl">SH</span>
                                </div>
                             )}
                        </div>
                        <div className="space-y-2 px-2">
                            <div className="flex justify-between text-white">
                                <span className="font-bold">The Heights</span>
                                <span className="text-accent font-bold">5.2M SAR</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                 {/* Floating Card 2 */}
                 <motion.div 
                    style={{ y: y2 }}
                    className="absolute bottom-20 left-10 w-72 z-10"
                    initial={{ opacity: 0, rotate: -6, y: 100 }}
                    animate={{ opacity: 1, rotate: -6, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div className="glass-card p-3 rounded-3xl transform hover:scale-105 transition-transform duration-500 bg-black/40">
                         <div className="h-48 rounded-2xl overflow-hidden relative mb-3 bg-gray-800">
                             {!hero2Error ? (
                                <Image 
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" 
                                    alt="Hero 2" 
                                    fill 
                                    className="object-cover"
                                    onError={() => setHero2Error(true)}
                                />
                             ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
                                    <span className="text-white/30 font-bold text-4xl">SH</span>
                                </div>
                             )}
                        </div>
                         <div className="space-y-2 px-2">
                            <div className="flex justify-between text-white">
                                <span className="font-bold">Sky Gardens</span>
                                <span className="text-accent font-bold">120k SAR</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 2. Bento Grid Trust Section */}
      <section className="py-24 container mx-auto px-4 -mt-20 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
            {/* Large Feature - Verified */}
            <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 md:row-span-2 bg-white rounded-[2rem] shadow-premium p-8 flex flex-col justify-between overflow-hidden relative group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-100" />
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 font-bold shadow-sm group-hover:scale-110 transition-transform duration-500">
                        <BadgeCheck size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{dict.bento.verified_title}</h3>
                    <p className="text-gray-500 max-w-sm">{dict.bento.verified_desc}</p>
                </div>
                
                {/* Detailed UI Representation */}
                <div className="relative h-56 w-full mt-8 rounded-2xl border border-gray-100 shadow-sm bg-gray-50 overflow-hidden flex flex-col group-hover:shadow-md transition-shadow">
                     <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <Shield size={16} />
                             </div>
                             <div className="flex flex-col">
                                <span className="font-bold text-sm text-gray-700">{dict.bento.verification_report}</span>
                                <span className="text-[10px] text-gray-400">{dict.bento.id}: SH-8829-X</span>
                             </div>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {dict.bento.passed}
                        </span>
                     </div>
                     <div className="p-4 space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"><BadgeCheck size={10} className="text-white"/></div> {dict.bento.ownership}</span>
                            <span className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-full" /></span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500 flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"><BadgeCheck size={10} className="text-white"/></div> {dict.bento.inspection}</span>
                            <span className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-full" /></span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                             <span className="text-gray-500 flex items-center gap-2"><div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center"><BadgeCheck size={10} className="text-white"/></div> {dict.bento.location}</span>
                            <div className="flex gap-1">
                                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse delay-75" />
                                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse delay-150" />
                            </div>
                        </div>
                        
                        <div className="pt-2">
                             <div className="w-full bg-gray-100 h-10 rounded-lg flex items-center px-3 gap-2">
                                 <div className="w-6 h-6 rounded bg-white shadow-sm flex items-center justify-center">
                                     <span className="text-[10px] font-bold text-gray-400">PDF</span>
                                 </div>
                                 <div className="flex flex-col gap-1">
                                     <div className="h-2 w-24 bg-gray-200 rounded" />
                                     <div className="h-1.5 w-16 bg-gray-200 rounded" />
                                 </div>
                             </div>
                        </div>
                     </div>
                </div>
            </motion.div>

            {/* Tall Stats */}
            <motion.div 
                 whileHover={{ y: -5 }}
                 className="md:col-span-1 md:row-span-2 bg-primary text-white rounded-[2rem] shadow-premium p-8 flex flex-col relative overflow-hidden group"
            >
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                 
                 {/* Decorative Graph Line */}
                 <div className="absolute top-20 right-0 left-0 h-32 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 100 40" className="w-full h-full fill-none stroke-accent stroke-[0.5]">
                        <path d="M0 30 Q 20 25 40 10 T 80 15 T 100 5" />
                         <path d="M0 35 Q 20 30 40 15 T 80 20 T 100 10" className="opacity-50" />
                    </svg>
                 </div>

                 <div className="relative z-10 bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-auto backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                     <TrendingUp size={24} className="text-accent" />
                 </div>
                 
                 <div className="mt-auto space-y-8 relative z-10">
                     <div>
                         <h4 className="text-5xl font-bold tracking-tight">12k+</h4>
                         <p className="text-blue-200 text-sm font-medium mt-1">{dict.bento.stats_active}</p>
                     </div>
                     <div>
                         <h4 className="text-4xl font-bold tracking-tight text-white/90">8.5k</h4>
                         <p className="text-blue-200 text-sm font-medium mt-1">{dict.bento.stats_families}</p>
                     </div>
                     <div>
                         <div className="flex items-center gap-2">
                             <h4 className="text-4xl font-bold tracking-tight text-white/90">24h</h4>
                             <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/30 animate-pulse">{dict.bento.fast}</span>
                         </div>
                         <p className="text-blue-200 text-sm font-medium mt-1">{dict.bento.stats_time}</p>
                     </div>
                 </div>
            </motion.div>

             {/* Wide Feature - Zero Commission */}
            <motion.div 
                 whileHover={{ y: -5 }}
                 className="md:col-span-1 md:row-span-1 bg-white rounded-[2rem] shadow-premium p-6 flex flex-col justify-center items-center text-center group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full blur-2xl" />
                
                <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-sm">
                        <Users size={28} />
                    </div>
                
                    {/* Avatars */}
                    <div className="flex items-center -space-x-2 mb-3">
                         {[1,2,3].map(i =>(
                             <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i+10})`, backgroundSize: 'cover' }} />
                         ))}
                         <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-500">+2k</div>
                    </div>

                    <h3 className="font-bold text-lg text-gray-900">{dict.bento.owners_title}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-snug">{dict.bento.owners_desc}</p>
                </div>
            </motion.div>

            {/* Small Feature - Support */}
             <motion.div 
                 whileHover={{ y: -5 }}
                 className="md:col-span-1 md:row-span-1 bg-accent rounded-[2rem] shadow-premium p-6 flex flex-col justify-center items-center text-center text-white group relative overflow-hidden"
            >
                 {/* Pulse effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full animate-ping opacity-20" />
                
                <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-12 transition-transform backdrop-blur-sm">
                        <Phone size={28} />
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium mb-3 border border-white/20 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {dict.bento.online}
                    </div>

                    <h3 className="font-bold text-lg">{dict.bento.support_title}</h3>
                </div>
            </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
               <h2 className="text-4xl font-bold text-primary mb-3">{dict.featured.title}</h2>
               <p className="text-gray-500 text-lg">{dict.featured.subtitle}</p>
            </div>
            <button className="group flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
              {dict.featured.view_all}
              <ArrowRight size={20} className={`transform transition-transform ${lang === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
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
            <button className="text-primary font-bold hover:text-accent transition-colors flex items-center justify-center gap-2 mx-auto">
              {dict.featured.view_all_mobile}
               <ArrowRight size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
            </button>
          </div>
        </div>
      </section>

      
      {/* CTA Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577083288073-40892c0860a2?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed opacity-10 mix-blend-overlay" />
           <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
           
          <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-5xl font-bold mb-6 font-cairo">{dict.cta.title}</h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-xl">{dict.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-accent/90 shadow-lg shadow-accent/20 transition-all transform hover:-translate-y-1">
                      {dict.cta.start_btn}
                  </button>
                  <button className="bg-white/5 border border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all">
                      {dict.cta.learn_btn}
                  </button>
              </div>
          </div>
      </section>
    </main>
  );
}
