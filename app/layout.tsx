import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://smallvec.rs"),
  title: "SmallVec — Sustain a foundational Rust crate",
  description:
    "SmallVec is used inside the Rust compiler and depended on by more than 150,000 crates. Help make its maintenance sustainable with recurring support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SmallVec — Sustain a foundational Rust crate",
    description:
      "A small crate with a big place in Rust. Support the ongoing maintenance of SmallVec.",
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
