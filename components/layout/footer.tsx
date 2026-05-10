import Link from "next/link";
import { Zap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  제품: [
    { label: "기능", href: "#" },
    { label: "컴포넌트", href: "/components" },
    { label: "문서", href: "/docs" },
  ],
  리소스: [
    { label: "Next.js", href: "https://nextjs.org" },
    { label: "shadcn/ui", href: "https://ui.shadcn.com" },
    { label: "Tailwind CSS", href: "https://tailwindcss.com" },
  ],
  커뮤니티: [
    { label: "GitHub", href: "https://github.com" },
    { label: "Discord", href: "#" },
    { label: "X (Twitter)", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Zap className="h-5 w-5 text-primary" />
              <span>Next Starter</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Next.js + TypeScript + Tailwind CSS + shadcn/ui로 빠르게 시작하는
              모던 웹 스타터킷
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold">{category}</h3>
              <ul className="mt-3 space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Next Starter. MIT License.
        </p>
      </div>
    </footer>
  );
}
