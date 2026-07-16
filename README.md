# 여기로 홈페이지 v2.1 콘텐츠 데이터 시스템

## 핵심 변경
기존 컴포넌트에 흩어져 있던 치료영상과 블로그 데이터를
`src/data/content.ts` 한 곳에서 관리하도록 변경합니다.

## 새 파일
- src/data/content.ts

## 수정 파일
- src/components/home/RecoveryMedia.tsx
- src/components/home/BlogReviews.tsx

## 데이터에 포함된 자료
- 대표 회복영상 8개
- Instagram 링크
- YouTube Shorts 채널
- 네이버 블로그 치료사례 및 설명자료 20여 개
- 사례 상세페이지 연결

## 적용 방법
프로젝트 루트에서 압축을 풀고 동일 파일을 덮어씁니다.

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

빌드가 성공하면:

```powershell
git add .
git commit -m "v2.1 콘텐츠 데이터 시스템 구축"
git push
```

## 다음 사례 추가 방법
`src/data/content.ts`의 `RECOVERY_CONTENTS` 또는
`BLOG_CONTENTS` 배열에 항목 하나만 추가하면 됩니다.
