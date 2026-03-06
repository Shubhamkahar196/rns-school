"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-150 w-full overflow-hidden flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: "url('/School.jpg')",
        }}
      >
        {/* Modern Gradient Overlay: Darker on the left/bottom for text contrast */}
        <div className="absolute inset-0 bg-linear-to-r from-blue-950/90 via-blue-900/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-blue-950/80 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-yellow-400 px-4 py-2 rounded-full mb-6"
          >
            <ShieldCheck size={18} />
            <span className="text-sm font-semibold tracking-wide uppercase">CBSE Affiliated • Est. 2005</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Empowering Minds, <br />
            <span className="text-yellow-400 underline decoration-blue-500/50">Shaping Futures.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100 mb-10 max-w-xl leading-relaxed"
          >
            Welcome to <span className="font-bold text-white">RNS Public School</span>, 
            where excellence in education meets holistic development in a nurturing environment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/admission"
              className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-8 py-4 rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] active:scale-95"
            >
              Apply for Admission
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/gallery"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all active:scale-95"
            >
              <Calendar size={20} className="text-yellow-400" />
              Virtual Tour
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator Icon */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-yellow-400 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}