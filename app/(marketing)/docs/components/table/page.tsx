import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata = { title: "테이블 - 문서" };

const invoices = [
  { id: "INV-001", name: "김민준", email: "kim@example.com", status: "완료", amount: "₩128,000" },
  { id: "INV-002", name: "이서연", email: "lee@example.com", status: "처리중", amount: "₩86,500" },
  { id: "INV-003", name: "박지훈", email: "park@example.com", status: "완료", amount: "₩243,000" },
  { id: "INV-004", name: "최수아", email: "choi@example.com", status: "취소", amount: "₩65,000" },
];

const statusColors: Record<string, string> = {
  완료: "text-emerald-600",
  처리중: "text-yellow-600",
  취소: "text-destructive",
};

export default function TableDocsPage() {
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
          <h1 className="text-3xl font-bold">테이블</h1>
          <Badge variant="secondary">UI</Badge>
        </div>
        <p className="text-muted-foreground">
          구조화된 데이터를 표시하는 테이블 컴포넌트입니다. 헤더, 바디, 푸터를 지원합니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* Demo */}
        <Card>
          <CardHeader>
            <CardTitle>기본 테이블</CardTitle>
            <CardDescription>주문 내역을 테이블 형태로 표시합니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>최근 주문 내역</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>주문번호</TableHead>
                  <TableHead>이름</TableHead>
                  <TableHead>이메일</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead className="text-right">금액</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium">{inv.id}</TableCell>
                    <TableCell>{inv.name}</TableCell>
                    <TableCell className="text-muted-foreground">{inv.email}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${statusColors[inv.status]}`}>
                        {inv.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">{inv.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
  Table, TableBody, TableCaption,
  TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

<Table>
  <TableCaption>설명 텍스트</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>컬럼 1</TableHead>
      <TableHead>컬럼 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>데이터 1</TableCell>
      <TableCell>데이터 2</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</code>
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
