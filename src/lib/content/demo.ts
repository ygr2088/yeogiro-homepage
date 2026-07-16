import type { ContentForm, GeneratedContent } from "@/types/content";

export function createDemoContent(form: ContentForm): GeneratedContent {
  const name = form.patientName.trim() || "이 아이";
  const condition = form.condition.trim() || "현재 상태";
  const treatments = form.treatments.trim() || "맞춤 관리";
  const highlight =
    form.highlight.trim() || "작은 변화를 꾸준히 확인하는 과정";

  const regional = form.regionTags
    ? ["#과천동물병원", "#안양동물병원", "#인덕원동물병원", "#군포동물병원"]
    : [];

  return {
    instagramCaption: `${name}의 오늘은 어제와 조금 달랐습니다.

${condition}으로 내원한 뒤, 현재 상태와 움직임을 꼼꼼히 확인하며 ${treatments}을 진행하고 있습니다.

재활과 통증 관리는 한 번의 큰 변화보다 작은 변화가 차곡차곡 쌓이는 과정이 중요합니다. 이번 영상에는 ${highlight}을 담았습니다.

모든 환자의 회복 속도와 치료 반응은 다를 수 있습니다. 현재 상태에 맞는 검사와 계획을 세워 꾸준히 확인하겠습니다.

여기로양한방동물병원은 양방 진료와 한방·재활 치료를 함께 고려해 환자에게 필요한 방향을 찾습니다.

아이의 보행이나 통증이 걱정되신다면 현재 모습을 영상으로 기록해 두셨다가 진료 시 함께 보여주세요.`,
    threadsWarm: `${name}가 오늘 보여준 작은 변화가 참 반가웠습니다.\n\n${condition}을 관리하며 ${treatments}을 이어가고 있는데요. 큰 변화만 기다리기보다 어제보다 조금 편안해진 움직임을 함께 찾아가는 것이 재활의 중요한 과정이라고 생각합니다.\n\n오늘 영상에는 ${highlight}이 담겨 있습니다.`,
    threadsProfessional: `${condition} 환자를 볼 때는 단순히 걷는 모습만 확인하지 않습니다. 체중을 싣는 정도, 좌우 균형, 통증 반응과 피로도까지 함께 살펴야 합니다.\n\n${name}는 현재 ${treatments}을 진행하며 변화를 확인하고 있습니다. 치료 반응과 회복 속도에는 개인차가 있어 반복 평가가 중요합니다.`,
    threadsShort: `${name}의 오늘 한 걸음.\n큰 변화보다 어제보다 조금 편안해진 움직임을 함께 찾아갑니다. 🐾`,
    tiktokCaption: `${name}의 작은 변화가 쌓이는 중 🐾 ${condition} 맞춤 관리 과정`,
    shortsTitles: [
      `${condition} 관리 중인 ${name}의 변화`,
      `작은 한 걸음이 쌓이는 반려견 재활 과정`,
      `${treatments} 후 움직임을 확인해 보았습니다`,
    ],
    hashtags: [
      "#여기로양한방동물병원",
      `#${form.category}진료`,
      "#강아지재활",
      "#반려동물재활",
      "#노령견관리",
      ...regional,
    ],
    safetyNote:
      "게시 전 보호자 동의, 환자 익명화, 실제 진료 내용과 표현의 일치 여부를 확인하세요.",
  };
}
