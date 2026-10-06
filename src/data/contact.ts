import { siteConfig } from "@/data/site";

export function buildWhatsAppUrl(message: string) {
  return siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    : "";
}

const whatsappMessage =
  "Olá! Conheci a RODE pelo site e quero conversar sobre meu projeto. Procuro ajuda com: [conte brevemente o que você precisa].";

const emailSubject = "Conversa sobre projeto - RODE Soluções Inteligentes";
const emailBody =
  "Olá! Conheci a RODE pelo site e quero conversar sobre meu projeto.\n\nO que preciso: ";

const emailUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  emailSubject,
)}&body=${encodeURIComponent(emailBody)}`;

export const contactInfo = {
  email: siteConfig.email,
  emailSubject,
  emailBody,
  emailUrl,
  phone: siteConfig.phone,
  whatsapp: siteConfig.whatsapp,
  location: `${siteConfig.address.city} — ${siteConfig.address.state}`,
  serviceText:
    "Atendimento em Sertânia, região e remotamente em todo o Brasil.",
  whatsappMessage,
  whatsappUrl: buildWhatsAppUrl(whatsappMessage),
} as const;
