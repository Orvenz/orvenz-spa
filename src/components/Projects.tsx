import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projetos" className="section reveal">
      <div className="container">
        <p className="section-tag">Nossos projetos</p>
        <h2>Além de sistemas sob encomenda, criamos produtos próprios</h2>
        <p className="section-intro">
          A Orvenz também investe em projetos próprios — soluções pensadas para nichos específicos
          da nossa região. Acompanhe abaixo o que já está em andamento e o que vem por aí.
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          <div className="project-placeholder">
            <p>
              Novos projetos da Orvenz aparecerão aqui em breve. Tem uma ideia ou um problema que
              poderia virar produto? Conta pra gente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
