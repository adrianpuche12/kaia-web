import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import SplashScreen from '@/components/shared/SplashScreen';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <SplashScreen />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
