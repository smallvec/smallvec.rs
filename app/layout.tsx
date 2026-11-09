import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smallvec.rs"),
  title: "SmallVec — Fund ten hours a week of maintenance",
  description:
    "One-time sponsorships are appreciated. Monthly support toward the $249 goal would fund ten hours each week for SmallVec maintenance, security fixes, reviews, testing, and releases.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SmallVec — Fund ten hours a week of maintenance",
    description:
      "One-time sponsorships are appreciated. Help fund ten hours each week for the maintenance behind SmallVec, used inside the Rust compiler and depended on by more than 150,000 crates.",
    url: "https://smallvec.rs",
    siteName: "SmallVec",
    type: "website",
  },
  icons: {
    icon: "/smallvec-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
