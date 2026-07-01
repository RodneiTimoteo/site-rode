import {
  AtSign,
  Mail,
  MapPin,
  MessageCircle,
  MonitorCheck,
} from "lucide-react";

import Section from "@/components/layout/Section";
import { contactInfo } from "@/data/contact";
import { siteConfig } from "@/data/site";

const locationText = `${siteConfig.address.city}, Pernambuco`;
const serviceText = "Atendimento local e remoto para todo o Brasil";

const contactChannels = [
  {
    label: "WhatsApp",
    value: contactInfo.phone,
    helper: "Converse diretamente com a RODE",
    href: contactInfo.whatsappUrl,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "E-mail",
    value: contactInfo.email,
    helper: "Envie sua mensagem com calma",
    href: contactInfo.emailUrl,
    icon: Mail,
    external: false,
  },
  {
    label: "Instagram",
    value: siteConfig.social.instagramUser,
    helper: "Acompanhe a RODE nas redes",
    href: siteConfig.social.instagram,
    icon: AtSign,
    external: true,
  },
] as const;

export default function Contact() {
  return (
    <Section
      id="contato"
      className="border-b border-white/10 bg-[#151515] scroll-mt-24"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-7 lg:p-9">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Vamos conversar
            </p>

            <h2 className="max-w-3xl text-4xl font-bold tracking-normal text-foreground sm:text-5xl">
              Sua empresa precisa de uma presença digital mais profissional?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Conte o que você deseja melhorar. A RODE analisa sua necessidade
              e orienta qual solução faz mais sentido para o seu momento.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_12px_32px_rgba(201,165,92,0.14)] transition hover:border-primary hover:bg-[#D7B86C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Solicitar diagnóstico
              </a>

              <a
                href={contactInfo.emailUrl}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Enviar e-mail
              </a>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
              <div className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <MapPin
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-semibold text-foreground">
                    Localização
                  </span>
                  {locationText}
                </span>
              </div>

              <div className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <MonitorCheck
                  className="mt-1 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span>
                  <span className="block font-semibold text-foreground">
                    Atendimento
                  </span>
                  {serviceText}
                </span>
              </div>
            </div>
          </div>

          <aside
            className="rounded-3xl border border-white/10 bg-card p-5 text-card-foreground sm:p-6"
            aria-label="Canais de contato da RODE"
          >
            <div className="mb-6 border-b border-white/10 pb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Canais diretos
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Escolha o canal que for mais confortável para iniciar a
                conversa.
              </p>
            </div>

            <div className="grid gap-3">
              {contactChannels.map((channel) => {
                const Icon = channel.icon;

                if (!channel.value || !channel.href) {
                  return null;
                }

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="group flex min-h-20 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-primary/35 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.08] text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="mt-1 block break-words font-semibold text-card-foreground">
                        {channel.value}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-muted-foreground">
                        {channel.helper}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}
