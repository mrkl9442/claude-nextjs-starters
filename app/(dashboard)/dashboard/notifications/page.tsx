import { Bell, CheckCircle2, AlertCircle, Info, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata = { title: "알림" };

const notifications = [
  {
    id: 1,
    type: "success",
    title: "결제 완료",
    message: "주문 #1247의 결제가 완료되었습니다.",
    time: "방금 전",
    read: false,
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
  },
  {
    id: 2,
    type: "warning",
    title: "재고 부족",
    message: "상품 'A-001'의 재고가 5개 미만입니다.",
    time: "10분 전",
    read: false,
    icon: AlertCircle,
    iconColor: "text-yellow-500",
  },
  {
    id: 3,
    type: "info",
    title: "신규 사용자",
    message: "오늘 12명의 신규 사용자가 가입했습니다.",
    time: "1시간 전",
    read: false,
    icon: Info,
    iconColor: "text-blue-500",
  },
  {
    id: 4,
    type: "order",
    title: "새 주문",
    message: "김민준님이 ₩128,000 상당의 주문을 했습니다.",
    time: "2시간 전",
    read: true,
    icon: ShoppingCart,
    iconColor: "text-primary",
  },
  {
    id: 5,
    type: "info",
    title: "시스템 업데이트",
    message: "다음 주 일요일 새벽 2시에 시스템 점검이 예정되어 있습니다.",
    time: "1일 전",
    read: true,
    icon: Info,
    iconColor: "text-blue-500",
  },
];

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length;

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
            <BreadcrumbPage>알림</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">알림</h1>
          <p className="text-muted-foreground">
            읽지 않은 알림이 {unreadCount}개 있습니다.
          </p>
        </div>
        <Button variant="outline" size="sm">
          모두 읽음 처리
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            전체 알림
          </CardTitle>
          <CardDescription>최근 알림 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <div key={notification.id}>
                <div
                  className={`flex items-start gap-4 px-6 py-4 ${
                    !notification.read ? "bg-muted/40" : ""
                  }`}
                >
                  <div className={`mt-0.5 ${notification.iconColor}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">{notification.title}</p>
                      {!notification.read && (
                        <Badge className="h-4 px-1 text-xs">새로운</Badge>
                      )}
                    </div>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
                {index < notifications.length - 1 && <Separator />}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
