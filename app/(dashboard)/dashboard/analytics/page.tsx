import { TrendingUp, Users, Eye, MousePointerClick, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

export const metadata = { title: "분석" };

const stats = [
  { title: "총 방문자", value: "48,295", change: "+12.5%", icon: Users },
  { title: "페이지뷰", value: "182,341", change: "+8.2%", icon: Eye },
  { title: "클릭률", value: "4.8%", change: "+0.6%", icon: MousePointerClick },
  { title: "전환율", value: "2.4%", change: "+0.3%", icon: TrendingUp },
];

const topPages = [
  { page: "/", visits: 18420, rate: 100 },
  { page: "/dashboard", visits: 9210, rate: 50 },
  { page: "/docs", visits: 6480, rate: 35 },
  { page: "/login", visits: 4320, rate: 23 },
  { page: "/register", visits: 2880, rate: 15 },
];

export default function AnalyticsPage() {
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
            <BreadcrumbPage>분석</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">분석</h1>
        <p className="text-muted-foreground">트래픽과 사용자 행동을 분석합니다.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ title, value, change, icon: Icon }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <div className="mt-1 flex items-center gap-1 text-xs text-emerald-500">
                <ArrowUpRight className="h-3 w-3" />
                {change}
                <span className="text-muted-foreground">지난 달 대비</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>인기 페이지</CardTitle>
          <CardDescription>이번 달 방문자 수 기준입니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {topPages.map(({ page, visits, rate }) => (
            <div key={page} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">{page}</code>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">{visits.toLocaleString()}</span>
                  <Badge variant="outline" className="text-xs">{rate}%</Badge>
                </div>
              </div>
              <Progress value={rate} className="h-1.5" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
