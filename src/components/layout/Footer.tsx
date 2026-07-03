import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { Icon } from "@/components/ui/Icon";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="container-main section-padding">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <span className="text-lg font-bold">Y</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">{SITE.name}</p>
                <p className="text-xs text-gray-500">{SITE.nameEn}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">{SITE.description}</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              바로가기
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              진료시간
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between">
                <span>평일</span>
                <span>{SITE.hours.weekday}</span>
              </li>
              <li className="flex justify-between">
                <span>토요일</span>
                <span>{SITE.hours.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span>일요일</span>
                <span>{SITE.hours.sunday}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900">
              연락처
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Icon name="location" className="mt-0.5 text-primary-600" />
                {SITE.address.street}
              </li>
              <li className="flex items-center gap-2">
                <Icon name="phone" className="text-primary-600" />
                <a href={`tel:${SITE.phone}`} className="hover:text-primary-600">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="clock" className="text-primary-600" />
                응급: {SITE.emergencyPhone}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/about" className="hover:text-primary-600">
              개인정보처리방침
            </Link>
            <Link href="/contact" className="hover:text-primary-600">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
