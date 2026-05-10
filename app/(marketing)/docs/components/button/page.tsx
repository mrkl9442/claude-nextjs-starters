import Link from "next/link";
import { ChevronLeft, Loader2, Trash, Mail, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = { title: "버튼 - 문서" };

export default function ButtonDocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/docs"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        문서로 돌아가기
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">버튼</h1>
          <Badge variant="secondary">UI</Badge>
        </div>
        <p className="text-muted-foreground">
          다양한 스타일과 크기를 지원하는 버튼 컴포넌트입니다. Radix UI의 Slot을 활용해 접근성을 보장합니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* Variant */}
        <Card>
          <CardHeader>
            <CardTitle>변형 (Variant)</CardTitle>
            <CardDescription>용도에 따라 다른 스타일을 선택할 수 있습니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>

        {/* Size */}
        <Card>
          <CardHeader>
            <CardTitle>크기 (Size)</CardTitle>
            <CardDescription>상황에 맞는 크기를 선택할 수 있습니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Plus className="h-4 w-4" /></Button>
          </CardContent>
        </Card>

        {/* States */}
        <Card>
          <CardHeader>
            <CardTitle>상태 (State)</CardTitle>
            <CardDescription>버튼의 다양한 상태를 표현할 수 있습니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button disabled>비활성화</Button>
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              로딩 중
            </Button>
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" />
              이메일 전송
            </Button>
            <Button variant="destructive">
              <Trash className="mr-2 h-4 w-4" />
              삭제
            </Button>
          </CardContent>
        </Card>

        <Separator />

        {/* Code */}
        <div>
          <h2 className="text-xl font-semibold mb-4">사용법</h2>
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { Button } from "@/components/ui/button"

// 기본 사용
<Button>클릭하세요</Button>

// 변형 적용
<Button variant="outline">Outline</Button>
<Button variant="destructive">삭제</Button>

// 크기 조절
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>

// 비활성화
<Button disabled>비활성화</Button>

// Link와 함께 사용
<Button asChild>
  <Link href="/somewhere">이동</Link>
</Button>`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
