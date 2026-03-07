"use client";
import Image from "next/image";
import { School, Users, BookOpen, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: <School size={32} />,
      title: "Modern Infrastructure",
      desc: "Smart labs and digital classrooms designed for the 21st century.",
    },
    {
      icon: <Users size={32} />,
      title: "Expert Educators",
      desc: "Dedicated mentors committed to personalized student growth.",
    },
    {
      icon: <BookOpen size={32} />,
      title: "Holistic Curriculum",
      desc: "A balanced mix of academics, sports, and creative arts.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Row */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image with Decorative Elements */}
          <div className="relative">
            {/* Animated Blobs */}
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
            
            <div className="relative z-10">
              {/* Next.js Image Component */}
              <div className="relative w-full h-135.5 overflow-hidden rounded-[2.5rem] shadow-2xl border-8 border-white">
                <Image
                  src="/School.jpg" 
                  alt="Students at RNS Public School"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Experience Badge */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 md:p-8 rounded-4xl shadow-2xl z-20 border-4 border-white"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-yellow-400">10+</p>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                  Years of Academic<br/>Excellence
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-8">
            <header>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-[0.2em] text-blue-700 uppercase bg-blue-50 rounded-full">
                Welcome to RNS
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1]">
                Nurturing Potential into <span className="text-blue-700">Excellence.</span>
              </h2>
            </header>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                RNS Public School is a premier CBSE affiliated institution. We believe that every child is unique and deserves a learning environment that challenges their intellect while nurturing their soul.
              </p>
              
              <ul className="grid gap-4">
                {[
                  "Foster a culture of curiosity and innovation",
                  "Building strong moral and ethical foundations",
                  "State-of-the-art sports and creative facilities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-semibold text-slate-800">
                    <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={22} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform text-blue-600 group-hover:text-white">
                    {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}