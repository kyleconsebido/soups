import type { Metadata } from "next";
import { inriaSans } from "../lib/fonts";
import "./globals.css";
import GlobalContextProvider from "@/context/global";

export const metadata: Metadata = {
  title: "SOUPS",
  description: "Start Cooking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inriaSans.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
