
import React from "react";
import { Link } from 'react-router-dom';

const video = "/rueckblick_content/videos/Video_Showcase.mp4";

const poster = "/rueckblick_content/pictures/IandC-4727.jpg";

export default function RueckblickVideo() {
  return (
    <section className="w-full py-16">
      <h2 className="text-3xl md:text-4xl font-bold font-[Rajdhani] uppercase text-center mb-10 bg-gradient-to-r from-fuchsia-400 via-yellow-400 to-fuchsia-500 bg-clip-text text-transparent tracking-wider">
        Rückblick Illuminate & Connect
      </h2>
      <div className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-2 shadow-lg backdrop-blur-sm">
        <div className="overflow-hidden rounded-[1rem] bg-black/80">
          <video
            src={video}
            controls
            preload="metadata"
            poster={poster}
            playsInline
            className="w-full h-full object-cover max-h-96"
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          to="/past-events"
          className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-slate-900/60 px-6 py-3 font-bold uppercase tracking-wide text-fuchsia-300 shadow-lg backdrop-blur-sm transition-colors hover:border-fuchsia-500/40 hover:text-yellow-400"
          title="Vergangene Events ansehen"
        >
          <span className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-fuchsia-400"
            >
              <rect x="3" y="3" width="18" height="14" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 17l-5-5a2 2 0 0 0-2.8 0l-5.2 5.2" />
            </svg>
            <span className="whitespace-nowrap text-white">Bilder aus den vergangenen Events ansehen</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
