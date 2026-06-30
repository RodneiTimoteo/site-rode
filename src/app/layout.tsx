import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import "./globals.css";

const fontFamily =
  'Inter, "Segoe UI", "Helvetica Neue", Arial, sans-serif';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
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
          bg-white
          text-slate-900
          antialiased
        `}
        style={{ fontFamily }}
      >
        {children}
      </body>
    </html>
  );
}
