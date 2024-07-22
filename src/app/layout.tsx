import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santino Fajardo portfolio",
  description: "Santino Fajardo, software engineer portfolio.",
  applicationName: "Santino Fajardo - portfolio",
  keywords: [
    "React",
    "Backend",
    "Frontend",
    "Full stack",
    "Golang",
    "Node",
    "Python",
    "Blockchain",
    "Software",
    "Developer",
  ],
  creator: "Santino Fajardo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
