import { cn } from "@/lib/utils";

import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FLE Dashboard Sample",
  description:
    "A sample dashboard for FLE. Not representative of the final product",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className={cn("h-full antialiased", inter.className)}>
        {children}
      </body>
    </html>
  );
}
