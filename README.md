# 여기로 홈페이지 v2.2 치료사례 라이브러리

포함 기능:
- 중앙 데이터 파일 `src/data/cases.ts`
- 치료사례 카테고리 필터
- 상세페이지 자동 생성
- Instagram 및 네이버 블로그 연결
- 관련 진료센터 연결

적용 후:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

빌드 성공 후:

```powershell
git add .
git commit -m "v2.2 치료사례 라이브러리 구축"
git push
```
