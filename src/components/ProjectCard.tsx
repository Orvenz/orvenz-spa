import type { Project } from "@/data/projects";
import { whatsappLink } from "@/data/site";
import ClipofyVisual from "./ClipofyVisual";

const VISUALS: Record<NonNullable<Project["visual"]>, React.ComponentType> = {
  clipofy: ClipofyVisual,
};

export default function ProjectCard({ project }: { project: Project }) {
  if (project.featured) {
    const Visual = project.visual ? VISUALS[project.visual] : null;

    return (
      <article className="project-featured" id={project.slug}>
        <div className="project-grid">
          <div className="project-text">
            <span className="project-status">{project.status}</span>
            <h3>
              {project.name} — {project.tagline}
            </h3>
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {project.cta && (
              <a
                href={whatsappLink(project.cta.whatsappMessage)}
                className="btn btn-primary"
                target="_blank"
                rel="noopener"
              >
                {project.cta.label}
              </a>
            )}
          </div>
          {Visual && <Visual />}
        </div>
      </article>
    );
  }

  return (
    <article className="project-simple" id={project.slug}>
      <span className="project-status">{project.status}</span>
      <h3>
        {project.name} — {project.tagline}
      </h3>
      {project.description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {project.cta && (
        <a
          href={whatsappLink(project.cta.whatsappMessage)}
          className="btn btn-primary"
          target="_blank"
          rel="noopener"
        >
          {project.cta.label}
        </a>
      )}
    </article>
  );
}
