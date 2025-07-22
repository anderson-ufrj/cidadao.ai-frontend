import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
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
  title: "Cidadão.AI | Transparência Pública com IA",
  description: "Plataforma revolucionária que democratiza o acesso à análise de dados públicos brasileiros, utilizando IA avançada para detectar anomalias e promover transparência governamental.",
  keywords: "transparência, dados públicos, inteligência artificial, governo, brasil, análise, anomalias",
  authors: [{ name: "Cidadão.AI Team" }],
  creator: "Cidadão.AI",
  publisher: "Cidadão.AI",
  robots: "index, follow",
  openGraph: {
    title: "Cidadão.AI | Transparência Pública com IA",
    description: "Democratizando o acesso à análise de dados públicos brasileiros com IA",
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-all duration-300`}
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)'
        }}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
