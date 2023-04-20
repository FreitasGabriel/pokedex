"use client";

import { Menu } from "@/components/Menu";
import "./globalCSS.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Menu />

        <main>{children}</main>
      </body>
    </html>
  );
}
