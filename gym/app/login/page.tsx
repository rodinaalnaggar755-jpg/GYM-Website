"use client";

import { motion } from 'framer-motion';
import AuthModal from '../../components/auth/AuthModal';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

function LoginModalFromSearchParams() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const initialTab =
    (searchParams.get('tab') as 'login' | 'signup' | null) ?? 'login';

  const handleClose = () => {
    setIsOpen(false);
    // Redirect to home after close
    setTimeout(() => router.push('/'), 300);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-900/95 backdrop-blur-xl flex items-center justify-center p-4 z-50 min-h-screen overflow-y-auto"
    >
      <AuthModal isOpen={isOpen} onClose={handleClose} initialTab={initialTab} />
    </motion.main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginModalFromSearchParams />
    </Suspense>
  );
}

