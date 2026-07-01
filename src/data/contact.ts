import { siteConfig } from "@/data/site";

const whatsappMessage =
  "Olá! Conheci a RODE pelo site e gostaria de conversar sobre uma solução para minha empresa.";

const emailSubject = "Solicitação de diagnóstico - RODE Soluções Inteligentes";
const emailBody =
  "Olá! Conheci a RODE pelo site e gostaria de conversar sobre uma solução para minha empresa.";

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
  whatsappUrl: siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
    : "",
} as const;
