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

interface ContactProps {
  showHeading?: boolean;
}

export default function Contact({ showHeading = true }: ContactProps) {
  return (
    <Section
      id="contato"
      className="border-b border-border bg-surface-subtle scroll-mt-24"
    >
      <div className="rounded-[2rem] border border-border bg-card p-5 shadow-card sm:p-7 lg:p-9">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div className="min-w-0 max-w-3xl">
            {showHeading && (
              <>
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                  Vamos conversar
                </p>

                <h2 className="max-w-3xl text-4xl font-bold tracking-normal text-foreground sm:text-5xl">
                  Vamos entender o que seu projeto precisa?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                  Conte o que deseja criar, integrar, automatizar ou manter. A RODE
                  entende o cenário e orienta o próximo passo com base na sua necessidade.
                </p>
              </>
            )}

            <div
              className={[
                "flex flex-col gap-3 sm:flex-row",
                showHeading ? "mt-9" : "",
              ].join(" ")}
            >
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                 Solicitar orçamento
              </a>

              <a
                href={contactInfo.emailUrl}
                className="button-secondary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Enviar e-mail
              </a>
            </div>

            <div className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
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
            className="min-w-0 rounded-3xl border border-border bg-surface-subtle p-5 text-card-foreground sm:p-6"
            aria-label="Canais de contato da RODE"
          >
            <div className="mb-6 border-b border-border pb-5">
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
                    className="group flex min-h-20 min-w-0 items-center gap-4 rounded-2xl border border-border bg-foreground/[0.03] p-4 transition hover:border-primary/35 hover:bg-foreground/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/[0.08] text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm text-muted-foreground">
                        {channel.label}
                      </span>
                      <span className="mt-1 block break-words [overflow-wrap:anywhere] font-semibold text-card-foreground">
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
