# 2단계 업데이트: 영상 미리보기와 작성 이력

## 추가 기능

- 릴스 영상 파일 선택
- 영상 미리보기
- 파일명·용량·재생시간 표시
- 최대 500MB 제한
- 생성 결과 브라우저 임시 저장
- 저장된 콘텐츠 다시 불러오기
- 기존 저장 내용 수정
- 작성 이력 삭제

## 적용 방법

압축 파일을 풀고 아래 프로젝트 루트에 덮어씁니다.

`C:\Users\user\Desktop\YEOGIRO_PROJECT\01_WEBSITE\YEOGIRO_CONTENT_AUTOMATION`

교체·추가되는 파일:

- `src/types/content.ts`
- `src/lib/content/storage.ts`
- `src/components/admin/ContentGenerator.tsx`
- `src/components/admin/ContentHistory.tsx`

## 실행

```powershell
cd C:\Users\user\Desktop\YEOGIRO_PROJECT\01_WEBSITE\YEOGIRO_CONTENT_AUTOMATION
npm run dev -- -p 3001
```

접속:

`http://localhost:3001/admin/content`

## 참고

- 영상은 아직 서버에 업로드되지 않습니다.
- 작성 이력은 현재 브라우저의 localStorage에 저장됩니다.
- 브라우저 데이터 삭제 시 작성 이력도 삭제됩니다.
- 다음 단계에서 Supabase를 연결하면 여러 PC에서 같은 이력을 사용할 수 있습니다.

## Git 저장

```powershell
git status
git add .
git commit -m "feat: add video preview and content draft history"
git push origin content-automation
```
