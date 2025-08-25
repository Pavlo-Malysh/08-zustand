import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/Header'
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteHub - Your Personal Notes Organizer",
  description: "NoteHub is a simple and intuitive platform for creating, searching, and organizing personal notes.With a clean design and structured layout, it helps you stay focused on what matters most.",
  openGraph: {
    title: 'NoteHub - Your Personal Notes Organizer',
    description: 'NoteHub – a modern platform to create, organize, and manage your notes with ease.',
    url: 'https://08-zustand-2id0t83qf-pavlos-projects-5ce3b785.vercel.app/',
    siteName: 'NoteHub',
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub logo",
        type: 'website',
      }
    ]
  }
};

export default function RootLayout({
  children, modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TanStackProvider>
          <Header />
          {children}

          <Footer />
          <div id="modal-root"> {modal}</div>
        </TanStackProvider>

      </body>
    </html>
  );
}
