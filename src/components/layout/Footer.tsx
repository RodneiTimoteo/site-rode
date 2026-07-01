import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import Logo from "@/components/common/Logo";
import Container from "@/components/layout/Container";
import { contactInfo } from "@/data/contact";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/12 bg-[#050505] text-foreground">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.8fr_1fr] lg:gap-14">
          <div>
            <Logo size="lg" />

            <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
              {siteConfig.description}
            </p>

            <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground/80">
              {contactInfo.serviceText}
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Navegação
            </h2>

            <nav className="mt-5 flex flex-col gap-3" aria-label="Navegação do rodapé">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit rounded-md text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Contato
            </h2>

            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              {contactInfo.whatsappUrl && (
                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                >
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{contactInfo.phone}</span>
                </a>
              )}

              <a
                href={contactInfo.emailUrl}
                className="flex items-center gap-3 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </a>

              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{siteConfig.address.city}, Pernambuco</span>
              </p>
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {socialLinks.map(({ name, url, username }) => (
                  <Link
                    key={name}
                    href={url}
                    aria-label={`Abrir ${name} da RODE em uma nova aba`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 px-3 text-sm font-medium text-muted-foreground transition hover:border-primary/50 hover:bg-white/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                  >
                    <span>{username || name}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted-foreground/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>

          <p>Presença digital e automações para negócios em todo o Brasil.</p>
        </div>
      </Container>
    </footer>
  );
}
