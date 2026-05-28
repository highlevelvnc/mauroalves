import { PLANS, WHATSAPP_URL } from "@/lib/constants";

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 flex-shrink-0"
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
            Quatro pacotes. O mesmo cuidado em todos.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-100/75 sm:text-lg">
            Comece por onde fizer sentido para a fase do negócio do{" "}
            <span className="text-ink-50">Mauro</span>. Pode subir de pacote
            sempre que quiser, sem rupturas no acompanhamento.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <article
              key={plan.id}
              data-reveal
              data-reveal-delay={`${i * 80}ms`}
              className={`plan-card ${
                plan.highlight ? "is-highlight" : ""
              } relative flex h-full flex-col rounded-[1.75rem] border p-6 shadow-card sm:p-7 ${
                plan.highlight
                  ? "border-gold-500/60 bg-gradient-to-br from-navy-700/85 via-navy-800/85 to-navy-900/85 backdrop-blur"
                  : "border-ink-100/15 bg-navy-900/40 backdrop-blur"
              }`}
            >
              {plan.highlight ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 50% 0%, rgba(216,190,134,0.18), transparent 70%)",
                  }}
                />
              ) : null}
              {plan.badge ? (
                <span
                  className={`absolute -top-3 right-6 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] shadow-soft ${
                    plan.highlight
                      ? "bg-gold-grad text-navy-950"
                      : "bg-ink-50 text-navy-900"
                  }`}
                >
                  {plan.badge}
                </span>
              ) : null}

              <h3 className="font-display text-xl font-bold text-ink-50">
                {plan.name}
              </h3>

              <p className="mt-2 min-h-[3rem] text-xs leading-relaxed text-ink-100/70">
                {plan.tagline}
              </p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">
                  {plan.price}
                </span>
                <span className="text-xs text-ink-100/55">{plan.cadence}</span>
              </div>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-ink-100/45">
                Sem fidelização. Facturação mensal.
              </p>

              <div
                className="mt-5 mb-2 h-px w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(216,190,134,0.45), transparent)",
                }}
              />

              <ul className="mt-3 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex gap-2.5 text-xs">
                    <span
                      className={`mt-0.5 ${
                        plan.highlight ? "text-gold-400" : "text-ink-100/75"
                      }`}
                    >
                      <CheckIcon />
                    </span>
                    <span>
                      <span className="block font-semibold leading-snug text-ink-50">
                        {f.label}
                      </span>
                      {f.detail ? (
                        <span className="mt-0.5 block text-[11px] leading-snug text-ink-100/55">
                          {f.detail}
                        </span>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-[11px] leading-snug text-ink-100/60">
                <span className="font-semibold uppercase tracking-[0.15em] text-gold-400">
                  Ideal
                </span>
                <br />
                {plan.bestFor}
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  plan.highlight
                    ? "btn-gold mt-5 w-full text-xs"
                    : "btn-ghost mt-5 w-full border-ink-100/25 bg-ink-50/5 text-xs text-ink-50 hover:bg-ink-50/10"
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
          Valores sujeitos a IVA · Investimento publicitário pago directamente
          à plataforma, não incluído na avença
        </p>
      </div>
    </section>
  );
}
