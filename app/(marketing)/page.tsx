import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Palette,
  Zap,
  Shield,
  Code2,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description:
      "Turbopack이 기본 적용된 최신 Next.js로 빠른 개발 경험을 제공합니다.",
  },
  {
    icon: Palette,
    title: "shadcn/ui + Tailwind CSS 4",
    description:
      "접근성 높은 UI 컴포넌트와 최신 Tailwind CSS로 아름다운 인터페이스를 구성합니다.",
  },
  {
    icon: Code2,
    title: "TypeScript Strict Mode",
    description:
      "엄격한 타입 검사로 런타임 오류를 사전에 방지하고 코드 품질을 높입니다.",
  },
  {
    icon: Shield,
    title: "다크 모드 지원",
    description:
      "next-themes를 통해 시스템 설정에 따른 자동 다크 모드를 지원합니다.",
  },
  {
    icon: Layers,
    title: "컴포넌트 기반 구조",
    description:
      "재사용 가능한 컴포넌트 아키텍처로 확장과 유지보수가 쉽습니다.",
  },
  {
    icon: Smartphone,
    title: "반응형 디자인",
    description:
      "모바일부터 데스크탑까지 모든 화면 크기에 최적화된 레이아웃을 제공합니다.",
  },
];

const techStack = [
  { name: "Next.js 16", color: "default" as const },
  { name: "React 19", color: "secondary" as const },
  { name: "TypeScript 5", color: "default" as const },
  { name: "Tailwind CSS 4", color: "secondary" as const },
  { name: "shadcn/ui", color: "default" as const },
  { name: "lucide-react", color: "secondary" as const },
];

const team = [
  { name: "김개발", role: "Frontend", initials: "김개" },
  { name: "이디자인", role: "UI/UX", initials: "이디" },
  { name: "박풀스택", role: "Fullstack", initials: "박풀" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Zap className="mr-1 h-3 w-3" />
            Next.js 16 + Turbopack
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            모던 웹 개발을
            <br />
            <span className="text-primary">빠르게 시작하세요</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Next.js, TypeScript, Tailwind CSS, shadcn/ui가 완벽하게 세팅된
            스타터킷으로 지금 바로 프로덕션급 웹앱을 만들어보세요.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/docs">
                시작하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/components">컴포넌트 보기</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {techStack.map(({ name, color }) => (
              <Badge key={name} variant={color}>
                {name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Features */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              모든 것이 준비되어 있습니다
            </h2>
            <p className="mt-4 text-muted-foreground">
              반복되는 설정 작업 없이 바로 핵심 기능 개발에 집중하세요.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Team / Avatar showcase */}
      <section className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            팀과 함께 시작하세요
          </h2>
          <p className="mt-4 text-muted-foreground">
            협업을 위한 최적의 개발 환경이 갖춰져 있습니다.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            {team.map(({ name, role, initials }) => (
              <div key={name} className="flex flex-col items-center gap-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="" alt={name} />
                  <AvatarFallback className="text-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            지금 바로 시작하세요
          </h2>
          <p className="mt-4 text-muted-foreground">
            설정에 낭비하는 시간 없이 아이디어를 현실로 만들어보세요.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/docs">
                문서 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com">GitHub</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
