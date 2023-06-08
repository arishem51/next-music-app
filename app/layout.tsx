import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { Header, ScrollView, SidebarListMusic, SidebarNav } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music App",
  description: "Music App by Vercel",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html data-theme="dark" lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex h-screen w-screen overflow-hidden`}
      >
        <Header />
        <SidebarNav />
        <ScrollView>{children}</ScrollView>
        {/* <SidebarListMusic /> */}
      </body>
    </html>
  );
}
