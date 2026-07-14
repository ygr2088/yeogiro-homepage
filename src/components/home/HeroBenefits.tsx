import { CertificateIcon, PeopleIcon } from "@/components/icons";

type HeroBenefit = {
  title: string;
  description: string;
  icon: "people" | "certificate";
};

type HeroBenefitsProps = { items: HeroBenefit[] };

function BenefitIcon({ type }: { type: HeroBenefit["icon"] }) {
  return type === "people" ? <PeopleIcon className="h-6 w-6" /> : <CertificateIcon className="h-6 w-6" />;
}

export function HeroBenefits({ items }: HeroBenefitsProps) {
  return (
    <div className="mt-2 grid gap-3 lg:grid-cols-2 lg:gap-4">
      {items.map((item) => (
        <div key={item.title} className="flex items-center gap-3.5 rounded-2xl border border-white/90 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:px-5 sm:py-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F8EDEF] text-[#A95767] sm:h-11 sm:w-11">
            <BenefitIcon type={item.icon} />
          </div>
          <div>
            <p className="text-sm font-bold leading-5 text-gray-900 sm:text-base">{item.title}</p>
            <p className="mt-0.5 text-xs leading-5 text-gray-600 sm:text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
