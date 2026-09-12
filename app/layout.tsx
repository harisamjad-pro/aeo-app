import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AEO Monitor",
  description: "A tool that answers one question for any brand",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${interSans.variable} h-full antialiased tracking-tight`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
