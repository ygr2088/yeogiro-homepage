# RecoveryMedia v2 안정화 패치

수정 내용:
- 사용하지 않는 `next/image` import 제거
- 내부 `/cases` 이동을 `<Link>`로 변경
- `RecoveryMedia` 직접 import로 Turbopack 배럴 export 캐시 문제 회피
- 영상 재생 실패 시 안전하게 처리
- Instagram 및 YouTube Shorts 링크 유지

적용 방법:
1. 프로젝트 루트에 압축을 풉니다.
2. 같은 파일은 덮어씁니다.
3. 실행 중인 개발 서버를 Ctrl+C로 종료합니다.
4. 아래 명령을 실행합니다.

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
```

빌드 성공 후:

```powershell
npm run dev
```
