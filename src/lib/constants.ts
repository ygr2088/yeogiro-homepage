export const SITE = {
  name: "여기로 양한방동물병원",
  nameEn: "Yeogiro Integrative Animal Hospital",
  description:
    "한방재활 전문 진료를 중심으로 침치료, 통증관리, 재활치료, 치과, 외과, 일반진료를 통합적으로 제공하는 과천 양한방 동물병원입니다.",
  url: "https://yeogiro-vet.co.kr",
  locale: "ko_KR",
  phone: "02-2088-3388",
  naverReservation:
    "https://map.naver.com/p/entry/place/1618137055?c=15.00,0,0,0,dh&placePath=%2Fbooking%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607022230%26locale%3Dko%26svcName%3Dmap_pcv5%26entry%3Dbmp%26from%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607022231%26locale%3Dko%26svcName%3Dmap_pcv5",
  email: "yeogiroah@naver.com",
  address: {
    street: "경기 과천대로 2길 6 3층",
    city: "과천",
    postalCode: "13824",
    country: "KR",
  },
  hours: {
    weekday: "10:00 - 20:00",
    saturday: "10:00 - 20:00",
    sunday: "10:00 - 20:00",
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
  { label: "재활치료", href: "/rehabilitation" },
  { label: "치과센터", href: "/dental-center" },
  { label: "한방진료", href: "/traditional-medicine" },
  { label: "첨단 의료장비", href: "/equipment" },
  { label: "EKICO 보행분석", href: "/ekico" },
  { label: "치료사례", href: "/cases" },
  { label: "보호자 교육", href: "/education" },
  { label: "블로그", href: "/blog" },
  { label: "후기", href: "/reviews" },
  { label: "오시는 길", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "rehabilitation",
    title: "한방재활 전문 진료",
    description:
      "침치료, 통증관리, 재활치료를 통합적으로 고려해 디스크, 노령견, 관절질환 아이들의 회복 가능성을 함께 살핍니다.",
    href: "/rehabilitation",
    icon: "heart",
  },
  {
    id: "traditional",
    title: "한방진료",
    description:
      "한약, 침치료, 약침 등 아이의 상태와 체질을 고려한 한방 치료를 진행합니다.",
    href: "/traditional-medicine",
    icon: "leaf",
  },
  {
    id: "dental",
    title: "치과센터",
    description:
      "2,850건 이상의 치과 수술 경험을 바탕으로 스케일링, 발치, 치주질환, 구강질환을 진료합니다.",
    href: "/dental-center",
    icon: "tooth",
  },
  {
    id: "medical-surgery",
    title: "외과·일반진료",
    description:
      "외과 석사 의료진 2인의 협진을 바탕으로 일반진료, 외과, 건강검진, 만성질환 관리를 제공합니다.",
    href: "/medical-services",
    icon: "stethoscope",
  },
] as const;

export const STATS = [
  { value: "22년", label: "임상 경력" },
  { value: "34,200+", label: "누적 진료" },
  { value: "2,850+", label: "치과 수술" },
  { value: "외과 석사 2인", label: "협진 시스템" },
] as const;

export const REVIEWS = [
  {
    id: "1",
    author: "김*영",
    pet: "말티즈 · 5세",
    rating: 5,
    content:
      "슬개골 수술 후 재활치료까지 꼼꼼하게 봐주셔서 감사합니다. 직원분들도 모두 친절하고, 회복 과정을 상세히 설명해 주셔서 안심이 됐어요.",
    date: "2026-03-15",
  },
  {
    id: "2",
    author: "이*준",
    pet: "골든리트리버 · 3세",
    rating: 5,
    content:
      "치과 스케일링 받았는데 마취부터 회복까지 세심하게 케어해 주셨습니다. 예약 시스템도 편리하고 대기 시간이 짧아서 좋았어요.",
    date: "2026-02-28",
  },
  {
    id: "3",
    author: "박*민",
    pet: "코숏 · 7세",
    rating: 5,
    content:
      "만성 피부염으로 한방진료를 받았는데, 증상이 눈에 띄게 좋아졌습니다. 양방과 한방을 함께 진행할 수 있어서 선택한 병원입니다.",
    date: "2026-01-20",
  },
  {
    id: "4",
    author: "최*서",
    pet: "푸들 · 4세",
    rating: 5,
    content:
      "야간 진료가 가능해서 급하게 아픈 아이를 데리고 갔는데, 빠르게 검사하고 치료해 주셨어요. 응급 상황에 정말 든든합니다.",
    date: "2025-12-10",
  },
] as const;

export const BLOG_POSTS = [
  {
    id: "1",
    slug: "spring-allergy-prevention",
    title: "봄철 반려동물 알레르기 예방법",
    excerpt:
      "꽃가루와 미세먼지가 많아지는 봄, 반려동물의 알레르기 증상을 미리 예방하는 방법을 알려드립니다.",
    category: "건강정보",
    date: "2026-03-20",
    readTime: "5분",
  },
  {
    id: "2",
    slug: "dental-care-guide",
    title: "반려동물 치아 관리, 왜 중요할까요?",
    excerpt:
      "구강 건강은 전신 건강과 직결됩니다. 집에서 실천할 수 있는 치아 관리 팁을 소개합니다.",
    category: "치과",
    date: "2026-03-10",
    readTime: "4분",
  },
  {
    id: "3",
    slug: "rehabilitation-after-surgery",
    title: "수술 후 재활치료, 꼭 필요한 이유",
    excerpt:
      "수술만으로는 충분하지 않습니다. 재활치료가 회복 속도와 삶의 질에 미치는 영향을 설명합니다.",
    category: "재활",
    date: "2026-02-25",
    readTime: "6분",
  },
  {
    id: "4",
    slug: "traditional-medicine-for-pets",
    title: "반려동물 한방진료, 이런 경우에 효과적",
    excerpt:
      "만성 질환, 면역력 저하, 노령견·노령묘 관리에 한방치료가 도움이 되는 경우를 알아봅니다.",
    category: "한방",
    date: "2026-02-14",
    readTime: "5분",
  },
] as const;

export const TEAM = [
  {
    name: "김수현",
    role: "원장 · 내과 전문의",
    description: "서울대 수의과대학 졸업, 15년 임상 경력",
    specialty: ["내과", "영상의학", "예방의학"],
    education: "서울대학교 수의과대학 학사 · 석사",
  },
  {
    name: "박지원",
    role: "외과 수의사",
    description: "정형외과·신경외과 전문, 슬개골·십자인대 수술 전문",
    specialty: ["정형외과", "신경외과", "응급수술"],
    education: "건국대학교 수의과대학 학사",
  },
  {
    name: "이민재",
    role: "재활치료 수의사",
    description: "물리치료·침술 자격 보유, 재활 프로그램 총괄",
    specialty: ["재활의학", "EKICO 보행분석", "침치료"],
    education: "경북대학교 수의과대학 학사",
  },
  {
    name: "정하늘",
    role: "치과 수의사",
    description: "구강외과 전문, 반려동물 치과 진료 10년",
    specialty: ["구강외과", "치주치료", "치과 영상"],
    education: "전남대학교 수의과대학 학사",
  },
  {
    name: "한소율",
    role: "한방 수의사",
    description: "반려동물 한방진료 전문, 양한방 협진 담당",
    specialty: ["침·뜸", "한약 처방", "만성질환"],
    education: "제주대학교 수의과대학 학사 · 한방수의학 수료",
  },
  {
    name: "오지훈",
    role: "영상의학 수의사",
    description: "CT·MRI·초음파 등 영상 진단 전문",
    specialty: ["CT/MRI", "초음파", "영상 유도 생검"],
    education: "서울대학교 수의과대학 학사",
  },
] as const;

export const EQUIPMENT = [
  {
    name: "EKICO 보행분석 시스템",
    category: "한방재활·보행분석",
    description:
      "보행 패턴과 체중 부하를 데이터로 확인하여 재활치료 방향을 세우는 데 활용합니다.",
    features: ["보행 패턴 분석", "체중 부하 평가", "재활 경과 확인"],
  },
  {
    name: "디지털 방사선",
    category: "영상진단",
    description:
      "골격계, 흉부, 복부 상태를 빠르게 확인하여 진단과 치료 계획 수립에 활용합니다.",
    features: ["골격 평가", "흉부·복부 확인", "신속한 영상 확인"],
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
    name: "원심분리기",
    category: "혈액·임상병리",
    description:
      "혈액과 소변 검체를 분리해 다양한 원내 검사를 정확하게 진행하는 데 사용합니다.",
    features: ["혈청 분리", "소변 검사", "검체 처리"],
  },
  {
    name: "정밀검이경",
    category: "정밀진단",
    description:
      "외이도와 고막 상태를 확대 관찰하여 만성 외이염과 귀 질환 평가에 활용합니다.",
    features: ["외이도 확인", "고막 평가", "만성 외이염 진단"],
  },
  {
    name: "고급마취기",
    category: "수술·마취",
    description:
      "안정적인 흡입마취를 통해 치과, 외과, 검사 과정의 마취 안전성을 높입니다.",
    features: ["흡입마취", "산소 공급", "안정적 마취 유지"],
  },
  {
    name: "마취모니터링기기",
    category: "수술·마취",
    description:
      "마취 중 생체신호를 지속적으로 확인하여 보다 안전한 수술 환경을 유지합니다.",
    features: ["심박 확인", "호흡 확인", "혈압·산소포화도 모니터링"],
  },
  {
    name: "혈관봉합기",
    category: "수술·마취",
    description:
      "혈관과 조직을 정밀하게 봉합·지혈하는 데 사용되는 수술 장비입니다.",
    features: ["정밀 지혈", "수술 시간 단축", "조직 손상 최소화"],
  },
  {
    name: "전기지혈기",
    category: "수술·마취",
    description:
      "수술 중 출혈을 줄이고 시야를 확보하여 보다 안정적인 수술을 돕습니다.",
    features: ["출혈 감소", "수술 시야 확보", "정밀 수술 보조"],
  },
  {
    name: "멸균기",
    category: "멸균·감염관리",
    description:
      "수술기구와 처치 도구를 철저히 멸균하여 감염 위험을 줄이는 데 사용합니다.",
    features: ["기구 멸균", "감염관리", "안전한 처치 환경"],
  },
] as const;

export const EKICO_INFO = {
  title: "EKICO 보행분석",
  subtitle: "데이터 기반 정밀 재활의 시작",
  description:
    "EKICO(Electronic Kinetic & Interactive Canine Orthosis) 보행분석 시스템은 압력 센서 매트를 통해 반려동물의 보행 패턴, 체중 분배, 보행 속도를 정량적으로 분석합니다. 주관적 관찰을 넘어 객관적 데이터로 재활 치료 계획을 수립합니다.",
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
      description: "정기 분석으로 치료 효과를 객관적으로 확인합니다.",
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
    title: "슬개골 탈구 수술 + EKICO 재활",
    pet: "말티즈 · 4세 · 3kg",
    category: "정형외과 · 재활",
    summary: "양측 슬개골 탈구 3기 수술 후 EKICO 보행분석 기반 재활치료",
    treatment: "양츩 슬개골 고정술 → 수중 treadmill → EKICO 보행분석 → 레이저 치료",
    outcome: "수술 8주 후 정상 보행 회복, 체중 부하 균형 95% 달성",
    duration: "치료 기간 12주",
  },
  {
    id: "2",
    title: "십자인대 파열 수술 및 재활",
    pet: "골든리트리버 · 5세 · 28kg",
    category: "정형외과 · 재활",
    summary: "전방십자인대 파열 TPLO 수술 후 체계적 재활 프로그램",
    treatment: "TPLO 수술 → 2주 입원 케어 → 수중 treadmill → 전기 자극 치료",
    outcome: "수술 10주 후 가벼운 조깅 가능, 통증 점수 현저히 감소",
    duration: "치료 기간 14주",
  },
  {
    id: "3",
    title: "만성 피부염 한방 치료",
    pet: "코리안 숏헤어 · 6세 · 4.5kg",
    category: "한방진료",
    summary: "항생제 반복 투여에도 호전 없던 만성 아토피성 피부염",
    treatment: "체질 진단 → 맞춤 한약 처방 → 침·뜸 치료 → 식이 관리 상담",
    outcome: "8주 후 가려움 70% 감소, 피부 염증 현저히 호전",
    duration: "치료 기간 8주",
  },
  {
    id: "4",
    title: "치주염 전악 발치 및 구강 회복",
    pet: "푸들 · 8세 · 5kg",
    category: "치과",
    summary: "심한 치주염으로 전악 발치 후 구강 건강 회복",
    treatment: "구강 검진 → 전악 발치 → 항생제·진통제 → 영양 관리 상담",
    outcome: "발치 2주 후 정상 섭취, 전신 건강 지표 개선",
    duration: "치료 기간 4주",
  },
] as const;

