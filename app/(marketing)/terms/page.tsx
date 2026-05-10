import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata = { title: "이용약관" };

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold">이용약관</h1>
        <p className="mt-2 text-sm text-muted-foreground">최종 업데이트: 2025년 5월 1일</p>
      </div>

      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">제1조 (목적)</h2>
          <p className="text-muted-foreground">
            이 약관은 Next Starter(이하 &quot;서비스&quot;)의 이용과 관련하여 서비스 제공자와 이용자 간의
            권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">제2조 (이용자의 의무)</h2>
          <p className="text-muted-foreground">
            이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>서비스를 통해 취득한 정보를 서비스 제공자의 사전 동의 없이 복제, 배포, 상업적으로 이용하는 행위</li>
            <li>타인의 정보를 도용하거나 허위 정보를 제공하는 행위</li>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>관련 법령 또는 이 약관에서 금지하거나 미풍양속에 반하는 행위</li>
          </ul>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">제3조 (서비스 제공 및 변경)</h2>
          <p className="text-muted-foreground">
            서비스 제공자는 서비스의 내용, 품질, 기능 등을 사전 통지 없이 변경할 수 있으며,
            서비스 변경으로 인한 이용자의 손해에 대해 책임을 지지 않습니다.
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">제4조 (면책 조항)</h2>
          <p className="text-muted-foreground">
            서비스 제공자는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는
            서비스 제공에 관한 책임이 면제됩니다.
          </p>
        </section>

        <Separator />

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">제5조 (준거법 및 관할)</h2>
          <p className="text-muted-foreground">
            이 약관의 해석 및 분쟁에 관해서는 대한민국 법률을 적용하며, 분쟁이 발생한 경우
            서울중앙지방법원을 제1심 관할 법원으로 합니다.
          </p>
        </section>
      </div>

      <div className="mt-12 flex gap-4 text-sm text-muted-foreground">
        <Link href="/privacy" className="hover:text-foreground hover:underline">
          개인정보처리방침
        </Link>
        <Link href="/" className="hover:text-foreground hover:underline">
          홈으로
        </Link>
      </div>
    </div>
  );
}
