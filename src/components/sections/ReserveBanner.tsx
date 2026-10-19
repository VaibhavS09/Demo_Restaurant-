import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Reveal, SectionLabel, GoldDivider } from '@/components/animation/Reveal';

export function ReserveBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.75, 0.85]);

  return (
    <div ref={ref} className="relative h-[300px] md:h-[380px] overflow-hidden">
      <motion.img
        style={reduce ? {} : { y }}
        src="https://images.pexels.com/photos/12861281/pexels-photo-12861281.jpeg?auto=compress&cs=tinysrgb&w=1800"
        alt="Red wine being poured"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover scale-125"
      />
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-[#0b0a09]" />
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <SectionLabel>Reserve Your Table</SectionLabel>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-[#f7f2e8] text-shadow-lg">
            Join us for dinner
          </h2>
        </Reveal>
        <GoldDivider className="mt-5" />
      </div>
    </div>
  );
}
