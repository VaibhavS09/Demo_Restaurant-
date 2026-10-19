import { motion, useReducedMotion } from 'framer-motion';
import { gallery } from '@/data/content';
import { Reveal, SectionLabel, GoldDivider } from '@/components/animation/Reveal';
import { cn } from '@/lib/utils';

const spanClass: Record<string, string> = {
  tall: 'md:row-span-2 md:col-span-1',
  wide: 'md:col-span-2',
  normal: '',
};

export function Gallery() {
  const reduce = useReducedMotion();
  return (
    <section id="gallery" className="relative bg-[#16130f] py-24 lg:py-32 px-6 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-radial-gold blur-[80px] opacity-40" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-14">
          <SectionLabel>The Experience</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-center text-[#f7f2e8]">
              An evening at {`Osteria Sereno`}
            </h2>
          </Reveal>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid auto-rows-[220px] md:auto-rows-[280px] grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 perspective-1000">
          {gallery.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.94, rotateX: 12 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduce ? {} : { rotateY: 8, rotateX: -4, scale: 1.03, z: 50 }}
              style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }}
              className={cn(
                'group relative overflow-hidden rounded-xl border border-white/5 shadow-deep',
                spanClass[img.span] ?? ''
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09]/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" style={{ transform: 'translateZ(30px)' }}>
                <span className="text-xs text-[#f7f2e8]/85 font-light">{img.alt}</span>
              </figcaption>
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-[#c8a96a]/0 group-hover:ring-[#c8a96a]/30 transition-all duration-500" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
