import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebNavbar from "@/components/WebNavbar";
import WebFooter from "@/components/WebFooter";
import Chatbot from '@/components/Chatbot';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "我的網站",
  description: "請在此寫入你的網站敘述",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <WebNavbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Chatbot />
        <WebFooter />
      </body>
    </html>
  );
}
