import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BigWorks — Software em produção',
  description:
    'Estúdio brasileiro de SaaS: Meu Garçom, BOT BigWorks, Avalie Aí, Minha Foto e mais. Software que roda em produção.',
  metadataBase: new URL('https://site.bigworks.com.br'),
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'BigWorks',
    description: 'Software em produção. SaaS multi-tenant com IA onde faz sentido.',
    url: 'https://site.bigworks.com.br',
    siteName: 'BigWorks',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="font-sans min-h-screen">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
