'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  Briefcase, 
  Globe, 
  Send, 
  Loader2, 
  Sparkles,
  Calendar,
  Clock
} from 'lucide-react';

export default function HireMeSection() {
  // Form State
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Freelance Project',
    message: ''
  });
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "thekrishdshahbhs@gmail.com";

  // Validate form fields
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error for that field if it exists
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request (1.5s delay)
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setForm({ name: '', email: '', subject: 'Freelance Project', message: '' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hire-me" className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16 scroll-mt-24">
      {/* Header section with animations */}
      <div className="text-center mb-12 space-y-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-mono font-semibold"
        >
          <Sparkles size={12} className="animate-spin-slow" />
          COLLABORATE WITH ME
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-extrabold text-3xl md:text-5xl text-slate-950 dark:text-white tracking-tight"
        >
          Let’s Build Something <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">Exceptional</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto"
        >
          Have an exciting project, freelance contract, or internship opportunity? Drop me a message and let's start co-creating.
        </motion.p>
      </div>

      {/* Main Content Grid inside a Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-slate-100/60 dark:bg-slate-950/45 backdrop-blur-2xl border border-black/10 dark:border-white/10 rounded-[2.5rem] p-6 md:p-12 relative shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch overflow-hidden"
      >
        {/* Decorative background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

        {/* LEFT COLUMN: Contact Form (Col-span 7) */}
        <div className="relative z-10 lg:col-span-7 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleInputChange}
                      className={`bg-black/[0.03] dark:bg-white/[0.03] border ${
                        errors.name ? 'border-red-500/50 focus:ring-red-500/30' : 'border-black/10 dark:border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30'
                      } outline-none rounded-2xl px-4 py-3.5 text-sm transition-all text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-4 w-full`}
                    />
                    {errors.name && (
                      <span className="text-xs font-medium text-red-500 font-sans block pl-1">{errors.name}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleInputChange}
                      className={`bg-black/[0.03] dark:bg-white/[0.03] border ${
                        errors.email ? 'border-red-500/50 focus:ring-red-500/30' : 'border-black/10 dark:border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30'
                      } outline-none rounded-2xl px-4 py-3.5 text-sm transition-all text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-4 w-full`}
                    />
                    {errors.email && (
                      <span className="text-xs font-medium text-red-500 font-sans block pl-1">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject / Inquiry Type */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Inquiry Type
                  </label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className="bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30 focus:ring-4 outline-none rounded-2xl px-4 py-3.5 text-sm transition-all text-slate-950 dark:text-white placeholder:text-slate-400 w-full appearance-none cursor-pointer"
                    >
                      <option value="Freelance Project" className="bg-slate-100 dark:bg-slate-950">Freelance Project / Contract</option>
                      <option value="Internship" className="bg-slate-100 dark:bg-slate-950">Internship / Co-op</option>
                      <option value="Full-time Role" className="bg-slate-100 dark:bg-slate-950">Full-time Opportunity</option>
                      <option value="General Inquiry" className="bg-slate-100 dark:bg-slate-950">General Collaboration</option>
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                      {/* Down arrow icon */}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                </div>

                {/* Message / Description */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Project details & Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project requirements, scope, timelines, or role details..."
                    value={form.message}
                    onChange={handleInputChange}
                    className={`bg-black/[0.03] dark:bg-white/[0.03] border ${
                      errors.message ? 'border-red-500/50 focus:ring-red-500/30' : 'border-black/10 dark:border-white/10 focus:border-blue-500/50 focus:ring-blue-500/30'
                    } outline-none rounded-2xl px-4 py-3.5 text-sm transition-all text-slate-950 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:ring-4 w-full resize-none`}
                  />
                  {errors.message && (
                    <span className="text-xs font-medium text-red-500 font-sans block pl-1">{errors.message}</span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-slate-950 hover:bg-blue-600 text-white dark:bg-white dark:hover:bg-blue-500 dark:text-slate-950 dark:hover:text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] disabled:opacity-50 select-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4.5 h-4.5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4.5 h-4.5" />
                      Send Message
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center text-center p-8 border border-green-500/10 dark:border-green-500/20 bg-green-500/5 dark:bg-green-500/5 rounded-3xl space-y-5"
              >
                <div className="h-14 w-14 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center border border-green-500/20">
                  <Check size={28} className="stroke-[3]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out! I've received your query and will get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2.5 bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold rounded-xl hover:bg-black/[0.08] dark:hover:bg-white/[0.08] transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: Info Cards / Details (Col-span 5) */}
        <div className="relative z-10 lg:col-span-5 flex flex-col justify-between gap-6">
          
          {/* Availability Status Card */}
          <div className="p-6 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between gap-6 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all">
            <div className="space-y-4">
              
              {/* Pulsing indicator */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400">
                  Open for opportunities
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-950 dark:text-white font-display">
                Freelancing & Internships
              </h3>
              
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                I am actively seeking part-time or freelance contracts, as well as software engineering internship positions. Let's design and build production-grade tools, models, and apps together.
              </p>
            </div>

            {/* Badges list */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-black/5 dark:border-white/5 flex items-center gap-2.5">
                <div className="text-blue-500 dark:text-blue-400 bg-blue-500/10 p-1.5 rounded-lg">
                  <Briefcase size={14} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-mono">ROLE TYPE</div>
                  <div className="text-[11px] font-bold text-slate-950 dark:text-white">Contract/Intern</div>
                </div>
              </div>

              <div className="p-3 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-black/5 dark:border-white/5 flex items-center gap-2.5">
                <div className="text-purple-500 dark:text-purple-400 bg-purple-500/10 p-1.5 rounded-lg">
                  <Globe size={14} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 font-mono">LOCATION</div>
                  <div className="text-[11px] font-bold text-slate-950 dark:text-white">Remote / Earth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Details Card */}
          <div className="p-6 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl flex flex-col justify-between gap-5 hover:border-black/10 dark:hover:border-white/10 hover:bg-black/[0.04] dark:hover:bg-white/[0.04] transition-all">
            
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Direct Communication
              </h4>

              {/* Email Copier */}
              <div className="relative group/email flex items-center justify-between p-3.5 bg-white/55 dark:bg-slate-900/55 rounded-2xl border border-black/5 dark:border-white/5 gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail size={16} className="text-slate-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-mono text-slate-700 dark:text-slate-300 truncate select-all">
                    {emailAddress}
                  </span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-black/[0.03] dark:hover:bg-white/[0.03] rounded-lg transition-all active:scale-90 flex-shrink-0"
                  title="Copy Email"
                >
                  {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Quick response highlights */}
            <div className="flex flex-col gap-2 pt-1.5 border-t border-black/5 dark:border-white/5">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Clock size={13} className="text-slate-400" />
                <span>Response time: Within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Calendar size={13} className="text-slate-400" />
                <span>Working hours: GMT+5:30 (flexible)</span>
              </div>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
