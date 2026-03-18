import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import PastEvents from './components/PastEvents';
import Imprint from './components/Imprint';
import PrivacyPolicy from './components/PrivacyPolicy';
import BackToTopButton from './components/BackToTopButton';
import CustomCursor from './components/CustomCursor';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>Illuminate &amp; Connect</p>
        <div className="flex items-center gap-5">
          <Link to="/impressum" className="transition-colors hover:text-fuchsia-300">
            Impressum
          </Link>
          <Link to="/datenschutz" className="transition-colors hover:text-fuchsia-300">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <>
      <CustomCursor />
      <div className="min-h-screen bg-black text-slate-50 selection:bg-fuchsia-500/30 font-sans">
        {/* Stars / Noise Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 brightness-100 contrast-150 mix-blend-overlay"></div>
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 160px 120px, #fff, rgba(0,0,0,0))',
            backgroundSize: '300px 300px'
          }}></div>
        </div>
        <div className="relative z-10">
          <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-7xl mx-auto z-50">
            <Link
              to="/"
              className="flex items-center group transition-opacity duration-200"
              title="Zur Hauptseite"
            >
              <img
                src="/I&C.svg"
                alt="Illuminate & Connect"
                className="h-16 md:h-20 lg:h-24 w-auto logo-neon"
              />
              <span className="sr-only">Illuminate &amp; Connect</span>
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={
              <>
                <Hero onScrollToForm={() => {}} />
                <InfoSection />
              </>
            } />
            <Route path="/past-events" element={<PastEvents />} />
            <Route path="/impressum" element={<Imprint />} />
            <Route path="/datenschutz" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </div>
      <BackToTopButton />
    </>
  );
};

export default App;