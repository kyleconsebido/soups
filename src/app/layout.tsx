import type { Metadata } from "next";
import { inriaSans } from "../assets/fonts";
import GlobalContextProvider from "@/context";
import "./globals.css";

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
    <html className="scrollbar" lang="en">
      <body className={inriaSans.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
