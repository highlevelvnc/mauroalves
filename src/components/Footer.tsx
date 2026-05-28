import { AGENCY, CLIENT, PROPOSAL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 py-12 text-ink-100/70">
      <div className="container-wide grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-base font-semibold text-ink-50">
            {AGENCY.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed">
            Vídeo, tráfego pago e marca pessoal para profissionais que vivem da
            confiança dos seus clientes.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-100/45">
            Proposta
          </p>
          <p className="mt-2 text-sm text-ink-50">{CLIENT.name}</p>
          <p className="mt-1 text-sm">{CLIENT.segment} · {AGENCY.region}</p>
          <p className="mt-3 text-xs">
            Emitida em {PROPOSAL.issuedAt} · Válida {PROPOSAL.validityDays} dias
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-100/45">
            Contactos
          </p>
          <a
            href={`mailto:${AGENCY.email}`}
            className="mt-2 block text-sm text-ink-50 hover:text-gold-400"
          >
            {AGENCY.email}
          </a>
          <a
            href={`tel:${AGENCY.phone.replace(/\s/g, "")}`}
            className="mt-1 block text-sm hover:text-gold-400"
          >
            {AGENCY.phone}
          </a>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-100/45">
            Notas
          </p>
          <p className="mt-2 text-xs leading-relaxed">
            Valores sujeitos a IVA à taxa em vigor. Investimento publicitário
            (Meta Ads e Google Ads) pago directamente à plataforma, não
            incluído na avença.
          </p>
        </div>
      </div>

      <div className="container-wide mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink-100/10 pt-6 text-xs text-ink-100/45 sm:flex-row sm:items-center">
        <span>© {year} {AGENCY.name}. Todos os direitos reservados.</span>
        <span>Documento confidencial — destinado a {CLIENT.name}.</span>
      </div>
    </footer>
  );
}
