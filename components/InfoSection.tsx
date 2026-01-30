import React from 'react';
import { MonitorPlay, Users, Coffee, Lightbulb } from 'lucide-react';

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
    <section className="py-24 px-4 bg-black relative overflow-hidden">
       {/* Separator Gradient */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
       
       {/* Ambient Glow */}
       <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[Rajdhani] uppercase tracking-wide">
            Was euch <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">erwartet</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Studierende präsentieren innovative Projekte. Kommt vorbei, lernt Menschen kennen, entdeckt Ideen – <span className="text-white border-b border-fuchsia-500">nahbar, ehrlich, ohne Messe-Flair.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/5 ${item.borderColor} transition-all duration-500 group hover:-translate-y-2 hover:bg-slate-900/80 hover:shadow-2xl`}
            >
              <div className="mb-6 p-4 bg-black rounded-2xl inline-block border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-[Rajdhani]">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 relative p-1 rounded-3xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-yellow-500 opacity-90">
            <div className="bg-slate-950 rounded-[22px] p-8 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-fuchsia-500/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                    <Lightbulb className="w-12 h-12 text-yellow-400 mb-6 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[Rajdhani] uppercase">Für Unternehmen & Neugierige</h3>
                    <p className="text-slate-300 max-w-xl mx-auto text-lg leading-relaxed">
                        Dies ist keine klassische Jobmesse, sondern ein Einblick in die Köpfe von morgen. 
                        Ein Abend voller Inspiration und echter Begegnungen.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;