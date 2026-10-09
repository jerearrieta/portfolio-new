"use client";

import type { Project } from "@/data/profile";
import { useLang } from "@/i18n/LangProvider";

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();
  return (
    <article className={`card theme-${project.theme}`}>
      {project.status === "wip" && <span className="badge">{t.wip}</span>}
      <div className="card-media">
        <div className="card-cover">
          <span className="display card-mark">{project.name}</span>
        </div>
        <div className="card-cover hover">
          <span className="display card-mark">{project.year}</span>
        </div>
        <div className="card-fade" />
      </div>
      <div className="card-body">
        <span className="eyebrow">{project.year}</span>
        <h3 className="display">{project.name}</h3>
        <p>{t.projectText[project.id]}</p>
        <div className="tags">
          {project.stack.map((s) => <span key={s} className="tag">{s}</span>)}
        </div>
        <div className="card-links">
          <a href={project.repo} target="_blank" rel="noreferrer">{t.code} ↗</a>
        </div>
      </div>
    </article>
  );
}
