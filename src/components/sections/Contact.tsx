import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { contactInfo } from "@/data/contact";

export default function Contact() {
  return (
    <Section id="contato" className="bg-slate-50">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionTitle
            eyebrow="Contato"
            title="Vamos conversar sobre o seu próximo projeto."
            description="Entre em contato pelos canais abaixo ou envie uma mensagem pelo formulário."
          />

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 text-slate-700 transition hover:text-slate-950"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm text-slate-500">E-mail</span>
                <span className="font-medium">{contactInfo.email}</span>
              </span>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-4 text-slate-700 transition hover:text-slate-950"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm text-slate-500">Telefone</span>
                <span className="font-medium">{contactInfo.phone}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 text-slate-700">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm text-slate-500">Localização</span>
                <span className="font-medium">{contactInfo.location}</span>
              </span>
            </div>

            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Nome
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                className="min-h-12 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-slate-950"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className="min-h-12 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-slate-950"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Telefone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                className="min-h-12 w-full rounded-xl border border-slate-300 px-4 outline-none transition focus:border-slate-950"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Mensagem
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Conte um pouco sobre o projeto"
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Enviar mensagem
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Este formulário ainda é visual. A integração de envio será
            configurada posteriormente.
          </p>
        </form>
      </div>
    </Section>
  );
}