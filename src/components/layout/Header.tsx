"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-main flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
            <span className="text-lg font-bold">Y</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-lg font-bold text-gray-900">{SITE.name}</p>
            <p className="text-xs text-gray-500">Yeogiro Animal Hospital</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary-50 text-primary-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Icon name="phone" className="text-primary-600" />
            {SITE.phone}
          </a>
          <Button href={SITE.naverReservation} size="sm">
            예약하기
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-50 xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileOpen}
        >
          <Icon name={mobileOpen ? "close" : "menu"} />
        </button>
      </div>

      {mobileOpen && (
        <nav
          className="border-t border-gray-100 bg-white px-4 py-4 xl:hidden"
          aria-label="모바일 메뉴"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-gray-100 pt-4">
            <Button href={SITE.naverReservation} className="w-full">
                예약하기
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
