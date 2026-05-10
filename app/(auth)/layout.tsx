import Link from "next/link";
import { Zap } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4">
      <Link href="/" className="mb-8 flex items-center gap-2 font-bold text-lg">
        <Zap className="h-6 w-6 text-primary" />
        <span>Next Starter</span>
      </Link>
      {children}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        계속 진행하면{" "}
        <Link href="/terms" className="underline hover:text-foreground">
          이용약관
        </Link>
        {" "}및{" "}
        <Link href="/privacy" className="underline hover:text-foreground">
          개인정보 처리방침
        </Link>
        에 동의하는 것으로 간주합니다.
      </p>
    </div>
  );
}
