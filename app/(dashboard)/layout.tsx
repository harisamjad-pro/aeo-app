import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | AEO Monitor",
  description: "A tool that answers one question for any brand",
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return children;
}
