import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { navLinks, restaurant } from '@/data/content';

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0b0a09] pt-16 pb-8 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-serif text-3xl text-[#f7f2e8]">{restaurant.name.split(' ')[0]}</span>
              <span className="font-serif italic text-base text-[#c8a96a] -mt-1 tracking-[0.2em]">
                {restaurant.name.split(' ').slice(1).join(' ')}
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-[#f7f2e8]/55 font-light leading-relaxed">
              {restaurant.tagline} in {restaurant.area}. Handmade pasta, wood-fired mains,
              and an Italian cellar.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={restaurant.instagram} label="Instagram"><Instagram className="h-4 w-4" /></SocialLink>
              <SocialLink href={restaurant.facebook} label="Facebook"><Facebook className="h-4 w-4" /></SocialLink>
              <SocialLink href={restaurant.phoneHref} label="Call"><Phone className="h-4 w-4" /></SocialLink>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#c8a96a]/80 mb-5">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[#f7f2e8]/60 hover:text-[#f7f2e8] transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#c8a96a]/80 mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-[#f7f2e8]/60 font-light">
              <li className="flex gap-2.5"><MapPin className="h-4 w-4 text-[#c8a96a]/70 shrink-0 mt-0.5" /> {restaurant.addressShort}</li>
              <li className="flex gap-2.5"><Phone className="h-4 w-4 text-[#c8a96a]/70 shrink-0 mt-0.5" /> <a href={restaurant.phoneHref} className="hover:text-[#f7f2e8]">{restaurant.phone}</a></li>
              <li className="flex gap-2.5"><Mail className="h-4 w-4 text-[#c8a96a]/70 shrink-0 mt-0.5" /> <a href={`mailto:${restaurant.email}`} className="hover:text-[#f7f2e8]">{restaurant.email}</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.25em] text-[#c8a96a]/80 mb-5">Hours</h3>
            <ul className="space-y-2 text-sm text-[#f7f2e8]/60 font-light">
              {restaurant.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className={h.time === 'Closed' ? 'text-[#f7f2e8]/30' : 'text-[#f7f2e8]/80'}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#f7f2e8]/40">
            © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#f7f2e8]/40">
            <a href="#" className="hover:text-[#c8a96a]">Privacy Policy</a>
            <a href="#" className="hover:text-[#c8a96a]">Terms</a>
            <a href="#" className="hover:text-[#c8a96a]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#f7f2e8]/70 hover:border-[#c8a96a] hover:text-[#c8a96a] transition-colors"
    >
      {children}
    </a>
  );
}
