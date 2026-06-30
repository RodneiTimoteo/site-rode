import { siteConfig } from "@/data/site";

const whatsappMessage =
  "Olá! Conheci a RODE pelo site e gostaria de conversar sobre uma solução para minha empresa.";

export const contactInfo = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  whatsapp: siteConfig.whatsapp,
  location: `${siteConfig.address.city} — ${siteConfig.address.state}`,
  serviceText:
    "Atendimento em Sertânia, região e remotamente em todo o Brasil.",
  whatsappMessage,
  whatsappUrl: siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    : "",
} as const;
