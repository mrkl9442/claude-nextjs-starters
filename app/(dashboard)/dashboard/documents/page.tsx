import { FileText, FilePlus, Download, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

export const metadata = { title: "문서 관리" };

const documents = [
  { id: 1, name: "2025 Q1 사업 보고서", type: "PDF", size: "2.4 MB", updatedAt: "2025-04-01", status: "완료" },
  { id: 2, name: "마케팅 전략 계획서", type: "DOCX", size: "1.1 MB", updatedAt: "2025-04-15", status: "검토 중" },
  { id: 3, name: "개발 로드맵 v2.0", type: "PDF", size: "856 KB", updatedAt: "2025-04-20", status: "완료" },
  { id: 4, name: "사용자 인터뷰 결과", type: "XLSX", size: "3.2 MB", updatedAt: "2025-04-28", status: "초안" },
  { id: 5, name: "서비스 이용약관 개정안", type: "DOCX", size: "420 KB", updatedAt: "2025-05-01", status: "검토 중" },
  { id: 6, name: "2025 예산 계획서", type: "XLSX", size: "1.8 MB", updatedAt: "2025-05-05", status: "완료" },
];

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  완료: "default",
  "검토 중": "secondary",
  초안: "outline",
};

const typeColors: Record<string, string> = {
  PDF: "text-red-500",
  DOCX: "text-blue-500",
  XLSX: "text-emerald-500",
};

export default function DocumentsPage() {
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
            <BreadcrumbPage>문서 관리</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">문서 관리</h1>
          <p className="text-muted-foreground">업로드된 문서를 관리합니다.</p>
        </div>
        <Button size="sm">
          <FilePlus className="mr-2 h-4 w-4" />
          문서 업로드
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            전체 문서
          </CardTitle>
          <CardDescription>총 {documents.length}개의 문서가 있습니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>파일명</TableHead>
                <TableHead>형식</TableHead>
                <TableHead>크기</TableHead>
                <TableHead>수정일</TableHead>
                <TableHead>상태</TableHead>
                <TableHead className="text-right">작업</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{doc.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`text-xs font-bold ${typeColors[doc.type]}`}>
                      {doc.type}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{doc.size}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{doc.updatedAt}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[doc.status]}>{doc.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Download className="h-3.5 w-3.5" />
                      </Button>
                    </div>
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
