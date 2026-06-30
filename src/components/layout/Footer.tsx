import Link from "next/link";
import {
  BriefcaseBusiness,
  Camera,
  Code2,
  Play,
} from "lucide-react";

import Logo from "@/components/common/Logo";
import Container from "@/components/layout/Container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";

const socialIcons = {
  instagram: Camera,
  linkedin: BriefcaseBusiness,
  youtube: Play,
  github: Code2,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo className="text-white" />

            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Navegação
            </h2>

            <nav className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">
              Redes sociais
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map(({ name, icon, url }) => {
                const Icon = socialIcons[icon];

                return (
                  <Link
                    key={name}
                    href={url || "#"}
                    aria-label={name}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:border-slate-500 hover:bg-slate-900 hover:text-white"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>

          <p>Desenvolvido com Next.js e Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}