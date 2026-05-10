"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarDocsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [range, setRange] = useState<{ from?: Date; to?: Date }>({});

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
          <h1 className="text-3xl font-bold">캘린더</h1>
          <Badge variant="secondary">UI</Badge>
        </div>
        <p className="text-muted-foreground">
          날짜를 선택할 수 있는 캘린더 컴포넌트입니다. react-day-picker 기반으로 구성되어 있습니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* Demo - 단일 날짜 */}
        <Card>
          <CardHeader>
            <CardTitle>단일 날짜 선택</CardTitle>
            <CardDescription>
              선택된 날짜:{" "}
              <span className="font-medium text-foreground">
                {date ? date.toLocaleDateString("ko-KR") : "없음"}
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Separator />

        {/* Code */}
        <div>
          <h2 className="text-xl font-semibold mb-4">사용법</h2>
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <pre className="text-sm overflow-x-auto">
                <code>{`"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
