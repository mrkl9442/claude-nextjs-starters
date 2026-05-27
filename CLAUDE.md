@AGENTS.md

# Next.js Starter Kit — 프로젝트 가이드

## 프로젝트 개요

Next.js 16 App Router 기반의 모던 웹 대시보드 스타터킷.
인증, 대시보드, 마케팅 페이지를 포함한 풀스택 레이아웃을 제공한다.

## 기술 스택

| 기술 | 버전 | 용도 |
|------|------|------|
| Next.js | 16.2.6 | 프레임워크 (App Router, RSC) |
| React | 19.2.4 | UI 라이브러리 |
| TypeScript | 5 | 타입 시스템 (strict 모드) |
| Tailwind CSS | 4 | 스타일링 (CSS-first, oklch 색상) |
| shadcn/ui | 4.x | UI 컴포넌트 (radix-nova 스타일) |
| Radix UI | 1.x | 헤드리스 UI 프리미티브 |
| react-hook-form | 7.x | 폼 상태 관리 |
| zod | 4.x | 스키마 유효성 검사 |
| next-themes | 0.4.x | 다크모드 |
| sonner | 2.x | 토스트 알림 |
| lucide-react | 1.x | 아이콘 |
| Jest + Testing Library | 30.x | 테스트 |

## 디렉토리 구조

```
/
├── app/                        # Next.js App Router
│   ├── (auth)/                 # 인증 라우트 그룹
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── layout.tsx
│   ├── (dashboard)/            # 대시보드 라우트 그룹
│   │   ├── dashboard/
│   │   │   ├── analytics/page.tsx
│   │   │   ├── documents/page.tsx
│   │   │   ├── notifications/page.tsx
│   │   │   ├── settings/page.tsx
│   │   │   ├── users/page.tsx
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (marketing)/            # 마케팅 라우트 그룹
│   │   ├── docs/
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   └── layout.tsx
│   ├── globals.css             # Tailwind CSS 4 전역 스타일
│   └── layout.tsx              # 루트 레이아웃
├── components/
│   ├── layout/                 # 레이아웃 컴포넌트
│   │   ├── dashboard-header.tsx
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   └── sidebar.tsx
│   ├── providers/
│   │   └── theme-provider.tsx
│   └── ui/                     # shadcn 기반 UI 컴포넌트 30+
├── lib/
│   └── utils.ts                # cn() 유틸리티
├── __tests__/                  # Jest 테스트
│   ├── app/
│   └── lib/
└── .claude/                    # Claude Code 설정
    ├── agents/                 # 커스텀 에이전트
    ├── commands/               # 커스텀 커맨드 (/audit, /git/commit)
    └── hooks/                  # 훅 스크립트
```

**중요**: `src/` 폴더 없음. `app/`, `components/`, `lib/`이 루트에 직접 위치한다.

## 경로 별칭

```
@/* → ./*  (루트 디렉토리)
```

예시: `import { cn } from "@/lib/utils"` → `./lib/utils.ts`

## 개발 명령어

```bash
npm run dev          # 개발 서버 (http://localhost:3000)
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버
npm run lint         # ESLint 검사
npm run test         # Jest 테스트 실행
npm run test:watch   # 테스트 와치 모드
```

## 핵심 패턴 및 컨벤션

### Server/Client 컴포넌트 구분
- 기본값은 Server Component (RSC)
- 훅, 이벤트 핸들러, 브라우저 API 사용 시 `"use client"` 지시어 추가
- `Suspense`로 클라이언트 컴포넌트 경계 처리

### 스타일링
- `cn()` 함수로 조건부 클래스 병합 (`clsx` + `tailwind-merge`)
- 시맨틱 토큰 사용: `bg-primary`, `text-muted-foreground`, `border-border` 등
- 하드코딩된 색상값(`#fff`, `blue-500`) 대신 CSS 변수 토큰 사용
- oklch 색상 시스템 (`:root`, `.dark` 클래스로 테마 전환)

### Tailwind CSS 4 특이사항
- `tailwind.config.js` 파일 없음 — `app/globals.css`에서 CSS-first 방식으로 설정
- `@import "tailwindcss"` 방식 사용
- `@theme inline { }` 블록으로 CSS 변수를 Tailwind 토큰에 매핑

### 폼 처리
```tsx
// zod 스키마 + react-hook-form + zodResolver 조합
const schema = z.object({ email: z.string().email() });
const form = useForm({ resolver: zodResolver(schema) });
```

### UI 컴포넌트
- `components/ui/`의 shadcn 컴포넌트를 우선 사용
- 새 컴포넌트 추가: `npx shadcn add <component>`
- `class-variance-authority` (CVA)로 변형(variant) 관리

## 테스트

- 테스트 파일 위치: `__tests__/` (프로젝트 루트)
- 구조: `__tests__/app/`, `__tests__/lib/`
- Next.js 내장 모듈 모킹 필요:
  ```tsx
  jest.mock("next/link", () => { ... });
  jest.mock("next/navigation", () => ({ usePathname: () => "/" }));
  ```
- 경로 별칭 `@/`는 jest.config.ts의 `moduleNameMapper`로 처리됨

## 커스텀 Claude 커맨드

| 커맨드 | 설명 |
|--------|------|
| `/audit` | ESLint + TypeScript 타입 + 코드 냄새 + 접근성 일괄 점검 |
| `/git/commit` | 이모지 컨벤셔널 커밋 메시지 생성 |

## 주요 주의사항

- **Next.js 16**: 이전 버전 대비 breaking changes 존재. 코드 작성 전 `node_modules/next/dist/docs/`의 관련 가이드 확인
- **React 19**: 새로운 훅 API (`use`, `useActionState` 등) 활용 가능
- **Tailwind CSS 4**: v3 방식(`tailwind.config.js`, `@apply` 의존 설정)과 다름
- **shadcn/ui**: `components.json` 설정 기준으로 컴포넌트 경로 자동 관리됨
