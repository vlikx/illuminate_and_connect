import FloatingButton from './FloatingButton';
import React from 'react';
import { Calendar, MapPin, ArrowDown } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToForm }) => {
  return (
    <>
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20">
      {/* Background Effects (Bokeh) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-[80px] -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-[80px] -z-10 animate-float-delayed" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-fuchsia-500/20 rounded-full blur-[40px] -z-10" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-yellow-600/20 rounded-full blur-[50px] -z-10" />

          <div className="max-w-5xl w-full text-center space-y-8 z-10 animate-fade-in-up flex flex-col items-center">
        
        {/* Save The Date Badge */}
        <div className="inline-flex items-center space-x-2 bg-black/40 backdrop-blur-md border border-fuchsia-500/30 rounded-full px-5 py-2 text-fuchsia-200 text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(217,70,239,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
          </span>
          <span className="uppercase">Save the Date</span>
        </div>

        {/* Main Title - Hollow Neon */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none flex flex-col gap-2">
          <span className="neon-outline-pink font-[Rajdhani]">ILLUMINATE</span>
          <span className="neon-outline-yellow font-[Rajdhani]">& CONNECT</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed font-sans">
          Ein Abend, der zeigt, was <span className="text-white font-medium border-b border-yellow-500/50">Human Centricity</span> bewegt.
        </p>

        <div className="w-full mt-4 flex flex-col items-center gap-24">
          {/* Info Pills */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-200 w-full">
            <div
              className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:border-fuchsia-500/50 transition-colors backdrop-blur-sm cursor-pointer"
              role="button"
              tabIndex={0}
              data-cursor="pointer"
              onClick={() => {
                const el = document.getElementById('anfahrt-parken');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  const el = document.getElementById('anfahrt-parken');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              title="Zu Anfahrt & Parken scrollen"
            >
              <Calendar className="w-5 h-5 text-fuchsia-400" />
              <div className="flex flex-col items-start leading-tight">
                <span className="font-bold text-white uppercase tracking-wide">Donnerstag, 16.04.</span>
                <span className="text-xs text-white font-semibold">Einlass ab 17:30 – Beginn 18:00 Uhr</span>
              </div>
            </div>
            <div
              className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-colors backdrop-blur-sm cursor-pointer"
              role="button"
              tabIndex={0}
              data-cursor="pointer"
              onClick={() => {
                const el = document.getElementById('anfahrt-parken');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  const el = document.getElementById('anfahrt-parken');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              title="Zur Anfahrt & Parken"
            >
              <MapPin className="w-5 h-5 text-yellow-400" />
              <div className="flex flex-col items-start leading-tight">
                <span className="font-bold text-white uppercase tracking-wide">DIS: Digital Innovation Space</span>
                <span className="text-xs text-white">Anton Huber Straße 4, 73430 Aalen</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex w-full min-h-[56px] items-center justify-center md:min-h-[60px]">
            <FloatingButton variant="inline" />
          </div>
        </div>
        {/* ...existing code... */}

      </div>
    </section>
    {/* Anmeldung Hinweis unterhalb des Hero-Abschnitts */}

      {/* Permanenter Anmelde-Button unten rechts */}
      <FloatingButton variant="floating" />
    </>
  );
};

export default Hero;