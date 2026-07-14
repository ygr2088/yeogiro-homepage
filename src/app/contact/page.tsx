import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "오시는 길 · 예약",
  description:
    "여기로양한방동물병원 위치, 진료시간, 전화번호, 네이버 예약, 주차 안내입니다.",
  path: "/contact",
  keywords: [
    "과천 동물병원",
    "과천 동물병원 예약",
    "인덕원 동물병원",
    "여기로양한방동물병원",
  ],
});

const contactCards = [
  {
    title: "전화 문의",
    desc: SITE.phone,
    href: `tel:${SITE.phone}`,
    icon: "phone" as const,
  },
  {
    title: "네이버 예약",
    desc: "온라인으로 간편하게 예약",
    href: SITE.naverReservation,
    icon: "arrow" as const,
  },
  {
    title: "오시는 길",
    desc: "과천 테라스원빌딩 3층",
    href: "https://map.naver.com/p/entry/place/1618137055",
    icon: "stethoscope" as const,
  },
];

const faqs = [
  {
    q: "예약 없이 방문해도 되나요?",
    a: "진료 상황에 따라 대기 시간이 발생할 수 있어 네이버 예약 또는 전화 문의 후 방문을 권장드립니다.",
  },
  {
    q: "주차가 가능한가요?",
    a: "과천 테라스원빌딩 주차장을 이용하실 수 있습니다.",
  },
  {
    q: "고양이도 진료하나요?",
    a: "네. 고양이 내과, 치과, 구강질환, 비뇨기 질환도 진료합니다.",
  },
  {
    q: "한방 진료만 하나요?",
    a: "아닙니다. 내과, 외과, 치과, 한방재활, EKICO 보행평가를 함께 고려하는 양·한방 통합진료를 제공합니다.",
  },
  {
    q: "재활치료는 예약이 필요한가요?",
    a: "재활치료와 EKICO 보행평가는 충분한 상담 시간을 위해 예약을 권장드립니다.",
  },
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "오시는 길", url: `${SITE.url}/contact` },
        ]}
      />

      <PageHero
        title="오시는 길 · 예약"
        description="아이의 현재 상태가 걱정되신다면 예약부터 도와드리겠습니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "오시는 길" },
        ]}
      />

      {/* 예약 바로가기 */}
      <section className="section-padding">
        <div className="container-main">

          <SectionHeading
            eyebrow="Reservation"
            title="진료 예약 및 문의"
            description="전화, 네이버 예약, 길찾기를 통해 편하게 방문하실 수 있습니다."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((item) => (
              <Card key={item.title} hover className="text-center">

                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                  <Icon name={item.icon} />
                </div>

                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>

                <Button href={item.href} variant="outline" className="mt-5">
                  바로가기
                </Button>

              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* 병원정보 */}
      <section className="section-padding bg-gray-50">
        <div className="container-main">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* 주소 */}

            <Card>

              <SectionHeading
                eyebrow="Location"
                title="찾아오시는 길"
                align="left"
              />

              <div className="space-y-4 text-gray-600">

                <p className="text-lg font-semibold text-gray-900">
                  여기로양한방동물병원
                </p>

                <p>
                  경기도 과천시 과천대로2길 6
                  <br />
                  테라스원빌딩 3층
                </p>

                <p>☎ {SITE.phone}</p>

                <p>
                  인덕원역 인근
                  <br />
                  테라스원빌딩 주차 가능
                </p>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                <Button href={SITE.naverReservation}>
                  네이버 예약
                  <Icon name="arrow" />
                </Button>

                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-600 px-6 py-3 font-medium text-primary-600 hover:bg-primary-50"
                >
                  <Icon name="phone" />
                  전화하기
                </a>

              </div>

            </Card>

            {/* 진료시간 */}

            <Card>

              <SectionHeading
                eyebrow="Hours"
                title="진료시간"
                align="left"
              />

              <div className="space-y-3">

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                  <span className="font-medium text-gray-800">
                    월요일 ~ 일요일
                  </span>

                  <span className="text-gray-600">
                    10:00 ~ 20:00
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-3">
                  <span className="font-medium text-gray-800">
                    점심시간
                  </span>

                  <span className="text-gray-600">
                    13:00 ~ 14:00
                  </span>
                </div>

                <a
                  href={SITE.naverReservation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl bg-primary-50 px-4 py-3 transition hover:bg-primary-100"
                >
                  <span className="font-medium text-gray-800">
                    휴진일
                  </span>

                  <span className="flex items-center gap-2 font-medium text-primary-700">
                    네이버 예약 공지 확인
                    <Icon name="arrow" />
                  </span>
                </a>

              </div>

              <p className="mt-5 text-sm leading-relaxed text-gray-500">
                휴진 일정은 네이버 예약 공지에서 가장 먼저 안내됩니다.
                방문 전 확인하시면 더욱 편리하게 이용하실 수 있습니다.
              </p>

            </Card>

          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="section-padding">
        <div className="container-main">

          <SectionHeading
            eyebrow="FAQ"
            title="자주 묻는 질문"
            description="방문 전 보호자님들이 가장 많이 궁금해하시는 내용을 정리했습니다."
          />

          <div className="grid gap-4 md:grid-cols-2">

            {faqs.map((faq) => (
              <Card key={faq.q}>

                <h3 className="font-bold text-gray-900">
                  {faq.q}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {faq.a}
                </p>

              </Card>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="section-padding bg-gray-50">
        <div className="container-main">

          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16">

            <h2 className="text-2xl font-bold sm:text-3xl">
              우리 아이의 현재 상태가 걱정되시나요?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-primary-100">
              증상과 상태를 함께 확인하고 아이에게 가장 적합한 진료 방향을 안내해 드리겠습니다.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <Button
                href={SITE.naverReservation}
                variant="secondary"
                size="lg"
              >
                네이버 예약하기
                <Icon name="arrow" />
              </Button>

              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-medium text-white hover:bg-white/10"
              >
                <Icon name="phone" />
                {SITE.phone}
              </a>

            </div>

          </div>

        </div>
      </section>

    </>
  );
}