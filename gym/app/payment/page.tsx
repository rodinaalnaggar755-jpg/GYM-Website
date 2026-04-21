"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { CreditCard, DollarSign, Mail, Lock, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export default function PaymentPage() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-32 px-4 bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent mb-6">
            Payment Methods
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Secure payment options for your membership. All transactions protected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Credit Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-crimson-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-crimson-500/5 to-transparent rounded-3xl -z-10 group-hover:from-crimson-500/10" />
            <div className="text-5xl mb-6">💳</div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-crimson-400">Credit/Debit Cards</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Visa</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Mastercard</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Amex</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Discover</li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">Secure 256-bit SSL encryption</p>
          </motion.div>

          {/* PayPal */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-blue-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl -z-10 group-hover:from-blue-500/10" />
            <div className="text-5xl mb-6">💙</div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-400">PayPal</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>PayPal Balance</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Bank Account</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Cards</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Buy Now Pay Later</li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">Buyer protection guaranteed</p>
          </motion.div>

          {/* Apple Pay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-indigo-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-3xl -z-10 group-hover:from-indigo-500/10" />
            <div className="text-5xl mb-6">🍎</div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-indigo-400">Apple Pay</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Face ID / Touch ID</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Fast checkout</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>iPhone, Mac, Watch</li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">One-tap payment</p>
          </motion.div>

          {/* Google Pay */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-green-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 md:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-3xl -z-10 group-hover:from-green-500/10" />
            <div className="text-5xl mb-6">🤖</div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-green-400">Google Pay</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Fingerprint / Face unlock</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Android & Chrome</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Contactless</li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">Universal payment method</p>
          </motion.div>

          {/* Cash */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="group relative bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-yellow-500/50 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 md:col-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-3xl -z-10 group-hover:from-yellow-500/10" />
            <div className="text-5xl mb-6">💵</div>
            <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-yellow-400">Cash / Check</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Front desk payment</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>No online fees</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span>Monthly billing</li>
            </ul>
            <p className="text-sm text-gray-500 mb-6">Traditional payment option</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-24"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent mb-4">
                Complete Your Payment
              </h2>
              <p className="text-xl text-gray-400">Pro Membership - $59/month</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Card Details
                </label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    className="p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300"
                    placeholder="Card Number"
                  />
                  <input
                    type="text"
                    maxLength={5}
                    className="p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300"
                    placeholder="Expiry"
                  />
                </div>
                <input
                  type="text"
                  maxLength={3}
                  className="w-full p-4 bg-gray-800/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300"
                  placeholder="CVV"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-3 group"
              >
                <CheckCircle className="h-8 w-8 group-hover:rotate-12 transition-transform" />
                Complete Payment 
              </motion.button>
            </form>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-gray-400 mt-12 text-center max-w-2xl mx-auto"
          >
            Secure checkout. 30-day money back guarantee. Cancel anytime.
          </motion.p>
        </motion.div>
      </div>
    </motion.main>
  );
}
