"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DialogDocsPage() {
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
          <h1 className="text-3xl font-bold">다이얼로그</h1>
          <Badge variant="secondary">UI</Badge>
        </div>
        <p className="text-muted-foreground">
          사용자의 주의가 필요한 내용을 표시하는 모달 다이얼로그입니다. 접근성(WAI-ARIA)을 준수합니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* Demo - 기본 */}
        <Card>
          <CardHeader>
            <CardTitle>기본 다이얼로그</CardTitle>
            <CardDescription>버튼을 클릭하면 다이얼로그가 열립니다.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button>다이얼로그 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>프로필 편집</DialogTitle>
                  <DialogDescription>
                    변경 사항을 저장하면 즉시 적용됩니다.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">이름</Label>
                    <Input id="name" defaultValue="김개발" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input id="email" defaultValue="dev@example.com" type="email" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">저장</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="destructive">삭제 확인</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
                  <DialogDescription>
                    이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="gap-2">
                  <Button variant="outline">취소</Button>
                  <Button variant="destructive">삭제</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
  Dialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>제목</DialogTitle>
      <DialogDescription>설명 텍스트</DialogDescription>
    </DialogHeader>
    {/* 내용 */}
    <DialogFooter>
      <Button>저장</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
