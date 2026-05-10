import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata = { title: "개인정보처리방침" };

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ChevronLeft className="h-4 w-4" />
        홈으로 돌아가기
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">개인정보처리방침</h1>
        <p className="mt-2 text-sm text-muted-foreground">최종 업데이트: 2025년 5월 1일</p>
      </div>

      <div className="space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">1. 수집하는 개인정보</h2>
          <p className="text-muted-foreground">
            서비스 이용을 위해 다음과 같은 개인정보를 수집합니다.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>필수: 이메일 주소, 이름, 비밀번호</li>
            <li>선택: 프로필 사진, 소개 문구</li>
            <li>자동 수집: IP 주소, 브라우저 종류, 접속 일시</li>
          </ul>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">2. 개인정보 이용 목적</h2>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>서비스 제공 및 회원 관리</li>
            <li>서비스 개선 및 신규 기능 개발</li>
            <li>고객 문의 및 지원</li>
            <li>서비스 이용 통계 분석</li>
          </ul>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">3. 개인정보 보유 기간</h2>
          <p className="text-muted-foreground">
            회원 탈퇴 시까지 보유하며, 탈퇴 후 즉시 파기합니다.
            단, 관련 법령에 따라 일정 기간 보관이 필요한 경우에는 해당 기간 동안 보관합니다.
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">4. 개인정보 제3자 제공</h2>
          <p className="text-muted-foreground">
            서비스 제공자는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 이용자가 사전에 동의한 경우 또는 법령에 의한 경우에는 예외로 합니다.
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">5. 이용자의 권리</h2>
          <p className="text-muted-foreground">
            이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있으며,
            개인정보 처리에 관한 문의는 아래 연락처로 해주시기 바랍니다.
          </p>
          <p className="text-muted-foreground">이메일: privacy@nextjsstarter.dev</p>
        </section>
      </div>

      <div className="mt-12 flex gap-4 text-sm text-muted-foreground">
        <Link href="/terms" className="hover:text-foreground hover:underline">
          이용약관
        </Link>
        <Link href="/" className="hover:text-foreground hover:underline">
          홈으로
        </Link>
      </div>
    </div>
  );
}
