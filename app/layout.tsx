import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smallvec.rs"),
  title: "SmallVec — Keep a foundational Rust crate moving",
  description:
    "SmallVec powers the Rust compiler and more than 150,000 crates. Help make its maintenance sustainable with a recurring GitHub sponsorship.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SmallVec — Keep a foundational Rust crate moving",
    description:
      "A small vector with ecosystem-wide reach. Support the ongoing maintenance of SmallVec.",
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
      <body>{children}</body>
    </html>
  );
}
