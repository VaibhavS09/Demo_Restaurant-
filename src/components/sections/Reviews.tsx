import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { reviews } from '@/data/content';
import { Reveal, SectionLabel, Stagger, StaggerItem, GoldDivider } from '@/components/animation/Reveal';
import { TiltCard } from '@/components/animation/TiltCard';

export function Reviews() {
  const reduce = useReducedMotion();
  return (
    <section id="reviews" className="relative bg-[#0b0a09] bg-grain py-24 lg:py-32 px-6 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-radial-gold blur-[100px] opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-14">
          <SectionLabel>Guest Words</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-center text-[#f7f2e8]">
              Loved at the table
            </h2>
          </Reveal>
          <GoldDivider className="mt-6" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-center text-[#f7f2e8]/55 font-light text-sm">
              The excerpts below are demonstration reviews. Verified guest testimonials from
              Google, TripAdvisor or Instagram can be displayed here once approved.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-6 md:grid-cols-3 perspective-1000">
          {reviews.map((r) => (
            <StaggerItem key={r.author}>
              <TiltCard intensity={8} className="h-full rounded-2xl" glare>
                <figure className="relative h-full overflow-hidden rounded-2xl border border-white/8 bg-[#16130f] p-7 shadow-deep">
                  <Quote className="absolute -top-2 -right-2 h-20 w-20 text-[#c8a96a]/8" />
                  <div className="relative" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex gap-1 mb-4">
                      {[...Array(r.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={reduce ? {} : { scale: 0, rotate: -45 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                        >
                          <Star className="h-4 w-4 fill-[#c8a96a] text-[#c8a96a]" />
                        </motion.span>
                      ))}
                    </div>
                    <blockquote className="font-serif text-lg italic leading-relaxed text-[#f7f2e8]/85">
                      "{r.quote}"
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c8a96a]/15 text-[#c8a96a] font-serif text-sm">
                        {r.author[0]}
                      </span>
                      <div>
                        <p className="text-sm text-[#f7f2e8]">{r.author}</p>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#f7f2e8]/40">{r.source}</p>
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
