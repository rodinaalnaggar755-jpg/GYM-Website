'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '../lib/utils';
import AuthModal from './auth/AuthModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState<'login' | 'signup'>('login');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#classes', label: 'Classes' },
    { href: '#trainers', label: 'Trainers' },
    { href: '#membership', label: 'Membership' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent">
              Elite Gym
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as any}
                className="text-gray-300  hover:text-crimson-500 hover:underline transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>

            ))}
            <div className="flex space-x-4">
              <Link href="/login">
                <button className="px-4 py-4  text-sm font-medium text-gray-300 hover:text-white transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="btn-primary text-sm">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white p-1"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden bg-gray-900 border-t border-gray-800 overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-3 border-t border-gray-700">
            <button 
              onClick={() => { 
                setIsMenuOpen(false);
                setAuthTab('login'); 
                setIsAuthModalOpen(true); 
              }}
              className="w-full text-left px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            >
              Login
            </button>
            <button 
              onClick={() => { 
                setIsMenuOpen(false);
                setAuthTab('signup'); 
                setIsAuthModalOpen(true); 
              }}
              className="w-full mt-2 btn-primary"
            >
              Sign Up
            </button>
          </div>
        </div>
      </motion.div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authTab}
      />
    </motion.nav>
  );
};

export default Navbar;
