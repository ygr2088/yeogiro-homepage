import OpenAI from "openai";
import { NextResponse } from "next/server";

import { createDemoContent } from "@/lib/content/demo";
import { buildContentPrompt } from "@/lib/content/prompts";
import type { ContentForm, GeneratedContent } from "@/types/content";

export const runtime = "nodejs";

function isContentForm(value: unknown): value is ContentForm {
  if (!value || typeof value !== "object") return false;
  const form = value as Partial<ContentForm>;

  return Boolean(
    form.species &&
      form.category &&
      form.stage &&
      typeof form.condition === "string" &&
      typeof form.treatments === "string" &&
      typeof form.highlight === "string" &&
      typeof form.consentConfirmed === "boolean",
  );
}

function parseGeneratedContent(raw: string): GeneratedContent {
  const cleaned = raw
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/, "");

  const parsed = JSON.parse(cleaned) as Partial<GeneratedContent>;

  if (
    typeof parsed.instagramCaption !== "string" ||
    typeof parsed.threadsWarm !== "string" ||
    typeof parsed.threadsProfessional !== "string" ||
    typeof parsed.threadsShort !== "string" ||
    typeof parsed.tiktokCaption !== "string" ||
    !Array.isArray(parsed.shortsTitles) ||
    !Array.isArray(parsed.hashtags) ||
    typeof parsed.safetyNote !== "string"
  ) {
    throw new Error("AI 응답 형식이 올바르지 않습니다.");
  }

  return parsed as GeneratedContent;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isContentForm(body)) {
      return NextResponse.json(
        { error: "입력값 형식이 올바르지 않습니다." },
        { status: 400 },
      );
    }

    if (!body.consentConfirmed) {
      return NextResponse.json(
        { error: "보호자 게시 동의를 먼저 확인해 주세요." },
        { status: 400 },
      );
    }

    if (!body.condition.trim() || !body.treatments.trim()) {
      return NextResponse.json(
        { error: "질환·상태와 치료 내용을 입력해 주세요." },
        { status: 400 },
      );
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        mode: "demo",
        content: createDemoContent(body),
      });
    }

    const client = new OpenAI({ apiKey });
    const response = await client.responses.create({
      model: process.env.OPENAI_CONTENT_MODEL || "gpt-5-mini",
      input: buildContentPrompt(body),
    });

    const outputText = response.output_text;

    if (!outputText) {
      throw new Error("AI가 빈 응답을 반환했습니다.");
    }

    return NextResponse.json({
      mode: "ai",
      content: parseGeneratedContent(outputText),
    });
  } catch (error) {
    console.error("[content-generate]", error);

    const message =
      error instanceof Error
        ? error.message
        : "콘텐츠 생성 중 알 수 없는 오류가 발생했습니다.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
