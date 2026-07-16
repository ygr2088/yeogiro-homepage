# 여기로 SNS 콘텐츠 자동화 MVP 설치

## 1. 압축 파일의 내용을 프로젝트 루트에 복사

대상 프로젝트:

`C:\Users\user\Desktop\YEOGIRO_PROJECT\01_WEBSITE\YEOGIRO_CONTENT_AUTOMATION`

압축 안의 `src` 폴더는 기존 `src` 폴더와 병합합니다.

## 2. OpenAI 패키지 설치

```powershell
cd C:\Users\user\Desktop\YEOGIRO_PROJECT\01_WEBSITE\YEOGIRO_CONTENT_AUTOMATION
npm install openai
```

## 3. 환경 변수 생성

```powershell
Copy-Item .env.local.example .env.local
```

API 키가 없어도 데모 모드로 작동합니다.

실제 AI 생성을 사용할 때 `.env.local`에 키를 입력합니다.

```env
OPENAI_API_KEY=본인의_API_키
OPENAI_CONTENT_MODEL=gpt-5-mini
```

`.env.local`은 Git에 커밋하지 마세요.

## 4. 실행

```powershell
npm run dev -- -p 3001
```

접속:

`http://localhost:3001/admin/content`

## 5. 확인할 기능

- 필수값 미입력 시 생성 버튼 비활성화
- 보호자 동의 체크 전 생성 불가
- API 키가 없으면 데모 콘텐츠 생성
- API 키가 있으면 AI 콘텐츠 생성
- Instagram, Threads 3종, TikTok, Shorts, 해시태그 생성
- 결과 직접 수정
- 각 콘텐츠 복사

## 6. Git 저장

```powershell
git status
git add .
git commit -m "feat: add SNS content automation MVP"
git push origin content-automation
```

## 현재 범위

이 버전은 영상 파일을 서버에 저장하지 않습니다. 의료정보 정확성을 위해 환자 상태와 치료 내용을 직접 입력하여 문구를 생성합니다.

다음 단계:
1. 작성 이력 저장
2. 관리자 로그인
3. 영상 업로드 및 대표 프레임 추출
4. Instagram·Threads 게시 API 연결
5. 예약 게시
