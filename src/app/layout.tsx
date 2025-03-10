import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "FitTrack app",
  description: "FitTrack Next js",
  icons: {
    icon: "/FitTrack.png",
    apple: "/FitTrack.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        <link
          rel="icon"
          href={
            typeof metadata.icons === "string"
              ? metadata.icons
              : Array.isArray(metadata.icons)
                ? metadata.icons[0]?.toString() || "/default-icon.png"
                : metadata.icons && typeof metadata.icons === "object" && "icon" in metadata.icons
                  ? String(metadata.icons.icon)
                  : "/default-icon.png"
          }
        />

      </head>
      <body>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
