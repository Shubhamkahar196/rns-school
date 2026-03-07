
"use client";
import { Phone, MessageCircle, Menu, X, GraduationCap } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll for that modern "floating" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admission" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
          scrolled 
            ? "bg-blue-900/90 backdrop-blur-md shadow-lg py-3" 
            : "bg-blue-900"
        } text-white`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-yellow-400 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <GraduationCap className="text-blue-900" size={24} />
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              RNS <span className="text-yellow-400">Public School</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-8 items-center font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative hover:text-yellow-400 transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-yellow-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex gap-3">
            <a
              href="tel:+917275561226"
              className="flex items-center gap-2 bg-white/10 hover:bg-yellow-400 hover:text-black border border-yellow-400/50 px-5 py-2 rounded-full transition-all active:scale-95"
            >
              <Phone size={18} />
              <span className="text-sm font-semibold">Call Us</span>
            </a>

            <a
              href="https://wa.me/7275561226"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-5 py-2 rounded-full shadow-lg shadow-green-900/20 transition-all active:scale-95"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-semibold">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-60 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-70 bg-blue-950 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-8">
            <button onClick={() => setOpen(false)} className="p-2 bg-white/5 rounded-full">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <hr className="border-white/10 my-2" />

            <a
              href="tel:+917275561226"
              className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-4 py-3 rounded-xl font-bold"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="https://wa.me/7275561226"
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-4 py-3 rounded-xl font-bold"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-18"></div>
    </>
  );
}