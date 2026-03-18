import React from 'react';
import { Link } from 'react-router-dom';

const baseCardClass = 'rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg backdrop-blur-sm';

const Imprint: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32 text-slate-100">
      <div className="absolute left-[-6rem] top-28 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-[110px]" />
      <div className="absolute bottom-16 right-[-4rem] h-80 w-80 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-8">
        <section className={`${baseCardClass} p-8 md:p-10`}>
          <Link
            to="/"
            className="inline-flex w-fit items-center text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-200 transition-colors hover:text-yellow-200"
          >
            Zur Startseite
          </Link>

          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-4xl font-bold uppercase tracking-wide text-white font-[Rajdhani] sm:text-5xl">
                Impressum
              </h1>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300">
            Dieses Impressum gilt für die Website von Illuminate &amp; Connect. Die folgenden Angaben
            sollten vor der Veröffentlichung mit deinen tatsächlichen Kontaktdaten ergänzt werden.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className={`${baseCardClass} p-6`}>
            <h2 className="mt-3 text-2xl font-bold uppercase text-white font-[Rajdhani]">Pflichtangaben</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Für ein rechtssicheres Impressum brauchst du in der Regel Name, ladungsfähige Anschrift
              und eine Kontaktmöglichkeit, üblicherweise per E-Mail.
            </p>
          </div>

          <div className={`${baseCardClass} p-6`}>
            <h2 className="mt-3 text-2xl font-bold uppercase text-white font-[Rajdhani]">Verantwortung</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Wenn die Website durch dich betrieben wird, solltest du hier grundsätzlich als Anbieter
              genannt sein, sofern keine Institution ausdrücklich die Betreiberrolle übernimmt.
            </p>
          </div>
        </section>

        <div className="space-y-6">
          <section className={`${baseCardClass} p-8`}>
            <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">1. Angaben gemäß § 5 DDG</h2>
            <div className="mt-5 rounded-xl border border-white/10 bg-black/30 px-5 py-5 text-sm leading-7 text-slate-300">
              <p>Name: Viktor Stang</p>
              <p>Adresse: Dachsweg 49, 73434 Aalen</p>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`${baseCardClass} p-8`}>
              <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">2. Kontakt</h2>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 px-5 py-5 text-sm leading-7 text-slate-300">
                <p>E-Mail: viktor.stang@studmail.htw-aalen.de</p>
              </div>
            </div>

            <div className={`${baseCardClass} p-8`}>
              <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">3. Inhaltlich verantwortlich</h2>
              <div className="mt-5 rounded-xl border border-white/10 bg-black/30 px-5 py-5 text-sm leading-7 text-slate-300">
                <p>Name: Viktor Stang</p>
                <p>Adresse: Dachsweg 49, 73434 Aalen</p>
              </div>
            </div>
          </section>

          <section className={`${baseCardClass} p-8`}>
            <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">4. Haftung für Inhalte</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            </p>
          </section>

          <section className={`${baseCardClass} p-8`}>
            <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">5. Haftung für Links</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Diese Website enthält Links zu externen Websites. Auf deren Inhalte besteht kein
              Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`${baseCardClass} p-8`}>
              <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">6. Urheberrecht</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Die auf dieser Website veröffentlichten Inhalte, Bilder und Werke unterliegen dem jeweils
                anwendbaren Urheberrecht. Eine Verwendung außerhalb der Grenzen des Urheberrechts bedarf
                der vorherigen Zustimmung der jeweiligen Rechteinhaber.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Imprint;