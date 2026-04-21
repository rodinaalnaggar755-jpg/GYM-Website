"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, User, Check, X, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import path from 'path';

// Schemas
const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

type LoginFormData = z.infer<typeof loginSchema>;
type SignupFormData = z.infer<typeof signupSchema>;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'login' | 'signup';
}

export default function AuthModal({ isOpen, onClose, initialTab = 'login' }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(initialTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Login form
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  // Signup form
  const signupForm = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  useEffect(() => {
    if (!isOpen) {
      // Reset forms and state when closing
      loginForm.reset();
      signupForm.reset();
      setSubmitStatus('idle');
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const onSubmitLogin = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Login:', data);
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitSignup = async (data: SignupFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Signup:', data);
      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
      }, 1500);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-[1000] p-4"
          >
            <motion.div className="w-full max-w-md bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="p-8 border-b border-gray-800 text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-crimson-500 to-red-600 bg-clip-text text-transparent mb-2">
                  {activeTab === 'login' ? 'Welcome Back' : 'Join Elite Gym'}
                </h2>
                <p className="text-gray-400">
                  {activeTab === 'login' 
                    ? 'Sign in to your account' 
                    : 'Create your account to get started'
                  }
                </p>
              </div>

              {/* Tabs */}
              <div className="px-8 py-6 border-b border-gray-800">
                <div className="flex bg-gray-800/50 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setActiveTab('login')}
                    className={cn(
                      'flex-1 py-3 px-6 font-semibold transition-all duration-300',
                      activeTab === 'login'
                        ? 'bg-gradient-to-r from-crimson-500 to-red-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    )}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setActiveTab('signup')}
                    className={cn(
                      'flex-1 py-3 px-6 font-semibold transition-all duration-300',
                      activeTab === 'signup'
                        ? 'bg-gradient-to-r from-crimson-500 to-red-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white'
                    )}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-8 max-h-[60vh] overflow-y-auto">
                <AnimatePresence mode="wait">
                  {activeTab === 'login' ? (
                    <motion.form
                      key="login"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={loginForm.handleSubmit(onSubmitLogin)}
                      className="space-y-6"
                    >
                      <div>
                        <label className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </label>
                        <input
                          {...loginForm.register('email')}
                          type="email"
                          className={cn(
                            'w-full p-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 text-lg',
                            loginForm.formState.errors.email && 'border-red-500 focus:border-red-500 ring-red-500/50'
                          )}
                          placeholder="your@email.com"
                        />
                        {loginForm.formState.errors.email && (
                          <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                            <X className="h-4 w-4" />
                            {loginForm.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          Password
                        </label>
                        <input
                          {...loginForm.register('password')}
                          type="password"
                          className={cn(
                            'w-full p-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 text-lg',
                            loginForm.formState.errors.password && 'border-red-500 focus:border-red-500 ring-red-500/50'
                          )}
                          placeholder="••••••••"
                        />
                        {loginForm.formState.errors.password && (
                          <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                            <X className="h-4 w-4" />
                            {loginForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        className="w-full bg-gradient-to-r from-crimson-500 to-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Signing In...
                          </>
                        ) : (
                          'Sign In'
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.form
                      key="signup"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={signupForm.handleSubmit(onSubmitSignup)}
                      className="space-y-6"
                    >
                      <div>
                        <label className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <User className="h-4 w-4" />
                          Full Name
                        </label>
                        <input
                          {...signupForm.register('name')}
                          className={cn(
                            'w-full p-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 text-lg',
                            signupForm.formState.errors.name && 'border-red-500 focus:border-red-500 ring-red-500/50'
                          )}
                          placeholder="John Doe"
                        />
                        {signupForm.formState.errors.name && (
                          <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                            <X className="h-4 w-4" />
                            {signupForm.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </label>
                        <input
                          {...signupForm.register('email')}
                          type="email"
                          className={cn(
                            'w-full p-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 text-lg',
                            signupForm.formState.errors.email && 'border-red-500 focus:border-red-500 ring-red-500/50'
                          )}
                          placeholder="your@email.com"
                        />
                        {signupForm.formState.errors.email && (
                          <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                            <X className="h-4 w-4" />
                            {signupForm.formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          Password
                        </label>
                        <input
                          {...signupForm.register('password')}
                          type="password"
                          className={cn(
                            'w-full p-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 text-lg',
                            signupForm.formState.errors.password && 'border-red-500 focus:border-red-500 ring-red-500/50'
                          )}
                          placeholder="••••••••"
                        />
                        {signupForm.formState.errors.password && (
                          <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                            <X className="h-4 w-4" />
                            {signupForm.formState.errors.password.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide flex items-center gap-2">
                          <Lock className="h-4 w-4" />
                          Confirm Password
                        </label>
                        <input
                          {...signupForm.register('confirmPassword')}
                          type="password"
                          className={cn(
                            'w-full p-4 bg-gray-800/50 border-2 border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-crimson-500 focus:ring-2 focus:ring-crimson-500/50 transition-all duration-300 text-lg',
                            signupForm.formState.errors.confirmPassword && 'border-red-500 focus:border-red-500 ring-red-500/50'
                          )}
                          placeholder="••••••••"
                        />
                        {signupForm.formState.errors.confirmPassword && (
                          <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                            <X className="h-4 w-4" />
                            {signupForm.formState.errors.confirmPassword?.message}
                          </p>
                        )}
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        className="w-full bg-gradient-to-r from-crimson-500 to-red-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Creating Account...
                          </>
                        ) : (
                          'Create Account'
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 bg-emerald-500/20 border-2 border-emerald-500/50 rounded-2xl text-center"
                  >
                    <Check className="h-12 w-12 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-emerald-400 mb-2">Welcome!</h3>
                    <p className="text-emerald-300">Account created successfully.</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 p-6 bg-red-500/20 border-2 border-red-500/50 rounded-2xl text-center"
                  >
                    <X className="h-12 w-12 text-red-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-red-400 mb-2">Error</h3>
                    <p className="text-red-300">Something went wrong. Try again.</p>
                  </motion.div>
                )}
              </div>

              {/* Close button */}
              <div className="px-8 py-6 border-t border-gray-800 text-center">
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors px-6 py-2 rounded-xl hover:bg-gray-800/50"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
