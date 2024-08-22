import React from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import NavBarSwitcher from './components/NavbarSwitcher';
import { Footer } from './components/Footer/style';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'PET FAMILY',
  description: 'Site para ajudar a gerir toda a rotina e cuidados do seu pet',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link
            rel="icon"
            href="/icon-192x192.png"
            type="image/png"
            sizes="192x192"
          />
          <link
            rel="icon"
            href="/icon-512x512.png"
            type="image/png"
            sizes="512x512"
          />
        </head>
        <body>
          <NavBarSwitcher />
          <main>{children}</main>
          <Footer>
            <p>&copy; 2024 PET FAMILY. Todos os direitos reservados.</p>
          </Footer>
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
