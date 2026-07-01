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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/92 shadow-[0_18px_50px_rgba(0,0,0,0.26)] backdrop-blur-md">
      <Container className="flex h-[80px] items-center justify-between gap-4 lg:h-[108px] lg:gap-11">
        <Link
          href="#inicio"
          aria-label="Ir para o início"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <Logo size="sm" className="sm:hidden" />
          <Logo size="md" className="hidden sm:inline-flex xl:hidden" />
          <Logo size="lg" className="hidden xl:inline-flex" />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden flex-1 items-center justify-center gap-6 xl:gap-10 2xl:gap-12 lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-2 py-2.5 text-base font-medium text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background xl:text-[1.06rem]"
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
            className="inline-flex min-h-[56px] items-center justify-center rounded-xl border border-primary/40 bg-primary px-6 py-3.5 text-[0.96rem] font-semibold text-primary-foreground shadow-[0_14px_36px_rgba(201,165,92,0.2)] transition hover:border-primary hover:bg-[#D7B86C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background xl:px-7"
          >
            Solicitar orçamento
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
