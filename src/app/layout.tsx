import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Dog Breeds",
  description: "A collection of dog breed cards with descriptions and images.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/dog-icon.svg" />
      <body className={merriweather.className}>
        <Header />
        <main className="container mx-auto p-4 px-[50px] mt-15">
          {children}
        </main>
      </body>
    </html>
  );
}
