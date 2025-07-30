import { ReactNode } from 'react';
import '@/app/globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { NotesProvider } from '@/contexts/NotesContext';

export const metadata = {
  title: 'Note App',
  description: 'A comprehensive note-taking app built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NotesProvider>
      </body>
    </html>
  );
}