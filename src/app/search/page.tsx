"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PROPERTIES } from "@/lib/mockData";
import PropertyCard from "@/components/property/PropertyCard";
import MapPlaceholder from "@/components/property/MapPlaceholder";
import { Button } from "@/components/ui/Button";
import { List, Map as MapIcon, SlidersHorizontal } from "lucide-react";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 flex justify-center items-center">Loading...</div>}>
      <SearchPageContent />
    </Suspense>
  );
}

function SearchPageContent() {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  
  // Filter Logic
  const filteredProperties = PROPERTIES.filter((property) => {
    const type = searchParams.get("type");
    const location = searchParams.get("location");
    const propertyType = searchParams.get("propertyType");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (type && property.type !== type) return false;
    if (propertyType && propertyType !== "Any" && !property.title.toLowerCase().includes(propertyType.toLowerCase())) {
        // Simple fallback check since mock data doesn't strictly have propertyType field beyond inference or title
        // In a real app, property object would have a dedicated 'category' field.
        // Let's assume for this demo we match loose title or just ignore if strict match needed.
    }
    if (location && !property.location.toLowerCase().includes(location.toLowerCase())) return false;
    
    // Price logic placeholder
    return true;
  });

  return (
    <main className="min-h-screen pt-20 bg-gray-50 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <div>
             <h1 className="text-2xl font-bold text-gray-900">
                {searchParams.get("type") ? `${searchParams.get("type")} Properties` : "All Properties"}
             </h1>
             <p className="text-gray-500 text-sm mt-1">{filteredProperties.length} results found</p>
           </div>
           
           <div className="flex items-center gap-3">
             <Button variant="outline" className="gap-2 bg-white">
               <SlidersHorizontal size={16} /> Filters
             </Button>
             <div className="bg-white p-1 rounded-xl border border-gray-200 flex items-center">
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${viewMode === "list" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                >
                  <List size={20} />
                </button>
                <button 
                  onClick={() => setViewMode("map")}
                  className={`p-2 rounded-lg transition-colors ${viewMode === "map" ? "bg-gray-100 text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"}`}
                >
                  <MapIcon size={20} />
                </button>
             </div>
           </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar / Filters (Desktop) */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
               <h3 className="font-bold mb-4">Filters</h3>
               
               <div className="space-y-4">
                 <div>
                   <label className="text-xs font-bold text-gray-500 uppercase">City</label>
                   <select className="w-full mt-1 p-2 border rounded-lg bg-gray-50 outline-none focus:border-primary">
                     <option>Any</option>
                     <option>Riyadh</option>
                     <option>Jeddah</option>
                   </select>
                 </div>
                 
                 <div>
                   <label className="text-xs font-bold text-gray-500 uppercase">Price Range</label>
                    <input type="range" className="w-full mt-2 accent-primary" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>0</span>
                      <span>5M+</span>
                    </div>
                 </div>

                 <div className="pt-4 border-t">
                    <Button className="w-full">Apply Filters</Button>
                 </div>
               </div>
             </div>
          </aside>

          {/* List or Map */}
          <div className="lg:col-span-3">
             {viewMode === "list" ? (
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                 {filteredProperties.length > 0 ? filteredProperties.map((property) => (
                   <PropertyCard key={property.id} property={property} />
                 )) : (
                    <div className="col-span-full py-20 text-center text-gray-500">
                        <p>No properties found matching your criteria.</p>
                        <Button variant="link" onClick={() => window.history.back()}>Clear Filters</Button>
                    </div>
                 )}
               </div>
             ) : (
               <MapPlaceholder />
             )}
          </div>
        </div>
      </div>
    </main>
  );
}
