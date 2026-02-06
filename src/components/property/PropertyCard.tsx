"use client";

import Image from "next/image";
import { Heart, MapPin, BedDouble, Bath, Square, Phone, BadgeCheck } from "lucide-react";
import { Property } from "@/lib/mockData";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

import Link from "next/link";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  // Simplified image handling for Demo: Just use the first image or placeholder
  const mainImage = property.images[0] || "/placeholder";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Link href={`/property/${property.id}`} className="block relative h-64 w-full bg-gray-200 overflow-hidden">
        {/* Placeholder for Next/Image since we don't have real images in src. Using a colored div fallback if image fails or just a gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gray-300 animate-pulse group-hover:scale-105 transition-transform duration-700" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          {property.isTruCheck && (
            <Badge variant="verified" className="bg-emerald-500 text-white border-emerald-600 backdrop-blur-sm shadow-md">
              <BadgeCheck size={12} className="mr-1" />
              TruCheck™
            </Badge>
          )}
          {property.isVerified && !property.isTruCheck && (
             <Badge variant="verified" className="bg-blue-500 text-white border-blue-600 backdrop-blur-sm shadow-md">
             Verified
           </Badge>   
          )}
        </div>

         <div className="absolute top-4 right-4 z-20">
             <button className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors text-gray-700 hover:text-red-500">
                 <Heart size={18} />
             </button>
         </div>

         {/* Bottom Image Info */}
         <div className="absolute bottom-4 left-4 z-20 text-white">
             <p className="text-2xl font-bold">{property.price.toLocaleString()} SAR</p>
         </div>
      </Link>

      {/* Content Section */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
            <div>
                <Link href={`/property/${property.id}`}>
                    <h3 className="font-bold text-gray-900 line-clamp-1 text-lg group-hover:text-primary transition-colors">{property.title}</h3>
                </Link>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="mr-1 text-primary" />
                    {property.location}
                </div>
            </div>
        </div>

        {/* Features Grid */}
        <div className="flex items-center gap-4 my-4 text-gray-600 text-sm">
            <div className="flex items-center gap-1">
                <BedDouble size={16} className="text-gray-400" />
                <span className="font-semibold text-gray-800">{property.bedrooms}</span>
                <span className="text-xs">Beds</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1">
                <Bath size={16} className="text-gray-400" />
                <span className="font-semibold text-gray-800">{property.bathrooms}</span>
                <span className="text-xs">Baths</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <div className="flex items-center gap-1">
                <Square size={16} className="text-gray-400" />
                <span className="font-semibold text-gray-800">{property.area}</span>
                <span className="text-xs">sqm</span>
            </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-2">
             <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                     {/* Agent Avatar mockup */}
                    <div className="w-full h-full flex items-center justify-center bg-primary text-white text-xs">
                        {property.agent.name.charAt(0)}
                    </div>
                 </div>
                 <div className="text-xs">
                     <p className="text-gray-500">Agent</p>
                     <p className="font-medium text-gray-900 line-clamp-1">{property.agent.name}</p>
                 </div>
             </div>
             
             <div className="flex gap-2">
                 <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 hover:text-emerald-700">
                     <Phone size={16} />
                 </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700">
                     <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                         <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.005.54 1.917.923 3.42.923 4.35 0 7.892-4.102 6.55-8.243-1.053-3.253-4.193-4.28-7.164-3.627zm-3.13 2.1c.365 0 .73.18 .865.234.135.054.34.45.698 1.127.357.677.424.9.479.992.054.09.054.217-.035.405-.089.188-.135.253-.262.405-.127.153-.298.306-.414.442-.136.153-.289.315-.127.594.162.279.721 1.18 1.55 1.918.666.595 1.233.793 1.656.972.424.18.677.162.923-.108.244-.27.595-.765.756-1.044.162-.279.433-.234.721-.126.288.108 1.816.855 2.122 1.008.306.153.513.225.585.351.072.126.072.73-.18 1.287-.252.558-1.503 1.161-2.072 1.116-2.287-.179-4.258-2.313-5.59-4.833-.141-2.655 2.16-3.882 2.269-3.931-.108-.252-.252-.864-.343-1.188-.09-.324-.342-.252-.522-.252-.18 0-.468.018-.72.018-.252 0-.666.09-1.017.477-.351.387-1.35 1.323-1.35 3.231 0 1.908 1.395 3.753 1.593 4.023.198.27 2.736 4.185 6.642 5.868 3.96 1.71 3.96 1.143 4.698 1.071.738-.072 1.701-.693 1.944-1.368.243-.675.243-1.251.171-1.368-.072-.117-.27-.189-.567-.333l-1.818-.891c-.297-.144-.495-.072-.576.054-.081.126-.297.513-.423.702-.126.189-.252.216-.486.09-.234-.126-1.512-.558-2.637-1.566-.882-.792-1.332-1.611-1.485-1.926-.153-.315-.018-.468.126-.603.108-.099.198-.198.297-.315.099-.117.18-.243.27-.405.09-.162.045-.297-.018-.423-.063-.126-.567-1.368-.783-1.872-.207-.495-.414-.423-.567-.432-.144-.009-.306-.009-.468-.009z"/>
                     </svg>
                 </Button>
             </div>
        </div>
      </div>
    </motion.div>
  );
}
