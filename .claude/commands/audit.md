---
description: 'ESLint, TypeScript 타입, 코드 품질, 접근성을 한 번에 점검합니다'
allowed-tools:
  [
    'Bash(npm run lint:*)',
    'Bash(npx tsc:*)',
    'Bash(npx tsc --noEmit:*)',
    'Grep',
    'Glob',
    'Read',
  ]
---

# Claude 명령어: Audit

PR 전 코드 품질을 한 번에 점검합니다. ESLint, TypeScript 타입 에러, 코드 냄새, 접근성 이슈를 순서대로 확인하고 항목별로 요약합니다.

## 사용법

```
/audit
```

## 점검 프로세스

아래 순서로 점검을 실행하고, 각 단계 결과를 수집한 뒤 마지막에 한 번에 요약합니다.

### 1단계 — ESLint

`npm run lint`를 실행합니다.

- 에러(error)와 경고(warning)를 구분해서 나열
- 파일별로 그룹화하여 출력

### 2단계 — TypeScript 타입 검사

`npx tsc --noEmit`을 실행합니다.

- 타입 에러가 있으면 파일명 + 줄 번호 + 메시지로 나열
- 에러가 없으면 "✅ 타입 에러 없음"으로 표시

### 3단계 — 코드 냄새 탐지

Grep을 사용해 아래 패턴을 `app/`, `components/`, `lib/` 하위 `.ts`, `.tsx` 파일에서 검색합니다.

| 항목 | 패턴 | 설명 |
|------|------|------|
| any 타입 | `: any` | 타입 안전성 저하 |
| as any 캐스팅 | `as any` | 강제 캐스팅 |
| 빈 catch 블록 | `catch\s*\([^)]*\)\s*\{\s*\}` | 에러 무시 |
| console.log | `console\.log` | 디버그 로그 잔존 |
| TODO/FIXME | `TODO\|FIXME` | 미완성 작업 |

각 패턴별로 발견된 파일과 줄 번호를 나열합니다.

### 4단계 — 접근성 점검

Grep으로 `app/`, `components/` 하위 `.tsx` 파일에서 아래 패턴을 확인합니다.

| 항목 | 패턴 | 설명 |
|------|------|------|
| img alt 누락 | `<img(?![^>]*alt=)` | 이미지 대체 텍스트 없음 |
| onClick에 키보드 없음 | `onClick(?!.*onKey)` | 마우스 전용 인터랙션 |
| aria-label 없는 버튼 | `<button(?![^>]*aria-)` | 스크린리더 미지원 버튼 |

발견된 항목은 파일명과 줄 번호로 표시합니다.

## 출력 형식

점검이 끝나면 아래 형식으로 최종 요약을 출력합니다.

```
## 🔍 코드 품질 감사 결과

### ✅ / ❌ ESLint
- 에러: N건 / 경고: N건
- (에러/경고 목록)

### ✅ / ❌ TypeScript
- (에러 목록 또는 "타입 에러 없음")

### ✅ / ⚠️ 코드 냄새
- any 타입: N건 (파일명:줄번호)
- console.log: N건
- TODO/FIXME: N건
- ...

### ✅ / ⚠️ 접근성
- img alt 누락: N건
- 키보드 이벤트 누락: N건
- aria-label 누락: N건

---
🎯 총 요약: 에러 N건 / 경고 N건 / 개선 권장 N건
```

## 판정 기준

- **즉시 수정 필요**: ESLint 에러, TypeScript 에러, `any` 타입, 빈 catch
- **수정 권장**: ESLint 경고, `console.log`, 접근성 이슈
- **참고용**: TODO/FIXME

## 참고사항

- 점검은 `app/`, `components/`, `lib/` 하위 파일을 대상으로 합니다 (`src/` 폴더 없음)
- 자동 수정은 하지 않습니다 — 결과만 보고합니다
- 수정이 필요한 항목은 사용자에게 확인 후 진행합니다
