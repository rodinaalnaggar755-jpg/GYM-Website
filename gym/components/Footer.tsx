'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '../lib/utils';
import React from 'react';

const Footer = () => {
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#classes', label: 'Classes' },
    { href: '#trainers', label: 'Trainers' },
    { href: '#membership', label: 'Membership' },
  ];

  const socialIcons = {
    instagram: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    facebook: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
    twitter: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
  };

  const socialLinks = [
    { href: 'https://instagram.com/elitegym', label: 'Instagram', icon: socialIcons.instagram },
    { href: 'https://facebook.com/elitegym', label: 'Facebook', icon: socialIcons.facebook },
    { href: 'https://twitter.com/elitegym', label: 'Twitter', icon: socialIcons.twitter },
  ];

  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full bg-gray-900/95 border-t border-gray-800 mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent mb-4 block">
              Elite Gym
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Transform your body and mind at Elite Gym. Premium facilities, expert trainers, and a community dedicated to your fitness journey.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href as any}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3 text-gray-400">
                <span className="text-crimson-500 mt-1">📍</span>
                <span>123 Fitness St, New York City, USA</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <span className="text-crimson-500">📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <span className="text-crimson-500">✉️</span>
                <span>hello@elitegym.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <span className="text-crimson-500 mt-1">🕒</span>
                <span>Mon-Fri: 5AM-11PM<br />Sat-Sun: 7AM-9PM</span>
              </li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href as any}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 flex items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-crimson-500/25"
                    aria-label={social.label}
                    style={{ backgroundImage: `url(${social.icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                  >
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-3">Get workout tips & offers!</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-crimson-500 focus:border-transparent flex-1"
                />
                <button className="btn-primary text-sm px-6 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; 2026 Elite Gym. All rights reserved. | Built with <span className="text-crimson-500 font-semibold">Rodina_El Naggar</span></p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
