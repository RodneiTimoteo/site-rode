import type { ReactNode } from "react";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageIntro from "@/components/layout/PageIntro";

interface InternalPageProps {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}

export default function InternalPage({
  eyebrow,
  title,
  description,
  children,
}: InternalPageProps) {
  return (
    <>
      <Header />
      <main id="conteudo-principal">
        <PageIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {children}
      </main>
      <Footer />
    </>
  );
}
