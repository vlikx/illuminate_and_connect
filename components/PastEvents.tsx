
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

const images2024 = [
  'Peter_Munz (11 von 33).jpg',
  'Peter_Munz (12 von 33).jpg',
  'Peter_Munz (2 von 8).jpg',
  'Peter_Munz (21 von 33).jpg',
  'Peter_Munz (23 von 33).jpg',
  'Peter_Munz (25 von 33).jpg',
  'Peter_Munz (26 von 33).jpg',
  'Peter_Munz (28 von 33).jpg',
  'Peter_Munz (32 von 33).jpg',
  'Peter_Munz (33 von 33).jpg',
  'Peter_Munz (4 von 33).jpg',
  'Peter_Munz (6 von 33).jpg',
  'Peter_Munz (7 von 33).jpg',
  'Peter_Munz (7 von 8).jpg',
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
  '3J7A8427-Verbessert-RR.jpg',
  '3J7A8431-Verbessert-RR.jpg',
  '3J7A8445-Verbessert-RR.jpg',
  'I&C-4697.jpg',
  'I&C-4726.jpg',
  'I&C-4727.jpg',
  'I&C-4734.jpg',
  'I&C-4739.jpg',
  'I&C-4758.jpg',
  'I&C-4780.jpg',
  'I&C-4811.jpg',
  'I&C-4818.jpg',
  'I&C-4860.jpg',
  'I&C-4883.jpg',
  'I&C-4885.jpg',
  'I&C-4906.jpg',
  'I&C-4917.jpg',
  'I&C-4930.jpg',
];

const PastEvents: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const openLightbox = (img: string) => {
    setSelectedImg(img);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImg(null);
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="w-full px-2 md:px-8 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 font-[Rajdhani] uppercase tracking-wide text-center bg-gradient-to-r from-fuchsia-400 to-yellow-400 bg-clip-text text-transparent whitespace-nowrap">
          Vergangene Illuminate & Connect Events
        </h1>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Illuminate & Connect 2025</h2>
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
            className="flex w-full mb-12 gap-8"
            columnClassName="masonry-column"
          >
            {images2025.map((img) => (
              <img
                key={img}
                src={`/rueckblick_content/pictures/I&C 2025/${img}`}
                alt="Vergangenes I&C Event 2025"
                className="rounded-xl shadow-md object-cover w-full mb-8 bg-slate-800 cursor-pointer hover:scale-105 transition-transform duration-200"
                loading="lazy"
                onClick={() => openLightbox(`/I&C 2025/${img}`)}
              />
            ))}
          </Masonry>
          <h2 className="text-2xl font-bold mb-4 text-center">Illuminate & Connect 2024</h2>
          <Masonry
            breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
            className="flex w-full gap-8"
            columnClassName="masonry-column"
          >
            {images2024.map((img) => (
              <img
                key={img}
                src={`/rueckblick_content/pictures/I&C 2024/${img}`}
                alt="Vergangenes I&C Event 2024"
                className="rounded-xl shadow-md object-cover w-full mb-8 bg-slate-800 cursor-pointer hover:scale-105 transition-transform duration-200"
                loading="lazy"
                onClick={() => openLightbox(`/I&C 2024/${img}`)}
              />
            ))}
          </Masonry>
        </div>
        {/* Lightbox Modal */}
        {lightboxOpen && selectedImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <div
              className="relative flex flex-col items-center justify-center animate-fadeInScale"
              style={{ maxWidth: '60vw', maxHeight: '60vh' }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={`/rueckblick_content/pictures${selectedImg}`}
                alt="Vergangenes I&C Event groß"
                className="rounded-xl shadow-2xl w-auto h-auto object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
              <button
                className="absolute flex items-center justify-center w-12 h-12 bg-transparent border-none shadow-none p-0 z-50"
                style={{
                  top: '-96px',
                  right: '-64px',
                  cursor: 'pointer',
                }}
                onClick={closeLightbox}
                aria-label="Schließen"
              >
                <span className="flex items-center justify-center w-full h-full leading-none">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#x-gradient)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                    <defs>
                      <linearGradient id="x-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f0abfc" />
                        <stop offset="1" stopColor="#fde047" />
                      </linearGradient>
                    </defs>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
              </button>
            </div>
            <style>{`
              @keyframes fadeInScale {
                0% { opacity: 0; transform: scale(0.95); }
                100% { opacity: 1; transform: scale(1); }
              }
              .animate-fadeInScale {
                animation: fadeInScale 0.25s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </div>
    </div>
  );
};

export default PastEvents;
