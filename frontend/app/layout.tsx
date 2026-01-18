"use client";
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import LeftSidebar from "../components/sidebar/LeftSidebar";
import { LucidePhone } from "lucide-react";
import NavBar from "@/components/NavBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const metadata: Metadata = {
  title: "Stuart Portfolio",
  description: "Data Science Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <main className="min-h-screen text-foreground grid grid-cols-[80px_1fr]">
          <LeftSidebar />
          <div className="w-full h-full flex flex-col py-10 px-16">
            <div className="w-full h-fit flex justify-between items-center">
              <NavBar />
              <div className="flex-none flex gap-2 font-semibold text-destructive">
                <LucidePhone strokeWidth={2} />
                Schedule a Call
              </div>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
