import Image from "next/image";
import { Icon } from "@/components/ui/Icon";

const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/yegiroa_amc/";

const instagramCases = [
  { title: "보행 전후 회복 사례", description: "재활 전후의 보행 변화를 영상으로 확인하세요.", image: "/images/cases/rehab-walking.webp", category: "한방재활" },
  { title: "침치료와 통증관리", description: "노령동물의 편안한 움직임을 위한 치료 기록입니다.", image: "/images/cases/acupuncture.webp", category: "침치료" },
  { title: "구강 X-ray 기반 치과진료", description: "눈으로 확인하기 어려운 치근과 치조골을 평가합니다.", image: "/images/cases/dental.webp", category: "치과" },
  { title: "수술과 회복 과정", description: "수술 준비부터 회복 관리까지 실제 진료 현장을 소개합니다.", image: "/images/cases/surgery.webp", category: "외과" },
  { title: "초음파 기반 내과진료", description: "반복되는 증상의 원인을 단계적으로 확인합니다.", image: "/images/cases/internal.webp", category: "내과" },
  { title: "EKICO 보행평가", description: "치료 전후의 보행 변화를 데이터와 영상으로 비교합니다.", image: "/images/cases/gait.webp", category: "보행평가" },
];

export function InstagramPreview() {
  return (
    <section className="section-padding bg-[#FCFBFA]">
      <div className="container-main">
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">Instagram</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">영상으로 확인하는 회복 과정</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
              사진으로는 다 담기 어려운 보행 변화와 실제 치료 모습을 인스타그램 영상으로 확인하세요.
            </p>
          </div>

          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary-700 px-6 font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-lg"
          >
            @yegiroa_amc 전체보기
            <Icon name="arrow" />
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramCases.map((item) => (
            <a
              key={item.title}
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-[1.75rem] border border-gray-100 bg-white shadow-[0_12px_34px_rgba(17,24,39,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_52px_rgba(17,24,39,0.13)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={`${item.title} 인스타그램 영상 대표 이미지`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  {item.category}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/50 bg-white/20 text-white shadow-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
                      <path d="M8 5.6v12.8c0 .8.9 1.3 1.6.8l9.2-6.4a1 1 0 0 0 0-1.6L9.6 4.8A1 1 0 0 0 8 5.6Z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary-100 bg-primary-50 px-5 py-4 text-center text-sm leading-6 text-primary-800">
          현재 카드는 인스타그램 계정으로 연결됩니다. 개별 릴스 주소를 입력하면 각 카드가 해당 영상으로 바로 연결되도록 변경할 수 있습니다.
        </div>
      </div>
    </section>
  );
}
