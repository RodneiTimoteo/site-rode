interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
        S
      </div>

      <div>
        <h2 className="text-lg font-bold leading-none">
          Starter Premium
        </h2>

        <p className="text-sm text-slate-500">
          Next.js Template
        </p>
      </div>
    </div>
  );
}