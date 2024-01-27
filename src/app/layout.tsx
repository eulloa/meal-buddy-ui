import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// TODO: wrap in providers component
import { ThemeProvider } from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meal Buddy 😋",
  description: "Meal-Buddy-UI",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
