"use client";

import { useState } from "react";
import { X, Mail, Lock, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-20"
          >
            <X size={20} className="text-gray-500" />
          </button>

          <div className="p-8 pb-6">
             <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold text-primary mb-2">
                     {isLogin ? "Welcome Back" : "Create Account"}
                 </h2>
                 <p className="text-gray-500 text-sm">
                     {isLogin ? "Sign in to access your saved searches and properties." : "Join thousands of users finding their dream home."}
                 </p>
             </div>

             <div className="space-y-4">
                 <div className="space-y-1.5">
                     <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email or Phone</label>
                     <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                         <Mail size={18} className="text-gray-400 mr-3" />
                         <input type="text" placeholder="name@example.com" className="bg-transparent border-none outline-none w-full text-base font-medium" />
                     </div>
                 </div>

                 <div className="space-y-1.5">
                     <label className="text-xs font-bold text-gray-500 uppercase ml-1">Password</label>
                     <div className="flex items-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                         <Lock size={18} className="text-gray-400 mr-3" />
                         <input type="password" placeholder="••••••••" className="bg-transparent border-none outline-none w-full text-base font-medium" />
                     </div>
                 </div>
                 
                 {isLogin && (
                     <div className="flex justify-end">
                         <button className="text-sm font-semibold text-primary/80 hover:text-primary">Forgot Password?</button>
                     </div>
                 )}

                 <Button className="w-full text-lg font-bold h-12 shadow-xl shadow-primary/20">
                     {isLogin ? "Sign In" : "Create Account"}
                 </Button>

                 <div className="relative py-4">
                     <div className="absolute inset-0 flex items-center">
                         <div className="w-full border-t border-gray-100"></div>
                     </div>
                     <div className="relative flex justify-center text-xs uppercase">
                         <span className="bg-white px-2 text-gray-400 font-bold tracking-wider">Or continue with</span>
                     </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                     <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium text-sm transition-colors">
                         <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                         Google
                     </button>
                     <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 font-medium text-sm transition-colors">
                         <Phone size={18} className="text-gray-600" />
                         Phone
                     </button>
                 </div>
             </div>
          </div>

          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex justify-center text-sm">
             <span className="text-gray-500">
                 {isLogin ? "Don't have an account?" : "Already have an account?"}
             </span>
             <button 
                 onClick={() => setIsLogin(!isLogin)}
                 className="ml-2 font-bold text-primary hover:underline"
             >
                 {isLogin ? "Sign Up" : "Sign In"}
             </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
