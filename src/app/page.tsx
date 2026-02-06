import { PROPERTIES } from "@/lib/mockData";
import PropertyCard from "@/components/property/PropertyCard";
import SearchBar from "@/components/home/SearchBar";
import { BadgeCheck, Key, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* Simplified Background Handling for Demo */}
        <div className="absolute inset-0 bg-gray-900">
           {/* Placeholder for Hero Image - In a real app use standard Next/Image */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto space-y-6 pt-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm">
             <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
             <span>#1 Real Estate Platform in Saudi Arabia</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl/tight font-bold text-white tracking-tight">
            Find Your Home, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Direct & Verified
            </span>
          </h1>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Browse thousands of verified properties in Riyadh, Jeddah, and Dammam.
          </p>

          <div className="pt-8 w-full">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Trust Stats / Brands */}
      <section className="bg-white border-b py-12">
        <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 text-gray-400 grayscale opacity-70">
           {/* Simple placeholders for partner logos */}
           <span className="text-xl font-bold">EMAAR</span>
           <span className="text-xl font-bold">DAR AL ARKAN</span>
           <span className="text-xl font-bold">ROSHN</span>
           <span className="text-xl font-bold">AL SAEDAN</span>
           <span className="text-xl font-bold">RETAL</span>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
               <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Properties</h2>
               <p className="text-gray-500">Handpicked exclusive properties for you</p>
            </div>
            <button className="text-primary font-semibold hover:underline hidden md:block">
              View All Properties &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
           <div className="mt-8 text-center md:hidden">
            <button className="text-primary font-semibold hover:underline">
              View All Properties &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Value Props / Trust Section */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
              <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose SaudiHome?</h2>
                  <p className="text-gray-500">We are the most trusted real estate platform in the Kingdom.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                  <div className="text-center space-y-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 mx-auto bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                          <BadgeCheck size={32} />
                      </div>
                      <h3 className="text-xl font-bold">Verified Listings</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">Every property is physically verified by our team. Look for the TruCheck badge.</p>
                  </div>
                   <div className="text-center space-y-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                          <Shield size={32} />
                      </div>
                      <h3 className="text-xl font-bold">Safe Transactions</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">We ensure safely for all parties with our secure escrow services.</p>
                  </div>
                   <div className="text-center space-y-4 p-6 rounded-2xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
                      <div className="w-16 h-16 mx-auto bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                          <Key size={32} />
                      </div>
                      <h3 className="text-xl font-bold">Direct from Owner</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">Connect directly with landlords and property owners. No hidden fees.</p>
                  </div>
              </div>
          </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577083288073-40892c0860a2?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-fixed opacity-10 mix-blend-overlay" />
          <div className="container mx-auto px-4 relative z-10 text-center">
              <h2 className="text-4xl font-bold mb-6">List Your Property With Us</h2>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Join thousands of landlords and agents who trust SaudiHome to sell and rent their properties fast.</p>
              <div className="flex justify-center gap-4">
                  <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      Start Listing
                  </button>
                  <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                      Learn More
                  </button>
              </div>
          </div>
      </section>
    </main>
  );
}
