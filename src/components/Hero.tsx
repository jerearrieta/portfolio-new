"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LangProvider";

export default function Hero() {
  const { t } = useLang();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const photoY = useTransform(scrollY, [0, 600], [0, -80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const line = {
    hidden: { y: "110%" },
    show: (i: number) => ({ y: 0, transition: { delay: 1.5 + i * 0.12, duration: 1, ease: [0.2, 0.8, 0.2, 1] as const } }),
  };
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow orange" />
      <div className="hero-glow violet" />
      <motion.div
        className="hero-photo"
        style={{ y: photoY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <img src={profile.photo} alt={`${profile.firstName} ${profile.lastName}`} />
      </motion.div>
      <motion.div className="hero-text" style={{ y, opacity }}>
        <p className="eyebrow">{t.tagline}</p>
        <h1 className="display">
          {[profile.firstName, profile.lastName].map((w, i) => (
            <span key={w} className="line">
              <motion.span
                className={i === 1 ? "accent-text" : undefined}
                style={{ display: "block" }}
                variants={line}
                initial="hidden"
                animate="show"
                custom={i}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>
        <div className="hero-meta">
          <h2>{t.role}</h2>
          <a href="#destacado" className="hero-chip">
            <span className="dot" />
            <span className="eyebrow">{t.currentGoal.label}</span>
            <strong>{t.currentGoal.value}</strong>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
