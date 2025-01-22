import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Light-It | Challenge",
  description: "Frontend Challege for light-it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Toaster />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
