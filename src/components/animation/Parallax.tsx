import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// Layered parallax wrapper. Children move at different depths based on scroll.
export function Parallax({
  children,
  depth = 0.15,
  className = '',
  scale = false,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
  scale?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`${depth * 100}%`, `${-depth * 100}%`]);
  const s = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 1.12]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? {} : { y, ...(scale ? { scale: s } : {}) }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating ambient motion for decorative elements.
export function Float({ children, className = '', distance = 12, duration = 6, delay = 0 }: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduce ? {} : { y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}
