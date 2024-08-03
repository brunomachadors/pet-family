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
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
