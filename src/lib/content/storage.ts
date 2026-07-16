import type { SavedContentDraft } from "@/types/content";

const STORAGE_KEY = "yeogiro-content-drafts-v1";

export function loadDrafts(): SavedContentDraft[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as SavedContentDraft[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveDrafts(drafts: SavedContentDraft[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(drafts));
}

export function upsertDraft(
  current: SavedContentDraft[],
  draft: SavedContentDraft,
): SavedContentDraft[] {
  const existingIndex = current.findIndex((item) => item.id === draft.id);

  if (existingIndex === -1) {
    return [draft, ...current];
  }

  const next = [...current];
  next[existingIndex] = draft;
  return next.sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );
}
