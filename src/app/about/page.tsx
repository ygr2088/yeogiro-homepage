import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = createMetadata({
  title: "병원소개",
  description:
    "여기로양한방동물병원은 진단부터 치료, 재활까지 양·한방 통합진료를 제공하는 과천 동물병원입니다.",
  path: "/about",
  keywords: ["과천 동물병원", "여기로양한방동물병원", "한방재활", "치과", "보행평가센터"],
});

const values = [
  {
    title: "몸 전체를 보는 진료",
    description:
      "증상 하나만 보지 않고 내과, 외과, 치과, 보행, 통증, 노령 상태를 함께 살핍니다.",
  },
  {
    title: "진단부터 재활까지",
    description:
      "검사와 진단, 치료, 수술 후 회복, 한방재활까지 한 흐름으로 연결합니다.",
  },
  {
    title: "보호자와 함께 결정",
    description:
      "치료 방향과 예후를 충분히 설명드리고, 보호자와 함께 가장 적합한 방향을 정합니다.",
  },
];

const systems = [
  {
    title: "내과",
    desc: "만성질환, 노령질환, 소화기·호흡기·비뇨기·내분비 질환 관리",
  },
  {
    title: "외과",
    desc: "외과 대학원 출신 의료진의 수술 판단과 수술 후 회복 관리",
  },
  {
    title: "치과",
    desc: "구강 X-ray 기반 진단과 치과 수술 경험을 바탕으로 한 구강 관리",
  },
  {
    title: "한방재활",
    desc: "침치료, 재활치료, 통증관리, 수술 후 회복 프로그램",
  },
  {
    title: "보행평가센터",
    desc: "EKICO 보행분석을 활용한 데이터 기반 보행 평가",
  },
  {
    title: "노령케어",
    desc: "나이와 기저질환을 고려한 통합적인 평생 주치의 진료",
  },
];

const doctors = [
  {
    name: "최우 원장",
    focus: "내과 · 외과 · 치과 · 한방재활 통합진료",
    points: [
      "22년 임상경력",
      "51,000건 이상 임상 진료",
      "4,000건 이상 외과 수술 집도",
      "3,500건 이상 치과 수술 집도",
      "경북대학교 수의대학원 외과 석사 졸업",
    ],
  },
  {
    name: "최은영 대표원장",
    focus: "디스크 · 슬개골 · 한방재활 특화진료",
    points: [
      "21년 임상경력",
      "21,000건 이상 임상 진료",
      "11,000건 이상 한방재활 진료",
      "10,500건 이상 외과 수술 집도",
      "건국대학교 대학원 외과 석사 졸업",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "홈", url: SITE.url },
          { name: "병원소개", url: `${SITE.url}/about` },
        ]}
      />

      <PageHero
        title="병원소개"
        description="진단부터 치료, 재활까지 한 흐름으로 살피는 양·한방 통합진료 동물병원입니다."
        breadcrumb={[
          { label: "홈", href: "/" },
          { label: "병원소개" },
        ]}
      />

      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="One-Stop Long Life Care"
                title="아이의 삶 전체를 보는 병원"
                align="left"
              />
              <div className="space-y-4 leading-relaxed text-gray-600">
                <p>
                  여기로양한방동물병원은 예방부터 진단, 치료, 수술 후 회복,
                  한방재활까지 하나의 흐름으로 연결하는 진료를 지향합니다.
                </p>
                <p>
                  다리가 불편해 보이는 아이도 원인은 관절, 신경, 치과 통증,
                  만성질환, 노령성 변화 등 여러 방향에서 시작될 수 있습니다.
                  그래서 저희는 증상 하나가 아니라 몸 전체의 흐름을 함께 살핍니다.
                </p>
                <p>
                  아이에게 꼭 필요한 치료가 무엇인지, 수술이 필요한 상황인지,
                  비수술적 회복 가능성이 있는지 보호자님께 충분히 설명드리고
                  함께 결정합니다.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                    <Icon name="check" />
                  </div>
                  <h3 className="font-bold text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            eyebrow="Integrated Care System"
            title="내과·외과·치과·한방재활·보행평가를 연결합니다"
            description="하나의 증상도 여러 원인에서 시작될 수 있기 때문에, 각 진료 영역을 분리하지 않고 함께 판단합니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {systems.map((item) => (
              <Card key={item.title} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon name="check" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <SectionHeading
            eyebrow="Medical Team"
            title="두 의료진의 전문성이 함께하는 진료"
            description="최우 원장은 진단·외과·치과 중심의 통합진료를, 최은영 대표원장은 한방재활·디스크·슬개골·보행재활 진료를 중점적으로 담당합니다."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {doctors.map((doctor) => (
              <Card key={doctor.name} hover>
                <h3 className="text-2xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="mt-2 font-semibold text-primary-600">
                  {doctor.focus}
                </p>
                <ul className="mt-5 space-y-3 text-sm text-gray-600">
                  {doctor.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <Icon name="check" className="mt-0.5 text-primary-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/team" size="lg">
              의료진 자세히 보기
              <Icon name="arrow" />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-main">
          <SectionHeading
            eyebrow="Facilities"
            title="진료 흐름에 맞춘 병원 시설"
            description="검사, 치료, 수술, 재활, 보행평가가 이어질 수 있도록 공간과 장비를 구성했습니다."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "진료실", desc: "보호자 상담과 기본 진료가 이루어지는 공간" },
              { title: "수술실", desc: "외과 및 치과 수술을 위한 수술 공간" },
              { title: "치과센터", desc: "구강 X-ray와 치과 진료를 위한 공간" },
              { title: "한방재활센터", desc: "침치료, 재활치료, 통증관리를 위한 공간" },
              { title: "보행평가센터", desc: "EKICO 보행분석을 활용한 평가 공간" },
              { title: "검사실", desc: "혈액검사, 영상검사 등 진단을 위한 공간" },
            ].map((facility) => (
              <Card key={facility.title} hover>
                <h3 className="font-bold text-gray-900">{facility.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{facility.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main text-center">
          <SectionHeading
            title="아이의 상태가 걱정되신다면 상담부터 시작하세요"
            description="증상, 나이, 통증, 보행 상태를 함께 확인하고 적절한 진료 방향을 안내드립니다."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={SITE.naverReservation} size="lg">
              네이버 예약하기
              <Icon name="arrow" />
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary-600 px-8 py-4 text-lg font-medium text-primary-600 transition-colors hover:bg-primary-50"
            >
              오시는 길 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}