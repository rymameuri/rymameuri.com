import type { Metadata } from "next";
import { inter, jetbrainsMono, playfair } from "@/styles/fonts";
import "@/styles/globals.css";
import CustomCursor from "@/components/CustomCursor";

const description =
  "I'm a junior at Carnegie Mellon University Qatar studying Information Systems with concentrations in Cybersecurity and Data Science. I build things at the intersection of AI, security, and emerging tech — from fintech startups to blockchain platforms to immersive galleries.";

export const metadata: Metadata = {
  title: "Rym Aicha Ameuri — Cybersecurity & AI",
  description,
  openGraph: {
    title: "Rym Aicha Ameuri — Cybersecurity & AI",
    description,
    type: "website",
    locale: "en_US",
    siteName: "Rym Aicha Ameuri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rym Aicha Ameuri — Cybersecurity & AI",
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
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
