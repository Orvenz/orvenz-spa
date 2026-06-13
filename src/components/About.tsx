export default function About() {
  return (
    <section id="sobre" className="section reveal">
      <div className="container about-grid">
        <div className="about-text">
          <p className="section-tag">Sobre a Orvenz</p>
          <h2>Feita por quem é daqui, para negócios daqui</h2>
          <p>
            A Orvenz nasceu em Novo Horizonte-SP com uma ideia simples: pequenas e médias empresas
            da região enfrentam, todos os dias, problemas que um software bem pensado resolveria —
            mas quase nunca encontram alguém disposto a olhar de perto para essas dores
            específicas.
          </p>
          <p>
            Em vez de empacotar um sistema genérico e torcer para que sirva, a gente senta com
            você, entende como o seu negócio funciona na prática e constrói (ou ajusta) uma
            solução para o problema certo — sem módulos que você nunca vai usar e sem depender de
            suporte do outro lado do país.
          </p>
        </div>
        <aside className="about-highlight">
          <p className="quote-mark">&ldquo;</p>
          <p className="highlight-text">
            O objetivo não é vender software. É resolver aquele problema que faz você perder tempo
            (ou dinheiro) toda semana — e que, às vezes, tem solução mais simples do que parece.
          </p>
        </aside>
      </div>
    </section>
  );
}
