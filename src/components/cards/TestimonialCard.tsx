import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
}: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
      <Quote
        className="h-8 w-8 text-slate-300"
        aria-hidden="true"
      />

      <blockquote className="mt-6 flex-1 text-lg leading-8 text-slate-700">
        “{content}”
      </blockquote>

      <footer className="mt-8 border-t border-slate-100 pt-5">
        <p className="font-semibold text-slate-950">
          {name}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {role} — {company}
        </p>
      </footer>
    </article>
  );
}