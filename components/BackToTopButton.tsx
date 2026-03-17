import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Nach oben scrollen"
      className="fixed z-40 bottom-6 left-4 md:bottom-10 md:left-10 group"
    >
      <span className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 bg-black shadow-[0_0_16px_rgba(15,23,42,0.9)] hover:border-fuchsia-500/70 hover:shadow-[0_0_22px_rgba(217,70,239,0.65)] transition-all duration-200">
        <ArrowUp className="w-5 h-5 text-slate-200 group-hover:text-fuchsia-300" />
      </span>
    </button>
  );
};

export default BackToTopButton;
