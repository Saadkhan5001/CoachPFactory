import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Coach P Factory — Personal Training, Group & Online",
  description:
    "32 years under the bar. Technique-first personal training, group sessions, kickboxing, bodybuilding protocols and online coaching. Every rep coached to form.",
  openGraph: {
    title: "Coach P Factory — Personal Training, Group & Online",
    description:
      "32 years under the bar. Technique-first personal training, group sessions, kickboxing, bodybuilding protocols and online coaching. Every rep coached to form.",
    siteName: "Coach P Factory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
