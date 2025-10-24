import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaia - Tu asistente personal inteligente por voz",
  description: "Gestiona tu vida diaria con comandos de voz naturales. Eventos, recordatorios, alarmas y más con IA contextual. Disponible para Android.",
  keywords: ["asistente personal", "voz", "IA", "agenda", "eventos", "recordatorios", "alarmas", "android", "app"],
  authors: [{ name: "Jorge Adrián Pucheta" }],
  creator: "Jorge Adrián Pucheta",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://kaia.com",
    title: "Kaia - Tu asistente personal inteligente por voz",
    description: "Gestiona tu vida diaria con comandos de voz naturales. Eventos, recordatorios, alarmas y más con IA contextual.",
    siteName: "Kaia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaia - Tu asistente personal inteligente por voz",
    description: "Gestiona tu vida diaria con comandos de voz naturales. Eventos, recordatorios, alarmas y más con IA contextual.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
