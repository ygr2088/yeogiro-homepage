export function getCareerYears(baseYear: number, baseCareer: number) {
  return baseCareer + (new Date().getFullYear() - baseYear);
}

export const SITE = {
  name: "여기로양한방동물병원",
  nameEn: "Yeogiro Integrative Animal Hospital",
  description:
    "22년·21년 경력의 외과 대학원 출신 의료진이 내과, 외과, 치과, 한방재활, 보행평가를 통합 진료하는 과천 동물병원입니다.",
  url: "https://yeogiro-vet.co.kr",
  locale: "ko_KR",
  phone: "02-2088-3388",
  naverReservation:
    "https://map.naver.com/p/entry/place/1618137055",
  email: "yeogiroah@naver.com",
  address: {
    street: "경기 과천시 과천대로2길 6 테라스원빌딩 3층",
    city: "과천",
    postalCode: "13824",
    country: "KR",
  },
  hours: {
    weekday: "10:00 - 20:00",
    saturday: "10:00 - 20:00",
    sunday: "10:00 - 20:00",
    lunch: "13:00 - 14:00",
  },
  social: {
    instagram: "https://instagram.com/yeogiro_vet",
    blog: "https://blog.naver.com/yeogiro_amc",
    kakao: "https://pf.kakao.com/yeogiro_vet",
  },
} as const;

export const NAV_ITEMS = [
  { label: "홈", href: "/" },
  { label: "병원소개", href: "/about" },
  { label: "의료진", href: "/team" },
  { label: "진료과목", href: "/medical-services" },
  { label: "한방재활센터", href: "/rehabilitation" },
  { label: "보행평가센터", href: "/ekico" },
  { label: "치과센터", href: "/dental-center" },
  { label: "첨단장비", href: "/equipment" },
  { label: "치료사례", href: "/cases" },
  { label: "보호자 교육", href: "/education" },
  { label: "블로그", href: "/blog" },
  { label: "오시는 길 · 예약", href: "/contact" },
] as const;

export const STATS = [
  { value: `${getCareerYears(2026, 22)}년`, label: "최우 원장 임상경력" },
  { value: `${getCareerYears(2026, 21)}년`, label: "최은영 대표원장 임상경력" },
  { value: "72,000+", label: "누적 임상 진료" },
  { value: "14,500+", label: "외과·치과 수술 집도" },
] as const;

export const SERVICES = [
  {
    id: "rehabilitation",
    title: "한방재활센터",
    description:
      "디스크, 슬개골, 관절염, 노령견 보행 문제를 양·한방 통합재활로 살핍니다.",
    href: "/rehabilitation",
    icon: "heart",
  },
  {
    id: "gait-center",
    title: "보행평가센터",
    description:
      "EKICO 보행분석을 통해 눈으로 보기 어려운 보행 변화를 데이터로 평가합니다.",
    href: "/ekico",
    icon: "leaf",
  },
  {
    id: "dental",
    title: "치과센터",
    description:
      "3,500건 이상 치과 수술 집도 경험과 구강 X-ray 기반 진단으로 치과 진료를 진행합니다.",
    href: "/dental-center",
    icon: "tooth",
  },
  {
    id: "medical-surgery",
    title: "내과·외과 진료",
    description:
      "외과 대학원 출신 의료진이 내과, 외과, 노령동물, 만성질환을 통합적으로 진료합니다.",
    href: "/medical-services",
    icon: "stethoscope",
  },
] as const;

export const REVIEWS = [
  {
    id: "1",
    author: "보호자 후기",
    pet: "강아지 · 한방재활",
    rating: 5,
    content:
      "걸음이 불편해 걱정이 많았는데, 현재 상태와 재활 방향을 자세히 설명해 주셔서 안심이 되었습니다.",
    date: "2026-01-01",
  },
  {
    id: "2",
    author: "보호자 후기",
    pet: "강아지 · 치과 진료",
    rating: 5,
    content:
      "치과 치료 전 검사 과정과 마취, 회복 과정까지 설명을 잘 들을 수 있어 믿고 맡길 수 있었습니다.",
    date: "2026-01-01",
  },
  {
    id: "3",
    author: "보호자 후기",
    pet: "노령견 · 만성질환 관리",
    rating: 5,
    content:
      "나이가 많아 걱정이 컸는데, 약물과 통증관리, 생활관리까지 함께 설명해 주셔서 도움이 되었습니다.",
    date: "2026-01-01",
  },
  {
    id: "4",
    author: "보호자 후기",
    pet: "고양이 · 구강/내과 진료",
    rating: 5,
    content:
      "예민한 고양이라 걱정했는데 진료 과정에서 아이 상태를 세심하게 봐주셔서 감사했습니다.",
    date: "2026-01-01",
  },
] as const;

