import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0a09]"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="font-serif text-4xl text-[#f7f2e8]">Osteria</span>
            <span className="font-serif italic text-lg text-[#c8a96a] -mt-1 tracking-[0.3em]">Sereno</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="mt-6 h-px bg-gradient-to-r from-transparent via-[#c8a96a] to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
