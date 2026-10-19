import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { menu, menuCategories } from '@/data/content';
import { Reveal, SectionLabel, GoldDivider } from '@/components/animation/Reveal';
import { cn } from '@/lib/utils';

export function Menu() {
  const [active, setActive] = useState<(typeof menuCategories)[number]>('All');
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (active === 'All' ? menu : menu.filter((d) => d.category === active)),
    [active]
  );

  return (
    <section id="menu" className="relative bg-[#16130f] py-24 lg:py-32 px-6 scroll-mt-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 right-0 h-80 w-80 rounded-full bg-[#c8a96a]/6 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-[#b5532e]/6 blur-[130px]" />
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-12">
          <SectionLabel>Il Menù</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-center text-[#f5f0e8]">
              The menu
            </h2>
          </Reveal>
          <GoldDivider className="mt-6" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-center text-[#f5f0e8]/60 font-light">
              A seasonal snapshot of our kitchen. Prices are indicative and confirmed at the table.
            </p>
          </Reveal>
        </div>

        {/* Category filters */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  'relative rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors duration-300',
                  active === cat
                    ? 'text-[#0b0a09]'
                    : 'text-[#f7f2e8]/60 hover:text-[#f7f2e8]'
                )}
              >
                {active === cat && (
                  <motion.span
                    layoutId="menu-pill"
                    className="absolute inset-0 rounded-full bg-[#c8a96a]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Menu list */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.dl
              key={active}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-x-10 gap-y-2 md:grid-cols-2"
            >
              {filtered.map((dish, i) => (
                <motion.div
                  key={`${dish.category}-${dish.name}`}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group py-5 border-b border-white/8 hover:border-[#c8a96a]/20 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="flex items-baseline gap-3">
                      <span className="font-serif text-xl text-[#f7f2e8] group-hover:text-[#c8a96a] transition-colors">
                        {dish.name}
                      </span>
                      {dish.tags?.includes('Signature') && (
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#c8a96a]">
                          Chef's pick
                        </span>
                      )}
                    </dt>
                    <span className="flex-1 mx-2 border-b border-dotted border-white/15" />
                    <span className="font-serif text-lg text-[#c8a96a] whitespace-nowrap">{dish.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-[#f7f2e8]/55 font-light leading-relaxed">
                    {dish.description}
                  </p>
                  {dish.tags && dish.tags.filter((t) => t !== 'Signature').length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {dish.tags.filter((t) => t !== 'Signature').map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-[0.15em] text-[#f7f2e8]/40">
                          · {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.dl>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
