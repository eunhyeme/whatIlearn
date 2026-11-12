# What I Learn

대규모 시스템 설계 이론을 직접 움직여 보며 이해하는 인터랙티브 노트

사이트: https://eunhyeme.github.io/whatIlearn/

## 로컬에서 실행

```bash
npm install
npm run dev     # http://localhost:4321/whatIlearn/
npm run build   # dist/ 에 정적 사이트 생성
```

## 구조

```
src/
├─ content/docs/           # 페이지 (MDX)
│  ├─ index.mdx            # 홈
│  └─ system-design/       # 대규모 시스템 설계 기초 1
├─ components/             # 인터랙티브 시뮬레이터
└─ styles/custom.css       # 시뮬레이터 공통 스타일
```

## 새 장 추가하기

1. `src/content/docs/system-design/ch05-consistent-hashing.mdx` 파일 생성
2. 시뮬레이터가 있으면 `src/components/` 에 `.astro` 컴포넌트로 만들고 MDX에서 import
3. `astro.config.mjs` 의 `sidebar` 에 항목 추가
4. `system-design/index.mdx` 의 진행 상황 표 업데이트

## 배포

`main` 브랜치에 push하면 GitHub Actions(`.github/workflows/deploy.yml`)가 자동으로 GitHub Pages에 배포해요.
