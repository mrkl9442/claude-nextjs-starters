<!-- BEGIN:nextjs-agent-rules -->
# Next.js 16 — 에이전트 주의사항

## Breaking Changes 경고

이 프로젝트는 **Next.js 16.2.6**을 사용한다. 훈련 데이터의 Next.js 지식과 다를 수 있으므로, 코드 작성 전 반드시 `node_modules/next/dist/docs/` 가이드를 확인하라.

## 코드 작성 전 필수 확인 사항

### App Router 패턴
- Server Component가 기본값. `"use client"` 지시어는 클라이언트 기능이 필요할 때만 추가
- `usePathname`, `useRouter`, `useSearchParams`는 Client Component에서만 사용 가능
- `Suspense` 경계로 클라이언트 컴포넌트를 감싸야 할 수 있음 (특히 `useSearchParams`)
- 메타데이터는 Server Component에서 `export const metadata` 또는 `export async function generateMetadata()`로 정의

### 데이터 페칭
- Server Component에서 직접 `async/await` 사용 가능
- `fetch()`에 `cache` 옵션으로 캐싱 제어

### 이미지 및 링크
- 이미지: 반드시 `next/image`의 `<Image>` 사용
- 링크: 반드시 `next/link`의 `<Link>` 사용

## 프로젝트 구조 규칙

- `src/` 폴더 없음 — `app/`, `components/`, `lib/`이 루트에 위치
- 경로 별칭: `@/*` → `./*` (루트)
- 라우트 그룹: `(auth)`, `(dashboard)`, `(marketing)`

## Tailwind CSS 4 규칙

- `tailwind.config.js` 없음 — `app/globals.css`에서 CSS-first 설정
- 하드코딩 색상값 금지 → 시맨틱 토큰 사용 (`bg-primary`, `text-muted-foreground` 등)
- 조건부 클래스는 `cn()` 함수 사용 (`lib/utils.ts`)

## 한국어 규칙

- UI 텍스트: 한국어
- 코드 주석: 한국어
- 변수명/함수명: 영어 (코드 표준)
<!-- END:nextjs-agent-rules -->
