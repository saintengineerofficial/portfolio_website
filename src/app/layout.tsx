import type { Metadata } from "next";
import { Inter, Cagliostro } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";


const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const cagliostro = Cagliostro({ subsets: ['latin'], variable: '--font-serif', weight: ['400'] })

export const metadata: Metadata = {
  title: "Saintengineerofficial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, cagliostro.variable, 'bg-gray-900 text-white antialiased font-sans')}>{children}</body>
    </html>
  );
}