export const BLOG_POSTS = [
  {
    id: "1",
    slug: "dog-disc-nonsurgical-rehab",
    title: "강아지 디스크, 수술이 꼭 필요할까요?",
    excerpt:
      "디스크 증상에서 응급 여부를 먼저 확인하고, 비수술 재활 가능성을 평가하는 기준을 설명합니다.",
    category: "한방재활",
    date: "2026-01-01",
    readTime: "6분",
  },
  {
    id: "2",
    slug: "patellar-luxation-gait-analysis",
    title: "슬개골 탈구와 보행평가가 필요한 이유",
    excerpt:
      "절뚝거림, 체중 분산, 보행 균형을 확인해 치료 방향을 정하는 방법을 안내합니다.",
    category: "보행평가",
    date: "2026-01-01",
    readTime: "5분",
  },
  {
    id: "3",
    slug: "dog-dental-scaling-extraction",
    title: "강아지 스케일링과 발치, 언제 필요할까요?",
    excerpt:
      "입 냄새, 치주염, 치아 파절, 구강 X-ray 검사가 필요한 상황을 정리합니다.",
    category: "치과",
    date: "2026-01-01",
    readTime: "5분",
  },
  {
    id: "4",
    slug: "senior-dog-walking-change",
    title: "노령견이 갑자기 걷기 싫어한다면",
    excerpt:
      "나이 때문이라고 넘기기 쉬운 보행 변화가 통증, 관절염, 만성질환의 신호일 수 있습니다.",
    category: "노령견",
    date: "2026-01-01",
    readTime: "5분",
  },
] as const;

export const TEAM = [
  {
    name: "최우",
    role: "원장",
    description:
      "경북대학교 수의대학원 외과 석사 졸업. 내과, 외과, 치과, 한방재활을 함께 고려하는 통합진료를 담당합니다.",
    specialty: ["내과", "외과", "치과", "한방재활"],
    education: "경북대학교 수의대학원 외과 석사 졸업",
    achievements: [
      "22년 임상경력",
      "51,000건 이상 임상 진료",
      "4,000건 이상 외과 수술 집도",
      "3,500건 이상 치과 수술 집도",
      "국내·국제 학술지 논문 11편 발표",
    ],
  },
  {
    name: "최은영",
    role: "대표원장",
    description:
      "건국대학교 대학원 외과 석사 졸업. 디스크, 슬개골, 보행재활, 한방재활 진료를 중점적으로 담당합니다.",
    specialty: ["한방재활", "디스크", "슬개골", "보행재활"],
    education: "건국대학교 대학원 외과 석사 졸업",
    achievements: [
      "21년 임상경력",
      "21,000건 이상 임상 진료",
      "11,000건 이상 한방재활 진료",
      "10,500건 이상 외과 수술 집도",
      "CVA · CCRV · CCRT · CVTP · CVMMP 등 한방재활 자격",
    ],
  },
] as const;

