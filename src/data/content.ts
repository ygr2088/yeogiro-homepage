export type ContentCategory =
  | "재활"
  | "침치료"
  | "수중재활"
  | "보행평가"
  | "치과"
  | "외과"
  | "내과"
  | "건강정보"
  | "의료진";

export type ExternalContentLink = {
  label: string;
  href: string;
  platform: "instagram" | "youtube" | "naver-blog";
};

export type RecoveryContent = {
  id: string;
  title: string;
  description: string;
  category: ContentCategory;
  video?: string;
  poster?: string;
  instagram?: string;
  youtube?: string;
  blog?: string;
  caseHref?: string;
  featured?: boolean;
};

export type BlogContent = {
  id: string;
  title: string;
  category: ContentCategory;
  excerpt: string;
  href: string;
  featured?: boolean;
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/yeogiro_amc/",
  youtube: "https://www.youtube.com/@Yeogiroamc/shorts",
  naverBlog: "https://blog.naver.com/yeogiro_amc",
} as const;

export const RECOVERY_CONTENTS: RecoveryContent[] = [
  {
    id: "hindlimb-before-after",
    title: "후지마비 치료 전후",
    description:
      "초기 보행 상태와 침치료·수중재활 이후의 움직임을 영상으로 비교합니다.",
    category: "재활",
    video: "/videos/recovery/hindlimb-before-after.mp4",
    poster: "/images/recovery/hindlimb-before-after.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/DafJ8KfvRO2/",
    blog: "https://blog.naver.com/yeogiro_amc/223991478700",
    caseHref: "/cases/rehab-walking",
    featured: true,
  },
  {
    id: "amber-water-rehab",
    title: "앰버 디스크 수술 후 수중재활",
    description:
      "디스크 수술 후 수중보행과 단계별 재활을 연결한 회복 과정을 소개합니다.",
    category: "수중재활",
    video: "/videos/recovery/underwater-rehab.mp4",
    poster: "/images/recovery/underwater-rehab.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/p/DOIofZ2k-V2/",
    blog: "https://blog.naver.com/yeogiro_amc/223960044638",
    caseHref: "/cases/rehab-walking",
    featured: true,
  },
  {
    id: "amber-disc-postop",
    title: "앰버 디스크 수술 후 재활",
    description:
      "수술 직후부터 보행 회복까지 재활치료의 변화를 단계적으로 확인합니다.",
    category: "재활",
    video: "/videos/recovery/disc-postop-rehab.mp4",
    poster: "/images/recovery/disc-postop-rehab.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/p/DM2RyigsoB4/",
    blog: "https://blog.naver.com/yeogiro_amc/224047286089",
    caseHref: "/cases/rehab-walking",
    featured: true,
  },
  {
    id: "tumor-paralysis",
    title: "종양성 사지마비 회복 기록",
    description:
      "사지마비 환자의 치료와 재활 과정에서 나타난 움직임 변화를 기록했습니다.",
    category: "재활",
    video: "/videos/recovery/tumor-paralysis.mp4",
    poster: "/images/recovery/tumor-paralysis.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/DZMkDFBPgk2/",
    caseHref: "/cases/rehab-walking",
    featured: true,
  },
  {
    id: "gait-analysis",
    title: "EKICO 보행분석",
    description:
      "눈으로만 보기 어려운 좌우 체중부하와 보행 변화를 데이터와 영상으로 비교합니다.",
    category: "보행평가",
    poster: "/images/cases/gait.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/DaM2_Nmh3p4/",
    caseHref: "/cases/gait-analysis",
  },
  {
    id: "laser",
    title: "고강도 레이저 치료",
    description:
      "통증 완화와 조직 회복을 목표로 환자의 상태에 맞춰 적용한 치료 장면입니다.",
    category: "재활",
    poster: "/images/services/acupuncture.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/Daw_tELJsIY/",
    caseHref: "/rehabilitation",
  },
  {
    id: "acupuncture",
    title: "침치료와 통증관리",
    description:
      "노령동물과 만성통증 환자의 움직임을 돕는 침치료 과정을 소개합니다.",
    category: "침치료",
    poster: "/images/cases/acupuncture.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/reel/DZ6t4J2s_wq/",
    blog: "https://blog.naver.com/yeogiro_amc/224034134165",
    caseHref: "/cases/acupuncture-pain",
  },
  {
    id: "taping",
    title: "키네시올로지 테이핑 요법",
    description:
      "관절과 근육의 움직임을 보조하는 테이핑 적용 사례입니다.",
    category: "재활",
    poster: "/images/cases/gait.webp",
    instagram:
      "https://www.instagram.com/yeogiro_amc/p/DI_n7eWTMwU/",
    blog: "https://blog.naver.com/yeogiro_amc/223841891414",
    caseHref: "/rehabilitation",
  },
];

