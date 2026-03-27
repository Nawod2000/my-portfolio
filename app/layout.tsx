import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio",
};

// Ensures real phones render at device width and don't zoom in/out unexpectedly.
// Without this, touch coordinates can be offset from visual elements.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black selection:bg-[#CF541E]/30 min-h-screen">
        {children}
      </body>
    </html>
  );
}