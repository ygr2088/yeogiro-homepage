import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SITE, STATS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FCFBFA] via-white to-[#F7F1EF]">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-[#D8A6AF]/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-[#A95767]/15 blur-3xl" />
      </div>

      <div className="container-main relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#D8A6AF]/25 px-4 py-1.5 text-sm font-semibold text-[#7E3F4C]">
            <span className="h-2 w-2 rounded-full bg-[#A95767]" />
            한방재활 특화 동물병원
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            걷는 것이 다시
            <br />
            <span className="text-[#A95767]">행복해질 수 있도록</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
            침치료, 통증관리, 재활치료, 양방진료를 함께 고려하여
            아이의 상태에 맞는 통합 치료 방향을 제안합니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={SITE.naverReservation} size="lg">
              진료 예약하기
              <Icon name="arrow" />
            </Button>
            <Button href="/rehabilitation" variant="outline" size="lg">
              한방재활센터 보기
            </Button>
          </div>

          <div className="mt-10 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
            <div className="rounded-2xl border border-[#EAD8DC] bg-white/80 p-4">
              <p className="text-xl font-bold text-[#A95767]">22년</p>
              <p className="mt-1">임상 경험 기반 진료</p>
            </div>
            <div className="rounded-2xl border border-[#EAD8DC] bg-white/80 p-4">
              <p className="text-xl font-bold text-[#A95767]">34,200건+</p>
              <p className="mt-1">누적 진료 경험</p>
            </div>
            <div className="rounded-2xl border border-[#EAD8DC] bg-white/80 p-4">
              <p className="text-xl font-bold text-[#A95767]">외과 석사 2인</p>
              <p className="mt-1">건국대·경북대 출신 협진</p>
            </div>
            <div className="rounded-2xl border border-[#EAD8DC] bg-white/80 p-4">
              <p className="text-xl font-bold text-[#A95767]">2,850건+</p>
              <p className="mt-1">치과 수술 경험</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#A95767] to-[#7E3F4C] shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center p-8 text-center text-white">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Icon name="heart" className="h-12 w-12" />
              </div>
              <p className="text-2xl font-bold">한방재활 · 통증관리 · 재활치료</p>
              <p className="mt-3 max-w-sm text-lg text-white/85">
                디스크, 노령견 보행 이상, 슬개골, 관절염까지
                아이의 움직임을 다시 살핍니다.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl bg-white p-5 shadow-lg">
            <p className="text-sm font-semibold text-[#A95767]">Yeogiro Rehab Care</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              수술만이 정답은 아닐 수 있습니다.  
              상태에 맞는 회복 가능성을 함께 찾습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="border-y border-gray-100 bg-white py-8">
      <div className="container-main">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-primary-600">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">진료과목</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            내과부터 한방까지, 반려동물의 모든 건강 문제를 한곳에서 해결합니다.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "내과 · 외과", desc: "정밀 검진 및 수술", href: "/medical-services", icon: "stethoscope" as const },
            { title: "재활치료", desc: "맞춤형 회복 프로그램", href: "/rehabilitation", icon: "heart" as const },
            { title: "치과센터", desc: "전문 구강 진료", href: "/dental-center", icon: "tooth" as const },
            { title: "한방진료", desc: "침 · 뜸 · 한약", href: "/traditional-medicine", icon: "leaf" as const },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <Icon name={service.icon} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600">
                자세히 보기
                <Icon name="arrow" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const reasons = [
    {
      title: "22년 임상 경력",
      description:
        "34,200건 이상의 진료 경험을 바탕으로 복잡하고 오래된 문제까지 깊이 있게 살펴봅니다.",
    },
    {
      title: "외과·치과 전문 진료",
      description:
        "건국대학교·경북대학교 외과 석사 의료진 2인이 협진하며, 2차 동물병원 치과 원장과 외과·한방재활 원장 경력을 바탕으로 전문적인 진료를 제공합니다.",
    },
    {
      title: "양한방 통합 진료",
      description:
        "한방재활 인증 수의사의 풍부한 임상 경험을 바탕으로, 한약, 침치료, 재활치료는 물론 약물치료와 수술까지 함께 고려하여 아이에게 가장 적합한 치료 방향을 제안합니다.",
    },
    {
      title: "안전한 마취와 정밀 장비",
      description:
        "마취 모니터링 장비와 수술·진단 장비를 활용해 보다 안전하고 체계적인 진료를 지향합니다.",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary-600">
              Why Choose Us
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              왜 여기로 양한방 동물병원인가요?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              한방재활, 치과, 외과, 만성질환 관리까지 아이의 상태를 통합적으로 살피는 동물병원입니다.
            </p>
            <Button href="/about" className="mt-8">
              병원 소개
              <Icon name="arrow" />
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                  <Icon name="check" />
                </div>
                <h3 className="font-bold text-gray-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export function CtaBanner() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-12 text-center text-white sm:px-16 sm:py-16">
          <h2 className="text-3xl font-bold sm:text-4xl">지금 바로 진료 예약하세요</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
            전화 또는 온라인으로 간편하게 예약할 수 있습니다. 응급 상황 시 24시간 대응합니다.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              온라인 예약
            </Button>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-white/10"
            >
              <Icon name="phone" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
