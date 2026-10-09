"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { content, type Content, type Lang } from "@/data/profile";

const LangContext = createContext<{ lang: Lang; t: Content; setLang: (l: Lang) => void }>({
  lang: "es",
  t: content.es,
  setLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("lang");
    } catch {}
    if (saved === "es" || saved === "en") setLangState(saved);
    else if (!navigator.language.toLowerCase().startsWith("es")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  return <LangContext.Provider value={{ lang, t: content[lang], setLang }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
