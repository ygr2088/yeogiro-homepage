# 치료사례 치과 방사선 사진 패치

치료사례 페이지에서 사용하는 치과 대표 사진을 치과 방사선 사진으로 교체합니다.

교체 파일:
public/images/cases/dental.webp

프로젝트 루트에 압축을 풀고 같은 파일을 덮어쓴 뒤 실행하세요.

Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run build
