import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starter Next Premium",
  description: "Template profissional desenvolvido com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${geist.className}
          bg-white
          text-slate-900
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}