/*
# Create reservations table (public submit, no read)

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest full name
  - `email` (text, not null) — guest contact email
  - `phone` (text) — optional phone number
  - `party_size` (int, not null) — number of guests
  - `reservation_date` (date, not null) — requested date
  - `reservation_time` (time, not null) — requested time
  - `notes` (text) — optional dietary/occasion notes
  - `status` (text, default 'pending') — enquiry status
  - `created_at` (timestamptz, default now())

2. Security
- RLS enabled on `reservations`.
- INSERT only for anon + authenticated (public submission from website).
- NO public SELECT/UPDATE/DELETE — guest reservation data is private and
  can only be read by the restaurant owner via the Supabase dashboard or
  an authenticated admin role added later.

3. Notes
- This is a single-tenant public-facing demo with no sign-in screen, so
  policies are scoped to `anon, authenticated` for INSERT only.
- A success message is shown to the guest on submit; the restaurant owner
  reviews enquiries from the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_insert_reservations" ON reservations;
CREATE POLICY "public_insert_reservations"
ON reservations FOR INSERT
TO anon, authenticated
WITH CHECK (true);
