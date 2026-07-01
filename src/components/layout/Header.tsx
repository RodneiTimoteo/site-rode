import Link from "next/link";

import Logo from "@/components/common/Logo";
import Container from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { contactInfo } from "@/data/contact";
import { navigation } from "@/data/navigation";

const ctaHref = contactInfo.whatsappUrl || "#contato";
const ctaIsExternal = Boolean(contactInfo.whatsappUrl);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/88 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-6 lg:h-20">
        <Link
          href="#inicio"
          aria-label="Ir para o início"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <Logo size="sm" />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden flex-1 items-center justify-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-1 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={ctaHref}
            target={ctaIsExternal ? "_blank" : undefined}
            rel={ctaIsExternal ? "noopener noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-primary/40 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_rgba(201,165,92,0.16)] transition hover:border-primary hover:bg-[#D7B86C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Solicitar orçamento
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
