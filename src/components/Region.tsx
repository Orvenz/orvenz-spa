import { site } from "@/data/site";

export default function Region() {
  return (
    <section id="regiao" className="section section-alt reveal">
      <div className="container">
        <p className="section-tag">Onde atuamos</p>
        <h2>Atendimento presencial na região, suporte sempre por perto</h2>
        <p className="region-lead">
          Base em {site.baseCity}, com atendimento presencial nas cidades vizinhas e suporte
          remoto para toda a região.
        </p>
        <ul className="city-list">
          {site.cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
          <li>e cidades próximas</li>
        </ul>
      </div>
    </section>
  );
}
