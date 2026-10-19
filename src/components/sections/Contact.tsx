import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { restaurant } from '@/data/content';
import { Reveal, SectionLabel, GoldDivider } from '@/components/animation/Reveal';

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0a09] bg-grain py-24 lg:py-32 px-6 scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-14">
          <SectionLabel>Find Us</SectionLabel>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl text-center text-[#f7f2e8]">
              Location & contact
            </h2>
          </Reveal>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-stretch">
          {/* Details */}
          <Reveal>
            <div className="flex flex-col gap-8 rounded-2xl border border-white/8 bg-[#16130f] p-8 md:p-10 h-full">
              <InfoRow icon={<MapPin className="h-5 w-5" />} title="Address">
                <p className="text-[#f7f2e8]/70 font-light leading-relaxed">{restaurant.address}</p>
                <a href={restaurant.mapsDirections} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-[#c8a96a] hover:text-[#ecd6a3]">
                  Get directions <ExternalLink className="h-3 w-3" />
                </a>
              </InfoRow>

              <InfoRow icon={<Phone className="h-5 w-5" />} title="Telephone">
                <a href={restaurant.phoneHref} className="text-[#f7f2e8]/70 font-light hover:text-[#c8a96a]">{restaurant.phone}</a>
              </InfoRow>

              <InfoRow icon={<Mail className="h-5 w-5" />} title="Email">
                <a href={`mailto:${restaurant.email}`} className="text-[#f7f2e8]/70 font-light hover:text-[#c8a96a]">{restaurant.email}</a>
              </InfoRow>

              <InfoRow icon={<Clock className="h-5 w-5" />} title="Opening hours">
                <ul className="space-y-1.5">
                  {restaurant.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm text-[#f7f2e8]/65 font-light max-w-xs">
                      <span>{h.day}</span>
                      <span className={h.time === 'Closed' ? 'text-[#f7f2e8]/35' : 'text-[#f7f2e8]/80'}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </InfoRow>

              <div className="mt-auto flex flex-wrap gap-3 pt-4 border-t border-white/8">
                <a href={restaurant.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-[#c8a96a]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/80 hover:border-[#c8a96a] hover:text-[#c8a96a] transition-colors">
                  <Phone className="h-3.5 w-3.5" /> Call
                </a>
                <a href={restaurant.whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#c8a96a]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/80 hover:border-[#c8a96a] hover:text-[#c8a96a] transition-colors">
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
                <a href={restaurant.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#c8a96a]/40 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#f7f2e8]/80 hover:border-[#c8a96a] hover:text-[#c8a96a] transition-colors">
                  <Instagram className="h-3.5 w-3.5" /> Instagram
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-white/8 bg-[#16130f]">
              <iframe
                title="Map to Osteria Sereno"
                src={`https://www.google.com/maps?q=${encodeURIComponent(restaurant.mapsQuery)}&output=embed`}
                className="h-full w-full grayscale contrast-[1.1] opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, minHeight: 420 }}
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[#c8a96a]/10 rounded-2xl" />
            </div>
          </Reveal>
        </div>

        <p className="mt-10 text-center text-xs text-[#f7f2e8]/35 font-light">
          Contact details shown are indicative for this demo and should be confirmed by the owner before launch.
        </p>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c8a96a]/12 text-[#c8a96a]">
        {icon}
      </span>
      <div className="flex-1">
        <p className="mb-2 text-[11px] uppercase tracking-[0.25em] text-[#f7f2e8]/45">{title}</p>
        {children}
      </div>
    </div>
  );
}
