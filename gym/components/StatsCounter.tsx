'use client'

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface StatsCounterProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
  usePercent?: boolean;
}

export default function StatsCounter({ 
  end, 
  suffix = '+', 
  label, 
  duration = 2.5, 
  usePercent = false 
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration * 60); // 60 fps
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  const formattedCount = usePercent ? `${count}%` : `${count}${suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-crimson-500 mb-3 tracking-tight">
        {formattedCount}
      </div>
      <div className="text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

