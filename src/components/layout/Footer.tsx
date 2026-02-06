"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold font-cairo">SaudiHome</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Your trusted partner in finding the perfect home in Saudi Arabia. We provide verified listings and connect you with top-rated agents.
            </p>
            <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-blue-100 text-sm">
                    <MapPin size={18} className="text-accent" />
                    <span>King Fahd Road, Riyadh, KSA</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100 text-sm">
                    <Phone size={18} className="text-accent" />
                    <span>+966 50 123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100 text-sm">
                    <Mail size={18} className="text-accent" />
                    <span>info@saudihome.sa</span>
                </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Properties</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><Link href="/search?type=Buy" className="hover:text-white transition-colors">Buy Residential</Link></li>
              <li><Link href="/search?type=Rent" className="hover:text-white transition-colors">Rent Residential</Link></li>
              <li><Link href="/search?type=Commercial" className="hover:text-white transition-colors">Commercial</Link></li>
              <li><Link href="/search?propertyType=Land" className="hover:text-white transition-colors">Land / Plots</Link></li>
              <li><Link href="/agents" className="hover:text-white transition-colors">Find an Agent</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Company</h3>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Newsletter</h3>
            <p className="text-blue-100 text-sm mb-4">Subscribe to get the latest property news and market updates.</p>
            <div className="flex flex-col gap-3">
                <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-blue-200/50 outline-none focus:border-accent transition-colors"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200">© 2024 SaudiHome. All rights reserved.</p>
            
            <div className="flex items-center gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-blue-100">
                    <Facebook size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-blue-100">
                    <Twitter size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-blue-100">
                    <Instagram size={18} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all text-blue-100">
                    <Linkedin size={18} />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
