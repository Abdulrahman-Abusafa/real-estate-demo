"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, MapPin, Building2, Wallet, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export default function SearchBar({ dict, lang }: { dict: any, lang: string }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("Villa");
  
  // New State for Filters
  const [priceOpen, setPriceOpen] = useState(false);
  const [bedsOpen, setBedsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [beds, setBeds] = useState("Any");

  const TABS = [
      { id: "Buy", label: dict?.buy || "Buy" }, 
      { id: "Rent", label: dict?.rent || "Rent" }, 
      { id: "Commercial", label: dict?.commercial || "Commercial" }
  ];

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (activeTab) params.set("type", activeTab);
    if (location) params.set("location", location);
    if (propertyType) params.set("propertyType", propertyType);
    if (minPrice) params.set("minPrice", minPrice);
    if (maxPrice) params.set("maxPrice", maxPrice);
    if (beds && beds !== "Any") params.set("beds", beds);
    
    router.push(`/${lang}/search?${params.toString()}`);
  };

  const getPriceLabel = () => {
      if (!minPrice && !maxPrice) return dict?.any_price || "Any Price";
      if (minPrice && !maxPrice) return `> ${parseInt(minPrice)/1000}k`;
      if (!minPrice && maxPrice) return `< ${parseInt(maxPrice)/1000}k`;
      return `${parseInt(minPrice)/1000}k - ${parseInt(maxPrice)/1000}k`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto z-30 relative">
      {/* Tabs */}
      <div className={`flex items-center justify-center md:justify-start gap-2 mb-4 ${lang === 'ar' ? 'flex-row-reverse md:flex-row' : ''}`}>
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
              activeTab === tab.id
                ? "text-white"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-primary rounded-full shadow-lg"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Main Search Box */}
      <div className="bg-white rounded-2xl md:rounded-full p-2 md:p-3 shadow-2xl shadow-black/10 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x rtl:divide-x-reverse divide-gray-100 relative">
        
        {/* Location Input */}
        <div className="flex-1 px-4 py-3 md:py-1 flex items-center gap-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
           <MapPin className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
           <div className="flex flex-col flex-1 text-start">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{dict?.location || "Location"}</span>
             <input 
               type="text" 
               value={location}
               onChange={(e) => setLocation(e.target.value)}
               placeholder={dict?.search_placeholder || "City..."} 
               className="w-full outline-none text-gray-900 font-medium placeholder:text-gray-400 bg-transparent text-start"
             />
           </div>
        </div>

        {/* Property Type */}
        <div className="flex-1 px-4 py-3 md:py-1 flex items-center gap-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
           <Building2 className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
           <div className="flex flex-col flex-1 text-start">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{dict?.property_type || "Property Type"}</span>
             <select 
               value={propertyType}
               onChange={(e) => setPropertyType(e.target.value)}
               className="w-full outline-none text-gray-900 font-medium bg-transparent appearance-none cursor-pointer text-start"
             >
                 <option>Villa</option>
                 <option>Apartment</option>
                 <option>Land</option>
             </select>
           </div>
        </div>

        {/* Price Range Dropdown */}
        <div className="relative flex-1">
            <div 
                onClick={() => { setPriceOpen(!priceOpen); setBedsOpen(false); }}
                className="w-full h-full px-4 py-3 md:py-1 flex items-center gap-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group"
            >
               <Wallet className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                <div className="flex flex-col flex-1 text-start">
                 <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{dict?.price_range || "Price Range"}</span>
                  <div className="text-gray-900 font-medium truncate text-start">{getPriceLabel()}</div>
               </div>
            </div>

            {/* Dropdown Content */}
            <AnimatePresence>
            {priceOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-full md:w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 mt-2 z-50 text-start"
                >
                    <div className="space-y-4">
                        <div>
                            <label className="text-xs text-gray-500">Min Price</label>
                            <input 
                                type="number" 
                                value={minPrice} 
                                onChange={(e) => setMinPrice(e.target.value)}
                                placeholder="0" 
                                className="w-full p-2 border rounded-lg text-sm outline-none focus:border-primary"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500">Max Price</label>
                            <input 
                                type="number" 
                                value={maxPrice} 
                                onChange={(e) => setMaxPrice(e.target.value)}
                                placeholder="Any" 
                                className="w-full p-2 border rounded-lg text-sm outline-none focus:border-primary"
                            />
                        </div>
                        <Button size="sm" onClick={() => setPriceOpen(false)} className="w-full">Done</Button>
                    </div>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
        
        {/* Beds Dropdown */}
        <div className="relative flex-1">
             <div 
                onClick={() => { setBedsOpen(!bedsOpen); setPriceOpen(false); }}
                className="w-full h-full px-4 py-3 md:py-1 flex items-center gap-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group"
             >
               <BedDouble className="text-gray-400 group-hover:text-primary transition-colors" size={20} />
                <div className="flex flex-col flex-1 text-start">
                 <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{dict?.beds_baths || "Beds & Baths"}</span>
                  <div className="text-gray-900 font-medium truncate">{beds === "Any" ? (dict?.any_beds || "Any Beds") : `${beds}+ Beds`}</div>
               </div>
            </div>

             {/* Dropdown Content */}
             <AnimatePresence>
             {bedsOpen && (
                 <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     className="absolute top-full left-0 w-full md:w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-2 mt-2 z-50 grid grid-cols-2 gap-2"
                 >
                     {["Any", "1", "2", "3", "4", "5"].map((num) => (
                         <button
                            key={num}
                            onClick={() => { setBeds(num); setBedsOpen(false); }}
                            className={`p-2 rounded-lg text-sm font-medium transition-colors ${beds === num ? "bg-primary text-white" : "hover:bg-gray-50 text-gray-700"}`}
                         >
                             {num === "Any" ? (dict?.any_beds || "Any") : `${num}+`}
                         </button>
                     ))}
                 </motion.div>
             )}
             </AnimatePresence>
        </div>

        {/* Search Button */}
        <div className="p-1">
          <Button 
            onClick={handleSearch}
            size="lg" 
            className="w-full md:w-auto h-12 md:h-full rounded-xl md:rounded-full px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-lg"
          >
             <Search size={22} className="md:ltr:mr-2 md:rtl:ml-2" />
             <span className="md:inline">{dict?.search_btn || "Search"}</span>
          </Button>
        </div>
      </div>
      
      {/* Overlay to close dropdowns when clicking outside */}
      {(priceOpen || bedsOpen) && (
          <div className="fixed inset-0 z-40 bg-transparent" onClick={() => { setPriceOpen(false); setBedsOpen(false); }} />
      )}
    </div>
  );
}
