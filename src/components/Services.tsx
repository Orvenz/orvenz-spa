const SERVICES = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Antes de falar em sistema, a gente entende o problema. Marcamos uma conversa (presencial ou remota) para mapear onde o seu tempo — ou dinheiro — está se perdendo.",
  },
  {
    number: "02",
    title: "Sistemas sob medida",
    description:
      "Controle de estoque, agendamentos, pedidos, clientes e financeiro — construído do jeito que o seu negócio realmente funciona, não do jeito que um sistema genérico impõe.",
  },
  {
    number: "03",
    title: "Aplicativos personalizados",
    description:
      "Quando o problema pede um app próprio — para gestão, para clientes ou para um nicho específico, como o Clipofy para quadras esportivas — projetamos e desenvolvemos do zero, com o seu negócio no centro.",
  },
  {
    number: "04",
    title: "Manutenção e suporte contínuo",
    description:
      "Depois da entrega, a gente continua por perto: ajustes, melhorias e suporte falando direto com quem desenvolveu o sistema — sem fila de atendimento.",
  },
  {
    number: "05",
    title: "Presença digital para pequenos negócios",
    description:
      "Site simples, Google Meu Negócio configurado e primeiros passos online para quem ainda não tem isso organizado.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section section-alt">
      <div className="container">
        <p className="section-tag">O que fazemos</p>
        <h2>Soluções sob medida, do diagnóstico ao suporte</h2>

        <ol className="service-list">
          {SERVICES.map((service) => (
            <li className="service-item" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
