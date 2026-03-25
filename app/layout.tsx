import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* min-h-screen එකක් body එකට එකතු කරන්න */}
      <body className="antialiased bg-black selection:bg-[#CF541E]/30 min-h-screen">
        {children}
      </body>
    </html>
  );
}