import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "./provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prasad Phule Blogs",
  description: "",
  keywords: ""
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
