"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User, PlusCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import LoginModal from "@/components/auth/LoginModal";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
             <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
               SH
             </div>
             <span className={`text-xl font-bold font-cairo ${isScrolled ? "text-primary" : "text-primary md:text-white"}`}>
               SaudiHome
             </span>
          </Link>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${isScrolled ? "text-gray-600" : "text-white/90"}`}>
            <Link href="/search?type=Buy" className="hover:text-primary transition-colors">
              Buy
            </Link>
            <Link href="/search?type=Rent" className="hover:text-primary transition-colors">
              Rent
            </Link>
            <Link
              href="/search?type=Commercial"
              className="hover:text-primary transition-colors"
            >
              Commercial
            </Link>
            <Link href="/agents" className="hover:text-primary transition-colors">
              Find Agent
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`flex items-center gap-1 text-sm font-medium hover:opacity-80 transition-opacity ${isScrolled ? "text-gray-900" : "text-white"}`}>
               <Globe size={18} />
               <span>AR</span>
            </button>
            
            <button 
              onClick={() => setIsLoginOpen(true)}
              className={`flex items-center gap-2 text-sm font-bold hover:opacity-80 transition-opacity ${isScrolled ? "text-primary" : "text-white"}`}
            >
               <User size={20} />
               Login
            </button>

            <Link href="/list-property">
               <Button 
                variant={isScrolled ? "primary" : "secondary"} 
                className="shadow-lg hover:shadow-xl transition-all"
               >
                 <PlusCircle size={18} className="mr-2" />
                 List Property
               </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 animate-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col gap-6 text-lg font-medium text-gray-800">
            <Link
              href="/search?type=Buy"
              className="border-b border-gray-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Buy
            </Link>
            <Link
              href="/search?type=Rent"
              className="border-b border-gray-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Rent
            </Link>
            <Link
              href="/search?type=Commercial"
              className="border-b border-gray-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Commercial
            </Link>
            <Link
              href="/agents"
              className="border-b border-gray-100 pb-4"
              onClick={() => setIsOpen(false)}
            >
              Find Agent
            </Link>
            
            <div className="flex flex-col gap-4 mt-4">
                <Button 
                  onClick={() => { setIsOpen(false); setIsLoginOpen(true); }}
                  variant="outline" 
                  className="w-full justify-center"
                >
                    <User size={18} className="mr-2" /> Login
                </Button>
                <Link href="/list-property" onClick={() => setIsOpen(false)}>
                   <Button className="w-full justify-center">
                       <PlusCircle size={18} className="mr-2" /> List Property
                   </Button>
                </Link>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
