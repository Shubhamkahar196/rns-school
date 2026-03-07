"use client";

import { FormEvent, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  Send,
  CheckCircle,
  User,
  Phone,
  GraduationCap,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

export default function Admission() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    try {
      const response = await axios.post("/api/admission", payload);

      if (response.status === 200) {
        toast.success("Inquiry Sent Successfully!");
        setSubmitted(true);
        form.reset();
      }
    } catch (error: unknown) {
      let errorMsg = "Something went wrong";

      if (axios.isAxiosError(error)) {
        errorMsg = error.response?.data?.message ?? errorMsg;
      }

      toast.error(errorMsg);
      console.error("Axios Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-6 lg:py-24 flex items-center justify-center">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="hidden lg:block space-y-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
            <ShieldCheck size={16} />
            Official Admission Portal 2026
          </div>

          <h1 className="text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1]">
            Empowering the <br />
            <span className="text-blue-700 italic">
              Next Generation.
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-md leading-relaxed">
            Submit your inquiry today and our admissions officer will guide you
            through the journey of excellence at RNS Public School.
          </p>
        </div>

        {/* FORM */}
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/10 p-8 md:p-12 border border-slate-100"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center text-white">
                    <Send size={20} />
                  </div>
                  Admission Inquiry
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* NAME */}
                  <div className="relative">
                    <User className="absolute left-4 top-4 text-slate-400" size={18} />
                    <input
                      required
                      name="name"
                      placeholder="Student Full Name"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all"
                    />
                  </div>

                  {/* PHONE */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-4 text-slate-400" size={18} />
                    <input
                      required
                      type="tel"
                      name="phone"
                      placeholder="Parent Phone Number"
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all"
                    />
                  </div>

                  {/* CLASS */}
                  <div className="relative">
                    <GraduationCap className="absolute left-4 top-4 text-slate-400" size={18} />

                    <select
                      required
                      name="class"
                      defaultValue=""
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all appearance-none text-slate-600 font-medium"
                    >
                      <option value="" disabled>
                        Select Target Class
                      </option>
                      <option>Nursery / LKG</option>
                      <option>Class 1 - 5</option>
                      <option>Class 6 - 8</option>
                      <option>Class 9 - 12</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                    <textarea
                      name="message"
                      placeholder="Any specific questions for us?"
                      rows={3}
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    disabled={loading}
                    className={`w-full py-5 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-3 shadow-xl ${
                      loading
                        ? "bg-slate-400 cursor-not-allowed"
                        : "bg-blue-900 hover:bg-blue-800 active:scale-[0.98] shadow-blue-900/20"
                    }`}
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={22} />
                    ) : (
                      <>
                        Submit Application
                        <Send size={18} />
                      </>
                    )}
                  </button>

                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-blue-50"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                  <CheckCircle size={40} />
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Inquiry Received
                </h2>

                <p className="text-slate-600 mb-8 leading-relaxed">
                  Thank you for your interest in RNS Public School. Our team will
                  review your details and contact you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}