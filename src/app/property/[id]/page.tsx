"use client";

import { use, useState } from "react";
import { PROPERTIES } from "@/lib/mockData";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MapPin, BedDouble, Bath, Square, Phone, ArrowLeft, Heart, Share2, ShieldCheck, Calendar } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const property = PROPERTIES.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <Link href="/search" className="text-primary hover:underline">Back to Search</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-20 pb-20">
       {/* Sticky Header for Mobile/Navigation */}
       <div className="bg-white border-b sticky top-16 z-20 px-4 py-2 flex items-center justify-between md:hidden">
            <button onClick={() => router.back()} className="p-2 -ml-2 text-gray-600">
                <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
                <button className="p-2 text-gray-600"><Share2 size={20} /></button>
                <button className="p-2 text-gray-600"><Heart size={20} /></button>
            </div>
       </div>

       <div className="container mx-auto px-4 lg:px-8 py-6">
          {/* Breadcrumbs (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link href={`/search?type=${property.type}`} className="hover:text-primary">{property.type}</Link>
              <span>/</span>
              <span className="text-gray-900 line-clamp-1">{property.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                  {/* Gallery */}
                  <div className="space-y-4">
                      <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 group">
                           {/* Placeholder for Main Image */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                           <img 
                                src={property.images[activeImage] || "/placeholder"} 
                                alt={property.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                           />
                           
                           <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                <div className="text-white">
                                    <h1 className="text-2xl md:text-3xl font-bold shadow-black drop-shadow-md">{property.title}</h1>
                                    <div className="flex items-center gap-2 mt-2 text-sm md:text-base font-medium">
                                        <MapPin size={18} />
                                        <span>{property.location}</span>
                                    </div>
                                </div>
                           </div>

                           {property.isTruCheck && (
                            <div className="absolute top-4 left-4">
                                <Badge variant="verified" className="bg-emerald-500 text-white border-emerald-600 px-3 py-1.5 text-sm backdrop-blur-md">
                                    TruCheck™ Verified
                                </Badge>
                            </div>
                           )}
                      </div>
                      
                      {/* Thumbnails mockup */}
                      <div className="flex gap-4 overflow-x-auto pb-2">
                           {[1, 2, 3, 4].map((i) => (
                               <button key={i} className="flex-shrink-0 w-24 h-24 rounded-lg bg-gray-200 overflow-hidden border-2 border-transparent hover:border-primary transition-all">
                                   <div className="w-full h-full bg-gray-300" />
                               </button>
                           ))}
                      </div>
                  </div>

                  {/* Overview */}
                  <div className="bg-white rounded-2xl border p-6 shadow-sm">
                      <h2 className="text-xl font-bold mb-4">Property Overview</h2>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                           <div className="flex flex-col gap-1">
                               <span className="text-gray-500 text-sm flex items-center gap-2"><BedDouble size={16}/> Bedrooms</span>
                               <span className="font-bold text-lg">{property.bedrooms}</span>
                           </div>
                           <div className="flex flex-col gap-1">
                               <span className="text-gray-500 text-sm flex items-center gap-2"><Bath size={16}/> Bathrooms</span>
                               <span className="font-bold text-lg">{property.bathrooms}</span>
                           </div>
                           <div className="flex flex-col gap-1">
                               <span className="text-gray-500 text-sm flex items-center gap-2"><Square size={16}/> Area</span>
                               <span className="font-bold text-lg">{property.area} m²</span>
                           </div>
                           <div className="flex flex-col gap-1">
                               <span className="text-gray-500 text-sm flex items-center gap-2"><Calendar size={16}/> Listed</span>
                               <span className="font-bold text-lg">2 days ago</span>
                           </div>
                      </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white rounded-2xl border p-6 shadow-sm">
                      <h2 className="text-xl font-bold mb-4">Description</h2>
                      <div className="prose text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
                          <p>
                              Experience luxury living in this stunning {property.bedrooms}-bedroom property located in the heart of {property.location}. 
                              This property features modern architecture, high-end finishes, and spacious living areas perfect for families.
                          </p>
                          <p>
                              Features include:
                          </p>
                          <ul className="list-disc pl-5 space-y-1">
                              {property.features.map((f) => (
                                  <li key={f}>{f}</li>
                              ))}
                              <li>Central Air Conditioning</li>
                              <li>Covered Parking</li>
                          </ul>
                      </div>
                  </div>
                  
                  {/* Location Map Placeholder relative */}
                   <div className="bg-white rounded-2xl border p-6 shadow-sm">
                      <h2 className="text-xl font-bold mb-4">Location</h2>
                      <div className="w-full h-64 bg-gray-100 rounded-xl relative overflow-hidden">
                          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-50" />
                          <div className="absolute inset-0 flex items-center justify-center">
                              <Button variant="outline" className="bg-white/90 backdrop-blur">View on Google Maps</Button>
                          </div>
                      </div>
                   </div>
              </div>

              {/* Sidebar / Contact Agent */}
              <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                      {/* Price Card */}
                      <div className="bg-white rounded-2xl border p-6 shadow-sm">
                           <div className="mb-4">
                               <span className="text-sm text-gray-500">Price</span>
                               <div className="text-3xl font-bold text-primary">{property.price.toLocaleString()} <span className="text-lg">SAR</span></div>
                               {property.type === "Rent" && <span className="text-sm text-gray-400">/ year</span>}
                           </div>
                           
                           <div className="space-y-3">
                               <Button className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 h-12 text-lg">
                                   <Phone size={18}/> Call Agent
                               </Button>
                               <Button variant="outline" className="w-full gap-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 h-12 text-lg">
                                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.005.54 1.917.923 3.42.923 4.35 0 7.892-4.102 6.55-8.243-1.053-3.253-4.193-4.28-7.164-3.627zm-3.13 2.1c.365 0 .73.18 .865.234.135.054.34.45.698 1.127.357.677.424.9.479.992.054.09.054.217-.035.405-.089.188-.135.253-.262.405-.127.153-.298.306-.414.442-.136.153-.289.315-.127.594.162.279.721 1.18 1.55 1.918.666.595 1.233.793 1.656.972.424.18.677.162.923-.108.244-.27.595-.765.756-1.044.162-.279.433-.234.721-.126.288.108 1.816.855 2.122 1.008.306.153.513.225.585.351.072.126.072.73-.18 1.287-.252.558-1.503 1.161-2.072 1.116-2.287-.179-4.258-2.313-5.59-4.833-.141-2.655 2.16-3.882 2.269-3.931-.108-.252-.252-.864-.343-1.188-.09-.324-.342-.252-.522-.252-.18 0-.468.018-.72.018-.252 0-.666.09-1.017.477-.351.387-1.35 1.323-1.35 3.231 0 1.908 1.395 3.753 1.593 4.023.198.27 2.736 4.185 6.642 5.868 3.96 1.71 3.96 1.143 4.698 1.071.738-.072 1.701-.693 1.944-1.368.243-.675.243-1.251.171-1.368-.072-.117-.27-.189-.567-.333l-1.818-.891c-.297-.144-.495-.072-.576.054-.081.126-.297.513-.423.702-.126.189-.252.216-.486.09-.234-.126-1.512-.558-2.637-1.566-.882-.792-1.332-1.611-1.485-1.926-.153-.315-.018-.468.126-.603.108-.099.198-.198.297-.315.099-.117.18-.243.27-.405.09-.162.045-.297-.018-.423-.063-.126-.567-1.368-.783-1.872-.207-.495-.414-.423-.567-.432-.144-.009-.306-.009-.468-.009z"/>
                                   </svg>
                                   WhatsApp
                               </Button>
                           </div>
                      </div>

                      {/* Agent Card */}
                      <div className="bg-white rounded-2xl border p-6 shadow-sm flex flex-col items-center text-center">
                           <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-400 mb-3 overflow-hidden">
                                {property.agent.avatar ? 
                                    <Image src={property.agent.avatar} width={80} height={80} alt={property.agent.name} /> : 
                                    property.agent.name.charAt(0)
                                }
                           </div>
                           <h3 className="font-bold text-lg">{property.agent.name}</h3>
                           <p className="text-gray-500 text-sm mb-4">Premier Broker</p>
                           
                           {property.agent.verified && (
                               <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-4">
                                   <ShieldCheck size={14}/> Verified Agent
                               </div>
                           )}

                           <Button variant="ghost" className="w-full text-primary hover:text-primary/80">View Listings</Button>
                      </div>
                  </div>
              </div>
          </div>
       </div>
    </main>
  );
}
