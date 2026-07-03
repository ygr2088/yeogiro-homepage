"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">예약 요청이 접수되었습니다</h3>
        <p className="mt-2 text-gray-600">
          확인 후 빠른 시일 내에 연락드리겠습니다.
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <SectionHeading
        eyebrow="Reservation"
        title="온라인 예약"
        description="아래 양식을 작성해 주시면 확인 후 연락드리겠습니다."
        align="left"
        className="mb-8"
      />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
              보호자 이름 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="홍길동"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
              연락처 *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="010-0000-0000"
            />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="petName" className="mb-1.5 block text-sm font-medium text-gray-700">
              반려동물 이름 *
            </label>
            <input
              type="text"
              id="petName"
              name="petName"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
              placeholder="멍멍이"
            />
          </div>
          <div>
            <label htmlFor="petType" className="mb-1.5 block text-sm font-medium text-gray-700">
              종류 *
            </label>
            <select
              id="petType"
              name="petType"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            >
              <option value="">선택해 주세요</option>
              <option value="dog">강아지</option>
              <option value="cat">고양이</option>
              <option value="other">기타</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-gray-700">
            진료 과목
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          >
            <option value="">선택해 주세요</option>
            <option value="general">내과 · 외과</option>
            <option value="rehab">재활치료</option>
            <option value="dental">치과</option>
            <option value="traditional">한방진료</option>
            <option value="checkup">건강검진</option>
            <option value="emergency">응급</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700">
            증상 / 문의 내용
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
            placeholder="증상이나 문의하실 내용을 적어 주세요."
          />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          예약 요청하기
        </Button>
      </form>
    </Card>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-bold text-gray-900">연락처</h3>
        <ul className="mt-4 space-y-4">
          <li className="flex items-start gap-3">
            <Icon name="phone" className="mt-0.5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500">대표 전화</p>
              <a href={`tel:${SITE.phone}`} className="font-medium text-gray-900 hover:text-primary-600">
                {SITE.phone}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="phone" className="mt-0.5 text-accent-500" />
            <div>
              <p className="text-sm text-gray-500">응급 전화 (24시간)</p>
              <a href={`tel:${SITE.emergencyPhone}`} className="font-medium text-gray-900 hover:text-primary-600">
                {SITE.emergencyPhone}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="location" className="mt-0.5 text-primary-600" />
            <div>
              <p className="text-sm text-gray-500">주소</p>
              <p className="font-medium text-gray-900">{SITE.address.street}</p>
            </div>
          </li>
        </ul>
      </Card>

      <Card>
        <h3 className="text-lg font-bold text-gray-900">진료시간</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex justify-between">
            <span className="text-gray-500">평일</span>
            <span className="font-medium text-gray-900">{SITE.hours.weekday}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">토요일</span>
            <span className="font-medium text-gray-900">{SITE.hours.saturday}</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">일요일</span>
            <span className="font-medium text-gray-900">{SITE.hours.sunday}</span>
          </li>
        </ul>
      </Card>

      <Card className="bg-primary-50 border-primary-100">
        <h3 className="text-lg font-bold text-gray-900">오시는 길</h3>
        <p className="mt-2 text-sm text-gray-600">
          지하철 2호선 강남역 3번 출구에서 도보 5분
        </p>
        <div className="mt-4 flex aspect-[16/9] items-center justify-center rounded-xl bg-gray-200 text-sm text-gray-500">
          지도 영역 (카카오맵 / 네이버맵 API 연동 가능)
        </div>
      </Card>
    </div>
  );
}
