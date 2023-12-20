import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import {
  TITLE,
  DESC,
  OGIMAGE,
  URL,
  AUTHOR,
  HOME,
  KEYWORDS,
  AVATAR,
} from "@/lib/seo";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  authors: { url: HOME, name: AUTHOR },
  keywords: KEYWORDS,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    url: URL,
    siteName: TITLE,
    images: {
      url: AVATAR,
    },
    locale: "zh-CN",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    site: URL,
    description: DESC,
    images: {
      url: OGIMAGE,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css"
        />
        <link rel="icon" type="image/svg+xml" href={AVATAR} />
        <link rel="shortcut icon" href={AVATAR} />
        <link rel="alternate icon" type="image/x-icon" href={AVATAR} />
      </head>
      <body className="font-wenkai">
        {process.env.NODE_ENV === "production" && (
          <Script
            strategy="afterInteractive"
            src="https://analytics.eu.umami.is/script.js"
            data-website-id="6f45f6df-535a-4480-8241-5d47ef997326"
          />
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
