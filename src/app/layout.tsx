import type { Metadata } from "next";
import { Young_Serif, Bitter } from "next/font/google";
import "./globals.css";

const youngSerif = Young_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brekky.dev"),
  title: "Brekky Labs",
  description:
    "Brekky Labs is a software development studio based in Pittsburgh, PA.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${bitter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
