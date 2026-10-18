interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionTitleProps) {
  const alignment =
    align === "center"
      ? "mx-auto items-center text-center"
      : "items-start text-left";

  const colors =
    tone === "dark"
      ? {
          eyebrow: "text-brand-champagne",
          title: "text-foreground",
          description: "text-muted-foreground",
        }
      : {
          eyebrow: "text-light-muted",
          title: "text-light-foreground",
          description: "text-light-muted",
        };

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <p className={`mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] sm:mb-4 sm:text-sm ${colors.eyebrow}`}>
          {eyebrow}
        </p>
      )}

      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${colors.title}`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-4 text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${colors.description}`}>
          {description}
        </p>
      )}
    </div>
  );
}
