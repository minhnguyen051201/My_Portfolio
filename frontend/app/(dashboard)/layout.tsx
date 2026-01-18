"use client";

import LeftSidebar from "@/components/sidebar/LeftSidebar";
import NavBar from "@/components/NavBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen text-foreground grid grid-cols-[80px_1fr]">
      <LeftSidebar />
      <div className="w-full h-full flex flex-col py-10 px-16">
        <div className="w-full h-fit flex justify-between items-center">
          <NavBar />
        </div>
        {children}
      </div>
    </main>
  );
}
