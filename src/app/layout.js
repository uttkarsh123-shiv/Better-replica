import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Fifeth from "./Fifeth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Next.js App",
  description: "A modern web application built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
