"use client";

import { motion } from "motion/react";

// QR decorativo (no escaneable) para la sección del proyecto destacado.
const N = 21;

function isFinder(x: number, y: number) {
  const inBox = (ox: number, oy: number) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
  return inBox(0, 0) || inBox(N - 7, 0) || inBox(0, N - 7);
}

function finderOn(x: number, y: number) {
  const lx = x >= N - 7 ? x - (N - 7) : x;
  const ly = y >= N - 7 ? y - (N - 7) : y;
  const edge = lx === 0 || ly === 0 || lx === 6 || ly === 6;
  const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
  return edge || core;
}

const cells = Array.from({ length: N * N }, (_, i) => {
  const x = i % N;
  const y = Math.floor(i / N);
  if (isFinder(x, y)) return finderOn(x, y);
  return ((x * 7 + y * 13 + x * y * 3) % 5) < 2;
});

export default function QrArt() {
  return (
    <div className="qr" aria-hidden>
      {cells.map((on, i) => (
        <motion.span
          key={i}
          className={on ? "on" : undefined}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: ((i % N) + Math.floor(i / N)) * 0.02, duration: 0.3 }}
        />
      ))}
      <div className="qr-scan" />
    </div>
  );
}
