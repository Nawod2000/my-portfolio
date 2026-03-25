import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Associate Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-black selection:bg-[#CF541E]/30">
        {/* Navbar එක මෙතනින් අයින් කරලා page.tsx එකේ පාවිච්චි කරන්න */}
        {children}
      </body>
    </html>
  );
}