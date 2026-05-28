import { ADDONS, WHATSAPP_URL } from "@/lib/constants";

function PlusIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Addons() {
  return (
    <section id="extras" className="bg-ink-100 py-24 sm:py-28">
      <div className="container-wide">
        <div
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
          data-reveal
        >
          <div className="max-w-2xl">
            <span className="eyebrow">Extras à medida</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Acrescente o que precisar, quando precisar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
              Há meses em que faz sentido reforçar a produção ou criar um
              activo específico. Estes extras somam ao pacote escolhido sem
              alterar a avença mensal.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Pedir orçamento de extras
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADDONS.map((addon, i) => (
            <article
              key={addon.title}
              data-reveal
              data-reveal-delay={`${i * 60}ms`}
              className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  {addon.title}
                </h3>
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-grad text-gold-400 transition group-hover:bg-navy-900">
                  <PlusIcon />
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
                {addon.description}
              </p>
              <div className="mt-5 flex items-baseline gap-2 border-t border-navy-100 pt-4">
                <span className="font-display text-xl font-bold text-navy-900">
                  {addon.price}
                </span>
                <span className="text-xs text-navy-600">{addon.cadence}</span>
              </div>
            </article>
          ))}
        </div>

        <p
          className="mt-10 text-center text-xs uppercase tracking-[0.22em] text-navy-600"
          data-reveal
        >
          Valores sujeitos a IVA · Outros extras à medida, basta dizer o que precisa
        </p>
      </div>
    </section>
  );
}
