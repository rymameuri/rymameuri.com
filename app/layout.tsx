import type { Metadata } from "next";
import { dmSans, fraunces, spaceMono } from "@/styles/fonts";
import "@/styles/globals.css";

const description =
  "I refuse to pick a lane. I build AI for people who usually get left out of it — Arab and Muslim users across MENA. Trajekt, MyTartan, IX Lab, and more.";

export const metadata: Metadata = {
  title: "Rym Aicha Ameuri — Woven Threads",
  description,
  openGraph: {
    title: "Rym Aicha Ameuri — Woven Threads",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Rym Aicha Ameuri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rym Aicha Ameuri — Woven Threads",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
