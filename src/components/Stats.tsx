const STATS = [
  {
    value: "4",
    label: "pacotes escalonados",
    detail: "de 390€ a 1.490€/mês",
  },
  {
    value: "10",
    label: "dias úteis",
    detail: "até aos primeiros vídeos",
  },
  {
    value: "4",
    label: "plataformas pagas",
    detail: "Meta, Google, YouTube, TikTok",
  },
  {
    value: "0",
    label: "fidelização mínima",
    detail: "cancela quando quiser",
  },
];

export function Stats() {
  return (
    <section className="relative bg-ink-50 py-20 sm:py-24">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <span className="eyebrow">Em números</span>
          <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            Uma proposta clara, do orçamento ao primeiro vídeo no ar.
          </h2>
        </div>

        <dl className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal
              data-reveal-delay={`${i * 70}ms`}
              className="relative px-6 text-center"
            >
              {i > 0 ? (
                <span
                  aria-hidden
                  className="absolute inset-y-3 left-0 hidden w-px bg-gradient-to-b from-transparent via-navy-200 to-transparent lg:block"
                />
              ) : null}
              <dt className="font-display text-5xl font-bold leading-none text-navy-900 sm:text-6xl">
                <span className="bg-gold-grad bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </dt>
              <dd className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy-900">
                {stat.label}
              </dd>
              <dd className="mt-1 text-xs text-navy-600">{stat.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
