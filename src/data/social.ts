import { siteConfig } from "@/data/site";

export const socialLinks = [
  {
    name: "Instagram",
    icon: "instagram",
    username: siteConfig.social.instagramUser,
    url: siteConfig.social.instagram,
  },
] as const;
