"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, "사용자명은 최소 2자 이상이어야 합니다.").max(20, "사용자명은 최대 20자입니다."),
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  bio: z.string().max(200, "소개는 최대 200자입니다.").optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function FormDocsPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", bio: "" },
  });

  function onSubmit(values: FormValues) {
    toast.success("폼이 제출되었습니다!");
    console.log(values);
  }

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
          <h1 className="text-3xl font-bold">폼</h1>
          <Badge variant="secondary">UI</Badge>
        </div>
        <p className="text-muted-foreground">
          react-hook-form과 zod를 결합하여 강력한 유효성 검사를 제공하는 폼 컴포넌트입니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* Demo */}
        <Card>
          <CardHeader>
            <CardTitle>프로필 폼</CardTitle>
            <CardDescription>각 필드에 유효성 검사가 적용되어 있습니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>사용자명</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} />
                      </FormControl>
                      <FormDescription>공개 프로필에 표시되는 이름입니다.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>소개 (선택)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="간단한 자기소개를 작성해주세요." {...field} />
                      </FormControl>
                      <FormDescription>최대 200자까지 입력 가능합니다.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">저장하기</Button>
              </form>
            </Form>
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

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField,
  FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email("올바른 이메일을 입력하세요"),
})

export function MyForm() {
  const form = useForm({ resolver: zodResolver(schema) })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(console.log)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">제출</Button>
      </form>
    </Form>
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
