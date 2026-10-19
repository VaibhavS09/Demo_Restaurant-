import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { images, restaurant } from '@/data/content';
import { Button } from '@/components/ui/Button';
import { Float } from '@/components/animation/Parallax';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);

  return (
    <section ref={ref} id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden bg-[#0b0a09]">
      {/* Background image with parallax + zoom */}
      <motion.div style={reduce ? {} : { y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src={images.hero}
          alt={images.heroAlt}
          className={`h-full w-full object-cover ${reduce ? '' : 'animate-slow-zoom'}`}
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Layered overlays for depth */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-gradient-to-b from-[#0b0a09]/85 via-[#0b0a09]/30 to-[#0b0a09]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-transparent to-[#0b0a09]/40" />
      <div className="absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay" />

      {/* Ambient floating orbs */}
      {!reduce && (
        <>
          <Float distance={28} duration={9} className="absolute top-[18%] left-[8%]">
            <div className="h-2 w-2 rounded-full bg-[#c8a96a]/40 blur-[1px]" />
          </Float>
          <Float distance={36} duration={11} delay={1.2} className="absolute top-[30%] right-[12%]">
            <div className="h-3 w-3 rounded-full bg-[#ecd6a3]/30 blur-[2px]" />
          </Float>
          <Float distance={22} duration={7} delay={2} className="absolute bottom-[28%] left-[18%]">
            <div className="h-1.5 w-1.5 rounded-full bg-[#b5532e]/40 blur-[1px]" />
          </Float>
          <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-[#c8a96a]/10 blur-[100px] animate-ember" />
          <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#6b1f1f]/15 blur-[120px] animate-ember" style={{ animationDelay: '2s' }} />
        </>
      )}

      {/* Content with parallax + 3D */}
      <motion.div
        style={reduce ? {} : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center perspective-1000"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
              >
                <Star className="h-3.5 w-3.5 fill-[#c8a96a] text-[#c8a96a]" />
              </motion.span>
            ))}
          </span>
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#f7f2e8]/70">
            Est. {restaurant.established} · {restaurant.area}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, rotateX: 25 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          style={{ transformPerspective: 1200 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.02] text-[#f7f2e8] text-balance max-w-4xl text-shadow-lg"
        >
          A taste of <em className="not-italic gold-gradient-text">Italy</em>,
          <br className="hidden sm:block" /> served by candlelight.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="mt-7 max-w-xl text-pretty text-base sm:text-lg text-[#f7f2e8]/80 leading-relaxed font-light text-shadow-soft"
        >
          Seasonal handmade pasta, wood-fired mains and a cellar of Italian wines
          in the heart of {restaurant.area}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button href="#menu" variant="gold">Explore the Menu</Button>
          <Button href={restaurant.bookingHref} variant="outline">Book a Table</Button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#f7f2e8]/60 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
        <motion.div animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
