import { Nav } from "@/components/Nav";
import { Providers } from "@/components/Providers";
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
        <Providers>
          <header className="z-50 w-full">
            <Nav />
          </header>
          <main className="flex flex-col items-center p-7 min-h-screen w-full">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
