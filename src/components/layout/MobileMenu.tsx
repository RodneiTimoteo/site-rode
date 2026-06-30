"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import Logo from "@/components/common/Logo";
import { navigation } from "@/data/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-900 transition hover:bg-slate-100 md:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[85%] max-w-sm p-0">
        <SheetHeader className="border-b border-slate-200 p-6 text-left">
          <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
          <Logo />
        </SheetHeader>

        <nav className="flex flex-col gap-2 p-6">
          {navigation.map((item) => (
            <SheetClose asChild key={item.label}>
              <Link
                href={item.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto border-t border-slate-200 p-6">
          <SheetClose asChild>
            <Link
              href="#contato"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Fale Conosco
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}