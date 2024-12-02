import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanitFont = Kanit({
  weight: ["400", "500", "600"],
  variable: "--kanit-font",
  subsets: ["latin"],
  display: "fallback"
});

export const metadata: Metadata = {
  title: "My portifolio",
  description: "My portifolio: Caio Lopes Caetano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanitFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
