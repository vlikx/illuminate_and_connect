import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import PastEvents from './components/PastEvents';

const App: React.FC = () => {
  const location = useLocation();
  return (
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
            <a href="/" className="font-[Rajdhani] font-bold text-2xl tracking-wide text-white flex items-baseline hover:opacity-80 transition-opacity duration-200" title="Zur Hauptseite">
              I<span className="text-fuchsia-500">&</span>C <span className="text-yellow-400 ml-1">.</span>
            </a>
            {location.pathname === '/' && (
              <div className="text-sm font-semibold text-yellow-300 bg-yellow-900/10 border border-yellow-400/30 rounded-xl px-4 py-2 ml-4 shadow-md">
                Interesse an einer Partnerschaft oder Sponsoring?{' '}
                <span
                  className="underline cursor-pointer"
                  onClick={() => {
                    const footer = document.getElementById('kontakt-footer');
                    if (footer) {
                      footer.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.alert('Kontakt: inf_illuminate_and_connect@outlook.com');
                    }
                  }}
                  title="Kontakt aufnehmen"
                >
                  Jetzt Kontakt aufnehmen!
                </span>
              </div>
            )}
          </nav>
          <Routes>
            <Route path="/" element={
              <>
                <Hero onScrollToForm={() => {}} />
                <InfoSection />
              </>
            } />
            <Route path="/past-events" element={<PastEvents />} />
          </Routes>
          <footer id="kontakt-footer" className="py-5 border-t border-white/5 bg-black relative z-10">
            {/* Gradient-Trennlinie oben */}
            <div className="absolute top-0 left-0 w-full h-px z-20 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-left">
              <p className="text-slate-600 text-sm">Illuminate & Connect © {new Date().getFullYear()}</p>
              <span className="hidden md:inline-block text-slate-600 text-sm">|</span>
              <a href="mailto:inf_illuminate_and_connect@outlook.com" className="text-yellow-400 underline text-sm hover:text-fuchsia-400 transition-colors">inf_illuminate_and_connect@outlook.com</a>
            </div>
          </footer>
        </div>
      </div>
  );
};

export default App;