export const EDUCATION_PROGRAMS = [
  {
    title: "반려동물 응급처치 교육",
    description: "집에서 할 수 있는 기본 응급처치 방법과 병원 방문 시기를 안내합니다.",
    topics: ["기도 확보", "심폐소생술", "출혈 응급처치", "중독 대응"],
    format: "그룹 강의 · 90분",
    frequency: "월 1회",
  },
  {
    title: "노령견·노령묘 케어",
    description: "노화에 따른 변화를 이해하고, 집에서 실천할 수 있는 관리법을 배웁니다.",
    topics: ["관절 관리", "영양 조절", "인지 기능", "통증 관찰"],
    format: "그룹 강의 · 60분",
    frequency: "월 1회",
  },
  {
    title: "구강 건강 관리",
    description: "집에서 할 수 있는 치아 관리법과 정기 검진의 중요성을 알려드립니다.",
    topics: ["양치 방법", "치석 예방", "구강 질환 신호", "식이 관리"],
    format: "그룹 강의 · 60분",
    frequency: "격월 1회",
  },
  {
    title: "수술 전·후 관리",
    description: "수술 전 준비사항과 회복기 홈케어 방법을 상세히 안내합니다.",
    topics: ["금식 안내", "상처 관리", "목줄 착용", "재활 시작 시기"],
    format: "1:1 상담 · 30분",
    frequency: "수술 예약 시",
  },
  {
    title: "영양·식이 상담",
    description: "연령, 체중, 질환에 맞는 사료 선택과 급여량을 안내합니다.",
    topics: ["체중 관리", "알레르기 식이", "신장·간 식이", "수제식"],
    format: "1:1 상담 · 30분",
    frequency: "예약제",
  },
  {
    title: "신규 보호자 오리엔테이션",
    description: "처음 반려동물을 맞이하는 보호자를 위한 기본 케어 교육입니다.",
    topics: ["예방접종", "구충", "사회화", "기본 훈련"],
    format: "그룹 강의 · 90분",
    frequency: "월 2회",
  },
] as const;
