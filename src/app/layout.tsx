"use client";
import Head from "next/head";
import { Karla } from "next/font/google";
import { Menu } from "@/components/Menu";

import "./globalCSS.css";

const karla = Karla({
  weight: ["300", "400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-karla",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
}
