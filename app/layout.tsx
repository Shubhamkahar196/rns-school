import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";
import { GraduationCap } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RNS Public School | Best CBSE School",
  description:
    "RNS Public School is a CBSE affiliated school providing quality education with modern facilities and experienced teachers.",
    icons:{
      icon: "/Graduation-cap.png",
    }
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#1e3a8a",
              color: "#fff",
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
