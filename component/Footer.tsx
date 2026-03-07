"use client";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Admission", href: "/admission" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-[#020617] text-white mt-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          
          {/* Column 1: Identity */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black tracking-tighter flex items-center gap-2">
              <span className="w-2 h-8 bg-blue-600 rounded-full inline-block" />
              RNS PUBLIC SCHOOL
            </h2>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              A premier CBSE affiliated institution dedicated to providing quality 
              education and nurturing holistic development for the leaders of tomorrow.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500 mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white text-sm font-medium transition-all duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Reach Out */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
              Reach Out
            </h3>
            <div className="space-y-6">
              <div className="group">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-slate-200 text-sm font-medium transition-colors group-hover:text-blue-400">
                  +91 99999 99999
                </p>
              </div>

              <div className="group">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-slate-200 text-sm font-medium transition-colors group-hover:text-blue-400">
                  info@rnspublicschool.com
                </p>
              </div>

              <div className="group">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Address</p>
                <p className="text-slate-200 text-sm font-medium leading-relaxed">
                  RNS Public School, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
            © {currentYear} RNS PUBLIC SCHOOL
          </p>
          
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-widest text-blue-500 animate-pulse">Admissions Open</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}