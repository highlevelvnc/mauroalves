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
            "radial-gradient(55% 50% at 80% 0%, rgba(216,190,134,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 0% 100%, rgba(93,128,168,0.4) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
      />

      <div className="container-wide relative py-24 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
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

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-100/85">
            Quatro pacotes pensados para crescer ao ritmo certo, com vídeo,
            social media e tráfego pago num único parceiro. Sem ter de gerir
            várias agências em paralelo.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
        </div>

        <dl
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-8 border-y border-ink-100/10 py-8 sm:grid-cols-4 sm:divide-x sm:divide-ink-100/10"
          data-reveal
          data-reveal-delay="220ms"
        >
          <div className="px-4 text-center sm:px-6">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-100/55">
              Para
            </dt>
            <dd className="mt-2 text-sm font-semibold text-ink-50">
              {CLIENT.name}
            </dd>
            <dd className="text-xs text-ink-100/60">{CLIENT.segment}</dd>
          </div>
          <div className="px-4 text-center sm:px-6">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-100/55">
              Por
            </dt>
            <dd className="mt-2 text-sm font-semibold text-ink-50">
              {AGENCY.name}
            </dd>
            <dd className="text-xs text-ink-100/60">Vinicius Oliveira</dd>
          </div>
          <div className="px-4 text-center sm:px-6">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-100/55">
              Validade
            </dt>
            <dd className="mt-2 text-sm font-semibold text-ink-50">
              {PROPOSAL.validityDays} dias
            </dd>
            <dd className="text-xs text-ink-100/60">a contar de {PROPOSAL.issuedAt}</dd>
          </div>
          <div className="px-4 text-center sm:px-6">
            <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-100/55">
              Primeiros vídeos
            </dt>
            <dd className="mt-2 text-sm font-semibold text-ink-50">
              {PROPOSAL.firstDeliveryBusinessDays} dias úteis
            </dd>
            <dd className="text-xs text-ink-100/60">após assinatura</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
