import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBnb ",
  description: "DanTruong clone next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
