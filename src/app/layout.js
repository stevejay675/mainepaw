import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import TelegramChatWidget from "@/components/widget/TelegramChatWidget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Maine paw",
  description: "mainecoon kitten for adoption",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <TelegramChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
