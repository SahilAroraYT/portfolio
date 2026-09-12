import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sahil Arora | Portfolio",
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
    title: "Sahil Arora | Portfolio",
    description:
      "Portfolio of Sahil Arora, a Software Developer building web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}