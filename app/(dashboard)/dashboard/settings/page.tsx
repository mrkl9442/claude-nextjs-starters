"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function SettingsPage() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(false);
  const [marketingEmail, setMarketingEmail] = useState(true);

  function handleSave() {
    toast.success("설정이 저장되었습니다.");
  }

  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard">대시보드</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>설정</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">계정 및 알림 설정을 관리합니다.</p>
      </div>

      {/* 프로필 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
          <CardDescription>공개 프로필 정보를 수정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input id="name" defaultValue="김관리자" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" defaultValue="admin@example.com" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bio">소개</Label>
            <Textarea id="bio" defaultValue="Next Starter 대시보드 관리자입니다." rows={3} />
          </div>
          <Button onClick={handleSave}>저장</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* 알림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림 설정</CardTitle>
          <CardDescription>알림 수신 방식을 설정합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>이메일 알림</Label>
              <p className="text-sm text-muted-foreground">
                중요한 업데이트를 이메일로 받습니다.
              </p>
            </div>
            <Switch checked={emailNotif} onCheckedChange={setEmailNotif} />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>푸시 알림</Label>
              <p className="text-sm text-muted-foreground">
                브라우저 푸시 알림을 받습니다.
              </p>
            </div>
            <Switch checked={pushNotif} onCheckedChange={setPushNotif} />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>마케팅 이메일</Label>
              <p className="text-sm text-muted-foreground">
                새 기능 및 프로모션 소식을 받습니다.
              </p>
            </div>
            <Switch checked={marketingEmail} onCheckedChange={setMarketingEmail} />
          </div>

          <Button onClick={handleSave}>저장</Button>
        </CardContent>
      </Card>

      <Separator />

      {/* 위험 구역 */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-destructive">위험 구역</CardTitle>
          <CardDescription>되돌릴 수 없는 작업입니다. 신중하게 진행하세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive">계정 삭제</Button>
        </CardContent>
      </Card>
    </div>
  );
}
