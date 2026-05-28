import { TRAFFIC_BLOCKS } from "@/lib/constants";

function Dot() {
  return (
    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
  );
}

export function Traffic() {
  return (
    <section id="trafego" className="bg-ink-50 py-24 sm:py-28">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="lg:sticky lg:top-28" data-reveal>
            <span className="eyebrow">Tráfego pago</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Os vídeos não vivem da sorte. Chegam às pessoas certas.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700 sm:text-lg">
              Em paralelo com a produção, lançamos campanhas pagas no Google,
              YouTube, Facebook e Instagram com segmentação detalhada — por
              localização, interesses, comportamento e dados demográficos.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-700 sm:text-lg">
              O objectivo é simples: o conteúdo da sua marca pessoal chega às
              pessoas certas no momento certo, com optimização contínua e
              relatórios claros.
            </p>
          </div>

          <div className="space-y-5">
            {TRAFFIC_BLOCKS.map((block, i) => (
              <article
                key={block.title}
                data-reveal
                data-reveal-delay={`${i * 80}ms`}
                className="rounded-3xl border border-navy-100 bg-white p-7 shadow-soft sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-navy-900 sm:text-2xl">
                    {block.title}
                  </h3>
                  <span className="rounded-full border border-navy-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-700">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-navy-700 sm:text-base">
                  {block.body}
                </p>
                <ul className="mt-5 space-y-3">
                  {block.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm leading-relaxed text-navy-800"
                    >
                      <Dot />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
