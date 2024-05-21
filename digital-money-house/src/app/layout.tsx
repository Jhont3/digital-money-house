import type { Metadata } from "next";
import { openSans } from '@/config'
import "./globals.css";
import { LogInProvider } from "@/context";

export const metadata: Metadata = {
  title: "Digital Money House",
  description: "Digital Wallet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <LogInProvider>
          {children}
        </LogInProvider>
      </body>
    </html>
  );
}
