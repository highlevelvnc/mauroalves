import { CLIENT, AGENCY, PROPOSAL, WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden bg-navy-grad text-ink-50"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, rgba(216,190,134,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(93,128,168,0.4) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <div className="container-wide relative grid gap-12 py-24 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-36">
        <div data-reveal>
          <span className="eyebrow text-gold-400 border-gold-400/40 bg-gold-400/10">
            Proposta confidencial · {PROPOSAL.issuedAt}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Conteúdo audiovisual e tráfego pago para o{" "}
            <span className="bg-gold-grad bg-clip-text text-transparent">
              {CLIENT.name}
            </span>{" "}
            vender mais imóveis.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-100/85">
            Quatro pacotes pensados para crescer ao ritmo certo, com vídeo,
            social media e tráfego pago num único parceiro. Sem ter de gerir
            várias agências em paralelo.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4"
            data-reveal
            data-reveal-delay="150ms"
          >
            <a href="#planos" className="btn-gold">
              Ver os planos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost border-ink-100/30 bg-ink-50/5 text-ink-50 hover:bg-ink-50/10"
            >
              Falar comigo no WhatsApp
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 text-sm sm:max-w-md">
            <div>
              <dt className="text-ink-100/60 uppercase tracking-[0.18em] text-[11px]">
                Para
              </dt>
              <dd className="mt-1 font-semibold text-ink-50">
                {CLIENT.name} · {CLIENT.segment}
              </dd>
            </div>
            <div>
              <dt className="text-ink-100/60 uppercase tracking-[0.18em] text-[11px]">
                Por
              </dt>
              <dd className="mt-1 font-semibold text-ink-50">{AGENCY.fullName}</dd>
            </div>
            <div>
              <dt className="text-ink-100/60 uppercase tracking-[0.18em] text-[11px]">
                Validade
              </dt>
              <dd className="mt-1 font-semibold text-ink-50">
                {PROPOSAL.validityDays} dias
              </dd>
            </div>
            <div>
              <dt className="text-ink-100/60 uppercase tracking-[0.18em] text-[11px]">
                Início
              </dt>
              <dd className="mt-1 font-semibold text-ink-50">
                Primeiros vídeos em {PROPOSAL.firstDeliveryBusinessDays} dias úteis
              </dd>
            </div>
          </dl>
        </div>

        <div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          data-reveal
          data-reveal-delay="200ms"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-ink-100/15 bg-navy-800/60 shadow-card">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(120% 80% at 50% 0%, rgba(216,190,134,0.18) 0%, transparent 65%), linear-gradient(180deg, rgba(20,37,67,0.7) 0%, rgba(6,15,33,0.85) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink-100/60">
                <span>Reel · 0:00</span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  REC
                </span>
              </div>

              <div>
                <p className="font-display text-3xl font-bold text-ink-50 sm:text-4xl">
                  “O imóvel certo, na mão de quem decide.”
                </p>
                <p className="mt-4 text-sm text-ink-100/70">
                  Marca pessoal · imóveis · captação por WhatsApp
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-grad text-navy-950">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="h-1 flex-1 rounded-full bg-ink-100/10">
                  <div className="h-full w-1/3 rounded-full bg-gold-grad" />
                </div>
                <span className="text-xs tabular-nums text-ink-100/70">0:18</span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-full bg-gold-500/20 blur-2xl lg:block" />
          <div className="pointer-events-none absolute -right-6 -top-6 hidden h-32 w-32 rounded-full bg-royal-500/30 blur-2xl lg:block" />
        </div>
      </div>
    </section>
  );
}
