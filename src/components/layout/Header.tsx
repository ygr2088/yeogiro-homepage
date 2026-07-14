"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className={cn(
      "sticky top-0 z-50 border-b border-gray-200/80 bg-white/95 backdrop-blur-xl transition-all duration-300",
      scrolled ? "shadow-[0_8px_28px_rgba(17,24,39,0.10)]" : "shadow-[0_3px_14px_rgba(17,24,39,0.05)]"
    )}>
      <div className={cn(
        "container-main flex items-center justify-between gap-3 transition-all duration-300",
        scrolled ? "min-h-16 py-1.5" : "min-h-[76px] py-2"
      )}>
        <Link href="/" className="flex w-[205px] shrink-0 items-center gap-2.5" aria-label={`${SITE.name} 홈`}>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white shadow-sm">
            <span className="text-lg font-bold">Y</span>
          </div>
          <div className="min-w-0">
            <p className="truncate text-[15px] font-bold leading-tight text-gray-950">{SITE.name}</p>
            <p className="mt-0.5 truncate text-[10px] tracking-wide text-gray-500">Yeogiro Animal Hospital</p>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 2xl:flex" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-lg px-2 py-3 text-[13px] font-semibold tracking-tight transition-colors",
                  active ? "bg-primary-50 text-primary-700" : "text-gray-700 hover:bg-gray-50 hover:text-primary-700"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <a href={`tel:${SITE.phone}`} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-gray-200 bg-white px-3 text-[13px] font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700 hover:shadow-md">
            <Icon name="phone" className="h-4 w-4 text-primary-600" />
            <span className="whitespace-nowrap">{SITE.phone}</span>
          </a>
          <Button href={SITE.naverReservation} size="sm" className="min-h-10 whitespace-nowrap px-4 text-sm font-semibold shadow-sm">
            예약하기
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2.5 text-gray-700 transition-colors hover:bg-gray-100 2xl:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-gray-200 bg-white px-4 py-4 shadow-lg 2xl:hidden" aria-label="모바일 메뉴">
          <div className="mx-auto grid max-w-screen-xl gap-1 md:grid-cols-2">
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-semibold transition-colors",
                    active ? "bg-primary-50 text-primary-700" : "text-gray-800 hover:bg-gray-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 grid gap-3 border-t border-gray-200 pt-4 md:col-span-2 sm:grid-cols-2">
              <a href={`tel:${SITE.phone}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 font-semibold text-gray-800">
                <Icon name="phone" className="h-5 w-5 text-primary-600" />
                {SITE.phone}
              </a>
              <Button href={SITE.naverReservation} className="min-h-12 w-full">예약하기</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
