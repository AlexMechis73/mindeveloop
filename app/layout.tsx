// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Importiamo il nuovo componente

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MindeveLoop | Architetto di Soluzioni Digitali',
  description: 'Alexis Salgado, Ingegnere esperto in Data Science e Soluzioni Digitali. Supporto le aziende nella trasformazione digitale, convertendo sfide complesse in opportunità di crescita.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Usiamo il nuovo componente Navbar */}
          <Navbar />
          <main>{children}</main>
          <footer className="mt-24 border-t border-gray-800 py-12">
            <div className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} MindeveLoop. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}