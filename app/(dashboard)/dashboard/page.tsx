import {
  Users,
  DollarSign,
  TrendingUp,
  ShoppingCart,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = { title: "대시보드" };

const stats = [
  {
    title: "총 매출",
    value: "₩12,345,678",
    change: "+20.1%",
    up: true,
    icon: DollarSign,
    description: "지난 달 대비",
  },
  {
    title: "신규 사용자",
    value: "2,350",
    change: "+15.3%",
    up: true,
    icon: Users,
    description: "이번 달 가입",
  },
  {
    title: "주문 건수",
    value: "1,247",
    change: "-3.2%",
    up: false,
    icon: ShoppingCart,
    description: "지난 달 대비",
  },
  {
    title: "전환율",
    value: "3.24%",
    change: "+1.1%",
    up: true,
    icon: TrendingUp,
    description: "지난 주 대비",
  },
];

const recentOrders = [
  { id: "#1234", customer: "김민준", email: "kim@example.com", status: "완료", amount: "₩128,000", initials: "김" },
  { id: "#1235", customer: "이서연", email: "lee@example.com", status: "처리중", amount: "₩86,500", initials: "이" },
  { id: "#1236", customer: "박지훈", email: "park@example.com", status: "완료", amount: "₩243,000", initials: "박" },
  { id: "#1237", customer: "최수아", email: "choi@example.com", status: "취소", amount: "₩65,000", initials: "최" },
  { id: "#1238", customer: "정도윤", email: "jung@example.com", status: "처리중", amount: "₩192,000", initials: "정" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive"> = {
  완료: "default",
  처리중: "secondary",
  취소: "destructive",
};

const goals = [
  { label: "월 매출 목표", current: 75, target: "₩20M" },
  { label: "신규 사용자 목표", current: 58, target: "4,000명" },
  { label: "고객 만족도", current: 92, target: "95%" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">홈</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>대시보드</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">비즈니스 현황을 한눈에 확인하세요.</p>
      </div>

      {/* 통계 카드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ title, value, change, up, icon: Icon, description }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {title}
              </CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
              <div className="mt-1 flex items-center gap-1 text-xs">
                {up ? (
                  <ArrowUpRight className="h-3 w-3 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 text-destructive" />
                )}
                <span className={up ? "text-emerald-500" : "text-destructive"}>
                  {change}
                </span>
                <span className="text-muted-foreground">{description}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 탭 섹션 */}
      <Tabs defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">최근 주문</TabsTrigger>
          <TabsTrigger value="goals">목표 현황</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>최근 주문</CardTitle>
              <CardDescription>최근 5건의 주문 내역입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>주문번호</TableHead>
                    <TableHead>고객</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead className="text-right">금액</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-7 w-7">
                            <AvatarFallback className="text-xs">
                              {order.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{order.customer}</p>
                            <p className="text-xs text-muted-foreground">{order.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[order.status]}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {order.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>목표 현황</CardTitle>
              <CardDescription>이번 달 목표 달성률입니다.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {goals.map(({ label, current, target }) => (
                <div key={label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{label}</span>
                    <span className="text-muted-foreground">
                      {current}% / 목표 {target}
                    </span>
                  </div>
                  <Progress value={current} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
