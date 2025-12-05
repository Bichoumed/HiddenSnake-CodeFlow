import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Navbar } from "@/components/Layout/Navbar";
import { GameProvider } from "@/context/GameContext";
import { GameWrapper } from "@/components/Layout/GameWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLearn - Interactive Documentation",
  description: "Learn programming languages with interactive examples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameProvider>
          <div className="flex min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900">
            <Sidebar />
            <div className="flex-1 ml-64">
              <Navbar />
              <GameWrapper>
                {children}
              </GameWrapper>
            </div>
          </div>
        </GameProvider>
      </body>
    </html>
  );
}
