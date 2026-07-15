# 치료사례 상세페이지 v1

## 추가 내용
- `/cases/[slug]` 동적 상세페이지
- 치료사례 6개 상세 데이터
- 증상, 검사, 치료계획, 회복과정, 홈케어 구성
- 기존 치료사례 목록 버튼을 상세페이지로 연결
- SEO용 정적 경로와 메타데이터 생성

## 생성되는 주소
- /cases/rehab-walking
- /cases/acupuncture-pain
- /cases/dental-periodontal
- /cases/surgery-recovery
- /cases/internal-chronic
- /cases/gait-analysis

## 적용
프로젝트 루트에 압축을 풀고 동일 파일을 덮어씁니다.

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```
