"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Send, User, Phone, GraduationCap, MessageSquare } from "lucide-react";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const studentClass = e.target.class.value;
    const message = e.target.message.value;

    if (!name || !phone) {
      toast.error("Please fill all required fields");
      setLoading(false);
      return;
    }

    toast.success("Redirecting to WhatsApp...");

    const text = `*New Admission Inquiry* 🏫\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Class:* ${studentClass}\n*Message:* ${message}`;
    const url = `https://wa.me/+918853716250?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setLoading(false);
      e.target.reset(); // Clear form after sending
    }, 1200);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Form Header */}
        <div className="bg-blue-900 p-8 text-white text-center relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full"><circle cx="50" cy="50" r="40" fill="currentColor" /></svg>
          </div>
          <div className="bg-yellow-400 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 rotate-3 shadow-lg">
            <Send className="text-blue-900" size={24} />
          </div>
          <h2 className="text-2xl font-bold">Admission Inquiry</h2>
          <p className="text-blue-200 text-sm mt-1">Get in touch with our admissions team</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                required
                name="name"
                placeholder="Student Full Name"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-black"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 text-black bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Class Input */}
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 text-slate-400" size={18} />
              <input
                name="class"
                placeholder="Seeking Class (e.g. 5th, 10th)"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border text-black border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 text-slate-400" size={18} />
              <textarea
                name="message"
                rows={3}
                placeholder="Any specific questions?"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border text-black border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 resize-none"
              />
            </div>
          </div>

          <button
            disabled={loading}
            className={`group w-full py-4 rounded-xl font-bold text-white transition-all flex items-center justify-center gap-2 shadow-lg ${
              loading 
                ? "bg-slate-400 cursor-not-allowed" 
                : "bg-blue-900 hover:bg-blue-800 active:scale-[0.98] shadow-blue-200"
            }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                Submit Inquiry
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
          
          <p className="text-center text-[10px] text-slate-400 uppercase tracking-widest">
            Typically responds within 24 hours
          </p>
        </form>
      </div>
    </div>
  );
}