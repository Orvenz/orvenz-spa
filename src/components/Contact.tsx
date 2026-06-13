import { site, whatsappLink, defaultWhatsappMessage } from "@/data/site";

export default function Contact() {
  return (
    <section id="contato" className="section section-alt reveal">
      <div className="container contact-grid">
        <div>
          <p className="section-tag">Vamos conversar?</p>
          <h2>Conta pra gente qual é a dor do seu negócio</h2>
          <p>
            Pode ser uma planilha que já não dá mais conta do recado, um caderno de agendamentos
            ou um processo que todo mundo na empresa sabe que &quot;podia ser mais fácil&quot;.
            Manda uma mensagem e vamos conversar — sem compromisso.
          </p>

          <ol className="steps-list">
            <li>
              <strong>1. Você entra em contato</strong> pelo WhatsApp ou e-mail.
            </li>
            <li>
              <strong>2. Marcamos um diagnóstico gratuito</strong>, presencial ou remoto.
            </li>
            <li>
              <strong>3. Mostramos um caminho possível</strong>, com prazo e valor claros.
            </li>
          </ol>
        </div>

        <div className="contact-cards">
          <a
            className="contact-card"
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener"
          >
            <span className="contact-label">WhatsApp</span>
            <span className="contact-value">{site.phoneDisplay}</span>
          </a>
          <a className="contact-card" href={`mailto:${site.email}`}>
            <span className="contact-label">E-mail</span>
            <span className="contact-value">{site.email}</span>
          </a>
          <div className="contact-card contact-card-static">
            <span className="contact-label">Atendimento</span>
            <span className="contact-value">{site.baseCity} e região</span>
          </div>
        </div>
      </div>
    </section>
  );
}
