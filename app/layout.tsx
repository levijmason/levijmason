import { Nav } from "@/components/Nav";
import { StyleProvider } from "@/components/style-provider";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const font = Unbounded({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Levi J. Mason",
  description: "Technology and music business consultant",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyleProvider>
          <header className="z-50 w-full md:px-20 md:py-4">
            <Nav />
          </header>
          <main className="flex flex-col items-center px-32 py-20 min-h-screen w-full">
            {children}
          </main>
        </StyleProvider>
      </body>
    </html>
  );
}
