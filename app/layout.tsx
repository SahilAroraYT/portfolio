import type { Metadata } from "next";
import { Geist_Mono, Outfit, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahil Arora — Software Developer",
  description:
    "Portfolio of Sahil Arora, a Software Developer building web and mobile applications with React, Next.js, Node.js and Python.",
  keywords: [
    "Sahil Arora",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  openGraph: {
    title: "Sahil Arora — Software Developer",
    description:
      "Portfolio of Sahil Arora, a Software Developer building web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}