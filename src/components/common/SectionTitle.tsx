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
          eyebrow: "text-primary",
          title: "text-foreground",
          description: "text-muted-foreground",
        }
      : {
          eyebrow: "text-slate-500",
          title: "text-slate-950",
          description: "text-slate-600",
        };

  return (
    <div className={`flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.14em] ${colors.eyebrow}`}>
          {eyebrow}
        </p>
      )}

      <h2 className={`text-4xl font-bold tracking-normal ${colors.title} sm:text-5xl`}>
        {title}
      </h2>

      {description && (
        <p className={`mt-5 text-lg leading-8 ${colors.description}`}>
          {description}
        </p>
      )}
    </div>
  );
}
