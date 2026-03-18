import React from 'react';
import { Link } from 'react-router-dom';

const baseCardClass = 'rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg backdrop-blur-sm';

const PrivacyPolicy: React.FC = () => {
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
                Datenschutzerklärung
              </h1>
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-slate-300">
            Diese Website dient ausschließlich als Informationsseite für Illuminate &amp; Connect und
            verlinkt auf eine externe Anmeldeseite. Die Gestaltung dieser Datenschutzerklärung folgt
            bewusst dem reduzierten Umfang der Website.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className={`${baseCardClass} p-6`}>
            <h2 className="mt-3 text-2xl font-bold uppercase text-white font-[Rajdhani]">Vercel</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Die Website wird bei Vercel gehostet. Dabei fallen serverseitig technisch notwendige
              Logdaten an, damit die Seite sicher und stabil ausgeliefert werden kann.
            </p>
          </div>

          <div className={`${baseCardClass} p-6`}>
            <h2 className="mt-3 text-2xl font-bold uppercase text-white font-[Rajdhani]">Keine Extras</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Es werden keine Cookies gesetzt, keine Tracking- oder Analyse-Tools eingesetzt und keine
              Formulardaten direkt über diese Website erhoben.
            </p>
          </div>
        </section>

        <div className="space-y-6">
          <section className={`${baseCardClass} p-8`}>
            <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">1. Verantwortliche Stelle</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist der jeweilige Betreiber der
              Website bzw. Veranstalter von Illuminate &amp; Connect. (siehe Impressum)
            </p>
          </section>

          <section className={`${baseCardClass} p-8`}>
            <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">2. Verarbeitung beim Besuch der Website</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Beim Aufruf dieser Website werden technisch erforderliche Informationen verarbeitet, damit
              die Inhalte im Browser ausgeliefert werden können. Die Website wird bei Vercel gehostet.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Der Hosting-Anbieter Vercel erhebt in diesem Zusammenhang Server-Logfiles. Dazu können
              insbesondere folgende Daten gehören:
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">IP-Adresse</div>
              <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">Datum und Uhrzeit des Zugriffs</div>
              <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">abgerufene Seite oder Datei</div>
              <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">Browsertyp und Browserversion</div>
              <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">verwendetes Betriebssystem</div>
              <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-300">Referrer-URL</div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Die Verarbeitung dieser Daten erfolgt zur Gewährleistung der technischen Stabilität,
              Sicherheit und Auslieferung der Website.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`${baseCardClass} p-8`}>
              <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">3. Keine Cookies, kein Tracking</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Auf dieser Website werden keine Cookies gesetzt. Es kommen keine Analyse-, Tracking- oder
                Marketing-Tools zum Einsatz.
              </p>
            </div>

            <div className={`${baseCardClass} p-8`}>
              <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">4. Keine Kontaktformulare</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Auf dieser Website gibt es keine Kontaktformulare und keine direkte Möglichkeit,
                persönliche Daten an den Betreiber zu übermitteln.
              </p>
            </div>
          </section>

          <section className={`${baseCardClass} p-8`}>
            <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">5. Externer Link zur Anmeldung</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Die Website enthält lediglich einen Link zu einer externen Anmeldeseite. Beim Anklicken
              dieses Links verlassen Sie diese Website.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Für die Verarbeitung personenbezogener Daten auf der externen Zielseite ist ausschließlich
              deren Betreiber verantwortlich. Es gelten dort die jeweiligen Datenschutzbestimmungen des
              Anbieters der Anmeldeseite.
            </p>
          </section>

          <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className={`${baseCardClass} p-8`}>
              <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">6. Rechtsgrundlage</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Soweit bei der rein technischen Bereitstellung dieser Website personenbezogene Daten verarbeitet
                werden, erfolgt dies auf Grundlage des berechtigten Interesses an einer sicheren und stabilen
                Bereitstellung der Website gemäß Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div className={`${baseCardClass} p-8`}>
              <h2 className="text-2xl font-bold uppercase text-white font-[Rajdhani]">7. Weitere Informationen zu Vercel</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Weitere Informationen zur Datenverarbeitung durch Vercel finden Sie in der Datenschutzerklärung
                von Vercel: https://vercel.com/legal/privacy-policy
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;