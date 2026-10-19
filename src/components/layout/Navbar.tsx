import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu as MenuIcon, X, UtensilsCrossed, Phone } from 'lucide-react';
import { navLinks, restaurant, announcement } from '@/data/content';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 bg-[#0b0a09] text-center text-[11px] tracking-[0.25em] uppercase text-[#c8a96a]/90 py-2.5 px-4 border-b border-white/5">
        {announcement}
      </div>

      <header
        className={cn(
          'fixed top-[37px] left-0 right-0 z-40 transition-all duration-500',
          scrolled ? 'glass border-b border-white/5 py-3' : 'bg-transparent py-5'
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#home" className="group flex flex-col leading-none" onClick={close}>
            <span className="font-serif text-2xl lg:text-3xl text-[#f7f2e8] tracking-wide">
              {restaurant.name.split(' ')[0]}
            </span>
            <span className="font-serif italic text-sm text-[#c8a96a] -mt-0.5 tracking-[0.2em]">
              {restaurant.name.split(' ').slice(1).join(' ')}
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-xs uppercase tracking-[0.22em] text-[#f7f2e8]/75 transition-colors hover:text-[#f7f2e8]"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#c8a96a] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={restaurant.phoneHref}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/70 hover:text-[#c8a96a] transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              Call
            </a>
            <a
              href={restaurant.bookingHref}
              className="inline-flex items-center gap-2 rounded-full bg-[#c8a96a] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-[#0b0a09] hover:bg-[#ecd6a3] transition-colors"
            >
              <UtensilsCrossed className="h-3.5 w-3.5" />
              Reserve
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Open menu"
            className="lg:hidden text-[#f7f2e8] p-2 -mr-2"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#0b0a09]/95 backdrop-blur-lg" onClick={close} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-[#16130f] border-l border-[#c8a96a]/15 flex flex-col p-7"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-serif text-2xl text-[#f7f2e8]">{restaurant.name}</span>
                <button aria-label="Close menu" onClick={close} className="text-[#f7f2e8]/80 p-2 -mr-2">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={close}
                      className="block py-4 font-serif text-3xl text-[#f7f2e8]/90 border-b border-white/5 hover:text-[#c8a96a] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-3">
                <a
                  href={restaurant.bookingHref}
                  onClick={close}
                  className="block rounded-full bg-[#c8a96a] px-6 py-3.5 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#0b0a09]"
                >
                  Reserve a Table
                </a>
                <a
                  href={restaurant.phoneHref}
                  className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/70"
                >
                  <Phone className="h-3.5 w-3.5" /> {restaurant.phone}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
