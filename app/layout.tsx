import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { Header, SidebarListMusic, SidebarNav } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music App",
  description: "Music App by Vercel",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex h-screen w-screen`}>
        <Header />
        <SidebarNav />
        {children}
        {/* <SidebarListMusic /> */}
      </body>
    </html>
  );
}
