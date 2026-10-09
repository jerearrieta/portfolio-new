import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${profile.firstName} ${profile.lastName} | Portafolio`,
  description: "Estudiante de Ciencia de Datos e IA y desarrollador full stack. Estudios, experiencia y proyectos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
