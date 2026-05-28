import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="processo" className="bg-ink-50 py-24 sm:py-28">
      <div className="container-wide">
        <div className="max-w-3xl" data-reveal>
          <span className="eyebrow">Como trabalhamos</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Do briefing aos resultados, em ciclos mensais.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
            Um processo simples e previsível. Cada mês fecha com balanço e
            arranque do ciclo seguinte, sempre com base nos números reais das
            campanhas.
          </p>
        </div>

        <ol className="relative mt-14 space-y-4 sm:space-y-5">
          <span
            aria-hidden
            className="timeline-rail pointer-events-none absolute left-[27px] top-3 hidden h-[calc(100%-1.5rem)] w-px sm:block"
          />
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.title}
              data-reveal
              data-reveal-delay={`${i * 70}ms`}
              className="group relative flex gap-5 rounded-3xl border border-navy-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card sm:gap-7 sm:p-7"
            >
              <div className="timeline-dot relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy-grad font-display text-sm font-bold text-gold-400">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-navy-900 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700 sm:text-base">
                  {step.body}
                </p>
              </div>
              <span
                aria-hidden
                className="hidden self-center font-display text-xs font-bold uppercase tracking-[0.22em] text-navy-300 transition group-hover:text-gold-500 sm:inline"
              >
                Etapa {i + 1}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
