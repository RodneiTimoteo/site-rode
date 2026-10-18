"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "@/components/common/Logo";
import NavigationLink from "@/components/common/NavigationLink";
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
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border text-foreground transition hover:border-primary/50 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background lg:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[88%] max-w-sm border-border bg-background p-0 text-foreground"
      >
        <SheetHeader className="border-b border-border p-6 pr-14 text-left">
          <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
          <Logo size="sm" />
        </SheetHeader>

        <nav className="flex flex-col gap-2 p-6" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <SheetClose asChild key={item.label}>
              <NavigationLink
                href={item.href}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition hover:bg-foreground/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                activeClassName="bg-accent text-brand-champagne"
              >
                {item.label}
              </NavigationLink>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto border-t border-border p-6">
          <SheetClose asChild>
            <Link
              href={ctaHref}
              target={ctaIsExternal ? "_blank" : undefined}
              rel={ctaIsExternal ? "noopener noreferrer" : undefined}
              className="button-primary min-h-[52px] w-full px-5"
            >
              Solicitar orçamento
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
