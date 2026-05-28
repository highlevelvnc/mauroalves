import { WHATSAPP_URL, CLIENT, PROPOSAL } from "@/lib/constants";

export function CTA() {
  return (
    <section className="relative bg-navy-grad py-24 text-ink-50 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(45% 60% at 100% 0%, rgba(216,190,134,0.4) 0%, transparent 60%), radial-gradient(40% 60% at 0% 100%, rgba(93,128,168,0.5) 0%, transparent 60%)",
        }}
      />
      <div className="container-wide relative">
        <div
          className="mx-auto max-w-3xl rounded-[2.5rem] border border-ink-100/15 bg-navy-900/45 p-10 backdrop-blur sm:p-14"
          data-reveal
        >
          <span className="eyebrow border-gold-400/40 bg-gold-400/10 text-gold-400">
            Próximo passo
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Vamos preparar o primeiro mês do {CLIENT.firstName}?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-100/80 sm:text-lg">
            Escolha o pacote, marcamos uma reunião curta de alinhamento e em{" "}
            {PROPOSAL.firstDeliveryBusinessDays} dias úteis temos os primeiros
            vídeos prontos e as campanhas no ar.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Avançar pelo WhatsApp
            </a>
            <a
              href="#planos"
              className="btn-ghost border-ink-100/25 bg-ink-50/5 text-ink-50 hover:bg-ink-50/10"
            >
              Rever os planos
            </a>
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-ink-100/55">
            Proposta válida por {PROPOSAL.validityDays} dias a partir de{" "}
            {PROPOSAL.issuedAt}.
          </p>
        </div>
      </div>
    </section>
  );
}