export const EQUIPMENT = [
  {
    name: "EKICO 보행분석 시스템",
    category: "보행평가센터",
    description:
      "보행 패턴, 체중 분포, 좌우 균형을 데이터로 확인해 재활치료 방향을 세우는 데 활용합니다.",
    features: ["보행 패턴 분석", "체중 분포 평가", "재활 전후 비교"],
  },
  {
    name: "치과 X-ray",
    category: "치과",
    description:
      "눈으로 보이지 않는 치근, 치조골, 치아흡수성병변, 치근 농양 등을 평가하는 치과 진단 장비입니다.",
    features: ["치근 평가", "치조골 확인", "발치 계획"],
  },
  {
    name: "수중재활 장비",
    category: "한방재활",
    description:
      "물의 부력을 활용해 관절 부담을 줄이고 근력과 보행 기능 회복을 돕는 재활 장비입니다.",
    features: ["관절 부담 감소", "근력 회복", "보행 훈련"],
  },
  {
    name: "레이저 치료기",
    category: "한방재활",
    description:
      "통증과 염증 관리, 조직 회복 보조를 위해 재활 및 통증 치료 과정에서 활용합니다.",
    features: ["통증 관리", "염증 관리", "조직 회복 보조"],
  },
  {
    name: "체외충격파",
    category: "한방재활",
    description:
      "만성 통증과 근골격계 문제에서 통증 관리와 회복 보조를 위해 활용합니다.",
    features: ["만성 통증 관리", "근골격계 관리", "회복 보조"],
  },
  {
    name: "크라이오 냉각치료기",
    category: "한방재활",
    description:
      "냉각 자극을 통해 통증과 염증 반응 조절을 돕는 재활 치료 장비입니다.",
    features: ["염증 관리", "통증 완화", "회복기 관리"],
  },
  {
    name: "디지털 방사선",
    category: "영상진단",
    description:
      "골격계, 흉부, 복부 상태를 확인해 진단과 치료 계획 수립에 활용합니다.",
    features: ["골격 평가", "흉부·복부 확인", "수술 전 평가"],
  },
  {
    name: "초음파",
    category: "영상진단",
    description:
      "복부 장기와 연부조직 상태를 실시간으로 확인하는 비침습적 검사 장비입니다.",
    features: ["복부 검사", "연부조직 평가", "실시간 영상 확인"],
  },
  {
    name: "혈구분석기",
    category: "혈액·임상병리",
    description:
      "빈혈, 염증, 감염, 혈소판 이상 등을 빠르게 확인하는 혈액검사 장비입니다.",
    features: ["CBC 검사", "빈혈 확인", "염증 평가"],
  },
  {
    name: "혈액화학분석기",
    category: "혈액·임상병리",
    description:
      "간, 신장, 췌장 등 주요 장기 기능을 평가해 건강검진과 수술 전 검사에 활용합니다.",
    features: ["간·신장 수치", "수술 전 검사", "건강검진"],
  },
  {
    name: "정밀검이경",
    category: "정밀진단",
    description:
      "외이도와 고막 상태를 확대 관찰하여 만성 외이염과 귀 질환 평가에 활용합니다.",
    features: ["외이도 확인", "고막 평가", "만성 외이염 평가"],
  },
  {
    name: "흡입마취 시스템",
    category: "수술·마취",
    description:
      "치과, 외과, 검사 과정에서 안정적인 흡입마취를 유지하기 위한 마취 장비입니다.",
    features: ["흡입마취", "산소 공급", "마취 유지"],
  },
  {
    name: "마취모니터링기기",
    category: "수술·마취",
    description:
      "마취 중 생체신호를 지속적으로 확인하여 수술과 치과 치료 과정의 안전성을 높입니다.",
    features: ["심박 확인", "호흡 확인", "산소포화도 모니터링"],
  },
  {
    name: "LigaSure 혈관봉합 시스템",
    category: "수술·마취",
    description:
      "수술 중 혈관과 조직의 지혈 및 봉합을 돕는 수술 장비입니다.",
    features: ["정밀 지혈", "수술 시간 단축", "조직 손상 최소화"],
  },
  {
    name: "전기수술기",
    category: "수술·마취",
    description:
      "수술 중 출혈을 줄이고 시야를 확보하는 데 활용되는 전기수술 장비입니다.",
    features: ["출혈 감소", "수술 시야 확보", "정밀 수술 보조"],
  },
  {
    name: "멸균기",
    category: "멸균·감염관리",
    description:
      "수술기구와 처치 도구를 멸균하여 감염 위험을 줄이는 데 사용합니다.",
    features: ["기구 멸균", "감염관리", "안전한 처치 환경"],
  },
] as const;

