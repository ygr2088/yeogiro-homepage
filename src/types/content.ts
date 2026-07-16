export type ContentTone =
  | "balanced"
  | "warm"
  | "professional"
  | "playful";

export type VideoMeta = {
  fileName: string;
  fileSize: number;
  duration: number;
  objectUrl: string;
};

export type ContentForm = {
  patientName: string;
  species: "강아지" | "고양이";
  breed: string;
  age: string;
  category: "재활" | "치과" | "한방" | "통증" | "내과" | "외과" | "예방";
  condition: string;
  treatments: string;
  stage: "치료 전" | "치료 중" | "회복 중" | "회복 후" | "예방 관리";
  highlight: string;
  tone: ContentTone;
  regionTags: boolean;
  consentConfirmed: boolean;
};

export type GeneratedContent = {
  instagramCaption: string;
  threadsWarm: string;
  threadsProfessional: string;
  threadsShort: string;
  tiktokCaption: string;
  shortsTitles: string[];
  hashtags: string[];
  safetyNote: string;
};

export type SavedContentDraft = {
  id: string;
  createdAt: string;
  updatedAt: string;
  form: ContentForm;
  content: GeneratedContent;
  video?: {
    fileName: string;
    fileSize: number;
    duration: number;
  };
};
