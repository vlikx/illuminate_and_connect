import * as React from 'react';
import { Pencil } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type FloatingButtonVariant = 'inline' | 'floating';

interface FloatingButtonProps {
  variant?: FloatingButtonVariant;
}

// Noch dezenterer Glow
const glowStyle = {
  boxShadow:
    '0 0 0 0 rgba(217,70,239,0.0), 0 0 8px 2px rgba(250,204,21,0.10), 0 0 12px 4px rgba(217,70,239,0.14)',
  animation: 'glow-pulse 2.2s ease-in-out infinite',
  background: 'rgba(17, 16, 32, 0.85)', // deckender, dunkler Hintergrund
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
};

const SCROLL_THRESHOLD_RATIO = 0.35;

const FloatingButton: React.FC<FloatingButtonProps> = ({ variant = 'floating' }) => {
  const [isVisible, setIsVisible] = React.useState(variant === 'inline');

  React.useEffect(() => {
    const handleScroll = () => {
      const pastThreshold = window.scrollY > window.innerHeight * SCROLL_THRESHOLD_RATIO;
      setIsVisible(variant === 'floating' ? pastThreshold : !pastThreshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [variant]);

  const isInline = variant === 'inline';
  const initialAnimation = isInline
    ? { opacity: 0, y: 30, scale: 0.9 }
    : { opacity: 0, x: 16, y: 32, scale: 0.82 };
  const exitAnimation = isInline
    ? { opacity: 0, y: -24, scale: 0.9 }
    : { opacity: 0, x: 16, y: 20, scale: 0.82 };

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        {isVisible && (
          <motion.a
            href="https://www.hs-aalen.de/de/pages/b-sc-information-design_ic"
            target="_blank"
            rel="noopener noreferrer"
            className={isInline ? 'relative z-20 inline-flex' : 'fixed z-50'}
            style={isInline ? undefined : { background: 'none', backgroundColor: 'transparent' }}
            aria-label="Jetzt zur Anmeldung für Illuminate & Connect"
            data-button-variant={variant}
            data-cursor="pointer"
            initial={initialAnimation}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={exitAnimation}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className={`flex items-center gap-2 rounded-xl border border-white/10 hover:border-fuchsia-500/50 transition-colors shadow-[0_0_6px_rgba(217,70,239,0.10)] ${
                isInline
                  ? 'px-6 py-3 text-sm bg-black/35 backdrop-blur-md'
                  : 'px-5 py-2'
              }`}
              style={glowStyle}
            >
              <Pencil className={`${isInline ? 'w-6 h-6' : 'w-7 h-7'} text-fuchsia-400 drop-shadow-[0_0_3px_rgba(217,70,239,0.7)]`} />
              <span className={`text-fuchsia-300 font-bold uppercase tracking-wide whitespace-nowrap ${isInline ? 'text-sm inline-block' : 'text-xs hidden sm:inline-block'}`}>
                Hier geht's zur Anmeldung
              </span>
            </span>
          </motion.a>
        )}
      </AnimatePresence>
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
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"][data-button-variant="floating"] {
          bottom: 56px !important;
          right: 16px !important;
        }
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"][data-button-variant="floating"] span {
          padding-left: 14px !important;
          padding-right: 14px !important;
          padding-top: 8px !important;
          padding-bottom: 8px !important;
        }
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"][data-button-variant="floating"] svg {
          width: 28px !important;
          height: 28px !important;
        }
      }
      @media (min-width: 641px) {
        a[aria-label="Jetzt zur Anmeldung für Illuminate & Connect"][data-button-variant="floating"] {
          bottom: 80px !important;
          right: 48px !important;
        }
      }
    `}</style>
		</>
	);
};

export default FloatingButton;
