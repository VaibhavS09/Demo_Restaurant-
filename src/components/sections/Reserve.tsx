import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Check, Loader2, AlertCircle, CalendarCheck } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Reveal, SectionLabel, GoldDivider } from '@/components/animation/Reveal';
import { Button } from '@/components/ui/Button';
import { ReserveBanner } from '@/components/sections/ReserveBanner';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Reserve() {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || '').trim(),
      email: String(data.get('email') || '').trim(),
      phone: String(data.get('phone') || '').trim() || null,
      party_size: Number(data.get('party_size')),
      reservation_date: String(data.get('date')),
      reservation_time: String(data.get('time')),
      notes: String(data.get('notes') || '').trim() || null,
    };

    if (!payload.name || !payload.email || !payload.party_size || !payload.reservation_date || !payload.reservation_time) {
      setError('Please complete the required fields.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError('');

    if (!supabase) {
      setError('Booking is not configured yet. Please call us to reserve.');
      setStatus('error');
      return;
    }

    const { error: insertError } = await supabase.from('reservations').insert(payload);
    if (insertError) {
      setError('We could not submit your request. Please try again or call us.');
      setStatus('error');
      return;
    }
    setStatus('success');
    form.reset();
  };

  return (
    <section id="reserve" className="relative scroll-mt-24 overflow-hidden">
      <ReserveBanner />

      {/* Form */}
      <div className="bg-[#16130f] py-20 px-6">
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-[#c8a96a]/30 bg-[#0b0a09] p-10 text-center shadow-gold"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c8a96a]/15">
                  <Check className="h-7 w-7 text-[#c8a96a]" />
                </span>
                <h3 className="mt-6 font-serif text-3xl text-[#f5f0e8]">Request received</h3>
                <p className="mt-3 text-[#f5f0e8]/65 font-light max-w-md mx-auto">
                  Thank you. Our team will confirm your reservation by email shortly.
                  For same-day bookings, please call us directly.
                </p>
                <div className="mt-8">
                  <Button onClick={() => setStatus('idle')} variant="outline">Make another request</Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={reduce ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-5 sm:grid-cols-2"
                noValidate
              >
                <Field label="Full name" required>
                  <input name="name" type="text" autoComplete="name" className={inputCls} placeholder="Jane Smith" />
                </Field>
                <Field label="Email" required>
                  <input name="email" type="email" autoComplete="email" className={inputCls} placeholder="jane@email.com" />
                </Field>
                <Field label="Phone">
                  <input name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+44 …" />
                </Field>
                <Field label="Party size" required>
                  <select name="party_size" defaultValue="" className={inputCls}>
                    <option value="" disabled>Guests</option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Date" required>
                  <input name="date" type="date" className={inputCls} min={new Date().toISOString().split('T')[0]} />
                </Field>
                <Field label="Time" required>
                  <select name="time" defaultValue="" className={inputCls}>
                    <option value="" disabled>Select time</option>
                    {['12:00','12:30','13:00','13:30','14:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field label="Notes (optional)">
                    <textarea name="notes" rows={3} className={inputCls} placeholder="Dietary needs, celebration, seating preference…" />
                  </Field>
                </div>

                {error && (
                  <div className="sm:col-span-2 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle className="h-4 w-4 shrink-0" /> {error}
                  </div>
                )}

                <div className="sm:col-span-2 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#f5f0e8]/45 font-light">
                    For parties of 8+ please call us directly.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#c8a96a] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-[#0b0a09] hover:bg-[#ecd6a3] transition-colors disabled:opacity-60 shadow-gold"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>
                    ) : (
                      <><CalendarCheck className="h-4 w-4" /> Request Table</>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  'w-full rounded-lg border border-white/10 bg-[#0b0a09] px-4 py-3 text-sm text-[#f7f2e8] placeholder:text-[#f7f2e8]/30 focus:border-[#c8a96a] focus:outline-none focus:ring-1 focus:ring-[#c8a96a]/40 transition-colors [color-scheme:dark]';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-[#f5f0e8]/60">
        {label} {required && <span className="text-[#c8a96a]">*</span>}
      </span>
      {children}
    </label>
  );
}
