import React from 'react';
import { MonitorPlay, Users, Coffee, Lightbulb, MapPin, PartyPopper, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import RueckblickCollage from './RueckblickCollage';

interface InfoTileProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  titleClassName?: string;
}

const baseCardClass = 'rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg backdrop-blur-sm';
const subCardClass = 'rounded-2xl border border-white/10 bg-black/30 px-5 py-4 shadow-inner shadow-fuchsia-500/5';

const InfoTile: React.FC<InfoTileProps> = ({ icon, title, children, titleClassName }) => (
  <div className={`${baseCardClass} h-full p-8 transition-all duration-500 flex flex-col justify-center`}>
    <div className="mb-3 flex items-center gap-3">
      <span className="flex items-center justify-center">
        {icon}
      </span>
      <h3 className={`text-2xl font-bold text-white font-[Rajdhani] ${titleClassName ?? ''}`}>
        {title}
      </h3>
    </div>
    <div className="text-white leading-relaxed text-sm font-light space-y-2">
      {children}
    </div>
  </div>
);

const InfoSection: React.FC = () => {
  const [afterpartyOpen, setAfterpartyOpen] = React.useState(false);

  const highlights = [
    {
      icon: <MonitorPlay className="w-6 h-6 text-fuchsia-400" />,
      title: "Bühnenprogramm",
      description:
        "Vorstellung ausgewählter Projekte mit Podiumsdiskussion.",
      borderColor: "hover:border-fuchsia-500/50",
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: "Offene Werkschau",
      description:
        "Interaktive Projekte und Anschauungsmaterial zum Ausprobieren & Diskutieren.",
      borderColor: "hover:border-yellow-500/50",
    },
    {
      icon: <Coffee className="w-5 h-5 text-fuchsia-400" />,
      title: "Catering & Networking",
      description:
        "Viel Raum für Gespräche, Ideen und Netzwerken – mit Snacks & Getränken.",
      // Slightly smaller title and prevent wrapping on wider screens so it stays in one line
      titleClassName: "text-xl md:text-[1.35rem] md:whitespace-nowrap",
      borderColor: "hover:border-fuchsia-500/50",
    },
  ];

  return (
    <>
        {/* Event intro at the top */}
        {/* Hero + Highlights + Logo Hintergrund als gemeinsamer Block */}
        <div className="relative overflow-hidden dis-bg" style={{ position: 'relative' }}>
          {/* Gradient-Trennlinie oben */}
          <div className="absolute top-0 left-0 w-full h-px z-[2] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent pointer-events-none" />
          {/* Gradient-Trennlinie unten */}
          <div className="absolute bottom-0 left-0 w-full h-px z-[2] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent pointer-events-none" />
          <style>{`
            .dis-bg::before {
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
          <div className="relative z-20 px-4 py-16 md:py-20">
            {/* Separator Gradient & Ambient Glow */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-12 md:gap-14">
              {/* Event intro */}
              <section className="w-full text-center">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-[Rajdhani] uppercase tracking-wide">
                    Was euch <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">erwartet</span>
                  </h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                    Studierende präsentieren innovative Projekte. Kommt vorbei, lernt Menschen kennen, entdeckt Ideen – <span className="text-white border-b border-fuchsia-500">nahbar, ehrlich, ohne Messe-Flair.</span>
                  </p>
                </div>
              </section>

              {/* Highlights in the middle */}
              <section className="w-full">
                <div className="max-w-4xl mx-auto relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, index) => (
                      <InfoTile
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        titleClassName={(item as any).titleClassName}
                      >
                        <p>{item.description}</p>
                      </InfoTile>
                    ))}
                  </div>
                </div>
              </section>

              <section className="w-full">
                <div className="max-w-4xl mx-auto">
                  <div
                    className={`${baseCardClass} cursor-pointer px-6 py-6 md:px-8 md:py-8`}
                    onClick={() => setAfterpartyOpen(prev => !prev)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setAfterpartyOpen(prev => !prev);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={afterpartyOpen}
                    aria-controls="afterparty-cards"
                    aria-label="Afterparty-Infos ein- oder ausblenden"
                    data-cursor="pointer"
                  >
                    <div
                      className="flex w-full flex-col gap-4 text-left transition-colors duration-200 hover:text-white md:flex-row md:items-center md:justify-between"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                          <div className="flex items-center gap-3 min-w-0">
                          <PartyPopper className="w-6 h-6 text-fuchsia-300 drop-shadow-[0_0_12px_rgba(217,70,239,0.35)]" />
                          <h3 className="text-2xl md:text-3xl font-bold text-white font-[Rajdhani] uppercase tracking-wide whitespace-nowrap">
                            Afterparty
                          </h3>
                        </div>
                        <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed md:border-l md:border-white/10 md:pl-4">
                          Nach dem offiziellen Programm geht es entspannt weiter
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center justify-center self-start text-fuchsia-200 md:self-center">
                      <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${afterpartyOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {afterpartyOpen && (
                      <motion.div
                        id="afterparty-cards"
                        onClick={(event) => event.stopPropagation()}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div className={subCardClass}>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-fuchsia-200/80">Ort</p>
                            <p className="mt-2 text-sm text-white">Ernas Séparée unter der Mensa</p>
                            <p className="mt-1 text-xs text-slate-400">Beethovenstraße 15</p>
                          </div>
                          <div className={subCardClass}>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-fuchsia-200/80">Highlights</p>
                            <p className="mt-2 text-sm text-white">Bierpong & Musik</p>
                            <p className="mt-1 text-xs text-slate-400">locker, offen, gemeinsamer Ausklang</p>
                          </div>
                          <div className={subCardClass}>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-fuchsia-200/80">Drinks</p>
                            <p className="mt-2 text-sm text-white">Flaschen-Getränke aller Art</p>
                            <p className="mt-1 text-xs text-slate-400">vor Ort erhältlich</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </section>

            {/* Unternehmen & Neugierige / Wie alles begann */}
            <section className="w-full">
              <div className="max-w-4xl mx-auto">
                <div className={`${baseCardClass} p-8 relative flex flex-col items-center justify-center text-center`}>
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <Lightbulb className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white font-[Rajdhani] uppercase">
                      Wie alles begann
                    </h3>
                  </div>
                  <p className="text-white leading-relaxed text-sm font-light max-w-xl mx-auto">
                    Was im Wintersemester 2023 als Werkschau im Modul Interaction Design begann, hat sich zu einem festen Event-Format entwickelt, das nun jedes Semester von Studierenden kreativ neu erfunden wird.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>



      {/* Rückblick Illuminate & Connect */}
      <div className="max-w-4xl mx-auto">
        <RueckblickCollage />
      </div>

      {/* Anfahrt & Parken (Map) now at the end */}
      <section id="anfahrt-parken" className="py-16 px-4 relative">
        {/* Gradient-Trennlinie oben */}
        <div className="absolute top-0 left-0 w-full h-px z-[2] bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 font-[Rajdhani] uppercase tracking-wide text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-400">Anfahrt & Parken</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,420px)] gap-8 items-center justify-center">
            <div className={`${baseCardClass} w-full p-1`}>
              <div className="h-72 overflow-hidden rounded-[0.95rem] border border-yellow-400/30">
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
            </div>
            <div className="w-full flex justify-center md:justify-center">
              <div className="w-full max-w-md">
                <InfoTile
                  icon={<MapPin className="w-6 h-6 text-yellow-300" />}
                  title="Parken & Anreise"
                >
                  <p>
                    <span className="font-semibold">Parkplatz:</span>{' '}
                    <a
                      href="https://maps.app.goo.gl/ddwN8jvFzULRRXCE8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-yellow-300 hover:text-fuchsia-300 transition-colors underline underline-offset-4"
                      data-cursor="pointer"
                    >
                      Hochschule Aalen – Parkplatz Heimatwinkel
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Adresse:</span> Wellandstraße, 73430 Aalen
                  </p>
                  <p>
                    <span className="font-semibold">Fußweg:</span> ca. 5 – 7 Minuten zum DIS
                  </p>
                </InfoTile>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;