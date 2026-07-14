import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    title: "접수·대기실",
    description: "편안하고 밝은 공간",
    image: "/images/facility/reception.webp",
  },
  {
    title: "진료실",
    description: "아이 맞춤 진료",
    image: "/images/facility/waiting-room.webp",
  },
  {
    title: "수술실",
    description: "안전한 수술 시스템",
    image: "/images/facility/surgery-room.webp",
  },
  {
    title: "입원실",
    description: "집중 회복 관리",
    image: "/images/facility/ward.webp",
  },
];

export function FacilityPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-main">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600">
              Hospital Tour
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              병원 둘러보기
            </h2>

            <p className="mt-3 text-lg leading-8 text-gray-600">
              실제 진료와 회복이 이루어지는 공간을 확인하세요.
            </p>
          </div>

          <Link
            href="/equipment"
            className="font-semibold text-primary-600 transition-colors hover:text-primary-700"
          >
            시설·장비 자세히 보기 →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-black shadow-xl">
            <video
              className="aspect-video h-full w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/facility/hospital-tour-poster.webp"
            >
              <source
                src="/videos/hospital-tour-720p.mp4"
                type="video/mp4"
              />
              브라우저가 동영상 재생을 지원하지 않습니다.
            </video>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {facilities.map((item) => (
              <article
                key={item.title}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={item.image}
                    alt={`여기로양한방동물병원 ${item.title}`}
                    fill
                    sizes="(max-width:1024px) 50vw, 18vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="mt-3 text-sm font-bold text-gray-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-xs text-gray-600 sm:text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
