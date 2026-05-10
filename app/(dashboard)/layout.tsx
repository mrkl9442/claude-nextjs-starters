import { Suspense } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Suspense fallback={<div className="w-60 shrink-0 border-r bg-muted/30" />}>
        <Sidebar />
      </Suspense>
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto bg-muted/10 p-6">{children}</main>
      </div>
    </div>
  );
}
