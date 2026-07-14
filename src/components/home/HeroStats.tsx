import {
  LeafIcon,
  StethoscopeIcon,
  SurgeryIcon,
  ToothIcon,
} from "@/components/icons";

type HeroStat = {
  value: string;
  label: string;
  icon: "clinical" | "rehab" | "surgery" | "dental";
};

function StatIcon({ type }: { type: HeroStat["icon"] }) {
  if (type === "clinical") return <StethoscopeIcon className="h-5 w-5" />;
  if (type === "rehab") return <LeafIcon className="h-5 w-5" />;
  if (type === "surgery") return <SurgeryIcon className="h-5 w-5" />;
  return <ToothIcon className="h-5 w-5" />;
}

export function HeroStats({ items }: { items: HeroStat[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/90 bg-white/95 px-3 py-4 shadow-[0_10px_28px_rgba(74,45,52,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(74,45,52,0.14)] sm:px-5 sm:py-5"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F8EDEF] text-[#A95767] sm:h-10 sm:w-10">
              <StatIcon type={item.icon} />
            </div>
            <p className="whitespace-nowrap text-xl font-bold text-[#944356] sm:text-2xl xl:text-3xl">
              {item.value}
            </p>
          </div>
          <p className="mt-2.5 text-center text-sm font-semibold text-gray-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}