export const BLOG_CONTENTS: BlogContent[] = [
  {
    id: "amber-acupuncture-1",
    title: "앰버 디스크 침치료 1",
    category: "재활",
    excerpt:
      "디스크 수술 이후 침치료와 재활을 시작한 앰버의 초기 회복 과정입니다.",
    href: "https://blog.naver.com/yeogiro_amc/223960044638",
    featured: true,
  },
  {
    id: "amber-acupuncture-2",
    title: "앰버 디스크 침치료 2",
    category: "재활",
    excerpt:
      "수중보행과 단계별 재활을 이어간 앰버의 보행 회복 기록입니다.",
    href: "https://blog.naver.com/yeogiro_amc/224047286089",
    featured: true,
  },
  {
    id: "como-scaling",
    title: "꼬모 스케일링",
    category: "치과",
    excerpt:
      "치석과 치은 상태를 평가하고 스케일링과 구강관리를 진행한 사례입니다.",
    href: "https://blog.naver.com/yeogiro_amc/224040454639",
    featured: true,
  },
  {
    id: "cat-hindlimb-rehab",
    title: "10살 노령묘 디스크 침치료 회복 후기",
    category: "재활",
    excerpt:
      "후지마비 증상이 있는 노령묘에게 침치료와 재활을 적용한 회복 이야기입니다.",
    href: "https://blog.naver.com/yeogiro_amc/224008620459",
    featured: true,
  },
  {
    id: "pyometra-surgery",
    title: "중성화수술 후기와 자궁축농증",
    category: "외과",
    excerpt:
      "자궁축농증의 위험성과 중성화수술의 의미를 실제 진료 사례로 설명합니다.",
    href: "https://blog.naver.com/yeogiro_amc/224039292942",
  },
  {
    id: "retained-deciduous-teeth",
    title: "유치발치",
    category: "치과",
    excerpt:
      "영구치 배열과 잇몸 건강을 위해 유치발치가 필요한 경우를 소개합니다.",
    href: "https://blog.naver.com/yeogiro_amc/224035622755",
  },
  {
    id: "shasha-recovery",
    title: "소변도 못 보던 10살 푸들 샤샤, 다시 걷게 된 이야기",
    category: "침치료",
    excerpt:
      "후지마비와 배뇨 문제를 보인 환자의 침치료와 재활 회복 기록입니다.",
    href: "https://blog.naver.com/yeogiro_amc/223991478700",
    featured: true,
  },
  {
    id: "shiro-old-cat-rehab",
    title: "16살 노령묘 시로의 재활 이야기",
    category: "재활",
    excerpt:
      "다리가 약해진 노령묘의 통증과 움직임을 단계적으로 관리한 사례입니다.",
    href: "https://blog.naver.com/yeogiro_amc/223981608952",
  },
  {
    id: "beko-water-rehab",
    title: "물을 무서워했던 베코의 첫 수중재활",
    category: "수중재활",
    excerpt:
      "물 적응부터 보행 연습까지 환자 성향에 맞춰 진행한 수중재활 과정입니다.",
    href: "https://blog.naver.com/yeogiro_amc/223984106265",
  },
  {
    id: "senior-dog-disc-rehab",
    title: "강아지 노령견 디스크 재활 치료",
    category: "재활",
    excerpt:
      "노령견의 전신상태를 고려한 디스크 통증관리와 재활 방법을 소개합니다.",
    href: "https://blog.naver.com/yeogiro_amc/223965726382",
  },
  {
    id: "wart-cryotherapy",
    title: "강아지 사마귀 무마취 냉동치료",
    category: "외과",
    excerpt:
      "마취 부담을 줄이면서 사마귀 병변을 제거한 냉동치료 사례입니다.",
    href: "https://blog.naver.com/yeogiro_amc/224049781272",
  },
  {
    id: "patella-surgery",
    title: "강아지 슬개골 수술",
    category: "외과",
    excerpt:
      "슬개골 탈구의 상태 평가와 수술 후 회복관리 과정을 소개합니다.",
    href: "https://blog.naver.com/yeogiro_amc/223923858493",
  },
  {
    id: "eyelid-mass",
    title: "강아지 안검종괴, 이런 경우 수술이 필요합니다",
    category: "외과",
    excerpt:
      "안검 종괴가 각막과 눈 건강에 미치는 영향과 수술 필요성을 설명합니다.",
    href: "https://blog.naver.com/yeogiro_amc/223798353786",
  },
  {
    id: "surgery-or-conservative",
    title: "수술과 비수술, 어떤 치료를 선택해야 할까요?",
    category: "의료진",
    excerpt:
      "환자의 나이와 전신상태, 질환의 특성을 고려하는 치료 선택 원칙입니다.",
    href: "https://blog.naver.com/yeogiro_amc/224125095067",
  },
  {
    id: "director-choi-eunyoung",
    title: "다시 걷게 만드는 힘, 최은영 대표원장의 한방재활 진료",
    category: "의료진",
    excerpt:
      "침치료와 운동·수중재활을 연결하는 대표원장의 진료철학을 소개합니다.",
    href: "https://blog.naver.com/yeogiro_amc/224124091737",
  },
  {
    id: "director-choi-woo",
    title: "내과·외과·치과·재활을 아우르는 최우 원장의 통합진료",
    category: "의료진",
    excerpt:
      "진단과 수술, 치과와 회복관리까지 연결하는 통합진료 철학입니다.",
    href: "https://blog.naver.com/yeogiro_amc/224122969676",
  },
  {
    id: "non-surgical-rehab",
    title: "비수술 치료 우선, 침·전침과 운동·수중재활",
    category: "건강정보",
    excerpt:
      "수술이 필요한 경우와 비수술적 회복 가능성을 구분하는 재활치료 원칙입니다.",
    href: "https://blog.naver.com/yeogiro_amc/224044642822",
  },
  {
    id: "rehab-signs",
    title: "강아지 재활 치료가 필요한 신호 10가지",
    category: "건강정보",
    excerpt:
      "절뚝거림, 토끼뜀, 뒷다리 끌기처럼 재활 평가가 필요한 신호를 정리했습니다.",
    href: "https://blog.naver.com/yeogiro_amc/224048874153",
  },
  {
    id: "rehab-by-disease",
    title: "강아지·고양이 재활 치료, 질환별 방법",
    category: "건강정보",
    excerpt:
      "디스크, 슬개골 질환과 수술 후 환자에게 적용하는 재활 방법을 설명합니다.",
    href: "https://blog.naver.com/yeogiro_amc/224038356938",
  },
  {
    id: "what-is-integrative-rehab",
    title: "강아지·고양이 한방 재활치료란 무엇인가요?",
    category: "건강정보",
    excerpt:
      "침치료와 통증관리, 운동재활을 연결하는 한방 재활치료를 소개합니다.",
    href: "https://blog.naver.com/yeogiro_amc/224036866709",
  },
  {
    id: "disc-acupuncture",
    title: "강아지 디스크 침치료, 수술 말고 가능할까요?",
    category: "건강정보",
    excerpt:
      "수술과 비수술 치료를 선택할 때 확인해야 할 상태와 치료 기준을 설명합니다.",
    href: "https://blog.naver.com/yeogiro_amc/224033410206",
  },
];

export function getFeaturedRecoveryContents(limit = 4) {
  return RECOVERY_CONTENTS.filter((item) => item.featured).slice(0, limit);
}

export function getFeaturedBlogContents(limit = 6) {
  return BLOG_CONTENTS.filter((item) => item.featured).slice(0, limit);
}
