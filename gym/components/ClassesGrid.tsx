"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

const classes = [
  {
    title: 'Personal Training',
    description: '1-on-1 sessions with certified trainers tailored to your goals.',
    icon: '🏋️',
    features: ['Custom programs', 'Progress tracking', 'Nutrition advice'],
    bg: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Group Classes',
    description: 'High-energy classes for all fitness levels.',
    icon: '🔥',
    features: ['HIIT', 'Strength', 'Cardio', 'Circuit'],
    bg: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Yoga & Mobility',
    description: 'Improve flexibility, reduce stress, enhance recovery.',
    icon: '🧘',
    features: ['Vinyasa', 'Yin', 'Mobility flow', 'Breathwork'],
    bg: 'from-green-500/20 to-teal-500/20',
  },
];

export default function ClassesGrid() {
  return (
    <section id="classes" className="py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6"
        >
          Our Classes
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Choose your path to transformation with our premium class offerings
        </motion.p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {classes.map((cls, index) => (
          <motion.div
            key={cls.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`group relative rounded-3xl p-12 bg-gradient-to-br ${cls.bg} border border-gray-800/50 hover:border-gray-700/80 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent -z-10" />
            
            <motion.div 
              className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {cls.icon}
            </motion.div>
            
            <h3 className="text-4xl font-bold mb-6 group-hover:text-crimson-400 transition-colors">{cls.title}</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">{cls.description}</p>
            
            <ul className="space-y-2 mb-12">
              {cls.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <span className="text-crimson-400 text-lg">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/login">
              <button className="w-full btn-primary group-hover:scale-105">
                Join Class
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
