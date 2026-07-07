import type { Metadata } from "next";
import { Quicksand, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Heartland Homes of Florida | Affordable New Homes Built for Florida Living",
  description:
    "Heartland Homes of Florida builds affordable, quality new homes and floor plans across LaBelle, Lehigh Acres, Sebring, and Lake Placid. Schedule a tour today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <ChatWidget />
      </body>
    </html>
  );
}
