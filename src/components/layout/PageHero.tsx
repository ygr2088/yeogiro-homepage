import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
};

export function PageHero({ title, description, breadcrumb, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white",
        className
      )}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />
      </div>
      <div className="container-main relative py-16 sm:py-20">
        {breadcrumb && (
          <nav aria-label="breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-primary-100">
              {breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {item.href ? (
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white">{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-primary-100">{description}</p>
        )}
      </div>
    </section>
  );
}
