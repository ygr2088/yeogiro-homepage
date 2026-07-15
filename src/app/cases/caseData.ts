export type CaseDetail = {
  slug: string;
  category: string;
  title: string;
  pet: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  overview: string;
  symptoms: string[];
  evaluations: string[];
  treatments: string[];
  progress: string[];
  homeCare: string[];
  relatedHref: string;
  relatedLabel: string;
};

export const caseDetails: CaseDetail[] = [
  {
    slug: "rehab-walking",
    category: "한방재활",
    title: "보행이 불편한 환자의 단계별 재활 관리",
    pet: "강아지 · 보행 저하",
    image: "/images/cases/rehab-walking.webp",
    imageAlt: "여기로양한방동물병원 수중재활 치료 장면",
    imagePosition: "object-center",
    overview:
      "보행 저하가 있는 환자는 통증, 관절 가동범위, 근육량과 신경학적 상태를 함께 평가해야 합니다. 한 가지 치료에 의존하기보다 환자의 회복 단계에 맞춰 치료 강도를 조절합니다.",
    symptoms: [
      "뒷다리 힘 저하",
      "보행 시 흔들림 또는 불안정",
      "산책 시간 감소",
      "일어나거나 방향을 바꿀 때 어려움",
    ],
    evaluations: [
      "통증 반응과 관절 가동범위 확인",
      "좌우 근육량과 체중부하 비교",
      "보행 영상 및 자세 평가",
      "기존 질환과 복용약 확인",
    ],
    treatments: ["침치료", "레이저", "수중재활", "단계별 운동"],
    progress: [
      "초기에는 통증과 피로도를 낮추는 데 집중합니다.",
      "상태가 안정되면 저강도 근력운동과 수중재활을 연결합니다.",
      "보행 반응을 확인하며 운동 강도와 빈도를 조절합니다.",
    ],
    homeCare: [
      "미끄럼 방지 매트 사용",
      "무리한 계단과 점프 제한",
      "짧고 규칙적인 산책",
      "피로 또는 통증 증가 시 운동량 조절",
    ],
    relatedHref: "/rehabilitation",
    relatedLabel: "한방재활센터",
  },
  {
    slug: "acupuncture-pain",
    category: "침치료",
    title: "노령 환자의 통증과 움직임 관리",
    pet: "노령견 · 만성 통증",
    image: "/images/cases/acupuncture.webp",
    imageAlt: "여기로양한방동물병원 침치료 장면",
    imagePosition: "object-center",
    overview:
      "노령 환자의 움직임 감소는 관절통, 근육 감소, 신경계 문제와 만성질환이 복합적으로 작용할 수 있습니다. 전신상태를 고려해 무리하지 않는 통증관리와 활동 회복을 목표로 합니다.",
    symptoms: [
      "일어나기 어려움",
      "활동량 감소",
      "관절 주변 통증 반응",
      "산책 후 피로 증가",
    ],
    evaluations: [
      "통증 위치와 강도 평가",
      "관절과 척추의 움직임 확인",
      "기존 질환 및 복용약 검토",
      "생활환경과 일상 활동 확인",
    ],
    treatments: ["침치료", "레이저", "생활환경 조정", "저강도 운동"],
    progress: [
      "초기에는 통증 반응과 치료 후 피로도를 확인합니다.",
      "치료 반응에 따라 운동 범위와 빈도를 조절합니다.",
      "일상에서 편안하게 움직일 수 있는 상태를 목표로 관리합니다.",
    ],
    homeCare: [
      "푹신하면서 미끄럽지 않은 잠자리",
      "체중관리",
      "장시간 무리한 산책 피하기",
      "통증 변화 기록",
    ],
    relatedHref: "/rehabilitation",
    relatedLabel: "침치료센터",
  },
  {
    slug: "dental-periodontal",
    category: "치과",
    title: "치주질환 환자의 구강 정밀평가와 치료",
    pet: "강아지 · 치주질환",
    image: "/images/cases/dental.webp",
    imageAlt: "여기로양한방동물병원 치과 방사선 검사 장면",
    imagePosition: "object-center",
    overview:
      "치아 표면만으로는 치근과 치조골 상태를 정확히 판단하기 어렵습니다. 구강 X-ray를 통해 잇몸 아래 병변을 확인하고 보존 가능성과 발치 필요성을 함께 평가합니다.",
    symptoms: [
      "심한 구취",
      "잇몸 출혈",
      "딱딱한 음식 회피",
      "한쪽으로만 씹는 행동",
    ],
    evaluations: [
      "구강 전체 시진",
      "치주낭과 치아 동요도 확인",
      "구강 X-ray 촬영",
      "치근과 치조골 상태 평가",
    ],
    treatments: ["스케일링", "발치 평가", "국소 통증관리", "홈케어"],
    progress: [
      "치료 후 통증과 출혈 상태를 확인합니다.",
      "식이와 구강 위생관리 방법을 보호자에게 안내합니다.",
      "정기적인 구강검진으로 재발 위험을 관리합니다.",
    ],
    homeCare: [
      "회복기간 동안 부드러운 식이",
      "수의사가 안내한 시점부터 양치 재개",
      "구취와 식욕 변화 관찰",
      "정기 구강검진",
    ],
    relatedHref: "/dental-center",
    relatedLabel: "치과센터",
  },
  {
    slug: "surgery-recovery",
    category: "외과",
    title: "수술 전 평가부터 회복까지 연결한 외과 관리",
    pet: "강아지 · 외과수술",
    image: "/images/cases/surgery.webp",
    imageAlt: "여기로양한방동물병원 외과 수술 장면",
    imagePosition: "object-[50%_34%]",
    overview:
      "안전한 수술은 수술 전 검사와 개별 마취계획에서 시작합니다. 수술 자체뿐 아니라 통증관리, 회복 모니터링과 필요한 재활까지 한 과정으로 연결합니다.",
    symptoms: [
      "수술적 처치가 필요한 종괴",
      "연부조직 질환",
      "보존적 치료로 개선되지 않는 문제",
      "기능 저하 또는 반복되는 통증",
    ],
    evaluations: [
      "전신 신체검사",
      "혈액검사와 영상검사",
      "마취 위험도 평가",
      "수술 범위와 회복 계획 설명",
    ],
    treatments: ["개별 마취계획", "수술", "통증관리", "회복 모니터링"],
    progress: [
      "수술 직후 통증, 체온과 생체신호를 확인합니다.",
      "식욕과 활동 상태에 따라 퇴원 및 약물 계획을 조정합니다.",
      "필요한 경우 레이저와 재활치료를 연결합니다.",
    ],
    homeCare: [
      "수술부위 핥기 방지",
      "처방약 정확히 급여",
      "격한 활동 제한",
      "부종, 출혈, 식욕 저하 시 병원 연락",
    ],
    relatedHref: "/surgery",
    relatedLabel: "외과수술센터",
  },
  {
    slug: "internal-chronic",
    category: "내과",
    title: "반복되는 증상의 원인을 찾는 내과 진료",
    pet: "강아지 · 만성 내과질환",
    image: "/images/cases/internal.webp",
    imageAlt: "여기로양한방동물병원 초음파 검사 장면",
    imagePosition: "object-[46%_42%]",
    overview:
      "반복되는 구토, 식욕 저하와 체중 변화는 단순한 위장 문제 외에도 간, 신장, 췌장과 내분비 질환 등 다양한 원인이 있을 수 있습니다. 검사 결과와 임상 변화를 함께 추적합니다.",
    symptoms: [
      "반복되는 구토",
      "식욕 저하",
      "활력 감소",
      "체중 증가 또는 감소",
    ],
    evaluations: [
      "병력과 식이 문진",
      "혈액검사와 소변검사",
      "방사선 또는 초음파 검사",
      "복용약과 기존 질환 검토",
    ],
    treatments: ["수액", "약물", "식이조절", "재검진과 장기관리"],
    progress: [
      "초기 증상과 검사 이상을 우선 안정화합니다.",
      "재검사를 통해 수치와 임상 반응을 비교합니다.",
      "장기 관리가 필요한 경우 식이와 약물 계획을 조정합니다.",
    ],
    homeCare: [
      "식욕과 음수량 기록",
      "구토·설사 횟수 확인",
      "체중 정기 측정",
      "처방식과 약물 일정 준수",
    ],
    relatedHref: "/internal-medicine",
    relatedLabel: "내과진료센터",
  },
  {
    slug: "gait-analysis",
    category: "보행평가",
    title: "눈으로만 보기 어려운 보행 변화를 데이터로 평가",
    pet: "강아지 · 보행 이상",
    image: "/images/cases/gait.webp",
    imageAlt: "여기로양한방동물병원 EKICO 보행평가 장면",
    imagePosition: "object-center",
    overview:
      "미세한 체중부하 차이와 좌우 불균형은 짧은 진찰만으로 확인하기 어려울 수 있습니다. 보행 영상과 데이터를 통해 치료 전후의 변화를 비교합니다.",
    symptoms: [
      "절뚝거림",
      "좌우 체중부하 차이",
      "수술 후 보행 변화",
      "산책 시 쉽게 지침",
    ],
    evaluations: [
      "보행 영상 촬영",
      "좌우 균형 비교",
      "관절 가동범위와 통증 평가",
      "치료 전후 데이터 비교",
    ],
    treatments: ["통증관리", "운동재활", "보행 교정", "보호자 교육"],
    progress: [
      "초기 보행 상태를 기준값으로 기록합니다.",
      "치료 후 변화와 보상 움직임을 비교합니다.",
      "데이터를 바탕으로 재활 강도와 운동 방법을 조정합니다.",
    ],
    homeCare: [
      "정해진 속도로 산책",
      "미끄러운 바닥 피하기",
      "보행 영상 정기 기록",
      "통증 또는 절뚝거림 증가 시 휴식",
    ],
    relatedHref: "/ekico",
    relatedLabel: "보행평가센터",
  },
];

export function getCaseDetail(slug: string) {
  return caseDetails.find((item) => item.slug === slug);
}
