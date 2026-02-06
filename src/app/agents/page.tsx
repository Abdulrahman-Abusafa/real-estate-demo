"use client";

import { Button } from "@/components/ui/Button";
import { Search, ShieldCheck, MapPin, Star } from "lucide-react";
import Image from "next/image";

// Mock Agents Data
const AGENTS = [
  { id: 1, name: "Ahmed Al-Saud", company: "Riyadh Homes", location: "Riyadh", properties: 45, rating: 4.9 },
  { id: 2, name: "Sara Khalil", company: "Jeddah Estates", location: "Jeddah", properties: 32, rating: 4.8 },
  { id: 3, name: "Mohammed Ali", company: "Dammam Realty", location: "Dammam", properties: 28, rating: 4.7 },
  { id: 4, name: "Noura Al-Amri", company: "Luxury Living", location: "Riyadh", properties: 15, rating: 5.0 },
  { id: 5, name: "Faisal Bin Laden", company: "Red Sea Properties", location: "Jeddah", properties: 60, rating: 4.9 },
  { id: 6, name: "Layla Hassan", company: "Capital Estate", location: "Riyadh", properties: 22, rating: 4.6 },
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen pt-20 bg-gray-50 pb-20">
      <div className="bg-primary text-white py-12 mb-12">
           <div className="container mx-auto px-4 text-center">
               <h1 className="text-3xl md:text-4xl font-bold mb-4">Find a Trusted Agent</h1>
               <p className="text-blue-100 max-w-xl mx-auto mb-8">Connect with top-rated real estate agents in Saudi Arabia to help you find your dream home.</p>
               
               <div className="max-w-2xl mx-auto bg-white p-2 rounded-xl flex shadow-xl">
                   <div className="flex-1 flex items-center px-4">
                       <Search className="text-gray-400 mr-2" size={20} />
                       <input 
                           type="text" 
                           placeholder="Search by agent name or location..." 
                           className="w-full text-gray-900 outline-none"
                       />
                   </div>
                   <Button>Search Agents</Button>
               </div>
           </div>
      </div>

      <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AGENTS.map((agent) => (
                  <div key={agent.id} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                          <div className="flex gap-4">
                              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-xl font-bold text-gray-500 overflow-hidden">
                                   {/* Placeholder Avatar */}
                                   {agent.name.charAt(0)}
                              </div>
                              <div>
                                  <h3 className="font-bold text-lg text-gray-900">{agent.name}</h3>
                                  <p className="text-gray-500 text-sm">{agent.company}</p>
                              </div>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-1 rounded-md text-sm font-bold">
                              <Star size={14} fill="currentColor" /> {agent.rating}
                          </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                           <div className="bg-gray-50 p-2 rounded-lg text-center">
                               <span className="block text-xl font-bold text-gray-900">{agent.properties}</span>
                               <span className="text-xs text-gray-500">Properties</span>
                           </div>
                           <div className="bg-gray-50 p-2 rounded-lg text-center flex flex-col items-center justify-center">
                               <ShieldCheck size={20} className="text-emerald-500 mb-1" />
                               <span className="text-xs text-gray-500">Verified</span>
                           </div>
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-6">
                          <MapPin size={16} className="mr-2" />
                          {agent.location}, Saudi Arabia
                      </div>

                      <Button variant="outline" className="w-full hover:border-primary hover:text-primary">
                          Contact Agent
                      </Button>
                  </div>
              ))}
          </div>
      </div>
    </main>
  );
}
