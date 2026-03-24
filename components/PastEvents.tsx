
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const images2024 = [
  'Peter_Munz_11_von_33.jpg',
  'Peter_Munz_12_von_33.jpg',
  'Peter_Munz_2_von_8.jpg',
  'Peter_Munz_21_von_33.jpg',
  'Peter_Munz_23_von_33.jpg',
  'Peter_Munz_25_von_33.jpg',
  'Peter_Munz_26_von_33.jpg',
  'Peter_Munz_28_von_33.jpg',
  'Peter_Munz_33_von_33.jpg',
  'Peter_Munz_4_von_33.jpg',
  'Peter_Munz_6_von_33.jpg',
  'Peter_Munz_7_von_33.jpg',
  'Peter_Munz_7_von_8.jpg',
  'Werkschauabend_AndreasStephan-01.jpg',
  'Werkschauabend_AndreasStephan-02.jpg',
  'Werkschauabend_AndreasStephan-03.jpg',
  'Werkschauabend_AndreasStephan-06.jpg',
  'Werkschauabend_AndreasStephan-11.jpg',
  'Werkschauabend_AndreasStephan-12.jpg',
  'Werkschauabend_AndreasStephan-19.jpg',
  'Werkschauabend_AndreasStephan-23.jpg',
  'Werkschauabend_AndreasStephan-25.jpg',
  'Werkschauabend_AndreasStephan-30.jpg',
  'Werkschauabend_AndreasStephan-43.jpg',
  'Werkschauabend_AndreasStephan-45.jpg',
  'Werkschauabend_AndreasStephan-49.jpg',
  'Werkschauabend_AndreasStephan-51.jpg',
  'Werkschauabend_AndreasStephan-61.jpg',
];

const images2025 = [
  '3J7A7976-Verbessert-RR.jpg',
  '3J7A7986-Verbessert-RR.jpg',
  '3J7A7991-Verbessert-RR.jpg',
  '3J7A8005-Verbessert-RR.jpg',
  '3J7A8067-Verbessert-RR.jpg',
  '3J7A8133-Verbessert-RR.jpg',
  '3J7A8194-Verbessert-RR.jpg',
  '3J7A8320-Verbessert-RR.jpg',
  '3J7A8329-Verbessert-RR.jpg',
  '3J7A8370-Verbessert-RR.jpg',
  '3J7A8380-Verbessert-RR.jpg',
  '3J7A8398-Verbessert-RR.jpg',
  '3J7A8431-Verbessert-RR.jpg',
  '3J7A8445-Verbessert-RR.jpg',
  'IandC-4697.jpg',
  'IandC-4726.jpg',
  'IandC-4727.jpg',
  'IandC-4734.jpg',
  'IandC-4739.jpg',
  'IandC-4758.jpg',
  'IandC-4780.jpg',
  'IandC-4811.jpg',
  'IandC-4818.jpg',
  'IandC-4860.jpg',
  'IandC-4883.jpg',
  'IandC-4885.jpg',
  'IandC-4906.jpg',
  'IandC-4917.jpg',
  'IandC-4930.jpg',
];

const PastEvents: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  useEffect(() => {
    document.body.dataset.lightboxOpen = lightboxOpen ? 'true' : 'false';
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      delete document.body.dataset.lightboxOpen;
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  const openLightbox = (img: string) => {
    setSelectedImg(img);
    setLightboxOpen(true);
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Mix images from 2024 and 2025 so the gallery feels like one vernissage
  const mixedImages = React.useMemo(
    () => {
      const result: { year: 2024 | 2025; file: string }[] = [];
      const maxLen = Math.max(images2025.length, images2024.length);

      for (let i = 0; i < maxLen; i += 1) {
        if (images2025[i]) {
          result.push({ year: 2025, file: images2025[i] });
        }
        if (images2024[i]) {
          result.push({ year: 2024, file: images2024[i] });
        }
      }

      return result;
    },
    []
  );

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-32 pb-16">
      <style>{`
        body[data-lightbox-open="true"] button[aria-label="Nach oben scrollen"] {
          opacity: 0;
          pointer-events: none;
          transform: translateY(12px);
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
      `}</style>
      <div className="px-2 md:px-8 mx-auto">
        <div className="mt-8 md:mt-12">
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 0: 2 }}
            className="flex w-full mb-12 gap-8 masonry-grid"
            columnClassName="masonry-column"
          >
            {mixedImages.map((item, index) => (
              <div
                key={`${item.year}-${item.file}`}
                className={`group relative mb-8 cursor-pointer transform transition-transform duration-300 ${
                  index % 3 === 1 ? 'md:mt-6' : index % 3 === 2 ? 'md:-mt-4' : ''
                } hover:scale-[1.015]`}
                onClick={() => openLightbox(`/rueckblick_content/pictures/${item.file}`)}
              >
                <div className="relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-900/60 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-fuchsia-400/30 group-hover:shadow-[0_18px_40px_rgba(2,6,23,0.78),0_0_20px_rgba(217,70,239,0.10)]">
                  <img
                    src={`/rueckblick_content/pictures/${item.file}`}
                    alt={`Vergangenes IandC Event ${item.year}`}
                    className="w-full rounded-[1.35rem] bg-slate-900 object-cover shadow-lg transition-all duration-300 group-hover:scale-[1.01] group-hover:brightness-105 group-hover:saturate-105"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.12),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.10),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_32%,transparent_70%,rgba(0,0,0,0.18))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-white/5 transition-all duration-300 group-hover:ring-fuchsia-300/25" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="absolute left-3 top-3 h-8 w-8 rounded-tl-[0.9rem] border-l-2 border-t-2 border-fuchsia-300/75 shadow-[-4px_-4px_14px_rgba(217,70,239,0.28)]" />
                    <span className="absolute right-3 top-3 h-8 w-8 rounded-tr-[0.9rem] border-r-2 border-t-2 border-yellow-300/70 shadow-[4px_-4px_14px_rgba(250,204,21,0.22)]" />
                    <span className="absolute bottom-3 left-3 h-8 w-8 rounded-bl-[0.9rem] border-b-2 border-l-2 border-yellow-300/70 shadow-[-4px_4px_14px_rgba(250,204,21,0.2)]" />
                    <span className="absolute bottom-3 right-3 h-8 w-8 rounded-br-[0.9rem] border-b-2 border-r-2 border-fuchsia-300/75 shadow-[4px_4px_14px_rgba(217,70,239,0.28)]" />
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
        {/* Lightbox Modal */}
        <AnimatePresence onExitComplete={() => setSelectedImg(null)}>
          {lightboxOpen && selectedImg && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Bildansicht im Vollbild"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <motion.div
                className="w-full px-4 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="relative inline-block max-w-full"
                  onClick={e => e.stopPropagation()}
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={selectedImg}
                    alt="Vergangenes IandC Event groß"
                    className="block w-auto max-w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                  />
                  <motion.button
                    className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 border border-white/30 hover:border-fuchsia-400/70 shadow-lg transition-colors duration-200"
                    onClick={closeLightbox}
                    aria-label="Schließen"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2, delay: 0.08 }}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <span className="flex items-center justify-center w-full h-full leading-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="url(#x-gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-7 h-7"
                      >
                        <defs>
                          <linearGradient
                            id="x-gradient"
                            x1="0"
                            y1="0"
                            x2="24"
                            y2="24"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#f0abfc" />
                            <stop offset="1" stopColor="#fde047" />
                          </linearGradient>
                        </defs>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PastEvents;
