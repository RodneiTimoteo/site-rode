"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "@/components/common/Logo";
import { contactInfo } from "@/data/contact";
import { navigation } from "@/data/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ctaHref = contactInfo.whatsappUrl || "#contato";
const ctaIsExternal = Boolean(contactInfo.whatsappUrl);

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Abrir menu"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 text-foreground transition hover:border-primary/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[88%] max-w-sm border-white/10 bg-[#090909] p-0 text-foreground"
      >
        <SheetHeader className="border-b border-white/10 p-6 pr-14 text-left">
          <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
          <Logo size="md" />
        </SheetHeader>

        <nav className="flex flex-col gap-2 p-6" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link
                href={item.href}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/10 p-6">
          <SheetClose asChild>
            <Link
              href={ctaHref}
              target={ctaIsExternal ? "_blank" : undefined}
              rel={ctaIsExternal ? "noopener noreferrer" : undefined}
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-primary/40 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:border-primary hover:bg-[#D7B86C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              Solicitar orçamento
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
