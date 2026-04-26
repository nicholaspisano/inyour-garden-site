import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "inyour.garden — A personal garden dashboard",
  description: "Track what needs watering, what's ready to harvest, and what needs attention — with a daily digest delivered every morning.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3d6b35",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
