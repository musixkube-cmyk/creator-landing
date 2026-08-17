import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Musicosy",
  description:
    "The creator platform for music distribution, marketing, monetization, and studio tools.",
  authors: [{ name: "Musicosy" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Musicosy",
    description:
      "The creator platform for music distribution, marketing, monetization, and studio tools.",
    siteName: "Musicosy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@musicosy",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${archivo.variable} ${ibmPlexMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
