import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const fontSans = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TeDisport cloned - shopping cart",
  description: "TeDisport cloned - shopping cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className} suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <main className="mt-24">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
