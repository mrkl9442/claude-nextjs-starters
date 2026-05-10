import Link from "next/link";
import { ArrowRight, MousePointerClick, FileText, Square, Table2, CalendarDays, Terminal } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "문서" };

const components = [
  {
    title: "버튼",
    description: "다양한 변형과 크기를 지원하는 버튼 컴포넌트입니다.",
    href: "/docs/components/button",
    icon: MousePointerClick,
    badge: "UI",
  },
  {
    title: "폼",
    description: "react-hook-form과 zod를 결합한 유효성 검사 폼입니다.",
    href: "/docs/components/form",
    icon: FileText,
    badge: "UI",
  },
  {
    title: "다이얼로그",
    description: "접근성을 고려한 모달 다이얼로그 컴포넌트입니다.",
    href: "/docs/components/dialog",
    icon: Square,
    badge: "UI",
  },
  {
    title: "테이블",
    description: "정렬과 필터링을 지원하는 데이터 테이블 컴포넌트입니다.",
    href: "/docs/components/table",
    icon: Table2,
    badge: "UI",
  },
  {
    title: "캘린더",
    description: "날짜를 선택할 수 있는 캘린더 컴포넌트입니다.",
    href: "/docs/components/calendar",
    icon: CalendarDays,
    badge: "UI",
  },
  {
    title: "커맨드",
    description: "키보드 단축키 기반의 커맨드 팔레트 컴포넌트입니다.",
    href: "/docs/components/command",
    icon: Terminal,
    badge: "UI",
  },
];

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12">
        <Badge variant="secondary" className="mb-4">문서</Badge>
        <h1 className="text-4xl font-bold tracking-tight">컴포넌트 문서</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          shadcn/ui 기반으로 구성된 컴포넌트들의 사용법과 예시를 확인하세요.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map(({ title, description, href, icon: Icon, badge }) => (
          <Link key={href} href={href} className="group">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">{badge}</Badge>
                </div>
                <CardTitle className="flex items-center gap-1 text-lg">
                  {title}
                  <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
