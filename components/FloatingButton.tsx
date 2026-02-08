import * as React from 'react';
import { Pencil } from 'lucide-react';

// Noch dezenterer Glow
const glowStyle = {
  boxShadow:
    '0 0 0 0 rgba(217,70,239,0.0), 0 0 8px 2px rgba(250,204,21,0.10), 0 0 12px 4px rgba(217,70,239,0.14)',
  animation: 'glow-pulse 2.2s ease-in-out infinite',
  background: 'rgba(17, 16, 32, 0.85)', // deckender, dunkler Hintergrund
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
};

const FloatingButton: React.FC = () => (
  <a
    href="https://www.hs-aalen.de/de/pages/b-sc-information-design_ic"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50"
    style={{ background: 'none', backgroundColor: 'transparent' }}
    aria-label="Jetzt zur Anmeldung für Illuminate & Connect"
  >
    <span
      className="flex items-center gap-2 px-5 py-2 rounded-xl border border-white/10 hover:border-fuchsia-500/50 transition-colors shadow-[0_0_6px_rgba(217,70,239,0.10)]"
      style={glowStyle}
    >
      <Pencil className="w-7 h-7 text-fuchsia-400 drop-shadow-[0_0_3px_rgba(217,70,239,0.7)]" />
      <span className="text-fuchsia-300 font-bold text-xs uppercase tracking-wide whitespace-nowrap hidden sm:inline-block">Hier geht's zur Anmeldung</span>
    </span>
    <style>{`
      @keyframes glow-pulse {
        0%, 100% {
          box-shadow:
            0 0 0 0 rgba(217,70,239,0.0),
            0 0 8px 2px rgba(250,204,21,0.10),
            0 0 12px 4px rgba(217,70,239,0.14);
        }
        50% {
          box-shadow:
            0 0 0 0 rgba(217,70,239,0.0),
            0 0 16px 6px rgba(250,204,21,0.18),
            0 0 24px 8px rgba(217,70,239,0.20);
        }
      }
      @media (max-width: 640px) {
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"] {
          bottom: 16px !important;
          right: 16px !important;
        }
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"] span {
          padding-left: 14px !important;
          padding-right: 14px !important;
          padding-top: 8px !important;
          padding-bottom: 8px !important;
        }
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"] svg {
          width: 28px !important;
          height: 28px !important;
        }
      }
      @media (min-width: 641px) {
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"] {
          bottom: 48px !important;
          right: 48px !important;
        }
      }
    `}</style>
  </a>
);

export default FloatingButton;
