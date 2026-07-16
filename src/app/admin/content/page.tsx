import type { Metadata } from "next";

import ContentGenerator from "@/components/admin/ContentGenerator";

export const metadata: Metadata = {
  title: "SNS 콘텐츠 자동 생성 | 여기로양한방동물병원",
  description:
    "Instagram Reels와 Threads용 동물병원 콘텐츠를 생성하는 관리자 도구",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContentAutomationPage() {
  return <ContentGenerator />;
}
