"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const trainers = [
  {
    name: 'Mike Johnson',
    role: 'Head Coach',
    specialty: 'Strength & Conditioning',
    image: '/photo-1611672585731-fa10603fb9e0.avif',
    rating: 5,
    experience: '8 years',
  },
  {
    name: 'Sarah Chen',
    role: 'Yoga Master',
    specialty: 'Vinyasa & Mobility',
    image: '/photo-1548690312-e3b507d8c110.avif',
    rating: 5,
    experience: '6 years',
  },
  {
    name: 'David Rodriguez',
    role: 'HIIT Specialist',
    specialty: 'High Intensity Training',
    image: '/photo-1696563996353-214a3690bb11.avif',
    rating: 4.9,
    experience: '5 years',
  },
  {
    name: 'Emily Davis',
    role: 'Nutrition Coach',
    specialty: 'Weight Loss & Nutrition',
    image: '/photo-1606902965551-dce093cda6e7.avif',
    rating: 5,
    experience: '4 years',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-32 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6"
        >
          World-Class Trainers
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto"
        >
          Our certified trainers have decades of combined experience and a passion for helping you achieve your goals
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -12, scale: 1.05 }}
            className="group relative rounded-3xl overflow-hidden bg-gray-800/60 backdrop-blur-xl border border-gray-700 hover:border-gray-600 shadow-2xl hover:shadow-3xl transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-62 bg-gradient-to-br from-gray-700 to-gray-800 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <Image 
                src={trainer.image} 
                alt={trainer.name}
                width={900}
                height={800}
                className=" object-cover group-hover:brightness-110 transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center space-x-2 text-sm text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{trainer.name}</h3>
              <p className="text-gray-400 mb-4">{trainer.role}</p>
              <p className="text-lg font-semibold text-crimson-400 mb-6">{trainer.specialty}</p>
              <p className="text-sm text-gray-500 mb-6">{trainer.experience} experience</p>
              <Link href="/payment">
              <button className="w-full py-4 px-6 border border-gray-600 hover:border-white hover:bg-white/10 rounded-2xl font-bold transition-all duration-300 group-hover:scale-105">
                Book Session
              </button>
              </Link>
              
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
