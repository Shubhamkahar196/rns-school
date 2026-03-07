"use client";
import { Phone, Mail, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contactDetails = [
    {
      icon: <Phone className="text-blue-600" size={24} />,
      label: "Call Us",
      value: "+91 99999 99999",
      href: "tel:+919999999999",
    },
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: "Email Us",
      value: "info@rnspublicschool.com",
      href: "mailto:info@rnspublicschool.com",
    },
    {
      icon: <MapPin className="text-blue-600" size={24} />,
      label: "Our Location",
      value: "Main Branch, RNS Road, India",
      href: "https://maps.google.com",
    },
    {
      icon: <Clock className="text-blue-600" size={24} />,
      label: "Office Hours",
      value: "Mon - Sat: 8:00 AM - 3:00 PM",
      href: "#",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-700 font-bold tracking-[0.2em] uppercase text-sm bg-blue-50 px-4 py-2 rounded-full"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-6 leading-tight"
          >
            We’re Here to <span className="text-blue-700 underline decoration-blue-200">Help You.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Cards Grid */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {contactDetails.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-start gap-5 p-6 bg-white border border-slate-100 rounded-4xl hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 relative group"
          >
            {/* Map Frame Decor */}
            <div className="absolute inset-0 bg-blue-200 rounded-[2.5rem] rotate-2 scale-95 group-hover:rotate-0 transition-transform duration-500 opacity-50" />
            
            <div className="relative h-full min-h-100 w-full bg-white rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.123!2d77.2!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v123456789"
                className="absolute inset-0 w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
              
              {/* Floating Map Label */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50">
                  <div className="bg-blue-600 text-white p-2 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">RNS Public School</p>
                    <p className="text-xs text-slate-500">Visit our campus today</p>
                  </div>
                  <ExternalLink size={16} className="text-slate-400 ml-4" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}