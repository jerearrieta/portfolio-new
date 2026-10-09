"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LangProvider";
import LangToggle from "./LangToggle";

export default function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const initials = profile.firstName[0] + profile.lastName[0];
  const links = [
    { href: "#inicio", label: t.nav.home },
    { href: "#sobre-mi", label: t.nav.about },
    { href: "#proyectos", label: t.nav.projects },
    { href: "#experiencia", label: t.nav.experience },
    { href: "#contacto", label: t.nav.contact },
  ];
  return (
    <>
      <nav className="nav">
        <a href="#inicio" className="nav-logo display">{initials}</a>
        <div className="nav-right">
          <LangToggle />
          <button className="nav-toggle" onClick={() => setOpen(!open)}>
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="display"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06 }}
              >
                {l.label}
              </motion.a>
            ))}
            <div className="menu-socials">
              {profile.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer">{s.name} ↗</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
