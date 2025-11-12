import "./globals.css";
import Lines from "@/components/Common/Lines";
import { LanguageProvider } from "@/context/LanguageContext";
import { dictionaries } from "@/i18n/dictionaries";
import React from "react";

export const metadata = {
  title: dictionaries.en.meta.siteName,
  description: dictionaries.en.meta.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      {
        url: "/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        url: "/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className="sub-bg">
        <LanguageProvider>
          <Lines />
          <main>{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}

export default RootLayout;
