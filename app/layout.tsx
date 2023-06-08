import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { Footer, Header, SidebarListMusic, SidebarNav } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music App",
  description: "Music App by Vercel",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <SidebarNav />
        <SidebarListMusic />
        {children}
        <Footer />
      </body>
    </html>
  );
}
