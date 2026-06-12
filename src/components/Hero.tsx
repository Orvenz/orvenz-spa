import { site, whatsappLink, defaultWhatsappMessage } from "@/data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Consultoria de software — {site.baseCity} e região</p>
          <h1>Tecnologia com cara da nossa região</h1>
          <p className="hero-lead">
            A Orvenz é uma consultoria de software: criamos sistemas e aplicativos sob medida para
            resolver problemas do dia a dia de pequenas e médias empresas — sem a distância, a
            burocracia ou as mensalidades inúteis dos softwares genéricos de fora.
          </p>
          <div className="hero-actions">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              Conversar no WhatsApp
            </a>
            <a href="#servicos" className="btn btn-ghost">
              Ver o que fazemos
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 420" className="horizon-svg">
            <g className="court-lines">
              <rect x="40" y="60" width="400" height="260" rx="4" />
              <line x1="40" y1="190" x2="440" y2="190" />
              <line x1="240" y1="60" x2="240" y2="320" />
              <circle cx="240" cy="190" r="46" />
            </g>
            <line x1="0" y1="300" x2="480" y2="300" className="horizon-line" />
            <circle cx="240" cy="300" r="64" className="horizon-sun" />
          </svg>
        </div>
      </div>
    </section>
  );
}
