import { PLANS, WHATSAPP_URL } from "@/lib/constants";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  );
}

export function Plans() {
  return (
    <section
      id="planos"
      className="relative bg-navy-grad py-24 text-ink-50 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <span className="eyebrow border-gold-400/40 bg-gold-400/10 text-gold-400">
            Investimento
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Dois pacotes. Mesmo cuidado.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-100/75 sm:text-lg">
            Pode começar pela produção de vídeo com tráfego pago, ou ir
            directamente para a solução completa que inclui social media, site
            e SEO num único parceiro.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PLANS.map((plan, i) => (
            <article
              key={plan.id}
              data-reveal
              data-reveal-delay={`${i * 100}ms`}
              className={`relative flex h-full flex-col rounded-[2rem] border p-8 shadow-card sm:p-10 ${
                plan.highlight
                  ? "border-gold-500/60 bg-gradient-to-br from-navy-700/80 via-navy-800/80 to-navy-900/80 backdrop-blur"
                  : "border-ink-100/15 bg-navy-900/40 backdrop-blur"
              }`}
            >
              {plan.badge ? (
                <span className="absolute -top-3 right-8 inline-flex items-center rounded-full bg-gold-grad px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-navy-950 shadow-soft">
                  {plan.badge}
                </span>
              ) : null}

              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold text-ink-50">
                  {plan.name}
                </h3>
                {plan.highlight ? (
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
                    Recomendado
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-100/80">
                {plan.tagline}
              </p>

              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-ink-50">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-100/60">{plan.cadence}</span>
              </div>
              <p className="mt-1 text-xs text-ink-100/55">
                Sem fidelização mínima. Facturação mensal.
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex gap-3 text-sm">
                    <span
                      className={`mt-0.5 ${
                        plan.highlight ? "text-gold-400" : "text-ink-100/80"
                      }`}
                    >
                      <CheckIcon />
                    </span>
                    <span>
                      <span className="block font-semibold text-ink-50">
                        {f.label}
                      </span>
                      {f.detail ? (
                        <span className="mt-0.5 block text-xs leading-relaxed text-ink-100/60">
                          {f.detail}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  plan.highlight
                    ? "btn-gold mt-10 w-full"
                    : "btn-ghost mt-10 w-full border-ink-100/25 bg-ink-50/5 text-ink-50 hover:bg-ink-50/10"
                }
              >
                {plan.ctaLabel}
              </a>
            </article>
          ))}
        </div>

        <p
          className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-ink-100/55"
          data-reveal
        >
          Valores sujeitos a IVA à taxa em vigor · Investimento publicitário pago à plataforma não incluído
        </p>
      </div>
    </section>
  );
}
