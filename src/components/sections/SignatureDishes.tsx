import { motion, useReducedMotion } from 'framer-motion';
import { signatureDishes } from '@/data/content';
import { Reveal, SectionLabel, Stagger, StaggerItem, GoldDivider } from '@/components/animation/Reveal';
import { Button } from '@/components/ui/Button';
import { TiltCard } from '@/components/animation/TiltCard';

export function SignatureDishes() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-[#0b0a09] bg-grain py-24 lg:py-32 px-6 overflow-hidden">
      {/* ambient glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[#c8a96a]/8 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#b5532e]/8 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-16">
          <SectionLabel>The Chef's Selection</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-center text-[#f7f2e8] text-balance">
              Signature dishes
            </h2>
          </Reveal>
          <GoldDivider className="mt-6" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-center text-[#f7f2e8]/60 font-light">
              The plates that define our kitchen — each made to order, finished at the table.
            </p>
          </Reveal>
        </div>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 perspective-1000">
          {signatureDishes.map((dish) => (
            <StaggerItem key={dish.name}>
              <TiltCard intensity={12} className="h-full rounded-2xl" glare>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-[#16130f] shadow-deep">
                  <div className="relative aspect-[4/5] overflow-hidden" style={{ transform: 'translateZ(40px)' }}>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-[#0b0a09]/25 to-transparent" />
                    {dish.tags?.includes('Signature') && (
                      <span className="absolute top-4 left-4 rounded-full bg-[#c8a96a] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0b0a09] shadow-gold">
                        Signature
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <h3 className="font-serif text-xl text-[#f7f2e8] text-shadow-soft">{dish.name}</h3>
                      <span className="font-serif text-xl text-[#c8a96a]">{dish.price}</span>
                    </div>
                  </div>
                  <div className="p-5" style={{ transform: 'translateZ(25px)' }}>
                    <p className="text-sm text-[#f7f2e8]/65 leading-relaxed font-light">{dish.description}</p>
                    {dish.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {dish.tags.filter((t) => t !== 'Signature').map((tag) => (
                          <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-[#f7f2e8]/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 flex justify-center">
          <Button href="#menu" variant="outline">View Full Menu</Button>
        </div>
      </div>
    </section>
  );
}
