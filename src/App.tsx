import { Preloader } from '@/components/layout/Preloader';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { SignatureDishes } from '@/components/sections/SignatureDishes';
import { Menu } from '@/components/sections/Menu';
import { Story } from '@/components/sections/Story';
import { Gallery } from '@/components/sections/Gallery';
import { Reviews } from '@/components/sections/Reviews';
import { Reserve } from '@/components/sections/Reserve';
import { Contact } from '@/components/sections/Contact';

function App() {
  return (
    <div className="relative bg-[#0c0a09] text-[#f5f0e8] overflow-x-hidden">
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SignatureDishes />
        <Menu />
        <Story />
        <Gallery />
        <Reviews />
        <Reserve />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
