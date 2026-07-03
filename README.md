# 여기로 동물병원 (Yeogiro Animal Hospital)

Next.js 15 기반의 반려동물 종합병원 웹사이트입니다.

## 기술 스택

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **React 19**

## 페이지

| 경로 | 설명 |
|------|------|
| `/` | 홈 |
| `/about` | 병원소개 |
| `/team` | 의료진 |
| `/medical-services` | 진료과목 |
| `/rehabilitation` | 재활치료 |
| `/dental-center` | 치과센터 |
| `/traditional-medicine` | 한방진료 |
| `/equipment` | 첨단 의료장비 |
| `/ekico` | EKICO 보행분석 |
| `/cases` | 치료사례 |
| `/education` | 보호자 교육 |
| `/blog` | 블로그 |
| `/reviews` | 후기 |
| `/contact` | 오시는 길 / 예약 |

## 시작하기

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
src/
├── app/                  # App Router 페이지
├── components/
│   ├── contact/          # 연락처/예약 컴포넌트
│   ├── home/             # 홈 페이지 섹션
│   ├── layout/           # Header, Footer, PageHero
│   ├── seo/              # JSON-LD 구조화 데이터
│   └── ui/               # Button, Card, Icon 등 공통 UI
└── lib/
    ├── constants.ts      # 사이트 설정 및 콘텐츠 데이터
    ├── metadata.ts       # SEO 메타데이터 헬퍼
    └── utils.ts          # 유틸리티 함수
```

## SEO

- 페이지별 `metadata` (title, description, Open Graph)
- `sitemap.xml` / `robots.txt` 자동 생성
- Schema.org JSON-LD (VeterinaryCare, BreadcrumbList)
- 한국어 `lang="ko"` 설정

## 커스터마이징

`src/lib/constants.ts`에서 병원명, 연락처, 주소, 진료시간 등을 수정할 수 있습니다.
