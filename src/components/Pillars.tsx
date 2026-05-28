import { PILLARS } from "@/lib/constants";

export function Pillars() {
  return (
    <section id="porque" className="bg-ink-50 py-24 sm:py-28">
      <div className="container-wide">
        <div className="max-w-3xl" data-reveal>
          <span className="eyebrow">Porquê esta proposta</span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Vídeo + tráfego pago é a combinação que está hoje a ganhar em
            imobiliária.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
            O mercado mudou. Quem aparece em vídeo, com regularidade e suportado
            por tráfego pago bem segmentado, fica top of mind quando alguém
            pensa em comprar, vender ou arrendar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex h-full flex-col rounded-3xl border border-navy-100 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              data-reveal
              data-reveal-delay={`${i * 80}ms`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-navy-grad font-display text-sm font-bold text-gold-400">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                {p.body}
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-gold-500/50 to-transparent transition group-hover:from-gold-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
