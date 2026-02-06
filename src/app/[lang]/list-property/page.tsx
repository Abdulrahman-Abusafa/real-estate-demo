"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Building, MapPin, Camera, FileText } from "lucide-react";
import { motion } from "framer-motion";

const STEPS = [
  { id: 1, title: "Basic Info", icon: Building },
  { id: 2, title: "Location", icon: MapPin },
  { id: 3, title: "Details", icon: FileText },
  { id: 4, title: "Photos", icon: Camera },
];

export default function ListPropertyPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-2">List Your Property</h1>
        <p className="text-gray-500 text-center mb-10">Reach thousands of potential buyers and tenants in minutes.</p>

        {/* Steps */}
        <div className="flex items-center justify-between relative mb-12">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-0" />
            
            {STEPS.map((step) => {
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;
                
                return (
                    <div key={step.id} className="relative z-10 flex flex-col items-center bg-gray-50 px-2">
                        <div 
                            className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                                isActive ? "border-primary bg-primary text-white shadow-lg shadow-primary/30" : 
                                isCompleted ? "border-emerald-500 bg-emerald-500 text-white" : 
                                "border-gray-300 bg-white text-gray-400"
                            }`}
                        >
                            {isCompleted ? <CheckCircle2 size={24} /> : <step.icon size={20} />}
                        </div>
                        <span className={`text-xs font-bold mt-2 uppercase tracking-wide ${isActive ? "text-primary" : "text-gray-400"}`}>
                            {step.title}
                        </span>
                    </div>
                );
            })}
        </div>

        {/* Mock Form Content */}
        <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 min-h-[400px] flex flex-col"
        >
            {currentStep === 1 && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">What are you listing?</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-6 border-2 border-primary rounded-xl bg-blue-50/50 flex flex-col items-center gap-3 hover:bg-blue-50 transition-colors">
                            <span className="font-bold text-primary text-lg">Sell</span>
                            <span className="text-sm text-gray-500">I want to sell my property</span>
                        </button>
                         <button className="p-6 border-2 border-gray-200 rounded-xl hover:border-gray-300 flex flex-col items-center gap-3 transition-colors">
                            <span className="font-bold text-gray-700 text-lg">Rent</span>
                            <span className="text-sm text-gray-500">I want to rent out my property</span>
                        </button>
                    </div>
                </div>
            )}
            
            {currentStep === 2 && (
                <div className="space-y-6">
                     <h2 className="text-xl font-bold">Where is it located?</h2>
                     <div className="space-y-4">
                         <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 font-medium">
                             Map Picker Mockup
                         </div>
                         <input type="text" placeholder="City" className="w-full p-4 bg-gray-50 rounded-xl outline-none border focus:border-primary" />
                         <input type="text" placeholder="District / Neighborhood" className="w-full p-4 bg-gray-50 rounded-xl outline-none border focus:border-primary" />
                     </div>
                </div>
            )}

            {currentStep === 3 && (
                 <div className="space-y-6">
                     <h2 className="text-xl font-bold">Property Details</h2>
                     <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Bedrooms" className="w-full p-4 bg-gray-50 rounded-xl outline-none border focus:border-primary" />
                        <input type="number" placeholder="Bathrooms" className="w-full p-4 bg-gray-50 rounded-xl outline-none border focus:border-primary" />
                        <input type="number" placeholder="Size (sqm)" className="w-full p-4 bg-gray-50 rounded-xl outline-none border focus:border-primary" />
                        <input type="number" placeholder="Price (SAR)" className="w-full p-4 bg-gray-50 rounded-xl outline-none border focus:border-primary" />
                     </div>
                     <textarea placeholder="Description" rows={4} className="w-full p-4 bg-gray-50 rounded-xl outline-none border focus:border-primary" />
                </div>
            )}

            {currentStep === 4 && (
                <div className="space-y-6">
                    <h2 className="text-xl font-bold">Upload Photos</h2>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl h-64 flex flex-col items-center justify-center text-gray-400 gap-4 hover:border-primary hover:text-primary transition-colors cursor-pointer bg-gray-50">
                        <Camera size={48} />
                        <span className="font-medium">Drag & Drop photos here</span>
                    </div>
                </div>
            )}

            <div className="mt-auto pt-8 flex justify-between">
                <Button 
                    variant="ghost" 
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className="text-gray-500"
                >
                    Back
                </Button>
                <Button 
                    onClick={() => {
                        if (currentStep < 4) setCurrentStep(currentStep + 1);
                        else alert("Property Submitted (Mock)");
                    }}
                    className="px-8 shadow-lg shadow-primary/20"
                >
                    {currentStep === 4 ? "Submit Listing" : "Continue"}
                </Button>
            </div>
        </motion.div>
      </div>
    </main>
  );
}
