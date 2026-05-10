import Link from "next/link";
import { ArrowRight, MousePointerClick, FileText, Square, Table2, CalendarDays, Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = { title: "컴포넌트" };

const componentList = [
  {
    title: "버튼",
    description: "다양한 스타일과 크기를 지원하는 버튼 컴포넌트입니다.",
    href: "/docs/components/button",
    icon: MousePointerClick,
    tags: ["UI", "인터랙션"],
  },
  {
    title: "폼",
    description: "react-hook-form + zod 기반의 유효성 검사 폼 컴포넌트입니다.",
    href: "/docs/components/form",
    icon: FileText,
    tags: ["UI", "데이터 입력"],
  },
  {
    title: "다이얼로그",
    description: "접근성을 고려한 모달 다이얼로그 컴포넌트입니다.",
    href: "/docs/components/dialog",
    icon: Square,
    tags: ["UI", "오버레이"],
  },
  {
    title: "테이블",
    description: "정렬과 필터링을 지원하는 데이터 테이블 컴포넌트입니다.",
    href: "/docs/components/table",
    icon: Table2,
    tags: ["UI", "데이터 표시"],
  },
  {
    title: "캘린더",
    description: "날짜를 선택할 수 있는 캘린더 컴포넌트입니다.",
    href: "/docs/components/calendar",
    icon: CalendarDays,
    tags: ["UI", "날짜"],
  },
  {
    title: "커맨드",
    description: "키보드 단축키 기반의 커맨드 팔레트 컴포넌트입니다.",
    href: "/docs/components/command",
    icon: Terminal,
    tags: ["UI", "검색"],
  },
];

export default function ComponentsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-4">
        <Badge variant="secondary">컴포넌트</Badge>
      </div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold tracking-tight">컴포넌트 쇼케이스</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          shadcn/ui 기반으로 구성된 재사용 가능한 컴포넌트 모음입니다.
          각 컴포넌트의 상세 문서와 예시를 확인하세요.
        </p>
      </div>

      <div className="mb-8 flex gap-3">
        <Button asChild>
          <Link href="/docs">문서 보기</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
            shadcn/ui
          </Link>
        </Button>
      </div>

      <Separator className="mb-10" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {componentList.map(({ title, description, href, icon: Icon, tags }) => (
          <Link key={href} href={href} className="group">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="flex items-center gap-1 text-lg">
                  {title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
                <div className="flex flex-wrap gap-1">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
