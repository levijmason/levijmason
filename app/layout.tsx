import "@/app/globals.css";
import { Footer, StyleProvider, TopNav } from "@/ui/layout/";
import type { Metadata } from "next";
import { Unbounded } from "next/font/google";

const font = Unbounded({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Levi J. Mason",
  description: "Technology and music business consultant",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-primary`}>
        <StyleProvider>
          <header className="md:px-20 py-4 z-50 w-full bg-background top-0 sticky">
            <TopNav />
          </header>
          <main className="flex flex-col items-center p-8 md:px-28 min-h-screen w-full bg-background">
            {children}
          </main>
          <footer className="flex flex-col items-start md:items-center p-8 md:px-28 w-full h-32 bg-background">
            <Footer />
          </footer>
        </StyleProvider>
      </body>
    </html>
  );
}
