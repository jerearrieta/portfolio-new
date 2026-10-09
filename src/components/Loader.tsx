"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/data/profile";
import { useLang } from "@/i18n/LangProvider";

export default function Loader() {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(id);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="display"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t.loading} {profile.firstName}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
