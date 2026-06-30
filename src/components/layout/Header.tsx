import Link from "next/link";

import Logo from "@/components/common/Logo";
import Container from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navigation } from "@/data/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#inicio" aria-label="Ir para o início">
          <Logo />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contato"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Fale Conosco
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}