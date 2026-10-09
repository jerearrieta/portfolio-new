"use client";

import { profile } from "@/data/profile";
import { LangProvider, useLang } from "@/i18n/LangProvider";
import Loader from "./Loader";
import Nav from "./Nav";
import Hero from "./Hero";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import SmoothScroll from "./SmoothScroll";
import QrArt from "./QrArt";

function Bolded({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") ? <b key={i}>{part.slice(1, -1)}</b> : part,
      )}
    </>
  );
}

type Item = { title: string; place: string; period: string; detail: string };

function Timeline({ items }: { items: Item[] }) {
  return (
    <ul className="timeline">
      {items.map((it) => (
        <li key={it.title + it.period}>
          <div className="row">
            <h3>{it.title}</h3>
            <span className="eyebrow">{it.period}</span>
          </div>
          <strong className="accent">{it.place}</strong>
          <p>{it.detail}</p>
        </li>
      ))}
    </ul>
  );
}

function Page() {
  const { t } = useLang();
  const linkedin = profile.socials.find((s) => s.name === "LinkedIn")!.url;
  const contactHref = profile.email ? `mailto:${profile.email}` : linkedin;
  const featured = profile.projects[0];

  return (
    <>
      <SmoothScroll />
      <Loader />
      <Nav />
      <main>
        <Hero />

        <section className="section message">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 24 }}>{t.messageEyebrow}</p>
            <p><Bolded text={t.message} /></p>
            <p className="closing">{t.messageClosing}</p>
          </Reveal>
        </section>

        <section id="sobre-mi" className="section split">
          <Reveal>
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2 className="display big-title">{t.educationTitle}</h2>
            <div style={{ marginTop: 32 }}>
              <Timeline items={t.education} />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="now">
              <p className="eyebrow now-title"><span className="dot" />{t.now.eyebrow}</p>
              <ul>
                {t.now.items.map((it) => (
                  <li key={it.label}>
                    <span className="eyebrow">{it.label}</span>
                    <strong>{it.value}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        <section id="proyectos" className="section">
          <Reveal>
            <p className="eyebrow">{t.projectsEyebrow}</p>
            <h2 className="display big-title">
              {t.projectsTitle[0]} <span className="accent-text">{t.projectsTitle[1]}</span>
            </h2>
            <p className="intro">{t.projectsIntro}</p>
          </Reveal>
          <div className="projects-grid">
            {profile.projects.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="destacado" className="featured">
          <Reveal className="featured-inner">
            <div>
              <p className="eyebrow">{t.featured.eyebrow}</p>
              <h2 className="display big-title">{t.featured.title}</h2>
              <p className="featured-desc">{t.featured.description}</p>
              <ul className="featured-points">
                {t.featured.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
                <a className="btn btn-dark" href={featured.repo} target="_blank" rel="noreferrer">{t.code} ↗</a>
              </div>
            </div>
            <QrArt />
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">{t.skillsEyebrow}</p>
            <h2 className="display big-title">{t.skillsTitle}</h2>
          </Reveal>
          <div className="capabilities">
            {t.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.12}>
                <article className={`capability ${i === 0 ? "orange" : "violet"}`}>
                  <span className="display capability-num">0{i + 1}</span>
                  <h3 className="display">{c.title}</h3>
                  <p>{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section split">
          <Reveal>
            <p className="eyebrow">{t.experienceEyebrow}</p>
            <h2 className="display big-title">{t.experienceTitle}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Timeline items={t.experience} />
          </Reveal>
        </section>
      </main>

      <footer id="contacto" className="footer">
        <Reveal>
          <h2 className="display">
            {t.footerTagline[0]} <span className="accent-text">{t.footerTagline[1]}</span>
          </h2>
        </Reveal>
        <a className="btn" href={contactHref} target="_blank" rel="noreferrer" style={{ marginTop: 32 }}>
          {t.contactCta} ↗
        </a>
        <div className="footer-grid">
          <div>
            <p className="eyebrow">{t.footerPages}</p>
            <ul>
              <li><a href="#inicio">{t.nav.home}</a></li>
              <li><a href="#sobre-mi">{t.nav.about}</a></li>
              <li><a href="#proyectos">{t.nav.projects}</a></li>
              <li><a href="#experiencia">{t.nav.experience}</a></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">{t.footerFollow}</p>
            <ul>
              {profile.socials.map((s) => (
                <li key={s.name}><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">{t.footerContact}</p>
            <ul>
              {profile.email && <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>}
              <li><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}. {t.rights}</span>
          <span>{t.builtWith}</span>
        </div>
      </footer>
    </>
  );
}

export default function Site() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  );
}
