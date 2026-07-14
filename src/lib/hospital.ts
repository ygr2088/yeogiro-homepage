export const HOSPITAL = {
  name: "여기로양한방동물병원",
  baseYear: 2026,
  baseClinicalYears: 22,
  totalCases: 34200,
  dentalSurgeryCases: 2850,
  centers: ["한방재활센터", "치과센터", "외과센터", "보행평가센터"],
  gaitCenter: {
    name: "보행평가센터",
    subItems: ["EKICO 보행분석"],
  },
} as const;

export function getClinicalYears() {
  const currentYear = new Date().getFullYear();
  return HOSPITAL.baseClinicalYears + (currentYear - HOSPITAL.baseYear);
}