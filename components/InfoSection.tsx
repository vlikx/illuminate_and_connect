import React from 'react';
import { MonitorPlay, Users, Coffee, Lightbulb } from 'lucide-react';
import RueckblickCollage from './RueckblickCollage';

const InfoSection: React.FC = () => {
  const highlights = [
    {
      icon: <MonitorPlay className="w-7 h-7 text-fuchsia-400" />,
      title: "Bühnenprogramm",
      description: "Ausgewählte Projekt-Highlights aus UX, ID und HCD live auf der Bühne.",
      borderColor: "hover:border-fuchsia-500/50"
    },
    {
      icon: <Users className="w-7 h-7 text-yellow-400" />,
      title: "Offene Werkschau",
      description: "Projekte erleben, Fragen stellen und direktes Feedback geben.",
      borderColor: "hover:border-yellow-500/50"
    },
    {
      icon: <Coffee className="w-7 h-7 text-fuchsia-400" />,
      title: "Catering & Networking",
      description: "Snacks & Getränke für gute Gespräche in entspannter Atmosphäre.",
      borderColor: "hover:border-fuchsia-500/50"
    }
  ];

  return (
    <>
      {/* Event intro at the top */}
      {/* Hero + Highlights + Logo Hintergrund als gemeinsamer Block */}
      <div
        className="relative overflow-hidden group"
        style={{ position: 'relative' }}
      >
        {/* Schwarzer Overlay für mehr Kontrast */}
        <div className="absolute inset-0 z-[1] bg-black/70 pointer-events-none" />
        {/* Gradient-Trennlinie oben */}
        <div className="absolute top-0 left-0 w-full h-px z-[2] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent pointer-events-none" />
        {/* Gradient-Trennlinie unten */}
        <div className="absolute bottom-0 left-0 w-full h-px z-[2] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent pointer-events-none" />
        <style>{`
          .group::before {
            content: '';
            position: absolute;
            inset: 0;
            z-index: 0;
            background-image: url('/DIS.png');
            background-repeat: no-repeat;
            background-position: center 60%;
            background-size: 70vw auto;
            max-width: 1200px;
            margin: 0 auto;
            opacity: 0.18;
            pointer-events: none;
          }
        `}</style>
        {/* Event intro */}
        <section className="py-8 px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[Rajdhani] uppercase tracking-wide">
              Was euch <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">erwartet</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Studierende präsentieren innovative Projekte. Kommt vorbei, lernt Menschen kennen, entdeckt Ideen – <span className="text-white border-b border-fuchsia-500">nahbar, ehrlich, ohne Messe-Flair.</span>
            </p>
          </div>
          {/* Separator Gradient & Ambient Glow */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
        {/* Highlights in the middle */}
        <section className="py-12 px-4 relative z-20">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-2xl bg-slate-900/60 border border-white/10 shadow-lg transition-all duration-500`}
                >
                  <div className="mb-6 p-4 bg-black rounded-2xl inline-block border border-white/10 shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-[Rajdhani] whitespace-nowrap">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm font-light">
                    {item.description}
                  </p>
                  {/* Button entfernt */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unternehmen & Neugierige */}
        <section className="py-16 px-4 relative z-20">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-white/10 shadow-lg relative flex flex-col items-center text-center">
              <Lightbulb className="w-12 h-12 text-yellow-400 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[Rajdhani] uppercase">Für Unternehmen & Neugierige</h3>
              <p className="text-slate-300 max-w-xl mx-auto text-lg leading-relaxed">
                Dies ist keine klassische Jobmesse, sondern ein Einblick in die Köpfe von morgen. 
                Ein Abend voller Inspiration und echter Begegnungen.
              </p>
            </div>
          </div>
        </section>
      </div>



      {/* Rückblick Illuminate & Connect */}
      <div className="max-w-4xl mx-auto">
        <RueckblickCollage />
      </div>

      {/* Anfahrt & Parken (Map) now at the end */}
      <section id="anfahrt-parken" className="py-16 px-4 bg-black relative">
        {/* Gradient-Trennlinie oben */}
        <div className="absolute top-0 left-0 w-full h-px z-[2] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-[Rajdhani] uppercase tracking-wide text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">Anfahrt & Parken</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-72 rounded-xl overflow-hidden border border-yellow-400 shadow-lg">
              <iframe
                title="DIS Anfahrt Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.073624857624!2d10.09312331564609!3d48.83712397928509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799e1e2e2e2e2e2%3A0x123456789abcdef!2sAnton%20Huber%20Stra%C3%9Fe%204%2C%2073430%20Aalen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col justify-center items-start bg-slate-900/60 rounded-2xl p-8 border border-white/10 shadow-lg">
              <p className="text-slate-400 text-base mb-2">Parkmöglichkeiten:</p>
              <p className="text-slate-200 text-base font-semibold">Hochschule Aalen – Parkplatz Heimatwinkel</p>
              <p className="text-slate-200 text-base">Anton-Huber-Straße 4, 73430 Aalen</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;