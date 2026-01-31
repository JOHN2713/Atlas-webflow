import type { Metadata } from "next";
import { PT_Serif, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { DevLinkProvider } from "@/devlink/DevLinkProvider";

// ATLAS Fonts
const sourceSans = Source_Sans_3({
  weight: ['200', '300', '400', '500', '600'],
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: 'swap',
});

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-pt-serif",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ATLAS - Private Wealth & Legacy Office",
  description: "Structure over speculation. Discretion over exposure. Long-term clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${sourceSans.variable} ${ptSerif.variable} antialiased bg-atlas-primary text-atlas-dark`}
      >
        <DevLinkProvider>
          {children}
        </DevLinkProvider>
      </body>
    </html>
  );
}
