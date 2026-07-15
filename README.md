# 여기로 회복 영상·후기 미디어 섹션 v1

## 포함 내용
- 홈페이지에서 직접 재생되는 실제 치료영상 4개
- 영상별 썸네일 이미지
- Instagram 개별 콘텐츠 연결
- YouTube `@Yeogiroamc` Shorts 채널 연결
- 치료 결과가 환자마다 다를 수 있다는 안내문
- 치료사례 전체보기 연결

## 파일
- `src/components/home/RecoveryMedia.tsx`
- `src/components/home/index.ts`
- `src/components/home/HomeSections.tsx`
- `public/videos/recovery/*`
- `public/images/recovery/*`
- `src/app_page_example.tsx`

## page.tsx 적용
현재 `src/app/page.tsx`에 `RecoveryMedia`를 import하고 아래 위치에 추가하세요.

```tsx
<TreatmentTechnology />
<RecoveryMedia />
<FacilityPreview />
```

`src/app_page_example.tsx`에는 전체 예시가 들어 있습니다. 현재 page.tsx 구조가 같다면 내용을 복사해 교체할 수 있습니다.

## 빌드
```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

## GitHub 반영
```powershell
git add .
git commit -m "실제 회복 영상과 유튜브 쇼츠 연결"
git push
```