export const EKICO_INFO = {
  title: "보행평가센터",
  subtitle: "EKICO 보행분석을 활용한 데이터 기반 보행 평가",
  description:
    "EKICO 보행분석 시스템은 압력 센서 매트를 통해 반려동물의 보행 패턴, 체중 분배, 보행 속도를 정량적으로 분석합니다.",
  benefits: [
    {
      title: "정량적 보행 분석",
      description: "좌우 체중 분배, 보행 속도, 보폭 등을 수치로 측정합니다.",
    },
    {
      title: "맞춤형 재활 계획",
      description: "분석 데이터를 바탕으로 개별 재활 프로그램을 설계합니다.",
    },
    {
      title: "치료 경과 추적",
      description: "정기 분석으로 치료 경과를 객관적으로 확인합니다.",
    },
    {
      title: "수술 전·후 평가",
      description: "수술 전후 보행 변화를 비교하여 회복 상태를 평가합니다.",
    },
  ],
  indications: [
    "슬개골 탈구 수술 전·후",
    "십자인대 수술 후",
    "관절염·고관절 이형성",
    "편측성 절뚝거림",
    "노령견 보행 기능 평가",
    "비만으로 인한 관절 부담",
  ],
  process: [
    { step: "01", title: "초기 상담", desc: "증상 및 병력 확인" },
    { step: "02", title: "보행 촬영", desc: "압력 매트 위 보행 기록" },
    { step: "03", title: "데이터 분석", desc: "보행 패턴 정량 분석" },
    { step: "04", title: "치료 계획", desc: "맞춤 재활 프로그램 수립" },
  ],
} as const;

export const TREATMENT_CASES = [
  {
    id: "1",
    title: "디스크 보행 재활 관리",
    pet: "강아지 · 보행 이상",
    category: "한방재활",
    summary: "디스크 의심 보행 이상에 대해 통증관리와 재활치료를 병행한 사례",
    treatment: "통증관리 → 침치료 → 레이저 → 운동재활 → 보행평가",
    outcome: "보행 상태를 주기적으로 확인하며 치료 강도를 조절했습니다.",
    duration: "환자 상태에 따라 상이",
  },
  {
    id: "2",
    title: "슬개골 질환 보행 관리",
    pet: "강아지 · 슬개골",
    category: "보행평가 · 재활",
    summary: "슬개골 질환으로 절뚝거림을 보인 아이의 통합 관리 사례",
    treatment: "보행평가 → 통증관리 → 운동재활 → 생활관리",
    outcome: "보호자와 함께 체중관리와 생활관리를 병행했습니다.",
    duration: "환자 상태에 따라 상이",
  },
  {
    id: "3",
    title: "치주염 치과 치료",
    pet: "강아지 · 치과",
    category: "치과",
    summary: "입 냄새와 잇몸 염증을 보인 아이의 치과 진료 사례",
    treatment: "구강검사 → 구강 X-ray → 스케일링/발치 평가 → 홈케어",
    outcome: "구강 관리와 정기검진 계획을 안내했습니다.",
    duration: "환자 상태에 따라 상이",
  },
  {
    id: "4",
    title: "노령견 통증 및 보행 관리",
    pet: "노령견 · 관절/통증",
    category: "노령견",
    summary: "노령성 보행 저하와 통증 관리를 병행한 장기관리 사례",
    treatment: "진찰 → 통증관리 → 재활 → 생활관리",
    outcome: "삶의 질 유지를 목표로 장기 관리를 진행했습니다.",
    duration: "환자 상태에 따라 상이",
  },
] as const;

export const EDUCATION_PROGRAMS = [
  {
    title: "수술 전·후 관리",
    description: "금식·금수, 상처 관리, 넥카라, 약 복용, 재검진 시기를 안내합니다.",
    topics: ["금식·금수", "상처 관리", "넥카라", "약 복용"],
    format: "보호자 안내",
    frequency: "수술 예약 시",
  },
  {
    title: "치과 홈케어",
    description: "양치, 치석, 입 냄새, 잇몸염 등 집에서 확인할 구강 신호를 안내합니다.",
    topics: ["양치", "치석", "입 냄새", "잇몸염"],
    format: "체크리스트",
    frequency: "진료 후 안내",
  },
  {
    title: "디스크·슬개골 관리",
    description: "계단, 미끄러운 바닥, 산책량, 체중관리, 보행 변화 체크법을 안내합니다.",
    topics: ["디스크", "슬개골", "보행 체크", "체중관리"],
    format: "홈케어 가이드",
    frequency: "재활 상담 시",
  },
  {
    title: "노령견·노령묘 케어",
    description: "통증, 식욕, 보행, 인지 변화, 만성질환 관리 포인트를 안내합니다.",
    topics: ["통증", "식욕", "보행", "만성질환"],
    format: "보호자 교육",
    frequency: "검진 후 안내",
  },
] as const;