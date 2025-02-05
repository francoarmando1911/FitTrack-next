import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "FitTrack app",
  description: "FitTrack Next js",
  icons: {
    icon: '/favicon.png',
    apple: '/FitTrack.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
