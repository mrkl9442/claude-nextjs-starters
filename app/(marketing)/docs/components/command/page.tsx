"use client";

import Link from "next/link";
import { ChevronLeft, Calculator, CalendarDays, CreditCard, Settings, Smile, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export default function CommandDocsPage() {
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
          <h1 className="text-3xl font-bold">커맨드</h1>
          <Badge variant="secondary">UI</Badge>
        </div>
        <p className="text-muted-foreground">
          키보드 중심으로 작동하는 커맨드 팔레트 컴포넌트입니다. cmdk 라이브러리 기반입니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* Demo */}
        <Card>
          <CardHeader>
            <CardTitle>커맨드 팔레트</CardTitle>
            <CardDescription>항목을 검색하거나 키보드로 탐색할 수 있습니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="명령어 검색..." />
              <CommandList>
                <CommandEmpty>검색 결과가 없습니다.</CommandEmpty>
                <CommandGroup heading="제안">
                  <CommandItem>
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>캘린더</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>이모지 검색</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>계산기</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="설정">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>프로필</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>결제</span>
                    <CommandShortcut>⌘B</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>설정</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </CardContent>
        </Card>

        <Separator />

        {/* Code */}
        <div>
          <h2 className="text-xl font-semibold mb-4">사용법</h2>
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <pre className="text-sm overflow-x-auto">
                <code>{`import {
  Command, CommandEmpty, CommandGroup,
  CommandInput, CommandItem, CommandList,
  CommandSeparator, CommandShortcut,
} from "@/components/ui/command"

<Command>
  <CommandInput placeholder="검색..." />
  <CommandList>
    <CommandEmpty>결과 없음</CommandEmpty>
    <CommandGroup heading="그룹 제목">
      <CommandItem>
        <Icon className="mr-2 h-4 w-4" />
        <span>항목</span>
        <CommandShortcut>⌘K</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
