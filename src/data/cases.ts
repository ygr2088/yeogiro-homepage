export type CaseCategory = "전체" | "재활" | "침치료" | "수중재활" | "보행평가" | "치과" | "외과" | "고양이";

export type CaseItem = {
  slug: string;
  category: Exclude<CaseCategory, "전체">;
  title: string;
  pet: string;
  image: string;
  imageAlt: string;
  summary: string;
  treatments: string[];
  symptoms: string[];
  evaluations: string[];
  progress: string[];
  homeCare: string[];
  relatedHref: string;
  relatedLabel: string;
  instagram?: string;
  blog?: string;
};

export const CASE_CATEGORIES: CaseCategory[] = ["전체", "재활", "침치료", "수중재활", "보행평가", "치과", "외과", "고양이"];

export const CASES: CaseItem[] = [
  {
    slug: "amber-disc-rehab",
    category: "재활",
    title: "앰버 디스크 수술 후 단계별 재활",
    pet: "푸들 · 디스크 수술 후 후지마비",
    image: "/images/cases/rehab-walking.webp",
    imageAlt: "앰버 디스크 수술 후 재활",
    summary: "침치료, 수중재활과 보행훈련을 단계적으로 연결한 회복 사례입니다.",
    treatments: ["침치료", "레이저", "수중재활", "보행훈련"],
    symptoms: ["수술 후 뒷다리 움직임 저하", "독립 보행 어려움", "근육량 감소", "체중부하 불균형"],
    evaluations: ["신경학적 반응 확인", "관절 가동범위와 통증 평가", "좌우 근육량 비교", "보행 영상 기록"],
    progress: ["통증과 피로도를 낮추는 데 집중", "기립훈련 후 수중보행 시작", "보행 반응에 맞춰 운동 강도 조정"],
    homeCare: ["미끄럼 방지 매트", "짧고 규칙적인 보행", "점프와 계단 제한", "피로 시 즉시 휴식"],
    relatedHref: "/rehabilitation",
    relatedLabel: "한방재활센터",
    instagram: "https://www.instagram.com/yeogiro_amc/p/DM2RyigsoB4/",
    blog: "https://blog.naver.com/yeogiro_amc/224047286089",
  },
  {
    slug: "shasha-hindlimb-recovery",
    category: "침치료",
    title: "샤샤 후지마비 침치료 회복 사례",
    pet: "10살 푸들 · 후지마비와 배뇨 곤란",
    image: "/images/cases/acupuncture.webp",
    imageAlt: "후지마비 환자의 침치료",
    summary: "보행과 배뇨가 어려웠던 노령 환자에게 침치료와 재활을 연결했습니다.",
    treatments: ["침치료", "레이저", "저강도 운동", "생활환경 조정"],
    symptoms: ["뒷다리 움직임 저하", "독립 보행 어려움", "배뇨 곤란", "활동량 감소"],
    evaluations: ["신경반응 확인", "통증 위치 평가", "배뇨 상태 확인", "기존 질환 검토"],
    progress: ["통증과 배뇨 상태 확인", "기립과 짧은 보행 연습", "일상 움직임 범위 확대"],
    homeCare: ["배뇨 기록", "미끄럼 방지", "짧은 운동", "통증 증가 시 병원 연락"],
    relatedHref: "/rehabilitation",
    relatedLabel: "침치료센터",
    instagram: "https://www.instagram.com/yeogiro_amc/reel/DafJ8KfvRO2/",
    blog: "https://blog.naver.com/yeogiro_amc/223991478700",
  },
  {
    slug: "senior-cat-disc-rehab",
    category: "고양이",
    title: "10살 노령묘 디스크 후지마비 재활",
    pet: "10살 고양이 · 디스크와 후지마비",
    image: "/images/cases/acupuncture.webp",
    imageAlt: "노령묘 후지마비 재활",
    summary: "노령묘의 스트레스와 전신상태를 고려해 침치료와 저강도 재활을 적용했습니다.",
    treatments: ["침치료", "레이저", "저강도 재활", "환경관리"],
    symptoms: ["뒷다리 힘 저하", "점프 감소", "통증 반응", "활동량 감소"],
    evaluations: ["보행과 자세 평가", "통증 반응 확인", "관절 가동범위 평가", "기존 질환 검토"],
    progress: ["스트레스를 최소화한 치료", "짧은 치료와 충분한 휴식", "일상 이동 변화 추적"],
    homeCare: ["낮은 이동 동선", "미끄럼 방지", "안정 공간 제공", "식욕과 배변 기록"],
    relatedHref: "/rehabilitation",
    relatedLabel: "한방재활센터",
    blog: "https://blog.naver.com/yeogiro_amc/224008620459",
  },
  {
    slug: "beko-water-rehab",
    category: "수중재활",
    title: "물을 무서워했던 베코의 첫 수중재활",
    pet: "강아지 · 수중재활 적응",
    image: "/images/cases/rehab-walking.webp",
    imageAlt: "강아지 수중재활",
    summary: "물 적응부터 시작해 짧은 수중보행과 휴식을 반복한 사례입니다.",
    treatments: ["물 적응", "저속 수중보행", "보상 움직임 교정", "휴식 관리"],
    symptoms: ["보행 저하", "근력 감소", "물에 대한 두려움", "운동 거부"],
    evaluations: ["보행과 통증 평가", "물 적응 반응", "피로도 확인", "보호자 목표 확인"],
    progress: ["수조 환경 적응", "짧은 보행과 휴식 반복", "긴장도에 맞춰 시간 증가"],
    homeCare: ["치료 당일 휴식", "피로 관찰", "무리한 운동 제한", "규칙적인 내원"],
    relatedHref: "/rehabilitation",
    relatedLabel: "한방재활센터",
    instagram: "https://www.instagram.com/yeogiro_amc/p/DX6cJn2OOJt/",
    blog: "https://blog.naver.com/yeogiro_amc/223984106265",
  },
  {
    slug: "dental-periodontal",
    category: "치과",
    title: "치주질환 환자의 구강 X-ray 정밀평가",
    pet: "강아지 · 치주질환",
    image: "/images/cases/dental.webp",
    imageAlt: "강아지 치과 방사선 검사",
    summary: "치근과 치조골 상태를 확인해 보존 가능성과 발치 필요성을 평가했습니다.",
    treatments: ["스케일링", "발치 평가", "국소 통증관리", "홈케어"],
    symptoms: ["심한 구취", "잇몸 출혈", "딱딱한 음식 회피", "한쪽으로 씹기"],
    evaluations: ["구강 전체 시진", "치아 동요도 확인", "구강 X-ray", "치근과 치조골 평가"],
    progress: ["통증과 출혈 확인", "식이와 양치 관리 안내", "정기 구강검진"],
    homeCare: ["부드러운 식이", "안내 시점부터 양치", "구취 관찰", "정기 검진"],
    relatedHref: "/dental-center",
    relatedLabel: "치과센터",
    blog: "https://blog.naver.com/yeogiro_amc/224040454639",
  },
  {
    slug: "pyometra-surgery",
    category: "외과",
    title: "자궁축농증 수술과 회복관리",
    pet: "강아지 · 자궁축농증",
    image: "/images/cases/surgery.webp",
    imageAlt: "강아지 외과수술",
    summary: "전신상태와 마취 위험도를 확인한 뒤 수술과 회복 모니터링을 연결했습니다.",
    treatments: ["수액 안정화", "개별 마취계획", "수술", "통증관리"],
    symptoms: ["활력 저하", "음수량 증가", "복부 불편감", "분비물 가능"],
    evaluations: ["신체검사", "혈액검사", "영상검사", "마취 위험도 평가"],
    progress: ["수술 전 안정화", "수술 후 생체신호 확인", "식욕과 활동에 따른 퇴원 조정"],
    homeCare: ["수술부위 보호", "처방약 급여", "격한 활동 제한", "이상 시 병원 연락"],
    relatedHref: "/surgery",
    relatedLabel: "외과수술센터",
    blog: "https://blog.naver.com/yeogiro_amc/224039292942",
  },
  {
    slug: "gait-analysis",
    category: "보행평가",
    title: "EKICO 보행분석으로 확인한 좌우 불균형",
    pet: "강아지 · 보행 이상",
    image: "/images/cases/gait.webp",
    imageAlt: "EKICO 보행평가",
    summary: "체중부하 차이와 보상 움직임을 영상과 데이터로 평가했습니다.",
    treatments: ["통증관리", "운동재활", "보행 교정", "보호자 교육"],
    symptoms: ["절뚝거림", "좌우 체중부하 차이", "수술 후 변화", "쉽게 지침"],
    evaluations: ["보행 영상 촬영", "좌우 균형 비교", "관절 가동범위", "전후 데이터 비교"],
    progress: ["초기 상태 기록", "치료 후 좌우 변화 비교", "데이터 기반 운동 조정"],
    homeCare: ["일정한 속도 산책", "미끄럼 방지", "보행 영상 기록", "악화 시 휴식"],
    relatedHref: "/ekico",
    relatedLabel: "보행평가센터",
    instagram: "https://www.instagram.com/yeogiro_amc/reel/DaM2_Nmh3p4/",
  },
];

export function getCaseBySlug(slug: string) {
  return CASES.find((item) => item.slug === slug);
}
