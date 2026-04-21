"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';

const tiers = [
  {
    name: 'Basic',
    price: '$29',
    frequency: '/month',
    description: 'Get started with essentials',
    features: [
      'Gym access 5 days/week',
      'Free locker',
      'Basic classes',
      'Showers',
    ],
    cta: 'Get started',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: '$59',
    frequency: '/month',
    description: 'Everything you need for serious training',
    features: [
      '24/7 gym access',
      'Unlimited classes',
      'Free locker + towel service',
      'Personal training discount',
      'Nutrition coaching',
      'Parking',
      'Guest passes',
    ],
    cta: 'Most Popular',
    mostPopular: true,
  },
  {
    name: 'Elite',
    price: '$99',
    frequency: '/month',
    description: 'VIP membership for dedicated athletes',
    features: [
      '24/7 premium access',
      'Unlimited everything',
      '1 free PT session/month',
      'VIP locker room',
      'Custom programming',
      'Recovery suite access',
      'Private parking',
      'Merchandise discount',
    ],
    cta: 'Go Elite',
    mostPopular: false,
  },
];

export default function MembershipTable() {
  return (
    <section id="membership" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent mb-6"
        >
          Simple Pricing
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Choose the plan that matches your commitment level
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: index * 20 - 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`
                relative group rounded-3xl p-10 border-2 transition-all duration-500
                bg-gray-800/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-gray-600
                ${tier.mostPopular ? 'border-crimson-500 bg-gradient-to-b from-crimson-500/5 shadow-crimson-500/25 ring-2 ring-crimson-500/20' : 'border-gray-700/50 hover:border-gray-600'}
                lg:hover:scale-[1.02]
              `}
            >
              {tier.mostPopular && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-crimson-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg"
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-6">{tier.name}</h3>
                <p className="text-gray-400 mb-8">{tier.description}</p>
                
                <div className="mb-12">
                  <div className="text-5xl font-bold text-white mb-2">{tier.price}</div>
                  <div className="text-2xl text-gray-500">{tier.frequency}</div>
                </div>

                <ul className="space-y-4 mb-12 text-left">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3 group-hover:text-gray-200 transition-colors">
                      <div className="w-2 h-2 bg-crimson-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/payment">
                  <button className={` 
                    w-full py-6 px-8 rounded-2xl font-bold uppercase tracking-wide transition-all duration-300 
                    shadow-xl hover:shadow-2xl transform hover:-translate-y-1 
                    ${tier.mostPopular 
                      ? 'bg-crimson-600 hover:bg-crimson-700 text-white shadow-crimson-500/50' 
                      : 'bg-transparent border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white hover:bg-white/10'
                    }
                  `}>
                    {tier.cta}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
