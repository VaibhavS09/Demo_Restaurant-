import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { images, restaurant } from '@/data/content';
import { Reveal, SectionLabel, GoldDivider } from '@/components/animation/Reveal';
import { Button } from '@/components/ui/Button';
import { Float } from '@/components/animation/Parallax';

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yImg = useTransform(scrollYProgress, [0, 1], ['-10%', '12%']);
  const ySecondary = useTransform(scrollYProgress, [0, 1], ['15%', '-15%']);
  const yBadge = useTransform(scrollYProgress, [0, 1], ['40%', '-40%']);

  return (
    <section id="story" className="relative bg-[#0b0a09] py-24 lg:py-32 px-6 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-[#6b1f1f]/10 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-[#c8a96a]/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
        {/* Layered image composition with depth */}
        <Reveal>
          <div ref={ref} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-deep">
              <motion.img
                style={reduce ? {} : { y: yImg }}
                src={images.story}
                alt={images.storyAlt}
                loading="lazy"
                className="h-[460px] md:h-[560px] w-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/60 to-transparent" />
              <div className="absolute inset-0 bg-noise opacity-[0.06] mix-blend-overlay" />
            </div>

            {/* Floating secondary image */}
            <motion.div
              style={reduce ? {} : { y: ySecondary }}
              className="absolute -bottom-8 -right-4 md:-right-10 w-36 md:w-48 h-44 md:h-56 overflow-hidden rounded-xl border-4 border-[#0b0a09] shadow-gold"
            >
              <img
                src="https://images.pexels.com/photos/6449866/pexels-photo-6449866.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Red wine being poured"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              style={reduce ? {} : { y: yBadge }}
              className="absolute -top-6 -left-4 md:-left-8"
            >
              <Float distance={10} duration={7}>
                <div className="flex h-24 w-24 md:h-28 md:w-28 flex-col items-center justify-center rounded-full bg-[#c8a96a] text-[#0b0a09] shadow-gold">
                  <span className="font-serif text-2xl md:text-3xl leading-none">est.</span>
                  <span className="font-serif text-xl md:text-2xl">{restaurant.established}</span>
                </div>
              </Float>
            </motion.div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionLabel>Our Story</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-[#f7f2e8] text-balance">
              Born from a love of the Italian table.
            </h2>
          </Reveal>
          <GoldDivider className="mt-6 !justify-start" />

          <div className="mt-8 space-y-5 text-[#f7f2e8]/70 font-light leading-relaxed">
            <Reveal delay={0.15}>
              <p>
                {restaurant.name} began with a simple idea: bring the warmth of an Italian
                osteria — the kind where the kitchen knows your order before you sit down —
                to the heart of {restaurant.area}.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Our pasta is rolled by hand each morning, our sauces simmer for hours, and
                our wine list travels the length of Italy — from Etna's volcanic slopes to
                the cellars of Piedmont.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-[#ecd6a3] text-sm border-l-2 border-[#c8a96a]/40 pl-4 italic font-serif text-lg">
                "We cook the way our grandmothers did — with patience, seasonality, and
                a little ceremony."
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { k: '8h', v: 'Ragù simmer' },
                { k: '100%', v: 'Pasta made in-house' },
                { k: '120+', v: 'Italian wines' },
              ].map((s, i) => (
                <motion.div
                  key={s.v}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.1, duration: 0.6 }}
                  className="text-center sm:text-left"
                >
                  <p className="font-serif text-3xl md:text-4xl gold-gradient-text">{s.k}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#f7f2e8]/50">{s.v}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10">
              <Button href="#gallery" variant="outline">See the Experience</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
