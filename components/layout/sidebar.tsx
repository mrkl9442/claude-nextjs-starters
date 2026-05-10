"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  FileText,
  Bell,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const navItems = [
  {
    group: "메인",
    items: [
      { href: "/dashboard", label: "대시보드", icon: LayoutDashboard },
      { href: "/dashboard/analytics", label: "분석", icon: BarChart3 },
      { href: "/dashboard/notifications", label: "알림", icon: Bell, badge: 3 },
    ],
  },
  {
    group: "관리",
    items: [
      { href: "/dashboard/users", label: "사용자", icon: Users },
      { href: "/dashboard/documents", label: "문서", icon: FileText },
    ],
  },
  {
    group: "설정",
    items: [
      { href: "/dashboard/settings", label: "설정", icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-muted/30 transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* 로고 */}
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-bold overflow-hidden">
          <Zap className="h-5 w-5 shrink-0 text-primary" />
          {!collapsed && <span className="truncate">Next Starter</span>}
        </Link>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navItems.map(({ group, items }) => (
          <div key={group} className="mb-4">
            {!collapsed && (
              <p className="mb-1 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {group}
              </p>
            )}
            <ul className="space-y-1 px-2">
              {items.map(({ href, label, icon: Icon, badge }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    {collapsed ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={href}
                            className={cn(
                              "flex h-9 w-full items-center justify-center rounded-md transition-colors",
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{label}</TooltipContent>
                      </Tooltip>
                    ) : (
                      <Link
                        href={href}
                        className={cn(
                          "flex h-9 items-center gap-3 rounded-md px-3 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="flex-1 truncate">{label}</span>
                        {badge && (
                          <Badge variant="secondary" className="h-5 px-1.5 text-xs">
                            {badge}
                          </Badge>
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            {!collapsed && <Separator className="mt-4" />}
          </div>
        ))}
      </nav>

      {/* 접기 버튼 */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 h-6 w-6 rounded-full border bg-background shadow-sm"
      >
        {collapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </Button>
    </aside>
  );
}
