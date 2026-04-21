"use client"

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-32 bg-gradient-to-r from-crimson-600/10 to-red-600/5 border-t border-gray-800 sticky md:bottom-0 lg:static"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-800 shadow-2xl"
        >
          <div className="text-center mb-12">
            <motion.h2 
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent mb-6"
            >
              Free First Session
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to transform? Claim your FREE first session today.
              Limited spots available.
            </p>
          </div>
</motion.div>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 my-4 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300"
                placeholder="John Doe"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300"
                placeholder="john@example.com"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Phone (optional)
              </label>
              <input
                type="tel"
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Tell us about your goals
              </label>
              <textarea
                rows={4}
                className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 resize-vertical"
                placeholder="I want to lose 20lbs, build muscle, improve endurance..."
              />
            </motion.div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="md:col-span-2 btn-primary text-xl py-8 shadow-2xl hover:shadow-3xl font-bold uppercase tracking-wider"
            >
              {submitted ? 'Sending...' : 'Claim Free Session →'}
            </motion.button>
          </form>

          {submitted && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="md:col-span-2 mt-8 p-8 bg-emerald-500/20 border border-emerald-500/50 rounded-3xl text-center"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2 text-emerald-400">Session Booked!</h3>
              <p className="text-emerald-300">We'll contact you within 24 hours to schedule your free session.</p>
            </motion.div>
          )}
        </div>
      </motion.section>
      
    
  
);
}

    