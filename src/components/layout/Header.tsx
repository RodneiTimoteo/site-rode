import Link from "next/link";

import Logo from "@/components/common/Logo";
import NavigationLink from "@/components/common/NavigationLink";
import Container from "@/components/layout/Container";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { contactInfo } from "@/data/contact";
import { navigation } from "@/data/navigation";

const ctaHref = contactInfo.whatsappUrl || "#contato";
const ctaIsExternal = Boolean(contactInfo.whatsappUrl);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-header backdrop-blur-md">
      <Container className="flex h-[76px] items-center justify-between gap-4 lg:h-[100px] lg:gap-8">
        <Link
          href="/"
          aria-label="Ir para o início"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span className="sm:hidden">
            <Logo size="sm" priority />
          </span>
          <span className="hidden sm:inline-flex xl:hidden">
            <Logo size="md" priority />
          </span>
          <span className="hidden xl:inline-flex">
            <Logo size="lg" priority />
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden flex-1 items-center justify-center gap-4 xl:gap-7 2xl:gap-8 lg:flex"
        >
          {navigation.map((item) => (
            <NavigationLink
              key={item.label}
              href={item.href}
              className="nav-link text-[0.94rem] xl:text-base"
            >
              {item.label}
            </NavigationLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={ctaHref}
            target={ctaIsExternal ? "_blank" : undefined}
            rel={ctaIsExternal ? "noopener noreferrer" : undefined}
            className="button-primary min-h-[54px] whitespace-nowrap px-7 text-[0.95rem] xl:px-8"
          >
            Solicitar orçamento
          </Link>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
