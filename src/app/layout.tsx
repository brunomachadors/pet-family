import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/Navbar';

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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
