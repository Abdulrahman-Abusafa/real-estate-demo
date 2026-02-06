"use client";

import { useState } from "react";
import { PROPERTIES } from "@/lib/mockData";
import { MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MapPlaceholder() {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[600px] bg-blue-50 rounded-2xl overflow-hidden border border-gray-200">
      {/* Static Map Background - using a map-like pattern or image */}
      <div 
        className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/46.7,-24.7,10,0/1000x800?access_token=Mocked')] bg-cover bg-center grayscale opacity-80"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }} 
      />
      <div className="absolute inset-0 bg-white/20" />

      {/* Pins */}
      {/* Manually positioning pins for demo purposes */}
      {PROPERTIES.map((property, index) => {
        // Random positions for demo
        const top = 20 + (index * 15) + "%";
        const left = 20 + (index * 20) + "%";

        return (
          <div
            key={property.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ top, left }}
          >
            <button
              onClick={() => setSelectedPropertyId(property.id)}
              className={`relative z-10 flex items-center justify-center px-3 py-1.5 rounded-full shadow-lg transition-transform hover:scale-110 ${
                selectedPropertyId === property.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-900 border border-gray-200"
              }`}
            >
              <span className="text-xs font-bold whitespace-nowrap">{(property.price / 1000)}k</span>
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-primary" />
            </button>
            
            {/* Popover */}
            <AnimatePresence>
            {selectedPropertyId === property.id && (
                <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-white p-2 rounded-xl shadow-xl z-50 pointer-events-auto"
                >
                    <Link href={`/property/${property.id}`} className="block group/link">
                        <div className="h-24 bg-gray-200 rounded-lg mb-2 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={property.images[0] || "/placeholder"} alt={property.title} className="w-full h-full object-cover group-hover/link:scale-105 transition-transform" />
                        </div>
                        <p className="font-bold text-xs truncate group-hover/link:text-primary transition-colors">{property.title}</p>
                        <p className="text-xs text-primary font-bold">{property.price.toLocaleString()} SAR</p>
                    </Link>
                </motion.div>
            )}
            </AnimatePresence>
          </div>
        );
      })}

      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-mono">
        Map View (Mock)
      </div>
    </div>
  );
}
