"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import StatsCounter from './StatsCounter';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 pt-16">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        <Image 
              src='/photo-1605296867304-46d5465a13f1.avif'
               alt='Hero Background'
              width={900}
               height={800}
               className=" w-full opacity-0 md:opacity-90  object-cover group-hover:brightness-110 transition-all duration-500"
           />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-6xl mb-8 drop-shadow-2xl leading-tight"
        >
          Transform Your <span className="text-crimson-500">Body</span>
          <br />
          Forge Your <span className="text-crimson-500">Future</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-md md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
        >
          Elite Gym delivers results through premium personal training, 
          high-energy group classes, and expert yoga mobility sessions. 
          Join a community of disciplined athletes committed to transformation.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="#membership" className="btn-primary text-md px-12 py-6 shadow-2xl">
            Join Now
          </Link>
          <Link 
            href="#classes" 
            className="px-12 py-6 border-2 border-gray-600 hover:border-white text-md font-semibold transition-all duration-300 hover:bg-white/10 rounded-full"
          >
            View Classes
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <StatsCounter end={500} suffix="+" label="Members" />
          <StatsCounter end={50} suffix="+" label="Classes Weekly" />
          <StatsCounter end={95} suffix="%" label="Retention Rate" usePercent />
          <StatsCounter end={5} suffix="+" label="Years Experience" />
        </motion.div>
      </div>
    </section>
  );
}
