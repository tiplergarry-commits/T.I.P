import type { Metadata } from "next";
import { Barlow_Condensed, Oswald } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Garry Tipler - TIP",
  description: "Personal website of Garry Tipler - Workouts, Recipes, Lifestyle, and Philosophy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${oswald.variable}`}>
      <body className={`${barlowCondensed.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
