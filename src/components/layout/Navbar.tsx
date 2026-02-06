"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, User, PlusCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";
import LoginModal from "@/components/auth/LoginModal";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ lang = 'en' }: { lang: 'en' | 'ar' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguage = () => {
      const newLang = lang === 'en' ? 'ar' : 'en';
      const pathWithoutLocale = pathname.replace(`/${lang}`, '') || '/';
      // Handle root case if replace returns empty string for non-root paths, 
      // but for root `/${lang}`, replace gives empty string, so we default to /
      // Actually strictly: /en/search -> /search. /en -> (empty)
      const targetPath = pathWithoutLocale.startsWith('/') ? pathWithoutLocale : `/${pathWithoutLocale}`;
      
      router.push(`/${newLang}${targetPath === '/' ? '' : targetPath}`);
  };

  const navLinks = [
    { href: `/${lang}/search?type=Buy`, label: lang === 'ar' ? 'شراء' : 'Buy' },
    { href: `/${lang}/search?type=Rent`, label: lang === 'ar' ? 'إيجار' : 'Rent' },
    { href: `/${lang}/search?type=Commercial`, label: lang === 'ar' ? 'تجاري' : 'Commercial' },
    { href: `/${lang}/agents`, label: lang === 'ar' ? 'وكلاء' : 'Find Agent' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`pointer-events-auto transition-all duration-300 ${
            isScrolled 
                ? "bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-full py-3 px-6 w-full max-w-4xl" 
                : "bg-black/20 backdrop-blur-md border border-white/10 rounded-full py-4 px-8 w-full max-w-6xl"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href={`/${lang}`} className="flex items-center gap-2 group">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg shadow-lg transition-colors ${isScrolled ? "bg-primary text-white" : "bg-white text-primary"}`}>
                SH
              </div>
              <span className={`text-lg font-bold font-cairo transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
                SaudiHome
              </span>
            </Link>

            {/* Desktop Links */}
            <div className={`hidden md:flex items-center gap-6 text-sm font-medium transition-colors ${isScrolled ? "text-gray-600" : "text-white/90"}`}>
              {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="hover:text-primary hover:scale-105 transition-all">
                    {link.label}
                  </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button 
                onClick={switchLanguage}
                className={`p-2 rounded-full hover:bg-white/10 transition-colors flex items-center gap-1 ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                <Globe size={18} />
                <span className="text-xs font-bold uppercase">{lang === 'en' ? 'AR' : 'EN'}</span>
              </button>
              
              <button 
                onClick={() => setIsLoginOpen(true)}
                className={`p-2 rounded-full hover:bg-white/10 transition-colors ${isScrolled ? "text-primary" : "text-white"}`}
              >
                <User size={20} />
              </button>

              <Link href={`/${lang}/list-property`}>
                <Button 
                  size="sm"
                  variant={isScrolled ? "primary" : "secondary"} 
                  className="rounded-full px-5 shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-105 transition-all"
                >
                  <PlusCircle size={16} className="ltr:mr-2 rtl:ml-2" />
                  {lang === 'ar' ? 'أضف عقارك' : 'List'}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 rounded-full ${isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay - Full Screen with Blur */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gray-900/90 backdrop-blur-xl flex items-center justify-center"
        >
             <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            
          <div className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-3xl font-bold text-white hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>
                    {link.label}
                </Link>
            ))}
             <button 
                onClick={() => { switchLanguage(); setIsOpen(false); }}
                className="text-xl font-medium text-gray-300 hover:text-white flex items-center justify-center gap-2"
            >
                <Globe size={24} />
                Switch to {lang === 'en' ? 'Arabic' : 'English'}
            </button>
            
            <div className="flex flex-col gap-4 mt-8 w-64 mx-auto">
                <Button onClick={() => { setIsOpen(false); setIsLoginOpen(true); }} variant="outline" className="w-full justify-center border-white/20 text-white hover:bg-white/10">
                    Login
                </Button>
                <Link href={`/${lang}/list-property`} onClick={() => setIsOpen(false)}>
                   <Button className="w-full justify-center bg-accent text-white border-none">
                       {lang === 'ar' ? 'أضف عقارك' : 'List Property'}
                   </Button>
                </Link>
            </div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
