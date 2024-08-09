import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/ui/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space",
  description: "Discover beauty off space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
