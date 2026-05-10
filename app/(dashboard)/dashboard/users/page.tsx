import { Users, UserPlus, UserCheck, UserX } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export const metadata = { title: "사용자 관리" };

const users = [
  { id: 1, name: "김민준", email: "kim@example.com", role: "관리자", status: "활성", joined: "2025-01-15", initials: "김민" },
  { id: 2, name: "이서연", email: "lee@example.com", role: "사용자", status: "활성", joined: "2025-02-03", initials: "이서" },
  { id: 3, name: "박지훈", email: "park@example.com", role: "사용자", status: "활성", joined: "2025-02-20", initials: "박지" },
  { id: 4, name: "최수아", email: "choi@example.com", role: "사용자", status: "비활성", joined: "2025-03-01", initials: "최수" },
  { id: 5, name: "정도윤", email: "jung@example.com", role: "편집자", status: "활성", joined: "2025-03-15", initials: "정도" },
  { id: 6, name: "한지아", email: "han@example.com", role: "사용자", status: "정지", joined: "2025-04-02", initials: "한지" },
];

const statusVariant: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  활성: "default",
  비활성: "secondary",
  정지: "destructive",
};

const stats = [
  { title: "전체 사용자", value: "2,350", icon: Users },
  { title: "신규 (이번 달)", value: "124", icon: UserPlus },
  { title: "활성 사용자", value: "1,890", icon: UserCheck },
  { title: "정지된 사용자", value: "12", icon: UserX },
];

export default function UsersPage() {
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
            <BreadcrumbPage>사용자 관리</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">사용자 관리</h1>
          <p className="text-muted-foreground">전체 사용자를 관리합니다.</p>
        </div>
        <Button size="sm">
          <UserPlus className="mr-2 h-4 w-4" />
          사용자 초대
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ title, value, icon: Icon }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>사용자 목록</CardTitle>
          <CardDescription>등록된 전체 사용자 목록입니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>사용자</TableHead>
                <TableHead>역할</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>가입일</TableHead>
                <TableHead className="text-right">관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">{user.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[user.status]}>{user.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{user.joined}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">편집</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
